import "./index.scss";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardHome from "./pages/admin/DashboardHome";
import AboutPage from "./pages/admin/AboutPage";
import LoginPage from "./pages/admin/LoginPage";
import RegisterPage from "./pages/admin/RegisterPage";
import UsagersPage from "./pages/admin/UsagersPage";
import CollecteursPage from "./pages/admin/CollecteursPage";
import MissionsPage from "./pages/admin/MissionsPage";
import VehiculesPage from "./pages/admin/VehiculesPage";
import SignalementsPage from "./pages/admin/SignalementsPage";
import CartePage from "./pages/admin/CartePage";
import PointsCollectePage from "./pages/admin/PointsCollectePage";
import DechetsPage from "./pages/admin/DechetsPage";
import NotificationsPage from "./pages/admin/NotificationsPage";
import LanguesPage from "./pages/admin/LanguesPage";
import AdministrationPage from "./pages/admin/AdministrationPage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/admin/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/usagers" element={<UsagersPage />} />
              <Route path="/collecteurs" element={<CollecteursPage />} />
              <Route path="/missions" element={<MissionsPage />} />
              <Route path="/vehicules" element={<VehiculesPage />} />
              <Route path="/signalements" element={<SignalementsPage />} />
              <Route path="/carte" element={<CartePage />} />
              <Route path="/points-collecte" element={<PointsCollectePage />} />
              <Route path="/dechets" element={<DechetsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/langues" element={<LanguesPage />} />
              <Route path="/administration" element={<AdministrationPage />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}
