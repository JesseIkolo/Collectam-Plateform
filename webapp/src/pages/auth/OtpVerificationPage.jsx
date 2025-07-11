import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Column, Form, FormGroup, TextInput, Button, Heading } from "@carbon/react";
import API_URL from '../../config';
import "./OtpVerificationPage.scss";

export default function OtpVerificationPage({ email, password }) {

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (otp.length !== 6) {
      setError("Le code OTP doit contenir 6 chiffres.");
      return;
    }
    setLoading(true);
    try {
      // 1. Vérification OTP
      const verifyRes = await fetch(`${API_URL}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, code: otp })
      });
      if (!verifyRes.ok) {
        const errData = await verifyRes.json().catch(() => ({}));
        throw new Error(errData.message || "Échec de la vérification OTP");
      }
      // 2. Login automatique
      const loginRes = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: email, password }),
        credentials: 'include'
      });
      if (!loginRes.ok) {
        const errData = await loginRes.json().catch(() => ({}));
        throw new Error(errData.message || "Connexion impossible après OTP");
      }
      // 3. Redirection (le token est dans le cookie httpOnly)
      await loginRes.json();
      navigate("/admin/user-preferences");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-verification-page">
      <Grid fullWidth className="otp-container">
        <Column lg={6} md={4} sm={4} className="otp-form-section">
          <div className="otp-form-wrapper">
            <Heading className="otp-title">Vérification OTP</Heading>
            <p className="otp-subtitle">
              Un code de vérification a été envoyé à <b>{email ? email : "votre email"}</b>.<br />
              Veuillez saisir le code à 6 chiffres pour valider votre inscription.
            </p>
            <Form onSubmit={handleSubmit} className="otp-form">
              {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
              <FormGroup legendText="">
                <TextInput
                  id="otp"
                  labelText="Code OTP"
                  placeholder="Entrez le code reçu"
                  value={otp}
                  onChange={handleChange}
                  maxLength={6}
                  pattern="[0-9]{6}"
                  required
                  className="form-input"
                  disabled={loading}
                />
              </FormGroup>
              <Button type="submit" size="lg" className="verify-otp-button" disabled={loading}>
                {loading ? "Vérification..." : "Vérifier"}
              </Button>
            </Form>
          </div>
        </Column>
      </Grid>
    </div>
  );
}
