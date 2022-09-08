import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  TableHead,
  Box,
} from "@mui/material";

import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";

function Services() {
  return (
    <>
      <Grid container>
        <SideBar />
        <Grid item xs={12} md={10.5} p={3}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField sx={{ width: 300 }} label="search here..."></TextField>
            <FormControl sx={{ width: 300 }}>
              <InputLabel>Category</InputLabel>
              <Select>
                <MenuItem>All</MenuItem>
                <MenuItem>Software</MenuItem>
                <MenuItem>Hardware</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: 300 }}>
              <InputLabel>Status</InputLabel>
              <Select>
                <MenuItem>Inprogress</MenuItem>
                <MenuItem>Active</MenuItem>
                <MenuItem>Completed</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TableContainer style={{ fontSize: "100" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Ticket ID</TableCell>
                  <TableCell align="right">EMP ID</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Ticket Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    1000
                  </TableCell>
                  <TableCell align="right">1000</TableCell>
                  <TableCell align="right">TORNT101</TableCell>
                  <TableCell align="right">Active</TableCell>
                  <TableCell align="right">Usable</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Services;
