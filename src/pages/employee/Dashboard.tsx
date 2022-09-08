import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h3" textAlign="center">
        Dashboard
      </Typography>
      <Grid container justifyContent="space-around" sx={{ marginTop: 12 }}>
        <Button component={Link} to="/employee/profile">
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "250px",
              height: "244px",
              border: "2px solid black",
              backgroundColor: "#CBCBCB",
            }}
          >
            <PersonIcon
              sx={{
                width: 100,
                height: 100,
                marginTop: 7,
              }}
            ></PersonIcon>
          </Grid>
        </Button>
        <Button component={Link} to="/employee/asset">
          <Grid
            item
            sx={{
              width: "250px",
              height: "244px",
              border: "2px solid black",
              backgroundColor: "#CBCBCB",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <WebAssetIcon
              sx={{
                width: 100,
                height: 100,
                marginTop: 7,
              }}
            ></WebAssetIcon>
          </Grid>
        </Button>
        <Button component={Link} to="/employee/ticket">
          <Grid
            item
            sx={{
              width: "250px",
              height: "244px",
              border: "2px solid black",
              backgroundColor: "#CBCBCB",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DeviceUnknownIcon
              sx={{
                width: 100,
                height: 100,
                marginTop: 7,
              }}
            ></DeviceUnknownIcon>
          </Grid>
        </Button>
      </Grid>
    </Box>
  );
}
