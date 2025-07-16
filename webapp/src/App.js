import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LoginPage from './pages/admin/LoginPage';
import RegisterPage from './pages/admin/RegisterPage';
import DashboardHome from './pages/admin/DashboardHome';
import UsagersPage from './pages/admin/UsagersPage';
import VehiculesPage from './pages/admin/VehiculesPage';
import SignalementPage from './pages/admin/SignalementPage';
import SignalementsPage from './pages/admin/SignalementsPage';
import PointsDepotsPage from './pages/admin/PointsDepotsPage';
import PrecolecteursPage from './pages/admin/PrecolecteursPage';
import PointsCollectePage from './pages/admin/PointsCollectePage';
import MissionsPage from './pages/admin/MissionsPage';
import NotificationsPage from './pages/admin/NotificationsPage';
import ParrainagePage from './pages/admin/ParrainagePage';
import DechetsPage from './pages/admin/DechetsPage';
import LanguesPage from './pages/admin/LanguesPage';
import AdministrationPage from './pages/admin/AdministrationPage';
import CartePage from './pages/admin/CartePage';
import CollecteursPage from './pages/admin/CollecteursPage';
import AboutPage from './pages/admin/AboutPage';
import OtpPage from './pages/admin/OtpPage';
import Layout from './components/Layout';
import './index.scss';

function isAuthenticated() {
    return !!localStorage.getItem('token');
}

function ProtectedRoute({ children }) {
    const location = useLocation();
    const token = localStorage.getItem('token');
    console.log('Token actuel dans localStorage :', token);
    if (!isAuthenticated()) {
        // Stocke la page demandée pour redirection après login, seulement si elle n'existe pas déjà
        if (!localStorage.getItem('redirectAfterLogin')) {
            localStorage.setItem('redirectAfterLogin', location.pathname);
        }
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/otp" element={<OtpPage />} />
                {/* Toutes les routes admin sont protégées et utilisent Layout */}
                <Route path="/admin" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                    <Route path="dashboard" element={<DashboardHome />} />
                    <Route path="usagers" element={<UsagersPage />} />
                    <Route path="vehicules" element={<VehiculesPage />} />
                    <Route path="signalement" element={<SignalementPage />} />
                    <Route path="signalements" element={<SignalementsPage />} />
                    <Route path="points-depots" element={<PointsDepotsPage />} />
                    <Route path="precollecteurs" element={<PrecolecteursPage />} />
                    <Route path="points-collecte" element={<PointsCollectePage />} />
                    <Route path="missions" element={<MissionsPage />} />
                    <Route path="notifications" element={<NotificationsPage />} />
                    <Route path="parrainage" element={<ParrainagePage />} />
                    <Route path="dechets" element={<DechetsPage />} />
                    <Route path="langues" element={<LanguesPage />} />
                    <Route path="administration" element={<AdministrationPage />} />
                    <Route path="carte" element={<CartePage />} />
                    <Route path="collecteurs" element={<CollecteursPage />} />
                </Route>
                {/* Redirection par défaut */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
} 