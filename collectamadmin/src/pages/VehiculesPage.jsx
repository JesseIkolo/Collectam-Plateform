import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function VehiculesPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Véhicules</h1>
              <p className="page-description">
                Gestion de la flotte de véhicules
              </p>
            </div>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile>
            <h3>Flotte de véhicules</h3>
            <p>Interface de gestion des véhicules de collecte.</p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
