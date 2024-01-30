import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./dashboard/layout/MainLayout";
import AdminIndex from "./dashboard/pages/AdminIndex";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashborad" element={<MainLayout />}>
          <Route path="" element={<Navigate to="/dashborad/admin" />}>
            <Route path="admin" element={<AdminIndex />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
