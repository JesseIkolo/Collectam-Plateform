import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function DechetsPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Gestion des déchets</h1>
              <p className="page-description">
                Classification et suivi des différents types de déchets
              </p>
            </div>
          </div>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Recyclables collectés</span>
            </div>
            <div className="kpi-value">45.2</div>
            <div className="kpi-subtitle">Tonnes cette semaine</div>
            <div className="kpi-change">+12% ↑</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Déchets ménagers</span>
            </div>
            <div className="kpi-value">128.7</div>
            <div className="kpi-subtitle">Tonnes cette semaine</div>
            <div className="kpi-change">+8% ↑</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Encombrants</span>
            </div>
            <div className="kpi-value">23.1</div>
            <div className="kpi-subtitle">Tonnes cette semaine</div>
            <div className="kpi-change">+15% ↑</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Déchets dangereux</span>
            </div>
            <div className="kpi-value">2.8</div>
            <div className="kpi-subtitle">Tonnes cette semaine</div>
            <div className="kpi-change">+3% ↑</div>
          </Tile>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile>
            <h3>📊 Classification des déchets</h3>
            <p>
              Système de classification et de suivi des différents types de
              déchets collectés dans le cadre du programme Nacollect.
            </p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
