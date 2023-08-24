import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import ViewReportPage from "../pages/viewReport";
import { ViewClientsPage } from "../pages/viewClients";
import CreateReportPage from "../pages/createReport";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/reports/:client_id/:client_name"
        element={<ViewReportPage />}
      />
      <Route path="/clients" element={<ViewClientsPage />} />
      <Route path="/new-report/:client_id" element={<CreateReportPage />} />
    </Routes>
  );
};
