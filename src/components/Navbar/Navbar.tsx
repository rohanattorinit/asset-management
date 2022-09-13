import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    user: { name },
  } = useSelector((state: RootStore) => state.login);
  return (
    <Box
      sx={{
        height: "12vh",
        bgcolor: "#011E41",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        component="img"
        alt="logo"
        style={{ marginLeft: "2rem" }}
        src="https://torinit.com/static/media/logo.c2a69a4f.svg"
      />
      <Box display={{ xs: "none", md: "block" }}>
        <Avatar
          sx={{ bgcolor: "#f8fafc", border: "5px solid white", boxShadow: 20 }}
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
          <Typography fontSize={24} color={"#011E41"}>
            {name[0]}
          </Typography>
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
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
