import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function LanguesPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Langues</h1>
              <p className="page-description">Configuration des langues</p>
            </div>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile>
            <h3>Paramètres de langue</h3>
            <p>Configuration des préférences linguistiques.</p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
