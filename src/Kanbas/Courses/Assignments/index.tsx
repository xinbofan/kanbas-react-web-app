import React, { useEffect, useState } from "react";
import { MdOutlineAssignment } from "react-icons/md";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { CiSearch } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentControlButton from "./AssignmentControlButton";
import * as db from "../../Database";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
} from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";

export default function Assignments() {
  const { cid } = useParams();
  const [assignmentTitle, setAssignmentTitle] = useState(""); //xinxiede
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const handleDelete = async (assignmentId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this assignment?"
    );
    if (confirmDelete) {
      await assignmentsClient.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    }
  };

  // xin xie de

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { title: assignmentTitle, course: cid };
    const assignment = await coursesClient.createAssignmentForCourse(
      cid,
      newAssignment
    );
    dispatch(addAssignment(assignment));
  };

  // xin xie de

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
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments/new`}
            className="btn btn-danger"
          >
            + Assignment
          </Link>
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
            {assignments
              //.filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center"
                >
                  <div className="d-flex align-items-center flex-grow-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-2 fs-3 text-success" />

                    <div>
                      <Link
                        className="wd-assignment-link fw-bold text-dark"
                        to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </Link>{" "}
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
                      <FaTrash
                        className="text-danger me-2 mb-1"
                        onClick={() => handleDelete(assignment._id)}
                      />
                      <LessonControlButtons />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
