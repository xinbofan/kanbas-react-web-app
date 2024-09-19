import React from "react";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
function App(): React.JSX.Element {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
