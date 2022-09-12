import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, styled } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";

const StlyedGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "244px",
  border: "2px solid black",
  backgroundColor: "#CBCBCB",
  cursor: "pointer",
});

export default function Dashboard() {
  let navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h3" textAlign="center">
        Dashboard
      </Typography>
      <Grid container justifyContent="space-around" sx={{ marginTop: 12 }}>
        <StlyedGrid item onClick={() => navigate("/profile")}>
          <PersonIcon
            color="primary"
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </StlyedGrid>

        <StlyedGrid item onClick={() => navigate("/asset")}>
          <WebAssetIcon
            color="primary"
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </StlyedGrid>

        <StlyedGrid item onClick={() => navigate("/ticket")}>
          <DeviceUnknownIcon
            color="primary"
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </StlyedGrid>
      </Grid>
    </Box>
  );
}
