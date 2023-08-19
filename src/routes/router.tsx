import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import ViewReportPage from "../pages/viewReport";
import { ViewClientsPage } from "../pages/viewClients";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reports/:client_id/:client_name" element={<ViewReportPage />} />
      <Route path="/clients" element={<ViewClientsPage />} />
    </Routes>
  );
};
