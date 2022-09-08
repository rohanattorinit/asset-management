import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <Grid item xs={1.5} sx={{ height: "88vh", bgcolor: "#2f2fa2" }}>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Button
          sx={{ marginY: 2, fontSize: "20px", color: "white" }}
          variant="text"
          component={Link}
          to="/employee/profile"
        >
          Profile
        </Button>
        <Button
          sx={{ marginY: 2, fontSize: "20px", color: "white" }}
          component={Link}
          to="/employee/asset"
        >
          Asset
        </Button>
        <Button
          sx={{ marginY: 2, fontSize: "20px", color: "white" }}
          component={Link}
          to="/employee/ticket"
        >
          Request
        </Button>
      </Box>
    </Grid>
  );
}
