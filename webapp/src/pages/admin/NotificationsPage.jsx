import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function NotificationsPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Notifications</h1>
              <p className="page-description">
                Centre de notifications et alertes
              </p>
            </div>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile>
            <h3>Notifications récentes</h3>
            <p>Aucune nouvelle notification pour le moment.</p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
