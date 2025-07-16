import React, { useState } from "react";
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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Toggle,
  Dropdown,
  Link,
  Tag,
} from "@carbon/react";
import { Add, Edit, Settings } from "@carbon/icons-react";
import "./DashboardHome.scss";
const headers = [
  { key: "mission", header: "Mission" },
  { key: "collecteur", header: "Collecteur" },
  { key: "zone", header: "Zone" },
  { key: "statut", header: "Statut" },
  { key: "planifie", header: "Planifiée" },
];

const missionsData = [
  {
    id: "1",
    mission: "Collecte Moungali Nord",
    collecteur: "Jean Mbemba",
    zone: "Zone 1 - Moungali",
    statut: "En cours",
    planifie: true,
  },
  {
    id: "2",
    mission: "Collecte Bacongo Centre",
    collecteur: "Marie Nkounkou",
    zone: "Zone 2 - Bacongo",
    statut: "Terminée",
    planifie: false,
  },
  {
    id: "3",
    mission: "Ramassage Ouenzé",
    collecteur: "Paul Moukoko",
    zone: "Zone 3 - Ouenzé",
    statut: "En attente",
    planifie: true,
  },
  {
    id: "4",
    mission: "Collecte Poto-Poto",
    collecteur: "Grace Malanda",
    zone: "Zone 4 - Poto-Poto",
    statut: "Planifiée",
    planifie: true,
  },
  {
    id: "5",
    mission: "Nettoyage Makélékélé",
    collecteur: "Robert Tchicaya",
    zone: "Zone 5 - Makélékélé",
    statut: "En cours",
    planifie: false,
  },
  {
    id: "6",
    mission: "Collecte Talangaï",
    collecteur: "Sylvie Okandze",
    zone: "Zone 6 - Talangaï",
    statut: "En attente",
    planifie: true,
  },
  {
    id: "7",
    mission: "Ramassage Diata",
    collecteur: "Michel Ngouabi",
    zone: "Zone 7 - Diata",
    statut: "Terminée",
    planifie: true,
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "En cours":
      return "blue";
    case "Terminée":
      return "green";
    case "Planifiée":
      return "purple";
    case "En attente":
      return "yellow";
    default:
      return "gray";
  }
};

export default function DashboardHome() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="dashboard-page">
      <div style={{ marginTop: 48 }}>
        <Grid fullWidth>
          {/* Header Section */}
          <Column lg={16} md={8} sm={4} className="dashboard-header">
            <div className="header-content">
              <div className="title-section">
                <h1 className="dashboard-title">Tableau de bord Nacollect</h1>
                <p className="dashboard-description">
                  Plateforme de gestion intelligente de la collecte des déchets
                  urbains
                </p>
              </div>
              <div className="header-actions">
                <Dropdown
                  id="time-period"
                  titleText=""
                  label="Aujourd'hui"
                  items={[
                    { id: "today", text: "Aujourd'hui" },
                    { id: "week", text: "Cette semaine" },
                    { id: "month", text: "Ce mois" },
                  ]}
                  itemToString={(item) => (item ? item.text : "")}
                  className="time-dropdown"
                />
                <Button
                  kind="ghost"
                  size="sm"
                  renderIcon={Edit}
                  iconDescription="Edit"
                  hasIconOnly
                />
                <Button
                  kind="ghost"
                  size="sm"
                  renderIcon={Settings}
                  iconDescription="Settings"
                  hasIconOnly
                />
              </div>
            </div>
          </Column>

          {/* KPI Cards */}
          <Column lg={4} md={2} sm={4}>
            <Tile className="kpi-card warning">
              <div className="kpi-header">
                <span className="kpi-title">Signalements urgents</span>
                <span className="warning-icon">⚠️</span>
              </div>
              <div className="kpi-value">12</div>
              <div className="kpi-subtitle">Dépôts sauvages</div>
              <div className="kpi-change">+3 ↑</div>
            </Tile>
          </Column>

          <Column lg={4} md={2} sm={4}>
            <Tile className="kpi-card">
              <div className="kpi-header">
                <span className="kpi-title">Missions actives</span>
              </div>
              <div className="kpi-value">47</div>
              <div className="kpi-change">+12% ↑</div>
            </Tile>
          </Column>

          <Column lg={4} md={2} sm={4}>
            <Tile className="kpi-card">
              <div className="kpi-header">
                <span className="kpi-title">Collecteurs en service</span>
              </div>
              <div className="kpi-value">28</div>
              <div className="kpi-subtitle">sur 35 actifs</div>
            </Tile>
          </Column>

          <Column lg={4} md={2} sm={4}>
            <Tile className="kpi-card">
              <div className="kpi-header">
                <span className="kpi-title">Tonnes collectées</span>
              </div>
              <div className="kpi-value">145.2</div>
              <div className="kpi-subtitle">Cette semaine</div>
              <div className="kpi-change">+8% ↑</div>
            </Tile>
          </Column>

          {/* Tabs and Data Table */}
          <Column lg={16} md={8} sm={4} className="data-section">
            <div className="table-section">
              <div className="table-header">
                <Tabs selectedIndex={selectedTab} onChange={setSelectedTab}>
                  <TabList>
                    <Tab>Missions du jour</Tab>
                    <Tab>Signalements</Tab>
                    <Tab>Collecteurs</Tab>
                    <Tab>Véhicules</Tab>
                  </TabList>
                </Tabs>
                <Button
                  kind="primary"
                  size="sm"
                  renderIcon={Add}
                  className="new-order-btn"
                >
                  Nouvelle mission
                </Button>
              </div>

              <TabPanels>
                <TabPanel>
                  <DataTable rows={missionsData} headers={headers}>
                    {({
                      rows,
                      headers,
                      getTableProps,
                      getHeaderProps,
                      getRowProps,
                    }) => (
                      <TableContainer>
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
                                  if (cell.info.header === "mission") {
                                    return (
                                      <TableCell key={cell.id}>
                                        <Link href="#">{cell.value}</Link>
                                      </TableCell>
                                    );
                                  }
                                  if (cell.info.header === "statut") {
                                    return (
                                      <TableCell key={cell.id}>
                                        <Tag
                                          type={getStatusColor(cell.value)}
                                          size="sm"
                                        >
                                          {cell.value}
                                        </Tag>
                                      </TableCell>
                                    );
                                  }
                                  if (cell.info.header === "planifie") {
                                    return (
                                      <TableCell key={cell.id}>
                                        <Toggle
                                          id={`toggle-${row.id}`}
                                          size="sm"
                                          toggled={cell.value}
                                          labelA="Non"
                                          labelB="Oui"
                                          hideLabel
                                        />
                                      </TableCell>
                                    );
                                  }
                                  return (
                                    <TableCell key={cell.id}>
                                      {cell.value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    )}
                  </DataTable>
                </TabPanel>
                <TabPanel>
                  <div className="tab-content">
                    <p>
                      12 signalements de dépôts sauvages en attente de traitement
                    </p>
                    <p>5 nouveaux signalements aujourd'hui</p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-content">
                    <p>28 collecteurs actifs sur 35 inscrits</p>
                    <p>Note moyenne des collecteurs: 4.2/5</p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-content">
                    <p>15 véhicules en mission</p>
                    <p>3 véhicules en maintenance</p>
                  </div>
                </TabPanel>
              </TabPanels>
            </div>
          </Column>
        </Grid>
      </div>
    </div>
  );
}
