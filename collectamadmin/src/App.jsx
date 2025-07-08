import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardHome from "./pages/DashboardHome";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UsagersPage from "./pages/UsagersPage";
import CollecteursPage from "./pages/CollecteursPage";
import MissionsPage from "./pages/MissionsPage";
import VehiculesPage from "./pages/VehiculesPage";
import SignalementsPage from "./pages/SignalementsPage";
import CartePage from "./pages/CartePage";
import PointsCollectePage from "./pages/PointsCollectePage";
import DechetsPage from "./pages/DechetsPage";
import NotificationsPage from "./pages/NotificationsPage";
import LanguesPage from "./pages/LanguesPage";
import AdministrationPage from "./pages/AdministrationPage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/*"
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
