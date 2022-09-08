import { Grid, TextField } from "@mui/material";
import React from "react";

import SideBar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <>
      <Grid container sx={{ display: "flex" }}>
        <SideBar />
        <Grid item xs={10.5}>
          <TextField
            label="search here..."
            sx={{
              width: 500,
              height: 100,
              margin: "2% auto",
              marginLeft: "30%",
            }}
          ></TextField>

          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "15.625rem",
              height: "15.25rem",
              border: "0.125rem solid black",
              backgroundColor: "#CBCBCB",
              marginX: 3,
            }}
          >
            {" "}
            Total Assets 500
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
