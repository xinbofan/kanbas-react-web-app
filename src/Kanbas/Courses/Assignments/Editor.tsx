import React from "react";

import { FaAngleDown } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import "../../styles.css";
import * as db from "../../Database";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { addAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const existingAssignment = assignments.find(
    (assignment: any) => assignment.course === cid && assignment._id === aid
  );

  const [title, setTitle] = useState(existingAssignment?.title || "");
  const [description, setDescription] = useState(
    existingAssignment?.description || ""
  );
  const [points, setPoints] = useState(existingAssignment?.points || 100);
  const [dueDate, setDueDate] = useState(
    existingAssignment?.dueDate || "May 13, 2024, 11:59 PM"
  );
  const [availableFrom, setAvailableFrom] = useState(
    existingAssignment?.availableFrom || "May 6, 2024, 12:00 AM"
  );
  const [availableUntil, setAvailableUntil] = useState(
    existingAssignment?.availableUntil || "May 20, 2024, 12:00 AM"
  );

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(
        updateAssignment({
          _id: aid,
          title,
          description,
          points,
          dueDate,
          availableFrom,
          availableUntil,
          course: cid,
        })
      );
    } else {
      dispatch(
        addAssignment({
          _id: new Date().getTime().toString(),
          title,
          description,
          points,
          dueDate,
          availableFrom,
          availableUntil,
          course: cid,
        })
      );
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={title}
        className="form-control mb-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <div id="wd-description" className="form-control mb-2 p-3">
        <textarea
          id="wd-description"
          value={description}
          className="form-control mb-2"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input
              id="wd-points"
              type="number"
              value={points}
              className="form-control mb-2"
              onChange={(e) => setPoints(parseInt(e.target.value))}
            />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <div className="dropdown-container">
              <select id="wd-group" className="form-control mb-2">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECTS">PROJECTS</option>
              </select>
              <FaAngleDown className="dropdown-icon" />
            </div>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <div className="dropdown-container">
              <select id="wd-display-grade-as" className="form-control mb-2">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </select>
              <FaAngleDown className="dropdown-icon" />
            </div>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <div className="submission-type-container border p-3 rounded">
              <div className="mb-3">
                <div className="dropdown-container">
                  <select id="wd-submission-type" className="form-select">
                    <option value="Online">Online</option>
                  </select>
                  {/*<FaAngleDown className="dropdown-icon" />*/}
                </div>
              </div>

              <div className="mb-3">
                <strong>Online Entry Options</strong>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  className="form-check-input"
                />
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-website-url"
                  className="form-check-input"
                  defaultChecked
                />
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-media-recordings"
                  className="form-check-label"
                >
                  Media Recordings
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-student-annotation"
                  className="form-check-label"
                >
                  Student Annotation
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  className="form-check-input"
                />
                <label htmlFor="wd-file-upload" className="form-check-label">
                  File Uploads
                </label>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
            <input
              id="wd-assign-to"
              value="Everyone"
              className="form-control mb-2"
            />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <div className="input-group mb-2">
              <input
                id="wd-due-date"
                type="text"
                value={dueDate}
                className="form-control"
                onChange={(e) => setDueDate(e.target.value)}
              />
              <span className="input-group-text">
                <FaCalendarDays />
              </span>
            </div>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <div className="input-group mb-2">
              <input
                id="wd-available-from"
                type="text"
                value={availableFrom}
                className="form-control"
                onChange={(e) => setAvailableFrom(e.target.value)}
              />
              <span className="input-group-text">
                <FaCalendarDays />
              </span>
            </div>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <div className="input-group mb-2">
              <input
                id="wd-available-until"
                type="text"
                value={availableUntil}
                className="form-control"
                onChange={(e) => setAvailableUntil(e.target.value)}
              />
              <span className="input-group-text">
                <FaCalendarDays />
              </span>
            </div>
          </td>
        </tr>
      </table>

      <br />
      <div className="d-flex justify-content-end">
        <Link
          to={`/courses/${cid}/assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <button className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
function useState(arg0: any): [any, any] {
  throw new Error("Function not implemented.");
}

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

function updateAssignment(arg0: {
  _id: string | undefined;
  title: any;
  description: any;
  points: any;
  dueDate: any;
  availableFrom: any;
  availableUntil: any;
  course: string | undefined;
}): any {
  throw new Error("Function not implemented.");
}

function navigate(arg0: string) {
  throw new Error("Function not implemented.");
}
