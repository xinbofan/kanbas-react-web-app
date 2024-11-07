import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import * as db from "../Database";
import ProtectedFaculty from "../Account/ProtectedFaculty";
import {
  addNewCourse,
  updateCourse,
  deleteCourse,
  toggleCourseView,
  unenrollCourse,
  enrollCourse,
} from "../Courses/reducer";
import ProtectedStudent from "../Account/ProtectedStudent";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses, enrollments, showAllCourses, currentCourse } = useSelector(
    (state: any) => state.coursesReducer
  );
  const handleCourseChange = (field: string, value: any) => {
    dispatch({
      type: "courses/setCurrentCourse",
      payload: { ...currentCourse, [field]: value },
    });
  };

  const handleEnrollToggle = (courseId: any) => {
    const isEnrolled = enrollments.some(
      (enrollment: { user: any; course: any }) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
    if (isEnrolled) {
      dispatch(unenrollCourse({ courseId, userId: currentUser._id }));
    } else {
      dispatch(enrollCourse({ courseId, userId: currentUser._id }));
    }
  };

  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course: { _id: any }) =>
        enrollments.some(
          (enrollment: { user: any; course: any }) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        )
      );

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <ProtectedStudent>
        <button
          className="btn btn-primary float-end"
          onClick={() => dispatch(toggleCourseView())}
        >
          Enrollments
        </button>
      </ProtectedStudent>
      <ProtectedFaculty>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={() => dispatch(addNewCourse())}
          >
            {" "}
            Add{" "}
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={() => dispatch(updateCourse())}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>

        <br />
        <input
          defaultValue={currentCourse.name}
          className="form-control mb-2"
          onChange={(e) => handleCourseChange("name", e.target.value)}
        />
        <textarea
          defaultValue={currentCourse.description}
          className="form-control"
          onChange={(e) => handleCourseChange("description", e.target.value)}
        />
        <hr />
      </ProtectedFaculty>
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Enrolled Courses"} (
        {filteredCourses.length})
      </h2>{" "}
      <hr />
      <div
        className="row row-cols-1 row-cols-md-5 g-4"
        id="wd-dashboard-courses"
      >
        {filteredCourses.map(
          (course: {
            _id: React.Key | null | undefined;
            image: any;
            name:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined;
            description:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined;
          }) => {
            const isEnrolled = enrollments.some(
              (enrollment: { user: any; course: any }) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            );
            return (
              <div key={course._id} className="col" style={{ width: "300px" }}>
                <div className="card rounded h-100">
                  <img
                    src={course.image || "/images/reactjs.jpg"}
                    className="card-img-top"
                    alt="Course"
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{course.name}</h5>
                      <p className="card-text">{course.description}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="btn btn-primary"
                      >
                        Go
                      </Link>
                      <ProtectedStudent>
                        <button
                          onClick={() => handleEnrollToggle(course._id)}
                          className={`btn ${
                            isEnrolled ? "btn-danger" : "btn-success"
                          }`}
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </button>
                      </ProtectedStudent>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
