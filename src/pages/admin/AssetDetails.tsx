import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SideBar from "../../components/Sidebar/Sidebar";

function AssetDetails() {
  const [open, setOpen] = useState(false);
  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Grid item xs={12} md={10} p={2} sx={{ overflowX: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Asset Details</Typography>
          <Box display="flex">
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Edit
            </Button>
          </Box>
        </Box>
        <Paper sx={{ display: "flex", padding: 1 }} elevation={3}>
          <Grid container m={2}>
            <Grid item xs={12} md={4}>
              <Typography fontFamily="serif" fontWeight="bold" variant="h6">
                {" "}
                Asset ID :
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Asset Name:
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Model No:
              </Typography>

              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Usability :
              </Typography>

              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Status :
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Description :
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Emp Id :
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Emp Name :
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AssetDetails;
