import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { findQuestionsForQuiz, createQuestion, deleteQuestion } from "./client";
import ProtectedFaculty from "../../Account/ProtectedFaculty";
import { FaTrash } from "react-icons/fa";
export default function QuestionsEditor() {
  const { cid, quizId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<any[]>([]);
  const [originalQuestions, setOriginalQuestions] = useState<any[]>([]);
  const location = useLocation();
  useEffect(() => {
    const fetchQuestions = async () => {
      if (!quizId) return;
      const questions = await findQuestionsForQuiz(quizId);
      setQuestions(questions);
      setOriginalQuestions(questions);
    };
    fetchQuestions();
  }, [quizId]);

  const handleNewQuestion = async () => {
    if (!quizId) return;
    const newQuestion = await createQuestion(quizId, {
      title: "New Question",
      questionType: "Multiple Choice",
    });
    navigate(
      `/Kanbas/Courses/${cid}/quizzes/${quizId}/questions/${newQuestion._id}/edit`
    );
  };

  const handleSave = () => {
    navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/details`);
  };

  const handleCancel = async () => {
    const newlyCreatedQuestions = questions.filter(
      (q) => !originalQuestions.some((oq) => oq._id === q._id)
    );

    for (const question of newlyCreatedQuestions) {
      try {
        await deleteQuestion(question._id);
      } catch (error) {
        console.error(`Error deleting question ${question._id}:`, error);
      }
    }
    setQuestions(originalQuestions);
    navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/details`);
  };

  const navigateToDetails = () => {
    navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/edit`);
  };

  const navigateToQuestions = () => {
    navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/questions`);
  };

  const handleDelete = async (questionId: string) => {
    try {
      await deleteQuestion(questionId);
      setQuestions(questions.filter((q) => q._id !== questionId));
    } catch (error) {
      console.error("Error deleting question:", error);
      alert("Failed to delete question. Please try again.");
    }
  };

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
      <ul className="list-group rounded-1 mt-2 mb-2 ms-2 me-2">
        {questions.map((question, index) => (
          <li
            key={question._id}
            className="list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
            onClick={() =>
              navigate(
                `/Kanbas/Courses/${cid}/quizzes/${quizId}/questions/${question._id}`
              )
            }
          >
            <span className="mt-2 mb-2 ms-2 me-2">{question.title}</span>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(question._id);
              }}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      <ProtectedFaculty>
        <button className="btn btn-secondary mt-3" onClick={handleNewQuestion}>
          + New Question
        </button>
      </ProtectedFaculty>
      <div className="mt-4">
        <button className="btn btn-secondary me-2" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn btn-primary " onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
