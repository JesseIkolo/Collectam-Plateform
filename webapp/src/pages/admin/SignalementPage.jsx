import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function SignalementPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Signalements</h1>
              <p className="page-description">
                Suivi des signalements et incidents
              </p>
            </div>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile>
            <h3>Signalements</h3>
            <p>Centre de traitement des signalements citoyens.</p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
