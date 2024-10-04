import React from "react";
import { MdOutlineAssignment } from "react-icons/md";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { CiSearch } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="search-container w-50 d-flex align-items-center border rounded">
          <CiSearch className="me-2 fs-3" />
          <input
            id="wd-search-assignment"
            placeholder="Search..."
            className="form-control border-0"
          />
        </div>

        <div>
          <button className="btn btn-secondary me-2">+ Group</button>
          <button className="btn btn-danger">+ Assignment</button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 id="wd-assignments-title" className="mb-0">
          ASSIGNMENTS
        </h3>
        <span className="badge bg-light text-muted px-2 py-1 rounded-pill">
          40% of Total
        </span>
        <button className="btn btn-link">+</button>
        <IoEllipsisVertical className="fs-4" />
      </div>

      <ul id="wd-assignment-list" className="list-group">
        <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdOutlineAssignment className="text-success fs-4 me-2" />
            <div>
              <a
                className="wd-assignment-link fw-bold text-dark"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A1
              </a>
              <p className="mb-0 text-danger">Multiple Modules</p>
              <small className="text-muted">
                Not available until May 6 at 12:00am | Due May 13 at 11:59pm |
                100 pts
              </small>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <LessonControlButtons />
          </div>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdOutlineAssignment className="text-success fs-4 me-2" />
            <div>
              <a
                className="fw-bold text-dark"
                href="#/Kanbas/Courses/1234/Assignments/124"
              >
                A2
              </a>
              <p className="mb-0 text-danger">Multiple Modules</p>
              <small className="text-muted">
                Not available until May 13 at 12:00am | Due May 20 at 11:59pm |
                100 pts
              </small>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <LessonControlButtons />
          </div>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <MdOutlineAssignment className="text-success fs-4 me-2" />
            <div>
              <a
                className="fw-bold text-dark"
                href="#/Kanbas/Courses/1234/Assignments/125"
              >
                A3
              </a>
              <p className="mb-0 text-danger">Multiple Modules</p>
              <small className="text-muted">
                Not available until May 20 at 12:00am | Due May 27 at 11:59pm |
                100 pts
              </small>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <LessonControlButtons />
          </div>
        </li>
      </ul>
    </div>
  );
}
