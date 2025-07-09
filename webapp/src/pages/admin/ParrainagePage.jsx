import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function ParrainagePage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Parrainage</h1>
              <p className="page-description">Programme de parrainage</p>
            </div>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile>
            <h3>Programme de parrainage</h3>
            <p>Gestion du système de parrainage et récompenses.</p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
