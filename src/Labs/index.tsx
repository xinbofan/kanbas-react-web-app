import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import React from "react";
export default function Labs() {
  return (
    <div>
      <h2>Xinbo Fan, Section 02</h2>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
      <a
        href="https://github.com/xinbofan/kanbas-react-web-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Relevant source code repositories
      </a>
    </div>
  );
}
