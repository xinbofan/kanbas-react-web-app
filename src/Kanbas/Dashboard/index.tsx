import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row  row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/reactjs.jpg"
                width="100%"
                height={160}
                alt="React JS"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/python.jpg"
                width="100%"
                height={160}
                alt="Python"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS0001 Python
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Python is the best language
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/java.jpg"
                width="100%"
                height={160}
                alt="Java"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS0002 Java
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Java is the best language
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/C.jpg" width="100%" height={160} alt="C" />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS0003 C
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  C is an old language
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/cpp.jpg" width="100%" height={160} alt="C++" />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS0004 C++
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  No one really understands C++
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              <img
                src="/images/html.jpg"
                width="100%"
                height={160}
                alt="HTML"
              />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS0005 HTML
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Hypertext Markup Language
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/images/css.jpg" width="100%" height={160} alt="CSS" />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS0006 CSS
                </h5>
                <p className="wd-dashboard-course-title card-text">Not C++</p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
