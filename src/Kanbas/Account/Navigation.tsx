import React from "react";
import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to={`/Kanbas/Account/Signin`}
        id="wd-account-signin-link"
        className="list-group-item active border border-0"
      >
        {" "}
        Signin{" "}
      </Link>{" "}
      <Link
        to="/Kanbas/Account/Signup"
        id="wd-course-signup-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Signup{" "}
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        id="wd-course-profile-link"
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Profile{" "}
      </Link>
    </div>
  );
}
