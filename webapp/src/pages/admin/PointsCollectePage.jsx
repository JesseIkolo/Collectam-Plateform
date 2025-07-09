import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function PointsCollectePage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Points de collecte</h1>
              <p className="page-description">
                Gestion des points de ramassage et dépôts autorisés
              </p>
            </div>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile>
            <h3>📍 Points de collecte</h3>
            <p>
              Gestion centralisée des points de ramassage, centres de tri et
              décharges autorisées sur le territoire de Brazzaville.
            </p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
