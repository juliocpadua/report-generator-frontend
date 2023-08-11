import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import ViewReportPage from "../pages/viewReport";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reports" element={<ViewReportPage />} />
    </Routes>
  );
};
