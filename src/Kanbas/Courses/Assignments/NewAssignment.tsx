import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";
import { FaAngleDown } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";

export default function NewAssignment() {
  const { courseId } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(
      addAssignment({
        title: name,
        description,
        points,
        dueDate,
        availableFrom,
        availableUntil,
        course: courseId,
      })
    );
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
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

      <label htmlFor="wd-description"></label>
      <textarea
        id="wd-description"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-2"
      ></textarea>

      <label htmlFor="wd-points">Points</label>
      <input
        id="wd-points"
        type="number"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
        className="form-control mb-2"
      />

      <label htmlFor="wd-due-date">Due Date</label>
      <div>
        <input
          id="wd-due-date"
          type="text"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="form-control mb-2"
        />
      </div>

      <label htmlFor="wd-available-from">Available From</label>
      <input
        id="wd-available-from"
        type="text"
        value={availableFrom}
        onChange={(e) => setAvailableFrom(e.target.value)}
        className="form-control mb-2"
      />

      <label htmlFor="wd-available-until">Available Until</label>
      <input
        id="wd-available-until"
        type="text"
        value={availableUntil}
        onChange={(e) => setAvailableUntil(e.target.value)}
        className="form-control mb-2"
      />

      <div className="d-flex justify-content-end">
        <button
          onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments`)}
          className="btn btn-secondary me-2"
        >
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}
