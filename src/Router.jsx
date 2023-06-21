import { Routes, Route, Navigate } from "react-router-dom";

//pages
import { Login, Signup } from "./pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
