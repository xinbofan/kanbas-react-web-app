import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";
import ProtectedFaculty from "../../Account/ProtectedFaculty";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";
import { IoEllipsisVertical, IoRocketOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RiForbidLine } from "react-icons/ri";
import { Dropdown } from "react-bootstrap";

export default function Quizzes() {
  const { cid } = useParams();
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const navigate = useNavigate();
  const fetchQuizzes = async () => {
    if (!cid) return;
    const courseQuizzes = await coursesClient.findQuizzesForCourse(cid);
    setQuizzes(courseQuizzes);
  };

  useEffect(() => {
    console.log("fetching quizzes for: " + cid);
    fetchQuizzes();
  }, [cid]);

  const createQuiz = async () => {
    if (!cid) return;
    console.log("creating quiz for: " + cid);
    const newQuiz = {
      title: "New Quiz",
      description: "",
      quizType: "Graded Quiz",
      assignmentGroup: "Quizzes",
      course: cid,
    };
    const createdQuiz = await coursesClient.createQuizForCourse(cid, newQuiz);
    setQuizzes([...quizzes, createdQuiz]);
    navigate(`/Kanbas/Courses/${cid}/quizzes/${createdQuiz._id}/edit`);
  };

  const deleteQuiz = async (quizId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quiz?"
    );
    if (!confirmDelete) return;
    await quizzesClient.deleteQuiz(quizId);
    setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
  };

  const togglePublishStatus = async (quiz: any) => {
    const updatedQuiz = { ...quiz, isPublished: !quiz.isPublished };
    await quizzesClient.updateQuiz(quiz._id, updatedQuiz);
    setQuizzes(quizzes.map((q) => (q._id === quiz._id ? updatedQuiz : q)));
  };

  return (
    <div id="wd-quizzes" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="search-container w-50 d-flex align-items-center border rounded">
          <CiSearch className="me-2 fs-3" />
          <GoTriangleDown className="me-2 fs-3" />
          <input
            id="wd-search-quizzes"
            placeholder="Search..."
            className="form-control border-0"
          />
        </div>
        <div>
          <ProtectedFaculty>
            <button className="btn btn-danger mb-2" onClick={createQuiz}>
              <FaPlus /> Add Quiz
            </button>
          </ProtectedFaculty>
        </div>
      </div>

      <ul id="wd-quizzes" className="list-group rounded-0">
        <li className="wd-quizzes-title list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <GoTriangleDown className="me-2 fs-3" />
            QUIZZES{" "}
          </div>

          <ul className="wd-quiz-content list-group rounded-0">
            {quizzes.map((quiz) => (
              <li
                key={quiz._id}
                className="wd-quiz list-group-item p-3 ps-1 d-flex align-items-center"
              >
                <div className="d-flex align-items-center flex-grow-1">
                  <IoRocketOutline className="me-3 ms-2 fs-3 text-success" />
                  <div>
                    <Link
                      to={`/Kanbas/Courses/${cid}/quizzes/${quiz._id}/details`}
                      className="wd-quiz-link fw-bold text-dark"
                    >
                      {quiz.title}
                    </Link>
                    <br />
                    <small className="text-muted mb-0">
                      {quiz.availableFrom && quiz.availableUntil ? (
                        new Date() < new Date(quiz.availableFrom) ? (
                          <span className="text-info">
                            Not available until{" "}
                            {new Date(quiz.availableFrom).toLocaleDateString()}
                          </span>
                        ) : new Date() > new Date(quiz.availableUntil) ? (
                          <span className="text-danger">Closed</span>
                        ) : (
                          <span className="text-success">Available</span>
                        )
                      ) : (
                        <span className="text-muted">No availability date</span>
                      )}

                      {" | "}

                      {quiz.dueDate ? (
                        <span className="text-muted">
                          Due: {new Date(quiz.dueDate).toLocaleDateString()}
                        </span>
                      ) : (
                        <span className="text-muted">No due date</span>
                      )}

                      {" | "}

                      <span className="text-muted">{quiz.points} pts</span>

                      {" | "}

                      {quiz.questions ? (
                        <span className="text-muted">
                          {quiz.questions.length} question
                          {quiz.questions.length > 1 ? "s" : ""}
                        </span>
                      ) : (
                        <span className="text-muted">No questions</span>
                      )}
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  {quiz.isPublished ? (
                    <FaCheckCircle className="text-success me-3 fs-4" />
                  ) : (
                    <RiForbidLine className="text-danger me-3 fs-4" />
                  )}
                  <ProtectedFaculty>
                    <Dropdown>
                      <Dropdown.Toggle
                        as="div"
                        id="dropdown-custom"
                        className="btn p-0 border-0"
                      >
                        <IoEllipsisVertical className="fs-4" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu align="end">
                        <Dropdown.Item
                          onClick={() => togglePublishStatus(quiz)}
                        >
                          {quiz.isPublished ? "Unpublish" : "Publish"}
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          to={`/Kanbas/Courses/${cid}/quizzes/${quiz._id}/details`}
                        >
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => deleteQuiz(quiz._id)}>
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ProtectedFaculty>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
