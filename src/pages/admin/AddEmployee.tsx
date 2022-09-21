import {
  Grid,
  Card,
  styled,
  TextField,
  Divider,
  Box,
  Button,
} from "@mui/material";

import SideBar from "../../components/Sidebar/Sidebar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { DragAndDrop } from "../../components/DragAndDrop/DragAndDrop";

import { Dispatch, useState } from "react";

import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/actions/AdminActions";
import { useNavigate } from "react-router-dom";

export const AddEmployee = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [employeeDetails, setEmployeeDetails] = useState({
    empId: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    jobTitle: "",
  });
  let navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addEmployee(employeeDetails));
    setEmployeeDetails({
      empId: "",
      name: "",
      email: "",
      phone: "",
      location: "",
      jobTitle: "",
    });
    navigate(`/admin/employee`);
  };

  const StyledTypography = styled(Typography)({
    fontWeight: "bold",
    fontSize: "1.25rem",
    margin: "10px",
  });

  return (
    <Grid container sx={{ bgcolor: "#f1f5f9" }}>
      <SideBar />
      <Grid
        item
        xs={12}
        md={10}
        p={3}
        sx={{ height: "88vh", overflowX: "auto" }}
      >
        <Box>
          <Card
            sx={{
              my: 2,
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <StyledTypography>Create Employee :</StyledTypography>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="Employee ID"
                        variant="outlined"
                        name="empId"
                        value={employeeDetails.empId}
                        onChange={handleChange}
                      />
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        name="name"
                        value={employeeDetails.name}
                        onChange={handleChange}
                      />
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        name="email"
                        value={employeeDetails.email}
                        onChange={handleChange}
                      />
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="Job Title"
                        variant="outlined"
                        name="jobTitle"
                        value={employeeDetails.jobTitle}
                        onChange={handleChange}
                      />
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                        name="location"
                        value={employeeDetails.location}
                        onChange={handleChange}
                      />
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="Phone No"
                        variant="outlined"
                        inputProps={{ minlength: 10, maxLength: 10 }}
                        name="phone"
                        value={employeeDetails.phone}
                        onChange={handleChange}
                      />
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                          color="info"
                          size="large"
                          type="submit"
                          variant="outlined"
                        >
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Divider orientation="vertical" />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={5}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginY: "6rem" }}
                  >
                    <DragAndDrop />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};
