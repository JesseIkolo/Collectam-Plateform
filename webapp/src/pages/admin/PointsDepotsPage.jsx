import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function PointsDepotsPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Points de dépôts</h1>
              <p className="page-description">
                Gestion des points de collecte et dépôts
              </p>
            </div>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile>
            <h3>Points de dépôts</h3>
            <p>Carte et gestion des points de dépôts de déchets.</p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
