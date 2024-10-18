import React from "react";
import { MdOutlineAssignment } from "react-icons/md";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { CiSearch } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControlButton from "./AssignmentControlButton";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Assignments() {
  const { cid } = useParams();
  const modules = db.modules;
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
            {db.assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
                  <div className="d-flex align-items-center flex-grow-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-2 fs-3 text-success" />

                    <div>
                      <a
                        className="wd-assignment-link fw-bold text-dark"
                        href={`#/Kanbas/Courses/${assignment.course}/Assignments/123`}
                      >
                        {assignment.title}
                      </a>{" "}
                      <br />
                      <small className="mb-0 text-muted">
                        <span className="text-danger">Multiple Modules </span>|{" "}
                        <span className="font-weight-bold">
                          Not available until{" "}
                        </span>
                        May 6 at 12:00am |
                        <span className="font-weight-bold"> Due </span>May 13 at
                        11:59pm | 100 pts
                      </small>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginLeft: "auto" }}
                    >
                      <LessonControlButtons />
                    </div>
                  </div>
                </li>
              ))}
          </ul>

          {/** 

          <ul className="wd-assignment-content list-group rounded-0">
            <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
              <div className="d-flex align-items-center flex-grow-1">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-2 fs-3 text-success" />
                <div>
                  <a
                    className="wd-assignment-link fw-bold text-dark"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A1
                  </a>{" "}
                  <br />
                  <small className="mb-0 text-muted">
                    <span className="text-danger">Multiple Modules </span>|{" "}
                    <span className="font-weight-bold">
                      Not available until{" "}
                    </span>
                    May 6 at 12:00am |
                    <span className="font-weight-bold"> Due </span>May 13 at
                    11:59pm | 100 pts
                  </small>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ marginLeft: "auto" }}
                >
                  <LessonControlButtons />
                </div>
              </div>
            </li>

            <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
              <div className="d-flex align-items-center flex-grow-1">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-2 fs-3 text-success" />
                <div>
                  <a
                    className="wd-assignment-link fw-bold text-dark"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A2
                  </a>{" "}
                  <br />
                  <small className="mb-0 text-muted">
                    <span className="text-danger">Multiple Modules </span>|{" "}
                    <span className="font-weight-bold">
                      Not available until{" "}
                    </span>
                    May 13 at 12:00am |
                    <span className="font-weight-bold"> Due </span>May 20 at
                    11:59pm | 100 pts
                  </small>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ marginLeft: "auto" }}
                >
                  <LessonControlButtons />
                </div>
              </div>
            </li>

            <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
              <div className="d-flex align-items-center flex-grow-1">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-2 fs-3 text-success" />
                <div>
                  <a
                    className="wd-assignment-link fw-bold text-dark"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A3
                  </a>{" "}
                  <br />
                  <small className="mb-0 text-muted">
                    <span className="text-danger">Multiple Modules </span>|{" "}
                    <span className="font-weight-bold">
                      Not available until{" "}
                    </span>
                    May 20 at 12:00am |
                    <span className="font-weight-bold"> Due </span>May 27 at
                    11:59pm | 100 pts
                  </small>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ marginLeft: "auto" }}
                >
                  <LessonControlButtons />
                </div>
              </div>
            </li>
          </ul>
          */}
        </li>
      </ul>
    </div>
  );
}
