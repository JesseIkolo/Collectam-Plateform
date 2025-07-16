import React, { useState } from "react";
import { Form, FormGroup, TextInput, Button, Link, Heading } from "@carbon/react";
import { useNavigate } from "react-router-dom";

export default function OtpPage() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            const response = await fetch("/api/auth/otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, code }),
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data.message || "OTP validation failed");
                setLoading(false);
                return;
            }
            setSuccess("Votre compte a été validé ! Vous pouvez maintenant vous connecter.");
            setTimeout(() => navigate("/login"), 2000);
        } catch (err) {
            setError("Erreur réseau");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="otp-page" style={{ maxWidth: 400, margin: "40px auto" }}>
            <Heading className="otp-title">Vérification OTP</Heading>
            <p>Veuillez saisir l'email utilisé à l'inscription et le code OTP reçu par SMS.</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup legendText="">
                    <TextInput
                        id="email"
                        labelText="Email"
                        placeholder="Votre email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup legendText="">
                    <TextInput
                        id="otp"
                        labelText="Code OTP"
                        placeholder="Code reçu (6 chiffres)"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                        maxLength={6}
                    />
                </FormGroup>
                <Button type="submit" size="lg" disabled={loading}>
                    Valider le code
                </Button>
            </Form>
            {error && <div style={{ color: "#d7263d", marginTop: 16 }}>{error}</div>}
            {success && <div style={{ color: "#198754", marginTop: 16 }}>{success}</div>}
            <div style={{ marginTop: 24 }}>
                <Link href="/login">Retour à la connexion</Link>
            </div>
        </div>
    );
} 