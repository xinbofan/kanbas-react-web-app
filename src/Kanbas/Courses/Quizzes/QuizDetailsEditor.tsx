import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as quizzesClient from "./client";

export default function QuizDetailsEditor() {
  const { cid, quizId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [quiz, setQuiz] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await quizzesClient.findQuizById(quizId!);
        setQuiz(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching quiz:", error);
        setIsLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleInputChange = (field: string, value: any) => {
    setQuiz({ ...quiz, [field]: value });
  };

  const handleSave = async () => {
    try {
      await quizzesClient.updateQuiz(quiz._id, quiz);
      alert("Quiz updated successfully!");
      navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/details`); // 保存成功后跳转回 QuizDetails 页面
    } catch (error) {
      console.error("Error updating quiz:", error);
      alert("Failed to update quiz. Please try again.");
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const navigateToDetails = () => {
    navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/edit`);
  };

  const navigateToQuestions = () => {
    navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/questions`);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!quiz) {
    return <p>Quiz not found.</p>;
  }

  return (
    <div className="p-4">
      <div className="mb-3">
        <button
          type="button"
          className={`btn me-2 ${
            location.pathname.includes("edit")
              ? "btn-outline-secondary"
              : "btn-outline-primary"
          }`}
          onClick={navigateToDetails}
        >
          Details
        </button>
        <button
          type="button"
          className={`btn ${
            location.pathname.includes("questions")
              ? "btn-outline-secondary"
              : "btn-outline-primary"
          }`}
          onClick={navigateToQuestions}
        >
          Questions
        </button>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={quiz.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={4}
            value={quiz.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quiz Type</label>
          <select
            className="form-select"
            value={quiz.quizType}
            onChange={(e) => handleInputChange("quizType", e.target.value)}
          >
            <option value="Graded Quiz">Graded Quiz</option>
            <option value="Practice Quiz">Practice Quiz</option>
            <option value="Graded Survey">Graded Survey</option>
            <option value="Ungraded Survey">Ungraded Survey</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Points</label>
          <input
            type="number"
            className="form-control"
            value={quiz.points}
            onChange={(e) => handleInputChange("points", e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Assignment Group</label>
          <select
            className="form-select"
            value={quiz.assignmentGroup}
            onChange={(e) =>
              handleInputChange("assignmentGroup", e.target.value)
            }
          >
            <option value="Quizzes">Quizzes</option>
            <option value="Exams">Exams</option>
            <option value="Assignments">Assignments</option>
            <option value="Project">Project</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Shuffle Answers</label>
          <select
            className="form-select"
            value={quiz.shuffleAnswers}
            onChange={(e) =>
              handleInputChange("shuffleAnswers", e.target.value === "true")
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Time Limit (minutes)</label>
          <input
            type="number"
            className="form-control"
            value={quiz.timeLimit}
            onChange={(e) =>
              handleInputChange("timeLimit", Number(e.target.value))
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Multiple Attempts</label>
          <select
            className="form-select"
            value={quiz.multipleAttempts ? "Yes" : "No"}
            onChange={(e) =>
              handleInputChange("multipleAttempts", e.target.value === "Yes")
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Show Correct Answers</label>
          <select
            className="form-select"
            value={quiz.showCorrectAnswers}
            onChange={(e) =>
              handleInputChange("showCorrectAnswers", e.target.value)
            }
          >
            <option value="Immidietely">Immidietely</option>
            <option value="No">No</option>
            <option value="After Due Date">After Due Date</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Access Code</label>
          <input
            type="text"
            className="form-control"
            value={quiz.accessCode}
            onChange={(e) => handleInputChange("accessCode", e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">One Question at a Time</label>
          <select
            className="form-select"
            value={quiz.oneQuestionAtATime}
            onChange={(e) =>
              handleInputChange("oneQuestionAtATime", e.target.value === "true")
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Webcam Required</label>
          <select
            className="form-select"
            value={quiz.webcamRequired}
            onChange={(e) =>
              handleInputChange("webcamRequired", e.target.value === "true")
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Lock Questions After Answering</label>
          <select
            className="form-select"
            value={quiz.lockQuestionsAfterAnswering}
            onChange={(e) =>
              handleInputChange(
                "lockQuestionsAfterAnswering",
                e.target.value === "true"
              )
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input
            type="datetime-local"
            className="form-control"
            value={
              quiz.dueDate
                ? new Date(quiz.dueDate).toISOString().slice(0, 16)
                : ""
            }
            onChange={(e) =>
              handleInputChange("dueDate", new Date(e.target.value))
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Available From</label>
          <input
            type="datetime-local"
            className="form-control"
            value={
              quiz.availableFrom
                ? new Date(quiz.availableFrom).toISOString().slice(0, 16)
                : ""
            }
            onChange={(e) =>
              handleInputChange("availableFrom", new Date(e.target.value))
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Available Until</label>
          <input
            type="datetime-local"
            className="form-control"
            value={
              quiz.availableUntil
                ? new Date(quiz.availableUntil).toISOString().slice(0, 16)
                : ""
            }
            onChange={(e) =>
              handleInputChange("availableUntil", new Date(e.target.value))
            }
          />
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
