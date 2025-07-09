import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import './index.scss';

function isAuthenticated() {
    return !!localStorage.getItem('token');
}

function ProtectedRoute({ children }) {
    if (!isAuthenticated()) {
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
                {/* Toutes les routes admin sont protégées */}
                <Route path="/admin/dashboard" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
                <Route path="/admin/usagers" element={<ProtectedRoute><UsagersPage /></ProtectedRoute>} />
                <Route path="/admin/vehicules" element={<ProtectedRoute><VehiculesPage /></ProtectedRoute>} />
                <Route path="/admin/signalement" element={<ProtectedRoute><SignalementPage /></ProtectedRoute>} />
                <Route path="/admin/signalements" element={<ProtectedRoute><SignalementsPage /></ProtectedRoute>} />
                <Route path="/admin/points-depots" element={<ProtectedRoute><PointsDepotsPage /></ProtectedRoute>} />
                <Route path="/admin/precollecteurs" element={<ProtectedRoute><PrecolecteursPage /></ProtectedRoute>} />
                <Route path="/admin/points-collecte" element={<ProtectedRoute><PointsCollectePage /></ProtectedRoute>} />
                <Route path="/admin/missions" element={<ProtectedRoute><MissionsPage /></ProtectedRoute>} />
                <Route path="/admin/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
                <Route path="/admin/parrainage" element={<ProtectedRoute><ParrainagePage /></ProtectedRoute>} />
                <Route path="/admin/dechets" element={<ProtectedRoute><DechetsPage /></ProtectedRoute>} />
                <Route path="/admin/langues" element={<ProtectedRoute><LanguesPage /></ProtectedRoute>} />
                <Route path="/admin/administration" element={<ProtectedRoute><AdministrationPage /></ProtectedRoute>} />
                <Route path="/admin/carte" element={<ProtectedRoute><CartePage /></ProtectedRoute>} />
                <Route path="/admin/collecteurs" element={<ProtectedRoute><CollecteursPage /></ProtectedRoute>} />
                {/* Redirection par défaut */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
} 