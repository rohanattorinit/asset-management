import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";

function EmpList() {
  return (
    <>
      <Grid container>
        <SideBar />
        <Grid item xs={12} md={10}>
          <Box m={3} sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="search here..."
              sx={{
                width: 300,
                height: 100,
              }}
            >
              {/* <Grid item> */}
            </TextField>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: 300, height: 50 }}
            >
              Add new Employee
            </Button>
          </Box>
          <Typography variant="h5" align="center">
            Employee List
          </Typography>
          <Box mx={20}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography align="center">Employee ID</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography align="center">Name</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography align="center">Email</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography align="center">Contact No.</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography align="center">Location</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      100
                    </TableCell>
                    <TableCell align="center">john@torinit.ca</TableCell>
                    <TableCell align="center">John Markel</TableCell>
                    <TableCell align="center">9000000000</TableCell>
                    <TableCell align="center">Pune</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      100
                    </TableCell>
                    <TableCell align="center">John Markel</TableCell>
                    <TableCell align="center">john@torinit.ca</TableCell>
                    <TableCell align="center">9000000000</TableCell>
                    <TableCell align="center">Pune</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default EmpList;
