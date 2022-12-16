import { Box, Button, Divider, useMediaQuery, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../redux/actions/AuthAction";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { SideNavGrid } from "../Styled/StyledComponent";

import { Dispatch, useState } from "react";

export default function SideBar() {
  const {
    user: { isAdmin },
  } = useSelector((state: RootStore) => state.login);
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch: Dispatch<any> = useDispatch();

  const adminTabs = [
    { name: "Dashboard", path: "/" },
    { name: "Employee", path: "/admin/employee" },
    { name: "Assets", path: "/admin/assets" },
    { name: "Services", path: "/admin/service" },
  ];

  const empTabs = [
    { name: "Profile", path: "/profile" },
    { name: "Asset", path: "/asset" },
    { name: "Requests", path: "/ticket" },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const MobileNav = () => {
    return (
      <Toolbar sx={{ zIndex: 2000, minHeight: matches ? 0 : 7 }}>
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          anchor="right"
        >
          {isAdmin ? (
            <List>
              <ListItemButton role="button" component={Link} to="/">
                <ListItemText>Dashboard</ListItemText>
              </ListItemButton>
              <ListItemButton
                role="button"
                component={Link}
                to="/admin/employee"
              >
                <ListItemText>Employee</ListItemText>
              </ListItemButton>
              <ListItemButton role="button" component={Link} to="/admin/assets">
                <ListItemText>Assets</ListItemText>
              </ListItemButton>
              <ListItemButton
                role="button"
                component={Link}
                to="/admin/service"
              >
                <ListItemText>Services</ListItemText>
              </ListItemButton>

              <ListItemButton onClick={handleLogout}>
                <ListItemText>Logout</ListItemText>
              </ListItemButton>
            </List>
          ) : (
            <List>
              <ListItemButton component={Link} to="/profile">
                <ListItemText>Profile</ListItemText>
              </ListItemButton>

              <ListItemButton component={Link} to="/asset">
                <ListItemText>Assets</ListItemText>
              </ListItemButton>

              <ListItemButton component={Link} to="/ticket">
                <ListItemText>Ticket</ListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton onClick={handleLogout}>
                <ListItemText>Logout</ListItemText>
              </ListItemButton>
            </List>
          )}
        </Drawer>
        <IconButton
          size="large"
          sx={{ position: "fixed", right: 10, top: 30, color: "white" }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    );
  };

  const SideNav = () => {
    return (
      <SideNavGrid
        item
        xs={12}
        md={2}
        sx={{
          bgcolor: "#011E41",
          borderTop: "solid white 2px",
          // position: "sticky",
          top: 0,
        }}
      >
        {isAdmin ? (
          <Box
            display="flex"
            flexDirection="column"
            // justifyContent="center"
            height="86.1vh"
          >
            {adminTabs?.map((adminTab) => (
              <Button
                sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
                variant="outlined"
                color="secondary"
                component={Link}
                to={adminTab.path}
              >
                {adminTab.name}
              </Button>
            ))}
          </Box>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            // justifyContent="center"
            height="86.5vh"
          >
            {empTabs.map((empTab) => (
              <Button
                key={empTab.path}
                sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
                variant="outlined"
                color="secondary"
                component={Link}
                to={empTab.path}
              >
                {empTab.name}
              </Button>
            ))}
          </Box>
        )}
      </SideNavGrid>
    );
  };

  return matches ? <MobileNav /> : <SideNav />;
}
