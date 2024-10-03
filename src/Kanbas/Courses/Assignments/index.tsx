import React from "react";
import { MdOutlineAssignment } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaGripVertical } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          className="form-control w-50"
        />
        <div>
          <button className="btn btn-outline-secondary me-2">+ Group</button>
          <button className="btn btn-danger">+ Assignment</button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 id="wd-assignments-title" className="mb-0">
          ASSIGNMENTS
        </h3>
        <span className="text-muted">40% of Total</span>
        <button className="btn btn-outline-secondary">+</button>
      </div>

      <ul id="wd-assignment-list" className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center">
            <FaGripVertical className="text-muted me-2" />
            <MdOutlineAssignment className="text-success fs-4 me-2" />
            <div>
              <a
                className="fw-bold text-dark"
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
            <AiOutlineCheckCircle className="text-success fs-4 me-3" />
            <BsThreeDotsVertical className="text-muted" />
          </div>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center">
            <FaGripVertical className="text-muted me-2" />
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
            <AiOutlineCheckCircle className="text-success fs-4 me-3" />
            <BsThreeDotsVertical className="text-muted" />
          </div>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-center">
            <FaGripVertical className="text-muted me-2" />
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
            <AiOutlineCheckCircle className="text-success fs-4 me-3" />
            <BsThreeDotsVertical className="text-muted" />
          </div>
        </li>
      </ul>
    </div>
  );
}
