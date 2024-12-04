import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import ProtectedFaculty from "../Account/ProtectedFaculty";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  setCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
      <hr />
      <ProtectedFaculty>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            {" "}
            Add{" "}
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>

        <br />
        <input
          defaultValue={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          defaultValue={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <hr />
      </ProtectedFaculty>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div
        className="row row-cols-1 row-cols-md-5 g-4"
        id="wd-dashboard-courses"
      >
        {courses.map((course) => (
          <div key={course._id} className="col" style={{ width: "300px" }}>
            <div className="card rounded h-100">
              <img
                src={course.image || "/images/reactjs.jpg"}
                className="card-img-top"
                alt="Course"
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">
                    {" "}
                    {enrolling && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          if (typeof course._id === "string") {
                            updateEnrollment(course._id, !course.enrolled);
                          } else {
                            console.error("Invalid course ID:", course);
                          }
                          //updateEnrollment(course._id, !course.enrolled);kankan
                        }}
                        className={`btn ${
                          course.enrolled ? "btn-danger" : "btn-success"
                        } float-end`}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                    {course.name}
                  </h5>
                  <p className="card-text">{course.description}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>
                  <ProtectedFaculty>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        if (typeof course._id === "string") {
                          deleteCourse(course._id);
                        } else {
                          console.error("Invalid course ID:", course._id);
                        }
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>
                  </ProtectedFaculty>

                  {/* <ProtectedStudent> */}
                  {/* <button
                          // onClick={() => }
                          className={`btn ${
                            isEnrolled ? "btn-danger" : "btn-success"
                          }`}
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </button> */}
                  {/* </ProtectedStudent> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
