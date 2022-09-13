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
import React, { Dispatch, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import SideBar from "../../components/Sidebar/Sidebar";
import { getEmployees } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

function EmpList() {
  const dispatch: Dispatch<any> = useDispatch();

  const { employees } = useSelector((state: RootStore) => state.admin);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <>
      <Grid container>
        <SideBar />

        <Grid item xs={12} md={10} p={3}>
          <Box marginY={2}></Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField label="search here..."></TextField>
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/admin/employee/create"
            >
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
                  {employees.map((employee) => (
                    <TableRow key={employee.empId}>
                      <TableCell component="th" scope="row">
                        {employee.empId}
                      </TableCell>
                      <TableCell align="center">{employee.name}</TableCell>
                      <TableCell align="center">{employee.email}</TableCell>
                      <TableCell align="center">{employee.phone}</TableCell>
                      <TableCell align="center">{employee.location}</TableCell>
                    </TableRow>
                  ))}
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
