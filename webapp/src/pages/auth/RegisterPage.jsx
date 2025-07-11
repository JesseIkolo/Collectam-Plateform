import React, { useState } from "react";
import API_URL from '../../config';
import OtpVerificationPage from './OtpVerificationPage';
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
  Select,
} from "@carbon/react";
import { ArrowRight } from "@carbon/icons-react";
import "./RegisterPage.scss";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    countryCode: "+237",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otpEmail, setOtpEmail] = useState("");

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Validation simple côté client
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }
    try {
      // Générer name et nickname automatiquement
      const name = formData.firstName + ' ' + formData.lastName;
      const username = (formData.firstName + formData.lastName).toLowerCase();
      const phoneNumber = formData.countryCode + formData.phone;
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          username,
          email: formData.email,
          password: formData.password,
          phone: formData.phone
        })
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Erreur lors de l’inscription');
      }
      setOtpEmail(formData.email);
      setShowOtp(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (showOtp) {
    return <OtpVerificationPage email={otpEmail} password={formData.password} />;
  }

  return (
    <div className="register-page">
      <Grid fullWidth className="register-container">
        {/* Left side - Registration Form */}
        <Column lg={6} md={4} sm={4} className="register-form-section">
          <div className="register-form-wrapper">
            <div className="header-section">
              <p className="brand-text">Nacollect</p>
            </div>

            <div className="form-content">
              <Heading className="register-title">Create account</Heading>
              <p className="register-subtitle">
                Already have an account?{" "}
                <Link href="/login" className="signin-link">
                  Sign in
                </Link>
              </p>

              <Form onSubmit={handleSubmit} className="register-form">
                {error && (
                  <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>
                )}
                <div className="name-fields">
                  <FormGroup legendText="">
                    <TextInput
                      id="firstName"
                      labelText="First name"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange("firstName")}
                      className="form-input"
                      disabled={loading}
                    />
                  </FormGroup>

                  <FormGroup legendText="">
                    <TextInput
                      id="lastName"
                      labelText="Last name"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange("lastName")}
                      className="form-input"
                      disabled={loading}
                    />
                  </FormGroup>
                </div>

                <FormGroup legendText="">
                  <TextInput
                    id="email"
                    labelText="Email address"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    className="form-input"
                    disabled={loading}
                  />
                </FormGroup>

                {/* Champ téléphone avec select indicatif pays */}
                <FormGroup legendText="">
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <Select
                      id="countryCode"
                      labelText="Indicatif"
                      value={formData.countryCode}
                      onChange={handleChange("countryCode")}
                      style={{ maxWidth: 110 }}
                      disabled={loading}
                    >
                      <option value="+225">🇨🇮 +225</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+237" defaultChecked>🇨🇲 +237</option>
                      <option value="+44">🇬🇧 +44</option>
                      {/* Ajoute d'autres indicatifs si besoin */}
                    </Select>
                    <TextInput
                      id="phone"
                      labelText="Phone number"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      className="form-input"
                      style={{ flex: 1 }}
                      disabled={loading}
                    />
                  </div>
                </FormGroup>

                <FormGroup legendText="">
                  <PasswordInput
                    id="password"
                    labelText="Password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange("password")}
                    className="form-input"
                    disabled={loading}
                  />
                </FormGroup>

                <FormGroup legendText="">
                  <PasswordInput
                    id="confirmPassword"
                    labelText="Confirm password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    className="form-input"
                    disabled={loading}
                  />
                </FormGroup>

                <Button
                  type="submit"
                  size="lg"
                  className="create-account-button"
                  disabled={loading}
                >
                  {loading ? 'Création...' : 'Create account'}
                </Button>
              </Form>

              <div className="alternative-logins">
                <p className="alt-login-title">Alternative registration</p>
                <Button
                  kind="ghost"
                  size="lg"
                  className="sso-button"
                  renderIcon={ArrowRight}
                  disabled={loading}
                >
                  Sign up with SSO
                </Button>
              </div>

              <div className="help-section">
                <p className="help-title">Need help?</p>
                <div className="help-links">
                  <Link href="#" className="help-link">
                    Contact an IBM Sales Rep
                  </Link>
                  <Link href="#" className="help-link">
                    Submit IBM Privacy Request
                  </Link>
                  <Link href="#" className="help-link">
                    Explore community
                  </Link>
                  <Link href="#" className="help-link">
                    NS1 Status Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Column>

        {/* Right side - Promotional Content */}
        <Column lg={10} md={4} sm={4} className="promo-section">
          <div className="promo-content">
            <div className="promo-text">
              <p className="promo-description">
                Join thousands of developers and organizations building faster,
                more reliable applications with NS1 Connect.
              </p>
              <Link href="#" className="partner-link">
                Learn about our platform
                <ArrowRight className="link-icon" />
              </Link>
            </div>

            <div className="globe-section">
              <div className="globe-container">
                <div className="globe"></div>

                {/* Floating UI Elements */}
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

                {/* Character Illustration */}
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
