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
} from "@carbon/react";
import { Add, Edit, Delete } from "@carbon/icons-react";

const headers = [
  { key: "name", header: "Nom" },
  { key: "zone", header: "Zone" },
  { key: "phone", header: "Téléphone" },
  { key: "status", header: "Statut" },
  { key: "actions", header: "Actions" },
];

const precolecteursData = [
  {
    id: "1",
    name: "Jean Dupont",
    zone: "Zone Nord",
    phone: "+242 06 123 4567",
    status: "Actif",
  },
  {
    id: "2",
    name: "Marie Mbemba",
    zone: "Zone Sud",
    phone: "+242 06 234 5678",
    status: "Actif",
  },
  {
    id: "3",
    name: "Paul Nkounkou",
    zone: "Zone Est",
    phone: "+242 06 345 6789",
    status: "Inactif",
  },
  {
    id: "4",
    name: "Grace Moukoko",
    zone: "Zone Ouest",
    phone: "+242 06 456 7890",
    status: "Actif",
  },
];

export default function PrecolecteursPage() {
  return (
    <div className="page-content">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1 className="page-title">Précolecteurs</h1>
              <p className="page-description">
                Gestion des précolecteurs de déchets
              </p>
            </div>
            <div className="header-actions">
              <Button kind="primary" renderIcon={Add}>
                Ajouter un précolecteur
              </Button>
            </div>
          </div>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Total précolecteurs</span>
            </div>
            <div className="kpi-value">4</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Actifs</span>
            </div>
            <div className="kpi-value">3</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Inactifs</span>
            </div>
            <div className="kpi-value">1</div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile className="kpi-card">
            <div className="kpi-header">
              <span className="kpi-title">Nouvelles inscriptions</span>
            </div>
            <div className="kpi-value">2</div>
            <div className="kpi-subtitle">Ce mois</div>
          </Tile>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile className="data-table-section">
            <DataTable rows={precolecteursData} headers={headers}>
              {({
                rows,
                headers,
                getTableProps,
                getHeaderProps,
                getRowProps,
              }) => (
                <TableContainer title="Liste des précolecteurs">
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
