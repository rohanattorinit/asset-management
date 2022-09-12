import {
  Grid,
  Tab,
  Tabs,
  Button,
  TableCell,
  TableContainer,
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Breadcrumbs,
  Link,
} from "@mui/material";
import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";
function Assets() {
  return (
    <Grid container>
      <SideBar />
      <Grid item xs={12} md={10} p={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Assets
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Hardware
            </Link>
          </Breadcrumbs>
          <Button variant="outlined" color="primary">
            Add new Asset
          </Button>
        </Box>

        <Box marginY={2}>
          <Tabs variant="fullWidth" sx={{ background: "grey" }}>
            <Tab sx={{ fontSize: "1.1rem" }} label="Hardware"></Tab>
            <Tab sx={{ fontSize: "1.1rem" }} label="Software"></Tab>
          </Tabs>
        </Box>
        <Box>
          <TableContainer sx={{ marginY: 3 }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Serial No.</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Usability</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    100
                  </TableCell>
                  <TableCell align="right">13425</TableCell>
                  <TableCell align="right">Windows 10</TableCell>
                  <TableCell align="right">Allocated</TableCell>
                  <TableCell align="right">Usable</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Assets;
