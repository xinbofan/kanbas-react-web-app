import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findQuestionById, updateQuestion } from "./client";

export default function QuestionDetail() {
  const { cid, quizId, questionId } = useParams();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [question, setQuestion] = useState<any>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        if (questionId) {
          const fetchedQuestion = await findQuestionById(questionId);
          setQuestion(fetchedQuestion);
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestion();
  }, [questionId]);

  const handleSave = async () => {
    try {
      if (questionId && question) {
        await updateQuestion(questionId, question);
        setEditMode(false);
      }
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  if (!question) {
    return <p>Question not found.</p>;
  }

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{editMode ? "Edit Question" : "Question Detail"}</h2>
      </div>

      {!editMode ? (
        <dl className="row text-center">
          <dt className="col-6">Title</dt>
          <dd className="col-6">{question.title}</dd>

          <dt className="col-6">Question</dt>
          <dd className="col-6">{question.text}</dd>

          <dt className="col-6">Question Type</dt>
          <dd className="col-6">{question.questionType}</dd>

          <dt className="col-6">Points</dt>
          <dd className="col-6">{question.points}</dd>

          <div className="d-flex justify-content-end mt-4">
            <button
              className="btn btn-primary me-2"
              onClick={() => setEditMode(!editMode)}
            >
              Edit
            </button>
            <button
              className="btn btn-secondary"
              onClick={() =>
                navigate(`/Kanbas/Courses/${cid}/quizzes/${quizId}/questions`)
              }
            >
              Back to Questions
            </button>
          </div>
        </dl>
      ) : (
        <form>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <select
              className="form-control"
              value={question.questionType}
              onChange={(e) =>
                setQuestion({ ...question, questionType: e.target.value })
              }
            >
              <option value="Multiple Choice">Multiple Choice</option>
              <option value="True/False">True/False</option>
              <option value="Fill in the Blank">Fill in the Blank</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={question.title}
              onChange={(e) =>
                setQuestion({ ...question, title: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Question</label>
            <input
              type="text"
              className="form-control"
              value={question.text}
              onChange={(e) =>
                setQuestion({ ...question, text: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Points</label>
            <input
              type="number"
              className="form-control"
              value={question.points}
              onChange={(e) =>
                setQuestion({ ...question, points: Number(e.target.value) })
              }
            />
          </div>

          {question.questionType === "Multiple Choice" && (
            <div className="mb-3">
              <label className="form-label">
                Options (Check the correct answer)
              </label>
              {question.options.map((option: any, index: number) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder={`Option ${index + 1}`}
                    value={option.text}
                    onChange={(e) => {
                      const updatedOptions = [...question.options];
                      updatedOptions[index].text = e.target.value;
                      setQuestion({ ...question, options: updatedOptions });
                    }}
                  />
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={option.isCorrect}
                    onChange={(e) => {
                      const updatedOptions = [...question.options];
                      updatedOptions[index].isCorrect = e.target.checked;
                      setQuestion({ ...question, options: updatedOptions });
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      const updatedOptions = question.options.filter(
                        (_: any, i: number) => i !== index
                      );
                      setQuestion({ ...question, options: updatedOptions });
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() =>
                  setQuestion({
                    ...question,
                    options: [
                      ...question.options,
                      { text: "", isCorrect: false },
                    ],
                  })
                }
              >
                + Add Option
              </button>
            </div>
          )}
          {question.questionType === "Fill in the Blank" && (
            <div className="mb-3">
              <label className="form-label">Correct Answer</label>
              <input
                type="text"
                className="form-control"
                value={question.correctAnswer}
                onChange={(e) =>
                  setQuestion({ ...question, correctAnswer: e.target.value })
                }
              />
            </div>
          )}
          {question.questionType === "True/False" && (
            <div className="mb-3">
              <label className="form-label">Correct Answer</label>
              <select
                className="form-select"
                value={question.correctAnswer}
                onChange={(e) =>
                  setQuestion({ ...question, correctAnswer: e.target.value })
                }
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
          )}

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
      )}
    </div>
  );
}
