import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function SideBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isAdmin = false;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const MobileNav = () => {
    return (
      <Toolbar>
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          anchor="right"
        >
          {isAdmin ? (
            <List>
              <ListItemButton component={Link} to="/admin/dashboard">
                <ListItemText>Dashboard</ListItemText>
              </ListItemButton>

              <ListItemButton component={Link} to="/admin/employee">
                <ListItemText>Employee</ListItemText>
              </ListItemButton>

              <ListItemButton component={Link} to="/admin/assets">
                <ListItemText>Assets</ListItemText>
              </ListItemButton>
              <ListItemButton component={Link} to="/admin/service">
                <ListItemText>Services</ListItemText>
              </ListItemButton>
            </List>
          ) : (
            <List>
              <ListItemButton component={Link} to="/employee/profile">
                <ListItemText>Profile</ListItemText>
              </ListItemButton>

              <ListItemButton component={Link} to="/employee/asset">
                <ListItemText>Assets</ListItemText>
              </ListItemButton>

              <ListItemButton component={Link} to="/employee/ticket">
                <ListItemText>Ticket</ListItemText>
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
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          height: "88vh",
          bgcolor: "#011E41",
          borderTop: "solid white 2px",
        }}
      >
        {isAdmin ? (
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Button
              sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
              variant="outlined"
              color="secondary"
              component={Link}
              to="/admin/dashboard"
            >
              Dashboard
            </Button>
            <Button
              sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
              variant="outlined"
              color="secondary"
              component={Link}
              to="/admin/employee"
            >
              Employee
            </Button>
            <Button
              sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
              variant="outlined"
              color="secondary"
              component={Link}
              to="/admin/assets"
            >
              Assets
            </Button>
            <Button
              sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
              variant="outlined"
              color="secondary"
              component={Link}
              to="/admin/service"
            >
              Services
            </Button>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Button
              sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
              variant="outlined"
              color="secondary"
              component={Link}
              to="/employee/profile"
            >
              Profile
            </Button>
            <Button
              sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
              variant="outlined"
              color="secondary"
              component={Link}
              to="/employee/asset"
            >
              Asset
            </Button>
            <Button
              sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
              variant="outlined"
              color="secondary"
              component={Link}
              to="/employee/ticket"
            >
              Request
            </Button>
          </Box>
        )}
      </Grid>
    );
  };

  return matches ? <MobileNav /> : <SideNav />;
}
