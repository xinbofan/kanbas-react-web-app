import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-4 g-4"
      >
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.jpg" width={200} alt="" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/python.jpg" width={200} alt="" />
            <div>
              <h5>CS0001 Python</h5>
              <p className="wd-dashboard-course-title">
                Python is the best language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/java.jpg" width={200} alt="" />
            <div>
              <h5>CS0002 Java</h5>
              <p className="wd-dashboard-course-title">
                Java is the best language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/C.jpg" width={200} alt="" />
            <div>
              <h5>CS0003 C</h5>
              <p className="wd-dashboard-course-title">C is an old language</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cpp.jpg" width={200} alt="" />
            <div>
              <h5>CS0004 CPP</h5>
              <p className="wd-dashboard-course-title">
                No one really understands CPP
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/html.jpg" width={200} alt="" />
            <div>
              <h5>CS0005 HTML</h5>
              <p className="wd-dashboard-course-title">
                Hypertext Markup Language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/css.jpg" width={200} alt="" />
            <div>
              <h5>CS0006 CSS</h5>
              <p className="wd-dashboard-course-title">Not CPP</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
