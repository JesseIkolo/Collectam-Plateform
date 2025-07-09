import React from "react";
import { Grid, Column, Tile, Button, Tag } from "@carbon/react";
import { Add, LocationFilled, Time } from "@carbon/icons-react";

const missionsData = [
  {
    id: 1,
    title: "Collecte Zone Nord",
    location: "Quartier Moungali",
    status: "En cours",
    priority: "Haute",
    time: "09:00 - 12:00",
  },
  {
    id: 2,
    title: "Collecte Zone Sud",
    location: "Quartier Bacongo",
    status: "Planifiée",
    priority: "Moyenne",
    time: "14:00 - 17:00",
  },
  {
    id: 3,
    title: "Collecte Zone Est",
    location: "Quartier Ouenzé",
    status: "Terminée",
    priority: "Basse",
    time: "08:00 - 11:00",
  },
  {
    id: 4,
    title: "Collecte Zone Ouest",
    location: "Quartier Poto-Poto",
    status: "En attente",
    priority: "Haute",
    time: "13:00 - 16:00",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "En cours":
      return "blue";
    case "Terminée":
      return "green";
    case "Planifiée":
      return "purple";
    case "En attente":
      return "yellow";
    default:
      return "gray";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "Haute":
      return "red";
    case "Moyenne":
      return "orange";
    case "Basse":
      return "green";
    default:
      return "gray";
  }
};

export default function MissionsPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Missions</h1>
              <p className="page-description">
                Gestion et suivi des missions de collecte
              </p>
            </div>
            <div className="header-actions">
              <Button kind="primary" renderIcon={Add}>
                Nouvelle mission
              </Button>
            </div>
          </div>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Missions du jour</span>
            </div>
            <div className="kpi-value">4</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">En cours</span>
            </div>
            <div className="kpi-value">1</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Terminées</span>
            </div>
            <div className="kpi-value">1</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">En attente</span>
            </div>
            <div className="kpi-value">2</div>
          </Tile>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <div className="missions-grid">
            {missionsData.map((mission) => (
              <Tile key={mission.id} className="mission-card">
                <div className="mission-header">
                  <h3 className="mission-title">{mission.title}</h3>
                  <div className="mission-tags">
                    <Tag type={getStatusColor(mission.status)} size="sm">
                      {mission.status}
                    </Tag>
                    <Tag type={getPriorityColor(mission.priority)} size="sm">
                      {mission.priority}
                    </Tag>
                  </div>
                </div>

                <div className="mission-details">
                  <div className="mission-location">
                    <LocationFilled size={16} />
                    <span>{mission.location}</span>
                  </div>
                  <div className="mission-time">
                    <Time size={16} />
                    <span>{mission.time}</span>
                  </div>
                </div>

                <div className="mission-actions">
                  <Button kind="ghost" size="sm">
                    Voir détails
                  </Button>
                  {mission.status === "En attente" && (
                    <Button kind="primary" size="sm">
                      Démarrer
                    </Button>
                  )}
                </div>
              </Tile>
            ))}
          </div>
        </Column>
      </Grid>
    </div>
  );
}
