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
  margin: 5,
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
          <Grid container justifyContent="center" marginY={5}>
            <StlyedGrid> Total Assets</StlyedGrid>
            <StlyedGrid> Total Employees</StlyedGrid>
            <StlyedGrid> Broken Assets</StlyedGrid>
            <StlyedGrid> Working Assets</StlyedGrid>
            <StlyedGrid> Spare Assets</StlyedGrid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AdminDashboard;
