import { Box, Button, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { logout } from "../../redux/actions/AuthAction";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
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
              <ListItemButton component={Link} to="/">
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
              {/* <ListItemButton component={Link} to="/">
                <ListItemText>logout</ListItemText>
              </ListItemButton> */}

              <ListItemButton onClick={handleLogout}>
                <ListItemText>logout</ListItemText>
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
        }}
      >
        {isAdmin ? (
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Button
              sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
              variant="outlined"
              color="secondary"
              component={Link}
              to="/"
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
              to="/profile"
            >
              Profile
            </Button>
            <Button
              sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
              variant="outlined"
              color="secondary"
              component={Link}
              to="/asset"
            >
              Asset
            </Button>
            <Button
              sx={{ marginY: 2, marginX: 2, fontSize: "20px" }}
              variant="outlined"
              color="secondary"
              component={Link}
              to="/ticket"
            >
              Requests
            </Button>
          </Box>
        )}
      </SideNavGrid>
    );
  };

  return matches ? <MobileNav /> : <SideNav />;
}
