import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  findQuestionsForQuiz,
  fetchLastAttempt,
  submitQuiz,
  findQuizById,
} from "./client";
import { useSelector } from "react-redux";

export default function Exam() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const readOnly =
    location.pathname.includes("review") &&
    !location.pathname.includes("preview");
  const previewMode = location.pathname.includes("preview");

  useEffect(() => {
    const fetchData = async () => {
      if (!quizId) return;

      try {
        const curQuiz = await findQuizById(quizId);
        setQuiz(curQuiz);
        const questions = await findQuestionsForQuiz(quizId);
        setQuestions(questions);
        const attempt = await fetchLastAttempt(currentUser._id, quizId);

        if (attempt) {
          setAnswers(
            attempt.answers.reduce((acc: any, answer: any) => {
              acc[answer.question] = answer.userAnswer;
              return acc;
            }, {})
          );
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
      navigate(`/Kanbas/Courses/${quiz.course}/quizzes/${quizId}/details`);
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  if (loading) return <p>Loading exam...</p>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div id="wd-exam" className="p-4">
      <h2 className="fw-bold">{quiz.title}</h2>
      {previewMode && (
        <div className="alert alert-danger">
          This is a preview of the published version of the quiz
        </div>
      )}
      <p>{quiz.description}</p>
      <hr />

      <table className="table table-bordered ">
        <thead className="table-light">
          <tr>
            <th colSpan={2}>
              <div className="d-flex justify-content-between">
                <span className="mt-2 mb-2 ms-2">{currentQuestion.title}</span>
                <span className="mb-2 mt-2 me-2">
                  {currentQuestion.points} pts
                </span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan={2}>
              <p className="mt-2 mb-3 ms-2 me-2">{currentQuestion.text}</p>
              {currentQuestion.questionType === "Multiple Choice" && (
                <div className="mt-2 mb-2 ms-2 me-2">
                  {currentQuestion.options.map(
                    (option: any, optIndex: number) => (
                      <>
                        <div className="form-check mb-2">
                          <input
                            type="radio"
                            className="form-check-input"
                            id={`${currentQuestion._id}-${optIndex}`}
                            name={currentQuestion._id}
                            value={option.text}
                            checked={
                              answers[currentQuestion._id] === option.text
                            }
                            disabled={readOnly}
                            onChange={(e) =>
                              handleAnswerChange(
                                currentQuestion._id,
                                e.target.value
                              )
                            }
                          />
                          <label
                            htmlFor={`${currentQuestion._id}-${optIndex}`}
                            className="form-check-label"
                          >
                            {option.text}
                          </label>
                        </div>
                        {optIndex < currentQuestion.options.length - 1 && (
                          <hr />
                        )}
                      </>
                    )
                  )}
                </div>
              )}

              {currentQuestion.questionType === "True/False" && (
                <div className="mt-2 mb-2 ms-2 me-2">
                  <div className="form-check mb-2">
                    <input
                      type="radio"
                      className="form-check-input"
                      id={`${currentQuestion._id}-true`}
                      name={currentQuestion._id}
                      value="true"
                      checked={answers[currentQuestion._id] === "true"}
                      disabled={readOnly}
                      onChange={(e) =>
                        handleAnswerChange(currentQuestion._id, e.target.value)
                      }
                    />
                    <label
                      htmlFor={`${currentQuestion._id}-true`}
                      className="form-check-label"
                    >
                      True
                    </label>
                  </div>
                  <hr />
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      id={`${currentQuestion._id}-false`}
                      name={currentQuestion._id}
                      value="false"
                      checked={answers[currentQuestion._id] === "false"}
                      disabled={readOnly}
                      onChange={(e) =>
                        handleAnswerChange(currentQuestion._id, e.target.value)
                      }
                    />
                    <label
                      htmlFor={`${currentQuestion._id}-false`}
                      className="form-check-label"
                    >
                      False
                    </label>
                  </div>
                </div>
              )}

              {currentQuestion.questionType === "Fill in the Blank" && (
                <div className="mt-2 mb-2 ms-2 me-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your answer here"
                    value={answers[currentQuestion._id] || ""}
                    disabled={readOnly}
                    onChange={(e) =>
                      handleAnswerChange(currentQuestion._id, e.target.value)
                    }
                  />
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-secondary"
          disabled={currentQuestionIndex === 0}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        >
          Previous
        </button>
        {!readOnly && (
          <button className="btn btn-danger" onClick={handleSubmit}>
            Submit Quiz
          </button>
        )}
        <button
          className="btn btn-secondary"
          disabled={currentQuestionIndex === questions.length - 1}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
