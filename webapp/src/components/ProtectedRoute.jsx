import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

/**
 * Composant de protection de route basé sur l'authentification via cookie httpOnly.
 * Il vérifie la session côté serveur via /api/auth/me.
 */
export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include"
        });
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (e) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  if (loading) return null; // ou un spinner
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}
