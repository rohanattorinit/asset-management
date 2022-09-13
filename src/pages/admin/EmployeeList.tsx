import {
  Box,
  Breadcrumbs,
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
  Link,
} from "@mui/material";
import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";

function EmployeeList() {
  return (
    <>
      <Grid container>
        <SideBar />

        <Grid item xs={12} md={10} p={3}>
          <Box marginY={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="#">
                Employee
              </Link>
              <Link underline="hover" color="inherit" href="#">
                Employee details
              </Link>
            </Breadcrumbs>{" "}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextField label="search here..."></TextField>
            <Button variant="outlined" color="primary">
              Add new Employee
            </Button>
          </Box>

          <Box my={3}>
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

export default EmployeeList;
