import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import "../../styles.css";
import * as db from "../../Database";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();

  const assignment = useSelector((state: any) =>
    state.assignments.find(
      (assignment: any) => assignment.course === cid && assignment._id === aid
    )
  );

  const [name, setName] = useState(assignment ? assignment.title : "");
  const [description, setDescription] = useState(
    assignment ? assignment.description : ""
  );
  const [points, setPoints] = useState(assignment ? assignment.points : "");
  const [dueDate, setDueDate] = useState(assignment ? assignment.dueDate : "");
  const [availableFrom, setAvailableFrom] = useState(
    assignment ? assignment.availableFrom : ""
  );
  const [availableUntil, setAvailableUntil] = useState(
    assignment ? assignment.availableUntil : ""
  );

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  const handleSave = () => {
    if (assignment) {
      dispatch(
        updateAssignment({
          _id: assignment._id,
          title: name,
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
          title: name,
          description,
          points,
          dueDate,
          availableFrom,
          availableUntil,
          course: cid,
        })
      );
    }
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-2"
      />
      <br />
      <br />
      <div id="wd-description" className="form-control mb-2 p-3">
        <textarea
          id="wd-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        ></textarea>
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
              onChange={(e) => setPoints(e.target.value)}
              className="form-control"
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
                onChange={(e) => setDueDate(e.target.value)}
                className="form-control"
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
                onChange={(e) => setAvailableFrom(e.target.value)}
                className="form-control"
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
                onChange={(e) => setAvailableUntil(e.target.value)}
                className="form-control"
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
