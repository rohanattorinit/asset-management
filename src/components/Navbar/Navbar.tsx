import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <Box sx={{ height: "12vh", bgcolor: "#0369A1 " }}>
      <Box
        component="img"
        sx={{
          height: 60,
          marginY: 2,
          marginX: 1,
          width: 231,
        }}
        alt="1.png"
        src={logo}
      />
      <Typography textAlign="center" variant="h6"></Typography>
    </Box>
  );
}
