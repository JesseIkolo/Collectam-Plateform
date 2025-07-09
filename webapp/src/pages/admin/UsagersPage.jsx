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
  TableSelectAll,
  TableSelectRow,
  TableBatchActions,
  TableBatchAction,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Tag,
} from "@carbon/react";
import { Add, Edit, Delete, View, Download, Email } from "@carbon/icons-react";

const headers = [
  { key: "nom", header: "Nom complet" },
  { key: "quartier", header: "Quartier" },
  { key: "telephone", header: "Téléphone" },
  { key: "abonnement", header: "Abonnement" },
  { key: "statut", header: "Statut" },
  { key: "derniere_collecte", header: "Dernière collecte" },
  { key: "actions", header: "Actions" },
];

const usagersData = [
  {
    id: "1",
    nom: "Jean Dupont",
    quartier: "Moungali",
    telephone: "+242 06 123 4567",
    abonnement: "Mensuel",
    statut: "Actif",
    derniere_collecte: "2024-01-15",
  },
  {
    id: "2",
    nom: "Marie Nkounkou",
    quartier: "Bacongo",
    telephone: "+242 06 234 5678",
    abonnement: "Hebdomadaire",
    statut: "Actif",
    derniere_collecte: "2024-01-14",
  },
  {
    id: "3",
    nom: "Paul Moukoko",
    quartier: "Ouenzé",
    telephone: "+242 06 345 6789",
    abonnement: "Ponctuel",
    statut: "Inactif",
    derniere_collecte: "2023-12-20",
  },
  {
    id: "4",
    nom: "Grace Malanda",
    quartier: "Poto-Poto",
    telephone: "+242 06 456 7890",
    abonnement: "Mensuel",
    statut: "Actif",
    derniere_collecte: "2024-01-13",
  },
  {
    id: "5",
    nom: "Robert Tchicaya",
    quartier: "Makélékélé",
    telephone: "+242 06 567 8901",
    abonnement: "Hebdomadaire",
    statut: "Suspendu",
    derniere_collecte: "2024-01-10",
  },
];

const getAbonnementColor = (type) => {
  switch (type) {
    case "Mensuel":
      return "blue";
    case "Hebdomadaire":
      return "green";
    case "Ponctuel":
      return "orange";
    default:
      return "gray";
  }
};

const getStatutColor = (statut) => {
  switch (statut) {
    case "Actif":
      return "green";
    case "Inactif":
      return "gray";
    case "Suspendu":
      return "red";
    default:
      return "gray";
  }
};

export default function UsagersPage() {
  return (
    <div className="page-content" data-loc="src/pages/UsagersPage.jsx:87:9">
      <Grid fullWidth data-loc="src/pages/UsagersPage.jsx:88:15">
        <Column lg={16} md={8} sm={4} className="page-header">
          <div
            className="header-content"
            data-loc="src/pages/UsagersPage.jsx:89:25"
          >
            <div
              className="title-section"
              data-loc="src/pages/UsagersPage.jsx:90:27"
            >
              <h1
                className="page-title"
                data-loc="src/pages/UsagersPage.jsx:91:29"
              >
                Usagers
              </h1>
              <p
                className="page-description"
                data-loc="src/pages/UsagersPage.jsx:95:29"
              >
                Gestion des particuliers et ménages utilisant Nacollect
              </p>
            </div>
            <div
              className="header-actions"
              data-loc="src/pages/UsagersPage.jsx:99:27"
            >
              <Button
                kind="primary"
                renderIcon={Add}
                data-loc="src/pages/UsagersPage.jsx:100:29"
              >
                Nouvel usager
              </Button>
            </div>
          </div>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile
            className="kpi-card"
            data-loc="src/pages/UsagersPage.jsx:109:25"
          >
            <div
              className="kpi-header"
              data-loc="src/pages/UsagersPage.jsx:110:27"
            >
              <span
                className="kpi-title"
                data-loc="src/pages/UsagersPage.jsx:111:29"
              >
                Total usagers
              </span>
            </div>
            <div
              className="kpi-value"
              data-loc="src/pages/UsagersPage.jsx:115:27"
            >
              1,247
            </div>
            <div
              className="kpi-change"
              data-loc="src/pages/UsagersPage.jsx:119:27"
            >
              +23 ↑
            </div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile
            className="kpi-card"
            data-loc="src/pages/UsagersPage.jsx:125:25"
          >
            <div
              className="kpi-header"
              data-loc="src/pages/UsagersPage.jsx:126:27"
            >
              <span
                className="kpi-title"
                data-loc="src/pages/UsagersPage.jsx:127:29"
              >
                Usagers actifs
              </span>
            </div>
            <div
              className="kpi-value"
              data-loc="src/pages/UsagersPage.jsx:131:27"
            >
              1,089
            </div>
            <div
              className="kpi-subtitle"
              data-loc="src/pages/UsagersPage.jsx:135:27"
            >
              87% du total
            </div>
          </Tile>
        </Column>

        <Column lg={4} md={2} sm={4}>
          <Tile
            className="kpi-card"
            data-loc="src/pages/UsagersPage.jsx:141:25"
          >
            <div
              className="kpi-header"
              data-loc="src/pages/UsagersPage.jsx:142:27"
            >
              <span
                className="kpi-title"
                data-loc="src/pages/UsagersPage.jsx:143:29"
              >
                Abonnements mensuels
              </span>
            </div>
            <div
              className="kpi-value"
              data-loc="src/pages/UsagersPage.jsx:147:27"
            >
              743
            </div>
            <div
              className="kpi-change"
              data-loc="src/pages/UsagersPage.jsx:151:27"
            >
              +5% ↑
            </div>
          </Tile>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile
            className="data-table-section"
            data-loc="src/pages/UsagersPage.jsx:185:25"
          >
            <DataTable
              rows={usagersData}
              headers={headers}
              data-loc="src/pages/UsagersPage.jsx:186:27"
              render={({
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getSelectionProps,
                getToolbarProps,
                getBatchActionProps,
                onInputChange,
                selectedRows,
                getTableProps,
                getTableContainerProps,
              }) => {
                const batchActionProps = getBatchActionProps();

                return (
                  <TableContainer
                    title="Gestion des usagers"
                    description="Liste complète des usagers de la plateforme Nacollect"
                    {...getTableContainerProps()}
                    data-loc="src/pages/UsagersPage.jsx:200:19"
                  >
                    <TableToolbar
                      {...getToolbarProps()}
                      data-loc="src/pages/UsagersPage.jsx:206:21"
                    >
                      <TableBatchActions
                        {...batchActionProps}
                        data-loc="src/pages/UsagersPage.jsx:207:23"
                      >
                        <TableBatchAction
                          tabIndex={
                            batchActionProps.shouldShowBatchActions ? 0 : -1
                          }
                          renderIcon={Email}
                          onClick={() =>
                            console.log(
                              "Envoyer notification aux usagers sélectionnés",
                            )
                          }
                          data-loc="src/pages/UsagersPage.jsx:208:25"
                        >
                          Envoyer notification
                        </TableBatchAction>
                        <TableBatchAction
                          tabIndex={
                            batchActionProps.shouldShowBatchActions ? 0 : -1
                          }
                          renderIcon={Download}
                          onClick={() =>
                            console.log("Exporter les usagers sélectionnés")
                          }
                          data-loc="src/pages/UsagersPage.jsx:215:25"
                        >
                          Exporter
                        </TableBatchAction>
                        <TableBatchAction
                          tabIndex={
                            batchActionProps.shouldShowBatchActions ? 0 : -1
                          }
                          renderIcon={Delete}
                          onClick={() =>
                            console.log("Supprimer les usagers sélectionnés")
                          }
                          kind="danger"
                          data-loc="src/pages/UsagersPage.jsx:222:25"
                        >
                          Supprimer
                        </TableBatchAction>
                      </TableBatchActions>
                      <TableToolbarContent
                        aria-hidden={batchActionProps.shouldShowBatchActions}
                        data-loc="src/pages/UsagersPage.jsx:230:23"
                      >
                        <TableToolbarSearch
                          onChange={onInputChange}
                          placeholder="Rechercher un usager..."
                          data-loc="src/pages/UsagersPage.jsx:231:25"
                        />
                        <Button
                          kind="primary"
                          renderIcon={Add}
                          onClick={() => console.log("Ajouter nouvel usager")}
                          data-loc="src/pages/UsagersPage.jsx:236:25"
                        >
                          Nouvel usager
                        </Button>
                      </TableToolbarContent>
                    </TableToolbar>
                    <Table
                      {...getTableProps()}
                      data-loc="src/pages/UsagersPage.jsx:243:21"
                    >
                      <TableHead data-loc="src/pages/UsagersPage.jsx:244:23">
                        <TableRow data-loc="src/pages/UsagersPage.jsx:245:25">
                          <TableSelectAll
                            {...getSelectionProps()}
                            data-loc="src/pages/UsagersPage.jsx:246:27"
                          />
                          {headers.map((header, i) => {
                            const headerProps = getHeaderProps({ header });
                            const { key, ...restHeaderProps } = headerProps;
                            return (
                              <TableHeader
                                key={key || i}
                                {...restHeaderProps}
                                data-loc="src/pages/UsagersPage.jsx:248:29"
                              >
                                {header.header}
                              </TableHeader>
                            );
                          })}
                        </TableRow>
                      </TableHead>
                      <TableBody data-loc="src/pages/UsagersPage.jsx:255:23">
                        {rows.map((row, i) => (
                          <TableRow key={i} {...getRowProps({ row })}>
                            <TableSelectRow {...getSelectionProps({ row })} />
                            {row.cells.map((cell) => {
                              if (cell.info.header === "abonnement") {
                                return (
                                  <TableCell key={cell.id}>
                                    <Tag
                                      type={getAbonnementColor(cell.value)}
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
                              if (cell.info.header === "actions") {
                                return (
                                  <TableCell key={cell.id}>
                                    <Button
                                      kind="ghost"
                                      size="sm"
                                      renderIcon={View}
                                      hasIconOnly
                                      iconDescription="Voir profil"
                                      onClick={() =>
                                        console.log("Voir profil:", row.id)
                                      }
                                    />
                                    <Button
                                      kind="ghost"
                                      size="sm"
                                      renderIcon={Edit}
                                      hasIconOnly
                                      iconDescription="Modifier"
                                      onClick={() =>
                                        console.log("Modifier:", row.id)
                                      }
                                    />
                                    <Button
                                      kind="ghost"
                                      size="sm"
                                      renderIcon={Delete}
                                      hasIconOnly
                                      iconDescription="Supprimer"
                                      onClick={() =>
                                        console.log("Supprimer:", row.id)
                                      }
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
                );
              }}
            />
          </Tile>
        </Column>
      </Grid>
    </div>
  );
}
