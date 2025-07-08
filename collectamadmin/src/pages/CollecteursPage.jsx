import React from "react";
import {
  Grid,
  Column,
  Tile,
  Button,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Tag,
} from "@carbon/react";
import { Add, Edit, Delete, LocationFilled, Star } from "@carbon/icons-react";

const headers = [
  { key: "nom", header: "Nom collecteur" },
  { key: "telephone", header: "Téléphone" },
  { key: "zone", header: "Zone assignée" },
  { key: "type", header: "Type" },
  { key: "note", header: "Note" },
  { key: "statut", header: "Statut" },
  { key: "missions_jour", header: "Missions du jour" },
  { key: "actions", header: "Actions" },
];

const collecteursData = [
  {
    id: "1",
    nom: "Jean Mbemba",
    telephone: "+242 06 123 4567",
    zone: "Zone 1 - Moungali",
    type: "Indépendant",
    note: "4.8",
    statut: "En mission",
    missions_jour: "3/4",
  },
  {
    id: "2",
    nom: "Marie Nkounkou",
    telephone: "+242 06 234 5678",
    zone: "Zone 2 - Bacongo",
    type: "Affilié EcoGroup",
    note: "4.5",
    statut: "Disponible",
    missions_jour: "1/3",
  },
  {
    id: "3",
    nom: "Paul Moukoko",
    telephone: "+242 06 345 6789",
    zone: "Zone 3 - Ouenzé",
    type: "Indépendant",
    note: "4.2",
    statut: "Hors service",
    missions_jour: "0/2",
  },
  {
    id: "4",
    nom: "Grace Malanda",
    telephone: "+242 06 456 7890",
    zone: "Zone 4 - Poto-Poto",
    type: "Affilié CleanCorp",
    note: "4.9",
    statut: "En mission",
    missions_jour: "2/3",
  },
  {
    id: "5",
    nom: "Robert Tchicaya",
    telephone: "+242 06 567 8901",
    zone: "Zone 5 - Makélékélé",
    type: "Indépendant",
    note: "4.1",
    statut: "Disponible",
    missions_jour: "1/4",
  },
];

const getTypeColor = (type) => {
  return type.includes("Affilié") ? "blue" : "green";
};

const getStatutColor = (statut) => {
  switch (statut) {
    case "En mission":
      return "blue";
    case "Disponible":
      return "green";
    case "Hors service":
      return "red";
    default:
      return "gray";
  }
};

export default function CollecteursPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Collecteurs</h1>
              <p className="page-description">
                Gestion des collecteurs indépendants et affiliés
              </p>
            </div>
            <div className="header-actions">
              <Button kind="primary" renderIcon={Add}>
                Nouveau collecteur
              </Button>
            </div>
          </div>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Total collecteurs</span>
            </div>
            <div className="kpi-value">156</div>
            <div className="kpi-change">+8 ↑</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">En mission</span>
            </div>
            <div className="kpi-value">89</div>
            <div className="kpi-subtitle">sur 156 actifs</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Note moyenne</span>
            </div>
            <div className="kpi-value">4.5</div>
            <div className="kpi-subtitle">sur 5 étoiles</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Missions complétées</span>
            </div>
            <div className="kpi-value">2,847</div>
            <div className="kpi-subtitle">Cette semaine</div>
            <div className="kpi-change">+15% ↑</div>
          </Tile>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile className="data-table-section">
            <DataTable rows={collecteursData} headers={headers}>
              {({
                rows,
                headers,
                getTableProps,
                getHeaderProps,
                getRowProps,
              }) => (
                <TableContainer title="Liste des collecteurs">
                  <Table {...getTableProps()}>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                          <TableHeader
                            key={header.key}
                            {...getHeaderProps({ header })}
                          >
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id} {...getRowProps({ row })}>
                          {row.cells.map((cell) => {
                            if (cell.info.header === "type") {
                              return (
                                <TableCell key={cell.id}>
                                  <Tag
                                    type={getTypeColor(cell.value)}
                                    size="sm"
                                  >
                                    {cell.value}
                                  </Tag>
                                </TableCell>
                              );
                            }
                            if (cell.info.header === "statut") {
                              return (
                                <TableCell key={cell.id}>
                                  <Tag
                                    type={getStatutColor(cell.value)}
                                    size="sm"
                                  >
                                    {cell.value}
                                  </Tag>
                                </TableCell>
                              );
                            }
                            if (cell.info.header === "note") {
                              return (
                                <TableCell key={cell.id}>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "4px",
                                    }}
                                  >
                                    <Star size={16} fill="#f1c40f" />
                                    <span>{cell.value}</span>
                                  </div>
                                </TableCell>
                              );
                            }
                            if (cell.info.header === "zone") {
                              return (
                                <TableCell key={cell.id}>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "4px",
                                    }}
                                  >
                                    <LocationFilled size={16} />
                                    <span>{cell.value}</span>
                                  </div>
                                </TableCell>
                              );
                            }
                            if (cell.info.header === "actions") {
                              return (
                                <TableCell key={cell.id}>
                                  <Button
                                    kind="ghost"
                                    size="sm"
                                    renderIcon={Edit}
                                    hasIconOnly
                                    iconDescription="Modifier"
                                  />
                                  <Button
                                    kind="ghost"
                                    size="sm"
                                    renderIcon={Delete}
                                    hasIconOnly
                                    iconDescription="Supprimer"
                                  />
                                </TableCell>
                              );
                            }
                            return (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </DataTable>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
