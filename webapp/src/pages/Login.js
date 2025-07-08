import React, { useState } from 'react';
import {
    TextInput,
    Button,
    Link,
    Form,
    FormGroup,
    InlineNotification,
} from '@carbon/react';
import { ViewOff, View } from '@carbon/icons-react';
import './Login.css';

// Composant Illustration (à droite)
function LoginIllustration() {
    return (
        <div className="login-illustration">
            {/* Placez ici une illustration SVG ou Carbon, ou laissez vide pour l'instant */}
            <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
                <circle cx="160" cy="160" r="140" fill="#E5E5E5" />
                {/* Ajoutez d'autres éléments graphiques si besoin */}
            </svg>
            <div className="login-illustration-text">
                <p>Join us to get previews of new features and emerging technologies and help shape future designs.</p>
                <Link href="#">Partner with our product team</Link>
            </div>
        </div>
    );
}

// Composant pour les logins alternatifs
function AlternativeLogins() {
    return (
        <div className="alternative-logins">
            <Button kind="secondary" size="lg" className="login-sso-btn">Login with SSO</Button>
        </div>
    );
}

// Composant principal Login
export default function Login() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier, password }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Login failed');
            // TODO: Gérer la connexion (stockage token, redirection, etc.)
            setLoading(false);
            alert('Connexion réussie !');
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-form-container">
                <h2>Log in</h2>
                <p>Don't have an account? <Link href="#">Try for free</Link></p>
                <Form onSubmit={handleSubmit}>
                    <FormGroup legendText="">
                        <TextInput
                            id="identifier"
                            labelText="Username"
                            placeholder="Enter your username, email or phone"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            required
                            size="lg"
                        />
                        <TextInput
                            id="password"
                            labelText="Password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            size="lg"
                            type={showPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            renderSuffix={() => (
                                <button
                                    type="button"
                                    className="password-visibility-toggle"
                                    onClick={() => setShowPassword((v) => !v)}
                                    tabIndex={-1}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    {showPassword ? <ViewOff size={20} /> : <View size={20} />}
                                </button>
                            )}
                        />
                        <div className="login-links">
                            <Link href="#">Forgot password?</Link>
                        </div>
                        {error && (
                            <InlineNotification
                                kind="error"
                                title="Login failed"
                                subtitle={error}
                                onCloseButtonClick={() => setError('')}
                                className="login-error-notification"
                            />
                        )}
                        <Button type="submit" size="lg" disabled={loading || !identifier || !password}>
                            {loading ? 'Loading...' : 'Continue'}
                        </Button>
                    </FormGroup>
                </Form>
                <AlternativeLogins />
                <div className="login-help">
                    <Link href="#">Contact an IBM Sales Rep</Link><br />
                    <Link href="#">Submit IBM Privacy Request</Link><br />
                    <Link href="#">Explore community</Link><br />
                    <Link href="#">NS1 Status Page</Link>
                </div>
            </div>
            <LoginIllustration />
        </div>
    );
} 