import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [moduleObject, setModuleObject] = useState({
    id: "module1",
    name: "NodeJS Module",
    description: "Module Discription",
    course: "Web Development",
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <br />

      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-score"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <br />
      <div className="mb-3">
        <a
          id="wd-update-assignment-complete"
          className="btn btn-primary float-end ms-2"
          href={`${ASSIGNMENT_API_URL}/completed/${
            assignment.completed ? "true" : "false"
          }`}
        >
          Update Completed Status
        </a>
        <input
          id="wd-assignment-complete"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
      </div>
      <br />

      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end ms-2"
        href={`${MODULE_API_URL}/name/${moduleObject.name}`}
      >
        Update Module Name
      </a>
      <input
        className="form-control w-75"
        id="wd-module-name"
        defaultValue={moduleObject.name}
        onChange={(e) =>
          setModuleObject({ ...moduleObject, name: e.target.value })
        }
      />

      <hr />

      <h4>Retrieving Objects</h4>
      <div className="mb-2">
        <a
          id="wd-retrieve-assignments"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/assignment`}
        >
          Get Assignment
        </a>
      </div>

      <a
        id="wd-get-module"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <div className="mb-2">
        <a
          id="wd-retrieve-assignment-title"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/assignment/title`}
        >
          Get Title
        </a>
      </div>
      <a
        id="wd-get-module-name"
        className="btn btn-primary"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <hr />
    </div>
  );
}
