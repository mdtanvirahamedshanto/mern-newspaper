import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./dashboard/layout/MainLayout";
import AddWriter from "./dashboard/pages/AddWriter";
import AdminIndex from "./dashboard/pages/AdminIndex";
import Login from "./dashboard/pages/Login";
import News from "./dashboard/pages/News";
import Profile from "./dashboard/pages/Profile";
import Unable from "./dashboard/pages/Unable";
import Writers from "./dashboard/pages/Writers";
import ProtectDashboard from "./middlewares/ProtectDashboard";
import ProtectRole from "./middlewares/ProtectRole";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectDashboard />}>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Navigate to="/dashboard/admin" />} />
            <Route path="unable-access" element={<Unable />} />
            <Route path="news" element={<News />} />
            <Route path="profile" element={<Profile />} />
            <Route path="" element={<ProtectRole role={"admin"} />}>
              <Route path="admin" element={<AdminIndex />} />
              <Route path="writer/add" element={<AddWriter />} />
              <Route path="writers" element={<Writers />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
