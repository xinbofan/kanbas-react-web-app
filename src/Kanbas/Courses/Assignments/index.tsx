import React from "react";
import { MdOutlineAssignment } from "react-icons/md";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { CiSearch } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControlButton from "./AssignmentControlButton";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="search-container w-50 d-flex align-items-center border rounded">
          <CiSearch className="me-2 fs-3" />
          <GoTriangleDown className="me-2 fs-3" />
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

      {/** */}
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment-title list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <GoTriangleDown className="me-2 fs-3" />
            ASSIGNMENT{" "}
            <span className="badge bg-light text-muted px-2 py-1 rounded-pill">
              40% of Total
            </span>
            <AssignmentControlButton />
          </div>
          <ul className="wd-assignment-content list-group rounded-0">
            <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="me-2 fs-3" />
              <div>
                <a
                  className="wd-assignment-link fw-bold text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A1
                </a>
                <small className="mb-0 text-muted">
                  <span className="text-danger">Multiple Modules </span>|{" "}
                  <span className="font-weight-bold">Not available until </span>
                  May 6 at 12:00am |
                  <span className="font-weight-bold"> Due </span>May 13 at
                  11:59pm | 100 pts
                </small>

                <LessonControlButtons />
              </div>
            </li>

            <li className="wd-assignment list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="me-2 fs-3" />
              <div>
                <a
                  className="wd-assignment-link fw-bold text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A2
                </a>
                <p className="mb-0 text-danger">Multiple Modules</p>
                <small className="text-muted">
                  Not available until May 13 at 12:00am | Due May 20 at 11:59pm
                  | 100 pts
                </small>
                <LessonControlButtons />
              </div>
            </li>

            <li className="wd-assignment list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="me-2 fs-3" />
              <div>
                <a
                  className="wd-assignment-link fw-bold text-dark"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A3
                </a>
                <p className="mb-0 text-danger">Multiple Modules</p>
                <small className="text-muted">
                  Not available until May 20 at 12:00am | Due May 27 at 11:59pm
                  | 100 pts
                </small>
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>

      {/** */}
    </div>
  );
}
