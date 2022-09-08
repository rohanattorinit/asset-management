import { Grid, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Box, Paper } from "@mui/material";
import Button from "@mui/material/Button";

export default function Profile() {
  return (
    <Grid container>
      <Sidebar />
      <Grid item xs={10.5}>
        <Box p={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">Profile</Typography>
            <Button variant="contained">Edit</Button>
          </Box>
          <Paper sx={{ display: "flex", padding: 5, marginY: 3 }} elevation={5}>
            <Box sx={{ width: 450, height: 300 }}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Employee ID:<Typography variant="body1">21TCS259</Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Name:<Typography variant="body1">Archana Title</Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Job Title:
                <Typography variant="body1">
                  Associate Software Engineer
                </Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Email:
                <Typography variant="body1">
                  archana.gangurde@toriit.ca
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "white",
              }}
            >
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Phone:<Typography variant="body1">9527864667</Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Location:
                <Typography variant="body1">Pune</Typography>
              </Typography>
            </Box>
          </Paper>
          {/* <h3>profile</h3>
        <Grid container>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "250px",
              height: "244px",
              border: "2px solid black",
              backgroundColor: "#CBCBCB",
              alignContent: "center",
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
          <Grid
            sx={{
              marginLeft: "20px",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Employee ID:{"21TCS259"}</Typography>
            <Typography variant="h6">Name:{"ARCHANA"}</Typography>
            <Typography variant="h6">
              Job Title:{"Associate Software Engineer"}
            </Typography>
            <Typography variant="h6">
              E-mail:{"archana.gangurde@toriit.ca"}
            </Typography>
            <Typography variant="h6">Phone:{"9783125154"}</Typography>
            <Typography variant="h6">Location:{"Pune"}</Typography>
          </Grid>
          <Button variant="contained">Edit</Button>
        </Grid>
       */}
        </Box>
      </Grid>
    </Grid>
  );
}
