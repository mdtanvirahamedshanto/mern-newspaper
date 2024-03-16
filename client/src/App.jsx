import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import storeContext from "./context/storeContext";
import MainLayout from "./dashboard/layout/MainLayout";
import AddWriter from "./dashboard/pages/AddWriter";
import AdminIndex from "./dashboard/pages/AdminIndex";
import CreateNews from "./dashboard/pages/CreateNews";
import Edit_news from "./dashboard/pages/Edit_news";
import Login from "./dashboard/pages/Login";
import News from "./dashboard/pages/News";
import Profile from "./dashboard/pages/Profile";
import Unable from "./dashboard/pages/Unable";
import WriterIndex from "./dashboard/pages/WriterIndex";
import Writers from "./dashboard/pages/Writers";
import ProtectDashboatd from "./middleware/ProtectDashboatd";
import ProtectRole from "./middleware/ProtectRole";

function App() {
  const { store } = useContext(storeContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectDashboatd />}>
          <Route path="" element={<MainLayout />}>
            <Route
              path=""
              element={
                store.userInfo?.role === "admin" ? (
                  <Navigate to="/dashboard/admin" />
                ) : (
                  <Navigate to="/dashboard/writer" />
                )
              }
            />
            <Route path="unable-access" element={<Unable />} />
            <Route path="news" element={<News />} />
            <Route path="profile" element={<Profile />} />

            <Route path="" element={<ProtectRole role="admin" />}>
              <Route path="admin" element={<AdminIndex />} />
              <Route path="writer/add" element={<AddWriter />} />
              <Route path="writers" element={<Writers />} />
            </Route>

            <Route path="" element={<ProtectRole role="writer" />}>
              <Route path="writer" element={<WriterIndex />} />
              <Route path="news/create" element={<CreateNews />} />
              <Route path="news/edit/:news_id" element={<Edit_news />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
