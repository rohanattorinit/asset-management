import { Box } from "@mui/material";
import React from "react";
export default function Navbar() {
  return (
    <Box
      sx={{
        height: "12vh",
        bgcolor: "#011E41",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        alt="logo"
        style={{ marginLeft: 5 }}
        src="https://torinit.com/static/media/logo.c2a69a4f.svg"
      />
    </Box>
  );
}
