import React, { useState, useEffect } from "react";
import {
  Grid,
  Column,
  Tile,
  Button,
  TextInput,
  FileUploader,
  FormGroup,
  ProgressStep,
  ProgressIndicator,
} from "@carbon/react";
import { ArrowRight, User, Camera } from "@carbon/icons-react";
import "./UserPreferencesPage.scss";

export default function UserPreferencesPage() {

  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Récupérer l'utilisateur depuis l'API (cookie httpOnly)
    fetch('/api/auth/me', { credentials: 'include' })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && data.user) {
          setUser(data.user);
          setUsername(data.user.username || "");
        }
      });
  }, []);

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setIsUsernameValid(value.length >= 3 && value.length <= 20);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);

      // Créer une preview de l'image
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setImagePreview(null);
  };

  const handleNext = () => {
    if (isUsernameValid) {
      // Ici tu peux envoyer la mise à jour du profil à l'API si besoin
      console.log("Données utilisateur:", {
        user,
        username,
        profileImage: profileImage?.name || "Aucune photo",
      });
      // Redirection vers la prochaine étape
    }
  };

  const canProceed = isUsernameValid;

  return (
    <div className="user-preferences-page">
      {user && (
        <div style={{ marginBottom: 16, color: '#0f62fe' }}>
          <b>Bienvenue, {user.name || user.email || 'Utilisateur'} !</b>
        </div>
      )}
      <Grid fullWidth>
        {/* Progress Indicator */}
        <Column lg={16} md={8} sm={4}>
          <div className="progress-section">
            <ProgressIndicator currentIndex={1}>
              <ProgressStep
                complete
                label="Inscription"
                description="Compte créé"
              />
              <ProgressStep
                current
                label="Préférences"
                description="Photo et nom d'utilisateur"
              />
              <ProgressStep
                label="Finalisation"
                description="Configuration terminée"
              />
            </ProgressIndicator>
          </div>
        </Column>

        {/* Main Content */}
        <Column lg={8} md={6} sm={4} className="preferences-content">
          <Tile className="preferences-card">
            <div className="header-section">
              <div className="icon-container">
                <User size={32} />
              </div>
              <h1 className="page-title">Personnaliser votre profil</h1>
              <p className="page-description">
                Ajoutez une photo de profil et choisissez votre nom
                d'utilisateur pour personnaliser votre expérience Nacollect.
              </p>
            </div>

            {/* Photo de profil */}
            <div className="profile-photo-section">
              <FormGroup legendText="Photo de profil (optionnel)">
                <div className="photo-upload-container">
                  {imagePreview ? (
                    <div className="photo-preview">
                      <img
                        src={imagePreview}
                        alt="Preview profil"
                        className="preview-image"
                      />
                      <div className="photo-overlay">
                        <Button
                          kind="ghost"
                          size="sm"
                          onClick={removeImage}
                          className="remove-photo-btn"
                        >
                          Supprimer
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="photo-placeholder">
                      <Camera size={48} />
                      <p>Ajouter une photo</p>
                    </div>
                  )}

                  <div className="upload-section">
                    <FileUploader
                      accept={[".jpg", ".jpeg", ".png"]}
                      buttonLabel="Choisir une photo"
                      iconDescription="Supprimer fichier"
                      labelDescription="Formats acceptés: JPG, PNG (max 5MB)"
                      labelTitle=""
                      multiple={false}
                      name="profilePhoto"
                      onChange={handleFileUpload}
                      size="sm"
                    />
                  </div>
                </div>
              </FormGroup>
            </div>

            {/* Nom d'utilisateur */}
            <div className="username-section">
              <FormGroup legendText="">
                <TextInput
                  id="username"
                  labelText="Nom d'utilisateur *"
                  placeholder="Choisissez votre nom d'utilisateur"
                  value={username}
                  onChange={handleUsernameChange}
                  invalid={username.length > 0 && !isUsernameValid}
                  invalidText={
                    username.length > 0 && username.length < 3
                      ? "Le nom d'utilisateur doit contenir au moins 3 caractères"
                      : username.length > 20
                        ? "Le nom d'utilisateur ne peut pas dépasser 20 caractères"
                        : ""
                  }
                  helperText="Entre 3 et 20 caractères, lettres et chiffres uniquement"
                  maxLength={20}
                />
              </FormGroup>
            </div>

            {/* Aperçu du profil */}
            {(username || imagePreview) && (
              <div className="profile-preview">
                <h3>Aperçu de votre profil</h3>
                <div className="preview-card">
                  <div className="preview-avatar">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Avatar" />
                    ) : (
                      <User size={24} />
                    )}
                  </div>
                  <div className="preview-info">
                    <h4>{username || "Nom d'utilisateur"}</h4>
                    <p>Membre Nacollect</p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="actions-section">
              <Button
                kind="secondary"
                onClick={() => window.history.back()}
                className="back-btn"
              >
                Retour
              </Button>
              <Button
                kind="primary"
                renderIcon={ArrowRight}
                onClick={handleNext}
                disabled={!canProceed}
                className="next-btn"
              >
                Suivant
              </Button>
            </div>
          </Tile>
        </Column>

        {/* Sidebar Info */}
        <Column lg={8} md={2} sm={4} className="info-sidebar">
          <Tile className="info-card">
            <h3>Pourquoi personnaliser votre profil ?</h3>
            <ul className="benefits-list">
              <li>
                <strong>Reconnaissance :</strong> Votre photo aide les
                collecteurs à vous identifier facilement
              </li>
              <li>
                <strong>Confiance :</strong> Un profil complet renforce la
                confiance dans la communauté
              </li>
              <li>
                <strong>Personnalisation :</strong> Votre nom d'utilisateur vous
                représente sur la plateforme
              </li>
            </ul>
          </Tile>

          <Tile className="security-info">
            <h4>🔒 Sécurité et confidentialité</h4>
            <p>
              Vos informations personnelles sont protégées et ne seront
              partagées qu'avec les collecteurs assignés à vos missions.
            </p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
