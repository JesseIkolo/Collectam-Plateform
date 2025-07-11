import React, { useState } from "react";
import {
  Grid, Column, Form, FormGroup, TextInput, Button, Heading, RadioButtonGroup, RadioButton, Link
} from "@carbon/react";
import { useNavigate } from "react-router-dom";
import API_URL from '../../config';

export default function PasswordRecovery() {
  const [loginType, setLoginType] = useState("email");
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    let payload = {};
    if (loginType === "email") payload.identifier = identifier;
    else if (loginType === "username") payload.username = identifier;
    else if (loginType === "phone") payload.phone = identifier;
    try {
      const res = await fetch(`${API_URL}/auth/request-password-reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Utilisateur non trouvé");
      }
      setSuccess("Un code OTP a été envoyé. Veuillez vérifier votre boîte mail ou téléphone.");
      setTimeout(() => {
        navigate('/verify-otp', { state: { loginType, identifier } });
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
              <Heading className="login-title">Récupération du mot de passe</Heading>
              <Form onSubmit={handleSubmit} className="login-form">
                {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
                {success && <div style={{ color: 'green', marginBottom: 12 }}>{success}</div>}
                <FormGroup legendText="Choisissez votre mode de récupération :">
                  <RadioButtonGroup
                    legendText="Type de compte"
                    name="loginType"
                    valueSelected={loginType}
                    orientation="horizontal"
                    onChange={setLoginType}
                  >
                    <RadioButton labelText="E-mail" value="email" id="rec-type-email" />
                    <RadioButton labelText="Nom d'utilisateur" value="username" id="rec-type-username" />
                    <RadioButton labelText="Téléphone" value="phone" id="rec-type-phone" />
                  </RadioButtonGroup>
                </FormGroup>
                <FormGroup legendText="">
                  <TextInput
                    id="identifier"
                    labelText={loginType === "email" ? "Adresse e-mail" : loginType === "username" ? "Nom d'utilisateur" : "Numéro de téléphone"}
                    placeholder={loginType === "email" ? "Entrez votre e-mail" : loginType === "username" ? "Entrez votre nom d'utilisateur" : "Entrez votre numéro de téléphone"}
                    value={identifier}
                    onChange={e => setIdentifier(e.target.value)}
                    className="form-input"
                    disabled={loading}
                    type={loginType === "phone" ? "tel" : loginType === "email" ? "email" : "text"}
                  />
                </FormGroup>
                <Button type="submit" size="lg" className="continue-button" disabled={loading}>
                  {loading ? 'Envoi...' : 'Recevoir le code OTP'}
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
