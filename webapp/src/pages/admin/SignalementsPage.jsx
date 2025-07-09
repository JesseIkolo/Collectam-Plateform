import React from "react";
import { Grid, Column, Tile, Tag } from "@carbon/react";

const signalements = [
  {
    id: 1,
    type: "Dépôt sauvage",
    location: "Avenue de l'Indépendance",
    status: "Urgent",
    time: "Il y a 2h",
  },
  {
    id: 2,
    type: "Poubelle débordante",
    location: "Marché Total",
    status: "En traitement",
    time: "Il y a 4h",
  },
  {
    id: 3,
    type: "Décharge illégale",
    location: "Quartier Diata",
    status: "Nouveau",
    time: "Il y a 1h",
  },
  {
    id: 4,
    type: "Encombrants",
    location: "Rue Mbochis",
    status: "Résolu",
    time: "Il y a 6h",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Urgent":
      return "red";
    case "En traitement":
      return "yellow";
    case "Nouveau":
      return "blue";
    case "Résolu":
      return "green";
    default:
      return "gray";
  }
};

export default function SignalementsPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Signalements</h1>
              <p className="page-description">
                Suivi des signalements de dépôts sauvages et incidents
              </p>
            </div>
          </div>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card warning">
            <div className="kpi-header">
              <span className="kpi-title">Signalements urgents</span>
              <span className="warning-icon">⚠️</span>
            </div>
            <div className="kpi-value">12</div>
            <div className="kpi-subtitle">Dépôts sauvages</div>
            <div className="kpi-change">+3 ↑</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">En traitement</span>
            </div>
            <div className="kpi-value">8</div>
            <div className="kpi-change">-2 ↓</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Résolus aujourd'hui</span>
            </div>
            <div className="kpi-value">15</div>
            <div className="kpi-change">+7 ↑</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Nouveaux signalements</span>
            </div>
            <div className="kpi-value">5</div>
            <div className="kpi-subtitle">Aujourd'hui</div>
          </Tile>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <div className="signalements-grid">
            <h3>Signalements récents</h3>
            {signalements.map((signalement) => (
              <Tile key={signalement.id} className="signalement-card">
                <div className="signalement-header">
                  <h4>{signalement.type}</h4>
                  <Tag type={getStatusColor(signalement.status)} size="sm">
                    {signalement.status}
                  </Tag>
                </div>
                <p>📍 {signalement.location}</p>
                <p className="time">⏰ {signalement.time}</p>
              </Tile>
            ))}
          </div>
        </Column>
      </Grid>
    </div>
  );
}
