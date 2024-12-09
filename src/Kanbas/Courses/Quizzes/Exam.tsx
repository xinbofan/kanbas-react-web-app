import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchExamDetails, fetchLastAttempt, submitQuiz } from "./client"; // Adjust to your client file path
import { useSelector } from "react-redux";

export default function Exam() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [lastAttempt, setLastAttempt] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch exam details and last attempt
  useEffect(() => {
    const fetchData = async () => {
      try {
        const examDetails = await fetchExamDetails(quizId!);
        setQuiz(examDetails.quiz);
        setQuestions(examDetails.questions);

        // Fetch last attempt for students or preview for faculty
        if (
          currentUser?.role === "STUDENT" ||
          currentUser?.role === "FACULTY"
        ) {
          const attempt = await fetchLastAttempt(currentUser._id, quizId!);
          setLastAttempt(attempt);
          if (attempt) {
            setAnswers(
              attempt.answers.reduce((acc: any, answer: any) => {
                acc[answer.question] = answer.userAnswer;
                return acc;
              }, {})
            );
          }
        }
      } catch (error) {
        console.error("Error loading exam data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [quizId, currentUser]);

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = async () => {
    try {
      const submissionData = {
        userId: currentUser._id,
        answers: questions.map((q: any) => ({
          question: q._id,
          userAnswer: answers[q._id] || null,
        })),
      };

      const result = await submitQuiz(quizId!, submissionData);
      alert(`Quiz submitted! Your score: ${result.score}`);
      setIsSubmitted(true);
      navigate(`/Kanbas/Courses/${quiz.course}/quizzes/${quizId}/details`);
    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert("Failed to submit quiz. Please try again.");
    }
  };

  if (loading) return <p>Loading exam...</p>;
  if (!quiz) return <p>Quiz not foundaa.</p>;

  return (
    <div className="p-4">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>

      {questions.map((question, index) => (
        <div key={question._id} className="mb-4">
          <h5>
            {index + 1}. {question.title}
          </h5>
          <p>{question.text}</p>

          {question.questionType === "Multiple Choice" && (
            <div>
              {question.options.map((option: any, optIndex: number) => (
                <div key={optIndex} className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id={`${question._id}-${optIndex}`}
                    name={question._id}
                    value={option.text}
                    checked={answers[question._id] === option.text}
                    disabled={currentUser?.role === "STUDENT" && lastAttempt}
                    onChange={(e) =>
                      handleAnswerChange(question._id, e.target.value)
                    }
                  />
                  <label
                    htmlFor={`${question._id}-${optIndex}`}
                    className="form-check-label"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          )}

          {question.questionType === "True/False" && (
            <select
              className="form-select"
              value={answers[question._id] || ""}
              disabled={currentUser?.role === "STUDENT" && lastAttempt}
              onChange={(e) => handleAnswerChange(question._id, e.target.value)}
            >
              <option value="">Select an answer</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          )}

          {question.questionType === "Fill in the Blank" && (
            <input
              type="text"
              className="form-control"
              value={answers[question._id] || ""}
              disabled={currentUser?.role === "STUDENT" && lastAttempt}
              onChange={(e) => handleAnswerChange(question._id, e.target.value)}
            />
          )}
        </div>
      ))}

      <div className="d-flex justify-content-end">
        {currentUser?.role === "STUDENT" && lastAttempt && (
          <p>
            Last Attempt: {new Date(lastAttempt.takenAt).toLocaleString()} |
            Score: {lastAttempt.score} / {quiz.points}
          </p>
        )}
        {!isSubmitted && (!lastAttempt || currentUser?.role === "FACULTY") && (
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={currentUser?.role === "STUDENT" && lastAttempt}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
