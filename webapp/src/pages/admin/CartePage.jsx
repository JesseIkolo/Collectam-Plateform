import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function CartePage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Carte interactive</h1>
              <p className="page-description">
                Visualisation géographique des points de collecte et zones de
                service
              </p>
            </div>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile
            style={{
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <h3>🗺️ Carte interactive</h3>
              <p>Intégration avec OpenStreetMap ou Google Maps API</p>
              <ul>
                <li>📍 Points de ramassage</li>
                <li>🏭 Points de décharge officiels</li>
                <li>❌ Dépôts sauvages signalés</li>
                <li>🚛 Suivi temps réel des collecteurs</li>
                <li>🔥 Heatmap des zones critiques</li>
              </ul>
            </div>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
