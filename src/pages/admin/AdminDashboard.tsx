import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import React from "react";

import SideBar from "../../components/Sidebar/Sidebar";

const StlyedGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "244px",
  border: "2px solid black",
  backgroundColor: "#CBCBCB",
  cursor: "pointer",
  margin: "10px",
  borderRadius: "10px",
});

function AdminDashboard() {
  return (
    <>
      <Grid container>
        <SideBar />
        <Grid item xs={12} md={10}>
          <Typography variant="h3" textAlign="center" marginY={5}>
            {" "}
            Dashboard{" "}
          </Typography>
<<<<<<< HEAD
          <Grid container justifyContent="center" marginY={5}>
            <StlyedGrid> Total Assets</StlyedGrid>
            <StlyedGrid> Total Employees</StlyedGrid>
            <StlyedGrid> Broken Assets</StlyedGrid>
            <StlyedGrid> Working Assets</StlyedGrid>
            <StlyedGrid> Spare Assets</StlyedGrid>
=======
          <Grid container justifyContent="center">
            <StlyedGrid>
              <Typography variant="h5" color="primary">
                {" "}
                Total Assets
              </Typography>{" "}
            </StlyedGrid>
            <StlyedGrid>
              <Typography variant="h5" color="primary">
                {" "}
                Total Employees
              </Typography>{" "}
            </StlyedGrid>
            <StlyedGrid>
              <Typography variant="h5" color="primary">
                {" "}
                Broken Assets
              </Typography>{" "}
            </StlyedGrid>
            <StlyedGrid>
              <Typography variant="h5" color="primary">
                {" "}
                Working Assets
              </Typography>
            </StlyedGrid>
            <StlyedGrid>
              <Typography variant="h5" color="primary">
                {" "}
                Spare Assets
              </Typography>{" "}
            </StlyedGrid>
>>>>>>> main
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AdminDashboard;
