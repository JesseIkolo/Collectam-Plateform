import React, { useState, useEffect } from "react";
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
} from "@carbon/react";
import { ArrowRight } from "@carbon/icons-react";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: username, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }
      localStorage.setItem("token", data.token);
      // Redirige vers la page demandée ou le dashboard
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/admin/dashboard";
      localStorage.removeItem("redirectAfterLogin");
      navigate(redirectPath);
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <div className="login-page">
      <Grid fullWidth className="login-container">
        {/* Left side - Login Form */}
        <Column lg={6} md={4} sm={4} className="login-form-section">
          <div className="login-form-wrapper">
            <div className="header-section">
              <p className="brand-text">IBM NS1 Connect</p>
            </div>

            <div className="form-content">
              <Heading className="login-title">Log in</Heading>
              <p className="login-subtitle">
                Don't have an account?{" "}
                <Link href="/register" className="signup-link">
                  Create account
                </Link>
              </p>

              <Form onSubmit={handleSubmit} className="login-form">
                <FormGroup legendText="">
                  <TextInput
                    id="username"
                    labelText="Username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-input"
                  />
                </FormGroup>

                <FormGroup legendText="">
                  <PasswordInput
                    id="password"
                    labelText="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                  />
                  <Link href="#" className="forgot-password">
                    Forgot password?
                  </Link>
                </FormGroup>

                <Button type="submit" size="lg" className="continue-button">
                  Continue
                </Button>
              </Form>

              <div className="alternative-logins">
                <p className="alt-login-title">Alternative logins</p>
                <Button
                  kind="ghost"
                  size="lg"
                  className="sso-button"
                  renderIcon={ArrowRight}
                >
                  Login with SSO
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

              {error && <div className="error-message">{error}</div>}
            </div>
          </div>
        </Column>

        {/* Right side - Promotional Content */}
        <Column lg={10} md={4} sm={4} className="promo-section">
          <div className="promo-content">
            <div className="promo-text">
              <p className="promo-description">
                Join us to get previews of new features and emerging
                technologies and help shape future designs.
              </p>
              <Link href="#" className="partner-link">
                Partner with our product team
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
