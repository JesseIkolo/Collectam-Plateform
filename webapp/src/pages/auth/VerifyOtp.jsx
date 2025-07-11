import React, { useState } from "react";
import { Grid, Column, Form, FormGroup, TextInput, Button, Heading, Link } from "@carbon/react";
import { useLocation, useNavigate } from "react-router-dom";
import API_URL from '../../config';

export default function VerifyOtp() {
  const location = useLocation();
  const navigate = useNavigate();
  const { identifier, loginType } = location.state || {};
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      let payload = { otp };
      if (loginType === "email") payload.identifier = identifier;
      else if (loginType === "username") payload.username = identifier;
      else if (loginType === "phone") payload.phone = identifier;
      const res = await fetch(`${API_URL}/auth/verify-reset-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "OTP invalide ou expiré");
      }
      navigate('/update-password', { state: { identifier, loginType, otp } });
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
              <Heading className="login-title">Vérification OTP</Heading>
              <Form onSubmit={handleSubmit} className="login-form">
                {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
                <FormGroup legendText="">
                  <TextInput
                    id="otp"
                    labelText="Code OTP"
                    placeholder="Entrez le code reçu"
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
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
