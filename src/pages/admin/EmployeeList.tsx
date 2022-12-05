import {
  Box,
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Dispatch, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/Sidebar/Sidebar";
import {
  getEmployeeDetails,
  getEmployees,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Toast from "../../components/ErrorHandling/Toast";
import { useDebouncedCallback } from "use-debounce";
import Loader from "../../components/Loader/Loader";
import CountUp from "react-countup";
import { bgcolor } from "@mui/system";
function EmpList() {
  const [search, setSearch] = useState("");
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (search) => {
      setSearch(search);
    },
    // delay in ms
    300
  );

  const { employees, message, loading } = useSelector(
    (state: RootStore) => state.admin
  );

  const setEmployeeDetails = (empId: string) => {
    dispatch(getEmployeeDetails(empId));
    navigate(`/admin/employee/${empId}`);
  };

  useEffect(() => {
    dispatch(getEmployees({ name: search }));
  }, [dispatch, search, message]);

  return (
    <>
      <Grid container sx={{height:"100%"}} >
        <SideBar />
        <Toast />
        <Grid item xs={12} md={10} p={3} sx={{ overflowX: "auto" }}>
          
          <Grid container sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
             
            }}
          >
           
<Grid item>
           
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  p: 1,
                  borderRadius: 1,
                }}
              >
                Active Employees :
                <CountUp
                  end={employees?.filter((emp) => emp.is_active).length}
                  duration={2}
                />
              </Typography>
            
            </Grid>
            <Grid item>
            <TextField
              label="search by name..."
              onChange={(e) => debounced(e?.target?.value)}
              fullWidth
            ></TextField>
            </Grid>
<Grid item>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/admin/employee/create"
            >
              Add new Employee
            </Button>
          </Grid>
          </Grid>

          <Box my={3}>
            {loading ? (
              <Loader />
            ) : (
              <TableContainer>
                {employees.length ? (
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography
                            align="center"
                            sx={{ fontWeight: "bold" }}
                          >
                            Employee ID
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            align="center"
                            sx={{ fontWeight: "bold" }}
                          >
                            Name
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            align="center"
                            sx={{ fontWeight: "bold" }}
                          >
                            Email
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            align="center"
                            sx={{ fontWeight: "bold" }}
                          >
                            Contact No.
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            align="center"
                            sx={{ fontWeight: "bold" }}
                          >
                            Location
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            align="center"
                            sx={{ fontWeight: "bold" }}
                          >
                            Details
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {employees?.map((employee) => (
                        <TableRow
                          key={employee?.empId}
                          sx={{
                            background: !employee?.is_active ? "lightgrey" : "",
                          }}
                        >
                          <TableCell align="center" component="th" scope="row">
                            {employee?.empId}
                          </TableCell>
                          <TableCell align="center">
                            {employee?.name.toUpperCase()}
                          </TableCell>
                          <TableCell align="center">
                            {employee?.email}
                          </TableCell>
                          <TableCell align="center">
                            {employee?.phone}
                          </TableCell>
                          <TableCell align="center">
                            {employee?.location.toUpperCase()}
                          </TableCell>
                          <TableCell align="center">
                            <Tooltip
                              title={
                                !employee?.is_active
                                  ? "Deleted Employee"
                                  : "Employee Details"
                              }
                              children={
                                <IconButton
                                  onClick={() =>
                                    setEmployeeDetails(employee?.empId)
                                  }
                                >
                                  <OpenInNewIcon
                                    sx={{
                                      color: !employee?.is_active
                                        ? "red"
                                        : "darkblue",
                                    }}
                                  />
                                </IconButton>
                              }
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <Typography textAlign={"center"}>
                    No Employees found!
                  </Typography>
                )}
              </TableContainer>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default EmpList;
