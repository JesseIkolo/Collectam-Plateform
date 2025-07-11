import React from "react";
import {
  Content,
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from "@carbon/react";
import { useNavigate, Outlet } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import {
  Switcher as SwitcherIcon,
  Notification,
  Search,
  User,
  Task,
  NotificationNew,
  DeliveryTruck,
  Location,
  Report,
  UserFollow,
  Language,
  Settings,
  Logout,
  Dashboard,
  Map,
  TrashCan,
  UserMultiple,
  Recycle,
} from "@carbon/icons-react";
import "./Layout.scss";

export default function Layout({ children }) {
  const navigate = useNavigate();

  // Keep side nav expanded on large screens
  const [isLargeScreen, setIsLargeScreen] = React.useState(
    window.innerWidth > 960,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => {
        // Force expanded on large screens
        const shouldExpandSideNav = isLargeScreen ? true : isSideNavExpanded;

        return (
          <>
            <Header aria-label="Carbon Dashboard">
              <SkipToContent />
              <HeaderMenuButton
                aria-label={shouldExpandSideNav ? "Close menu" : "Open menu"}
                onClick={isLargeScreen ? undefined : onClickSideNavExpand}
                isActive={shouldExpandSideNav}
                aria-expanded={shouldExpandSideNav}
                style={{ display: isLargeScreen ? "none" : "flex" }}
              />
              <HeaderName href="#" prefix="Carbon">
                Dashboard
              </HeaderName>
              <HeaderNavigation aria-label="Carbon Dashboard">
                <HeaderMenuItem onClick={() => navigate("/")}>
                  Home
                </HeaderMenuItem>
                <HeaderMenu aria-label="Products" menuLinkName="Products">
                  <HeaderMenuItem
                    onClick={() => navigate("/products/inventory")}
                  >
                    Inventory
                  </HeaderMenuItem>
                  <HeaderMenuItem onClick={() => navigate("/products/orders")}>
                    Orders
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    onClick={() => navigate("/products/suppliers")}
                  >
                    Suppliers
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    onClick={() => navigate("/products/analytics")}
                  >
                    Analytics
                  </HeaderMenuItem>
                </HeaderMenu>
                <HeaderMenu
                  aria-label="Supply Chain"
                  menuLinkName="Supply Chain"
                >
                  <HeaderMenuItem onClick={() => navigate("/supply/shipments")}>
                    Shipments
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    onClick={() => navigate("/supply/warehouses")}
                  >
                    Warehouses
                  </HeaderMenuItem>
                  <HeaderMenuItem onClick={() => navigate("/supply/tracking")}>
                    Tracking
                  </HeaderMenuItem>
                </HeaderMenu>
                <HeaderMenuItem onClick={() => navigate("/about")}>
                  About
                </HeaderMenuItem>
                <HeaderMenu aria-label="More" menuLinkName="More">
                  <HeaderMenuItem
                    href="https://carbondesignsystem.com/"
                    target="_blank"
                  >
                    Carbon Docs
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    href="https://github.com/carbon-design-system/carbon"
                    target="_blank"
                  >
                    GitHub
                  </HeaderMenuItem>
                </HeaderMenu>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search">
                  <Search size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Notifications">
                  <Notification size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  tooltipAlignment="end"
                >
                  <SwitcherIcon size={20} />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={shouldExpandSideNav}
                onSideNavBlur={isLargeScreen ? undefined : onClickSideNavExpand}
                href="#main-content"
                isPersistent={isLargeScreen}
                isRail={false}
              >
                <SideNavItems>
                  {/* Section principale - Fonctionnalités */}
                  <SideNavLink
                    onClick={() => navigate("/admin")}
                    renderIcon={Dashboard}
                  >
                    Tableau de bord
                  </SideNavLink>
                  <SideNavLink
                    onClick={() => navigate("/admin/usagers")}
                    renderIcon={UserMultiple}
                  >
                    Usagers
                  </SideNavLink>
                  <SideNavLink
                    onClick={() => navigate("/admin/collecteurs")}
                    renderIcon={User}
                  >
                    Collecteurs
                  </SideNavLink>
                  <SideNavLink
                    onClick={() => navigate("/admin/missions")}
                    renderIcon={Task}
                  >
                    Missions de collecte
                  </SideNavLink>
                  <SideNavLink
                    onClick={() => navigate("/admin/vehicules")}
                    renderIcon={DeliveryTruck}
                  >
                    Véhicules
                  </SideNavLink>
                  <SideNavLink
                    onClick={() => navigate("/admin/signalements")}
                    renderIcon={Report}
                  >
                    Signalements
                  </SideNavLink>
                  <SideNavLink
                    onClick={() => navigate("/admin/carte")}
                    renderIcon={Map}
                  >
                    Carte interactive
                  </SideNavLink>
                  <SideNavLink
                    onClick={() => navigate("/admin/points-collecte")}
                    renderIcon={Location}
                  >
                    Points de collecte
                  </SideNavLink>
                  <SideNavLink
                    onClick={() => navigate("/admin/dechets")}
                    renderIcon={TrashCan}
                  >
                    Gestion déchets
                  </SideNavLink>
                  <SideNavLink
                    onClick={() => navigate("/admin/notifications")}
                    renderIcon={NotificationNew}
                  >
                    Notifications
                  </SideNavLink>

                  {/* Séparateur */}
                  <HeaderSideNavItems hasDivider></HeaderSideNavItems>

                  {/* Section du bas - Paramètres et administration */}
                  <SideNavLink
                    onClick={() => navigate("/admin/langues")}
                    renderIcon={Language}
                  >
                    Langues
                  </SideNavLink>
                  <SideNavLink
                    onClick={() => navigate("/admin/administration")}
                    renderIcon={Settings}
                  >
                    Administration
                  </SideNavLink>
                  <SideNavLink
                    onClick={async () => {
                      try {
                        await fetch("/api/auth/logout", {
                          method: "POST",
                          credentials: "include"
                        });
                      } catch (e) {}
                      window.location.href = "/login";
                    }}
                    renderIcon={Logout}
                  >
                    Déconnexion
                  </SideNavLink>
                </SideNavItems>
              </SideNav>
            </Header>
            <Content
              id="main-content"
              className="cds--content"
              style={{
                minHeight: "100vh",
                background: "#f4f4f4",
                marginLeft:
                  isLargeScreen && shouldExpandSideNav ? "256px" : "0",
                transition: "margin-left 0.11s ease",
              }}
            >
              <div style={{ padding: "1rem 2rem 0" }}>
                <Breadcrumb />
              </div>
              <Outlet />
            </Content>
          </>
        );
      }}
    />
  );
}
