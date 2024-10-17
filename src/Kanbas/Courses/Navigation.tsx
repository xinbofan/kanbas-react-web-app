import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <div>
        {links.map((link) => (
          <Link
            to="/Kanbas/Courses/{cid}/{link}"
            className={`list-group-item border border-0
              ${pathname.includes(link) ? "active" : "text-danger"}`}
          >
            {" "}
            {link}{" "}
          </Link>
        ))}
      </div>

      {/** 
      <Link
        to="/Kanbas/Courses/1234/Home"
        id="wd-course-home-link"
        className="list-group-item active border border-0"
      >
        {" "}
        Home{" "}
      </Link>




      <Link
        to="/Kanbas/Courses/1234/Modules"
        id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Modules{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Piazza{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Zoom{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Assignments"
        id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Assignments{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/Quizzes"
        id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Quizzes{" "}
      </Link>
      <Link
        to="/Kanbas/Courses/1234/People"
        id="wd-course-people-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        People{" "}
      </Link>

      */}
    </div>
  );
}
