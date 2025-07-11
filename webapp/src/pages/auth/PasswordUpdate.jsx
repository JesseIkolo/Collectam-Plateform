import React, { useState } from "react";
import {
  Grid, Column, Form, FormGroup, PasswordInput, Button, Heading, Link
} from "@carbon/react";
import { useLocation, useNavigate } from "react-router-dom";
import API_URL from '../../config';

export default function PasswordUpdate() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { identifier, loginType, otp } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!password || password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    setLoading(true);
    let payload = { password, otp };
    if (loginType === "email") payload.identifier = identifier;
    else if (loginType === "username") payload.username = identifier;
    else if (loginType === "phone") payload.phone = identifier;
    try {
      const res = await fetch(`${API_URL}/auth/update-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Impossible de mettre à jour le mot de passe");
      }
      setSuccess("Mot de passe mis à jour avec succès. Redirection...");
      setTimeout(() => {
        navigate('/login');
      }, 1200);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page nacollect-theme">
      <Grid fullWidth className="login-container">
        <Column lg={6} md={4} sm={4} className="login-form-section">
          <div className="login-form-wrapper">
            <div className="form-content">
              <Heading className="login-title">Nouveau mot de passe</Heading>
              <Form onSubmit={handleSubmit} className="login-form">
                {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
                {success && <div style={{ color: 'green', marginBottom: 12 }}>{success}</div>}
                <FormGroup legendText="">
                  <PasswordInput
                    id="password"
                    labelText="Nouveau mot de passe"
                    placeholder="Nouveau mot de passe"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-input"
                    disabled={loading}
                  />
                </FormGroup>
                <FormGroup legendText="">
                  <PasswordInput
                    id="confirm"
                    labelText="Confirmer le mot de passe"
                    placeholder="Confirmer le mot de passe"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                    className="form-input"
                    disabled={loading}
                  />
                </FormGroup>
                <Button type="submit" size="lg" className="continue-button" disabled={loading}>
                  {loading ? 'Mise à jour...' : 'Mettre à jour'}
                </Button>
              </Form>
              <div style={{ marginTop: 16 }}>
                <Link href="/login">Retour à la connexion</Link>
              </div>
            </div>
          </div>
        </Column>
      </Grid>
    </div>
  );
}
