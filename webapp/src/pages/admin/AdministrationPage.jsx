import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function AdministrationPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Administration</h1>
              <p className="page-description">
                Panneau d'administration système
              </p>
            </div>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile>
            <h3>Administration</h3>
            <p>Outils d'administration et configuration du système.</p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
