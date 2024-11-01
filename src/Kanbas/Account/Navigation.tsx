import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to={`/Kanbas/Account/Signin`}
        id="wd-account-signin-link"
        className={`list-group-item border border-0 ${
          pathname === "/Kanbas/Account/Signin" ? "active" : "text-danger"
        }`}
      >
        {" "}
        Signin{" "}
      </Link>{" "}
      <Link
        to="/Kanbas/Account/Signup"
        id="wd-course-signup-link"
        className={`list-group-item border border-0 ${
          pathname === "/Kanbas/Account/Signup" ? "active" : "text-danger"
        }`}
      >
        {" "}
        Signup{" "}
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        id="wd-course-profile-link"
        className={`list-group-item border border-0 ${
          pathname === "/Kanbas/Account/Profile" ? "active" : "text-danger"
        }`}
      >
        {" "}
        Profile{" "}
      </Link>
    </div>
  );
}
