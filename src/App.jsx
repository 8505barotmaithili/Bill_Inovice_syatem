import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import AllbillPage from "./pages/AllbillPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/all-bills" element={<AllbillPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
