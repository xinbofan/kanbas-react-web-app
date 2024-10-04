import React from "react";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value="A1 - ENV + HTML"
        className="form-control mb-2"
      />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={5}
        cols={60}
        className="form-control mb-2"
      >
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section. Links to each of the lab
        assignments. Link to the Kanbas application. Links to all relevant
        source code repositories. The Kanbas application should include a link
        to navigate back to the landing page.
      </textarea>
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
              value={100}
              className="form-control mb-2"
            />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" className="form-control mb-2">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as" className="form-control mb-2">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type" className="form-control mb-2">
              <option value="Online">Online</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            Online Entry Options
          </td>
          <td>
            <input
              type="checkbox"
              id="wd-text-entry"
              className="form-control mb-2"
            />{" "}
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input
              type="checkbox"
              id="wd-website-url"
              className="form-control mb-2"
            />{" "}
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              id="wd-media-recordings"
              className="form-control mb-2"
            />{" "}
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              id="wd-student-annotation"
              className="form-control mb-2"
            />{" "}
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              id="wd-file-upload"
              className="form-control mb-2"
            />{" "}
            <label htmlFor="wd-file-upload">File Uploads</label>
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
            <input
              id="wd-due-date"
              type="date"
              value="2024-05-13"
              className="form-control mb-2"
            />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input
              id="wd-available-from"
              type="date"
              value="2024-05-06"
              className="form-control mb-2"
            />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input
              id="wd-available-until"
              type="date"
              value="2024-05-20"
              className="form-control mb-2"
            />
          </td>
        </tr>
      </table>

      <br />
      <button className="btn btn-secondary me-2">Cancel</button>
      <button className="btn btn-danger">+Save</button>
    </div>
  );
}
