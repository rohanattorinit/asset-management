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
        <Grid item xs={10.5}>
          <TextField
            label="search here..."
            sx={{
              width: 300,
              height: 100,
              margin: "2% auto",
              marginLeft: "5%",
            }}
          >
            {/* <Grid item> */}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 300, height: 50, marginLeft: "50%", marginTop: "2%" }}
          >
            Add new Employee
          </Button>

          <Typography variant="h5" align="center">
            Employee List
          </Typography>
          <Box>
            <TableContainer sx={{ marginY: 3 }} component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Employee ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      100
                    </TableCell>
                    <TableCell align="right">John Markel</TableCell>
                    <TableCell align="right">john@torinit.ca</TableCell>
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
