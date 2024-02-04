import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./dashboard/layout/MainLayout";
import AdminIndex from "./dashboard/pages/AdminIndex";
import Login from "./dashboard/pages/Login";
import Unable from "./dashboard/pages/Unable";
import ProtectDashboard from "./middlewares/ProtectDashboard";
import ProtectRole from "./middlewares/ProtectRole";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashborad" element={<ProtectDashboard />}>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Navigate to="/dashborad/admin" />} />
            <Route path="unable-access" element={<Unable />} />
            <Route path="" element={<ProtectRole role={"admin"} />}>
              <Route path="admin" element={<AdminIndex />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
