import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ProtectedFaculty from "../../Account/ProtectedFaculty";
import ProtectedStudent from "../../Account/ProtectedStudent";
import * as quizzesClient from "./client";
import { FaPencilAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function QuizDetails() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid, quizId } = useParams();
  const [quiz, setQuiz] = useState<any>(null);
  const [lastAttempt, setLastAttempt] = useState<any>(null);
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        if (quizId) {
          const fetchedQuiz = await quizzesClient.findQuizById(quizId);
          setQuiz(fetchedQuiz);

          if (currentUser?.role === "STUDENT") {
            const attempt = await quizzesClient.fetchLastAttempt(
              currentUser._id,
              quizId
            );
            setLastAttempt(attempt);
          }
        }
      } catch (error) {
        console.error("Error fetching quiz details:", error);
      }
    };

    fetchQuizData();
  }, [quizId, currentUser]);

  if (!quiz) {
    return <p>Loading quiz...</p>;
  }

  const handleTakeQuiz = () => {
    if (!quiz.multipleAttempts && lastAttempt) {
      alert("You have no remaining attempts for this quiz.");
      return;
    }

    navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/take`);
  };

  return (
    <div className="p-4">
      <ProtectedFaculty>
        <div className="d-flex justify-content-start mb-3">
          <button
            className="btn btn-secondary me-2"
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/preview`)
            }
          >
            Preview
          </button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/edit`)
            }
          >
            <FaPencilAlt className="me-1" /> Edit
          </button>
        </div>
        <hr />
      </ProtectedFaculty>

      <h2 className="mb-4">{quiz.title}</h2>

      <ProtectedFaculty>
        <dl className="row text-center">
          <dt className="col-6">Quiz Type</dt>
          <dd className="col-6">{quiz.quizType}</dd>

          <dt className="col-6">Points</dt>
          <dd className="col-6">{quiz.points}</dd>

          <dt className="col-6">Assignment Group</dt>
          <dd className="col-6">{quiz.assignmentGroup}</dd>

          <dt className="col-6">Shuffle Answers</dt>
          <dd className="col-6">{quiz.shuffleAnswers ? "Yes" : "No"}</dd>

          <dt className="col-6">Time Limit</dt>
          <dd className="col-6">{quiz.timeLimit} minutes</dd>

          <dt className="col-6">Multiple Attempts</dt>
          <dd className="col-6">{quiz.multipleAttempts ? "Yes" : "No"}</dd>

          <dt className="col-6">Max Attempts</dt>
          <dd className="col-6">{quiz.maxAttempts}</dd>

          <dt className="col-6">Show Correct Answers</dt>
          <dd className="col-6">{quiz.showCorrectAnswers}</dd>

          <dt className="col-6">Access Code</dt>
          <dd className="col-6">{quiz.accessCode || "None"}</dd>

          <dt className="col-6">One Question at a Time</dt>
          <dd className="col-6">{quiz.oneQuestionAtATime ? "Yes" : "No"}</dd>

          <dt className="col-6">Webcam Required</dt>
          <dd className="col-6">{quiz.webcamRequired ? "Yes" : "No"}</dd>

          <dt className="col-6">Lock Questions After Answering</dt>
          <dd className="col-6">
            {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}
          </dd>

          <dt className="col-6">Due Date</dt>
          <dd className="col-6">
            {quiz.dueDate ? new Date(quiz.dueDate).toLocaleString() : "None"}
          </dd>

          <dt className="col-6">Available From</dt>
          <dd className="col-6">
            {quiz.availableFrom
              ? new Date(quiz.availableFrom).toLocaleString()
              : "None"}
          </dd>

          <dt className="col-6">Available Until</dt>
          <dd className="col-6">
            {quiz.availableUntil
              ? new Date(quiz.availableUntil).toLocaleString()
              : "None"}
          </dd>

          <dt className="col-6">Published</dt>
          <dd className="col-6">{quiz.isPublished ? "Yes" : "No"}</dd>
        </dl>

        <table className="table text-center">
          <thead>
            <tr>
              <th>Due</th>
              <th>For</th>
              <th>Available From</th>
              <th>Until</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {quiz.dueDate ? new Date(quiz.dueDate).toLocaleString() : "N/A"}
              </td>
              <td>Everyone</td>
              <td>
                {quiz.availableFrom
                  ? new Date(quiz.availableFrom).toLocaleString()
                  : "N/A"}
              </td>
              <td>
                {quiz.availableUntil
                  ? new Date(quiz.availableUntil).toLocaleString()
                  : "N/A"}
              </td>
            </tr>
          </tbody>
        </table>
      </ProtectedFaculty>

      <ProtectedStudent>
        <div className="text-center mt-4">
          {lastAttempt ? (
            <div className="mb-3">
              <p>
                Last Attempt:{" "}
                <span className="text-primary">
                  {new Date(lastAttempt.takenAt).toLocaleString()}
                </span>
              </p>
              <p>
                Score:{" "}
                <span className="text-success">
                  {lastAttempt.score} / {quiz.points}
                </span>
              </p>
            </div>
          ) : (
            <p>No attempts yet.</p>
          )}
          <button className="btn btn-danger" onClick={handleTakeQuiz}>
            Take Quiz
          </button>
        </div>
      </ProtectedStudent>
    </div>
  );
}
