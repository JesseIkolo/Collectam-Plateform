import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
// import Home from './pages/Home'; // Exemple de page protégée
import logo from './logo.svg';
import './App.css';

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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Exemple de route protégée :
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        */}
        {/* Redirection par défaut */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
