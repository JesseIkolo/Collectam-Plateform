import React from "react";
import { Breadcrumb as CarbonBreadcrumb, BreadcrumbItem } from "@carbon/react";
import { useLocation } from "react-router-dom";

const routeNames = {
  "/": "Tableau de bord",
  "/usagers": "Usagers",
  "/collecteurs": "Collecteurs",
  "/missions": "Missions de collecte",
  "/vehicules": "Véhicules",
  "/signalements": "Signalements",
  "/carte": "Carte interactive",
  "/points-collecte": "Points de collecte",
  "/dechets": "Gestion déchets",
  "/notifications": "Notifications",
  "/langues": "Langues",
  "/administration": "Administration",
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumbItems = [{ path: "/", name: "Accueil" }];

  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    if (routeNames[currentPath]) {
      breadcrumbItems.push({
        path: currentPath,
        name: routeNames[currentPath],
      });
    }
  });

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <CarbonBreadcrumb className="custom-breadcrumb">
      {breadcrumbItems.map((item, index) => (
        <BreadcrumbItem
          key={item.path}
          href={index === breadcrumbItems.length - 1 ? undefined : item.path}
          isCurrentPage={index === breadcrumbItems.length - 1}
        >
          {item.name}
        </BreadcrumbItem>
      ))}
    </CarbonBreadcrumb>
  );
}
