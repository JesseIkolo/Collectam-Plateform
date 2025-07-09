import "./index.scss";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import dynamiquement les pages Login et Register
import LoginPage from './pages/admin/LoginPage';
import RegisterPage from './pages/admin/RegisterPage';

// Fonction utilitaire pour vérifier l'authentification (token dans localStorage)
function isAuthenticated() {
    return !!localStorage.getItem('token');
}

// Composant de protection de route
function ProtectedRoute({ children }) {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                {/* Toutes les routes /admin/* sont protégées */}
                <Route
                    path="/admin/*"
                    element={
                        <ProtectedRoute>
                            {/* Ici, tu peux utiliser un composant Layout ou un routeur imbriqué pour toutes les pages admin */}
                            <h2>Admin dashboard (remplace par ton vrai composant ou sous-routage)</h2>
                        </ProtectedRoute>
                    }
                />
                {/* Redirection par défaut vers /login */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
}

export default App; 