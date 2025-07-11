import React, { useState } from "react";
import API_URL from '../../config';
import {
  Grid,
  Column,
  Form,
  FormGroup,
  TextInput,
  PasswordInput,
  Button,
  Link,
  Heading,
  RadioButtonGroup,
  RadioButton
} from "@carbon/react";
import { ArrowRight } from "@carbon/icons-react";
export default function LoginPage() {
  const [loginType, setLoginType] = useState("email");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('[Login] Submit triggered');
    setLoading(true);
    setError("");
    let loginPayload = { password };
    if (loginType === "email") {
      loginPayload.identifier = identifier;
      console.log('[Login] Mode: email, identifier:', identifier);
    } else if (loginType === "username") {
      loginPayload.username = identifier;
      console.log('[Login] Mode: username, username:', identifier);
    } else if (loginType === "phone") {
      loginPayload.phone = identifier;
      console.log('[Login] Mode: phone, phone:', identifier);
    }
    try {
      console.log('[Login] Sending payload:', loginPayload);
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
        credentials: 'include'
      });
      console.log('[Login] Response status:', response.status);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.log('[Login] Error response:', errorData);
        throw new Error(errorData.message || 'Identifiants invalides');
      }
      console.log('[Login] Authentification réussie, redirection...');
      window.location.href = '/admin';
    } catch (err) {
      console.log('[Login] Exception:', err);
      setError(err.message);
    } finally {
      setLoading(false);
      console.log('[Login] Loading terminé');
    }
  };

  return (
    <div className="login-page nacollect-theme">
      <Grid fullWidth className="login-container">
        {/* Partie gauche - Formulaire de connexion */}
        <Column lg={6} md={4} sm={4} className="login-form-section">
          <div className="login-form-wrapper">
            <div className="header-section">
              <p className="brand-text">Nacollect Plateforme</p>
            </div>

            <div className="form-content">
              <Heading className="login-title">Connexion</Heading>
              <p className="login-subtitle">
                Pas encore de compte ?{" "}
                <Link href="/register" className="signup-link">
                  Créer un compte
                </Link>
              </p>

              <Form onSubmit={handleSubmit} className="login-form">
                {error && (
                  <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>
                )}

                <FormGroup legendText="Choisissez votre mode de connexion :">
                  <RadioButtonGroup
                    legendText="Type de connexion"
                    name="loginType"
                    valueSelected={loginType}
                    orientation="horizontal"
                    onChange={setLoginType}
                  >
                    <RadioButton labelText="E-mail" value="email" id="login-type-email" />
                    <RadioButton labelText="Nom d'utilisateur" value="username" id="login-type-username" />
                    <RadioButton labelText="Téléphone" value="phone" id="login-type-phone" />
                  </RadioButtonGroup>
                </FormGroup>

                <FormGroup legendText="">
                  <TextInput
                    id="identifier"
                    labelText={
                      loginType === "email"
                        ? "Adresse e-mail"
                        : loginType === "username"
                        ? "Nom d'utilisateur"
                        : "Numéro de téléphone"
                    }
                    placeholder={
                      loginType === "email"
                        ? "Entrez votre e-mail"
                        : loginType === "username"
                        ? "Entrez votre nom d'utilisateur"
                        : "Entrez votre numéro de téléphone"
                    }
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="form-input"
                    disabled={loading}
                    type={loginType === "phone" ? "tel" : loginType === "email" ? "email" : "text"}
                    autoComplete={
                      loginType === "email"
                        ? "email"
                        : loginType === "username"
                        ? "username"
                        : "tel"
                    }
                  />
                </FormGroup>

                <FormGroup legendText="">
                  <PasswordInput
                    id="password"
                    labelText="Mot de passe"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    disabled={loading}
                    autoComplete="current-password"
                  />
                  <Link href="/password-recovery" className="forgot-password">
                    Mot de passe oublié ?
                  </Link>
                </FormGroup>

                <Button type="submit" size="lg" className="continue-button" disabled={loading}>
                  {loading ? 'Connexion...' : 'Se connecter'}
                </Button>
              </Form>

              <div className="alternative-logins">
                <p className="alt-login-title">Ou connectez-vous avec</p>
                <Button
                  kind="ghost"
                  size="lg"
                  className="sso-button"
                  renderIcon={ArrowRight}
                >
                  Connexion SSO
                </Button>
              </div>

              <div className="help-section">
                <p className="help-title">Besoin d'aide ?</p>
                <div className="help-links">
                  <Link href="#" className="help-link">
                    Contacter le support Nacollect
                  </Link>
                  <Link href="#" className="help-link">
                    Politique de confidentialité
                  </Link>
                  <Link href="#" className="help-link">
                    Rejoindre la communauté
                  </Link>
                  <Link href="#" className="help-link">
                    Statut de la plateforme
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Column>

        {/* Partie droite - Visuel promotionnel */}
        <Column lg={10} md={4} sm={4} className="promo-section">
          <div className="promo-content">
            <div className="promo-text">
              <p className="promo-description">
                Rejoignez Nacollect pour découvrir les nouvelles fonctionnalités et contribuer à l’amélioration de la gestion des déchets.
              </p>
              <Link href="#" className="partner-link">
                Devenir partenaire
                <ArrowRight className="link-icon" />
              </Link>
            </div>

            <div className="globe-section">
              <div className="globe-container">
                <div className="globe"></div>
                {/* UI flottantes et illustration */}
                <div className="floating-element element-1">
                  <div className="ui-card dashboard-card">
                    <div className="card-header"></div>
                    <div className="card-content"></div>
                  </div>
                </div>
                <div className="floating-element element-2">
                  <div className="ui-card video-card">
                    <div className="play-button">▶</div>
                  </div>
                </div>
                <div className="floating-element element-3">
                  <div className="ui-card chart-card">
                    <div className="chart-bars"></div>
                  </div>
                </div>
                <div className="floating-element element-4">
                  <div className="ui-card profile-card">
                    <div className="profile-avatar"></div>
                  </div>
                </div>
                <div className="floating-element element-5">
                  <div className="ui-card mobile-card">
                    <div className="mobile-screen"></div>
                  </div>
                </div>
                <div className="floating-element element-6">
                  <div className="ui-card document-card">
                    <div className="document-lines"></div>
                  </div>
                </div>
                <div className="character-illustration">
                  <div className="character"></div>
                </div>
              </div>
            </div>
          </div>
        </Column>
      </Grid>
    </div>
  );
}

