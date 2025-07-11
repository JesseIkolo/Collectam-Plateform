import React from 'react';
<<<<<<< Updated upstream:webapp/src/App.js
import logo from './logo.svg';
import './App.css';
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/auth/RegisterPage.jsx';
import DashboardHome from './pages/admin/DashboardHome.jsx';
import UsagersPage from './pages/admin/UsagersPage.jsx';
import VehiculesPage from './pages/admin/VehiculesPage.jsx';
import SignalementPage from './pages/admin/SignalementPage.jsx';
import SignalementsPage from './pages/admin/SignalementsPage.jsx';
import PointsDepotsPage from './pages/admin/PointsDepotsPage.jsx';
import PrecolecteursPage from './pages/admin/PrecolecteursPage.jsx';
import PointsCollectePage from './pages/admin/PointsCollectePage.jsx';
import MissionsPage from './pages/admin/MissionsPage.jsx';
import NotificationsPage from './pages/admin/NotificationsPage.jsx';
import ParrainagePage from './pages/admin/ParrainagePage.jsx';
import DechetsPage from './pages/admin/DechetsPage.jsx';
import LanguesPage from './pages/admin/LanguesPage.jsx';
import AdministrationPage from './pages/admin/AdministrationPage.jsx';
import CartePage from './pages/admin/CartePage.jsx';
import CollecteursPage from './pages/admin/CollecteursPage.jsx';
import AboutPage from './pages/admin/AboutPage.jsx';
import UserPreferencesPage from './pages/admin/UserPreferencesPage.jsx';


import './index.scss';
>>>>>>> Stashed changes:webapp/src/App--h.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

<<<<<<< Updated upstream:webapp/src/App.js
export default App;
=======
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
                <Route path="/admin/user-preferences" element={<ProtectedRoute><UserPreferencesPage /></ProtectedRoute>} />
                
                {/* Redirection par défaut */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
} 
>>>>>>> Stashed changes:webapp/src/App--h.js
