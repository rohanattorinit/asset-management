import styled from "@emotion/styled";
import { Grid, TextField } from "@mui/material";
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
});

function AdminDashboard() {
  return (
    <>
      <Grid container sx={{ display: "flex" }}>
        <SideBar />
        <Grid item xs={12} md={10}>
          <TextField
            label="search here..."
            sx={{
              width: 500,
              height: 100,
              margin: "2% auto",
              marginLeft: "30%",
            }}
          ></TextField>
          <Grid container justifyContent="space-around" sx={{ marginTop: 12 }}>
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
