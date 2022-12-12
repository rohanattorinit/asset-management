import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useState, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/AuthAction";
import { RootStore } from "../../redux/store";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const open = Boolean(anchorEl);
  const dispatch: Dispatch<any> = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
    navigate("/");
  };

  const { authenticated, user } = useSelector(
    (state: RootStore) => state.login
  );

  return (
    <Box
      sx={{
        bgcolor: "#011E41",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        // right: 0,
        zIndex: 1000,
        mb: "0.3px",
        // width: "100%",
      }}
    >
      <Box
        role="logo"
        component="img"
        alt="logo"
        sx={{ marginLeft: "2rem", marginY: "1.5rem", cursor: "pointer" }}
        src="https://torinit.com/static/media/logo.c2a69a4f.svg"
        onClick={() => {
          navigate(`/`);
        }}
      />

      {authenticated && (
        <Box display={{ xs: "none", md: "block" }}>
          <Avatar
            sx={{
              bgcolor: "#f8fafc",
              border: "8px solid white",
              cursor: "pointer",
            }}
            alt="User"
            src="/broken-image.jpg"
            style={{ marginRight: "2rem" }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
            }}
          >
            {user?.name && (
              <Typography fontSize={24} color={"#011E41"}>
                {user?.name[0]}
              </Typography>
            )}
          </Avatar>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
}
