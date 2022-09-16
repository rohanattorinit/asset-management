import {
  Box,
  Button,
  Grid,
  IconButton,
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
import { Dispatch, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/Sidebar/Sidebar";
import {
  getEmployeetDetails,
  getAssetDetails,
  getEmployees,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
//import { blue, lightBlue } from "@mui/material/colors";

function EmpList() {
  const dispatch: Dispatch<any> = useDispatch();
  let navigate = useNavigate();

  const { employees } = useSelector((state: RootStore) => state.admin);

  const setEmployeeDetails = (empId: string) => {
    dispatch(getEmployeetDetails(empId));
    dispatch(getAssetDetails(empId));
    navigate(`/admin/employee/${empId}`);
  };

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const [search, setSearch] = useState("");
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredEmployee = employees.filter((employee) => {
    if (search.length === 0) return employee;
    return employee.name.toLowerCase().startsWith(search.toLowerCase());
  });

  return (
    <>
      <Grid container>
        <SideBar />

        <Grid
          item
          xs={12}
          md={10}
          p={3}
          sx={{ height: "88vh", overflowX: "auto" }}
        >
          <Box marginY={2}></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextField
              label="search here by name..."
              onChange={handleChange}
              value={search}
            ></TextField>

            <Button
              variant="outlined"
              color="primary"
              component={Link}
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
                  {filteredEmployee.map((employee) => (
                    <TableRow key={employee.empId}>
                      <TableCell component="th" scope="row">
                        {employee.empId}
                      </TableCell>
                      <TableCell align="center">{employee.name}</TableCell>
                      <TableCell align="center">{employee.email}</TableCell>
                      <TableCell align="center">{employee.phone}</TableCell>
                      <TableCell align="center">{employee.location}</TableCell>
                      <IconButton
                        onClick={() => setEmployeeDetails(employee.empId)}
                      >
                        <OpenInNewIcon sx={{ color: "darkblue" }} />
                      </IconButton>
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
