import React from "react";
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { table } from "console";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizDetailsEditor from "./Quizzes/QuizDetailsEditor";
import QuestionsEditor from "./Quizzes/QuestionsEditor";
import QuestionDetail from "./Quizzes/QuestionDetail";
import Exam from "./Quizzes/Exam";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>{" "}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Assignments/new" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:quizId/details" element={<QuizDetails />} />
            <Route
              path="Quizzes/:quizId/edit"
              element={<QuizDetailsEditor />}
            />
            <Route
              path="Quizzes/:quizId/questions"
              element={<QuestionsEditor />}
            />
            <Route
              path="Quizzes/:quizId/questions/:questionId"
              element={<QuestionDetail />}
            />
            <Route
              path="Quizzes/:quizId/questions/:questionId/edit"
              element={<QuestionDetail />}
            />
            <Route path="Quizzes/:quizId/preview" element={<Exam />} />
            <Route path="Quizzes/:quizId/take" element={<Exam />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
