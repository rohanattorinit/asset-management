import { Grid, Typography } from "@mui/material";
import React, { Dispatch, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Box, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import {
  getEmployee,
  updateEmployeeDetails,
} from "../../redux/actions/EmployeeActions";

interface UpdateType {
  name?: string;
  email?: string;
  phone?: number;
  location?: string;
  jobTitle?: string;
}

export default function Profile() {
  const {
    login: { user },
    employee: { employee, message },
  } = useSelector((state: RootStore) => state);

  const [updateData, setUpdateData] = useState<UpdateType>({
    name: employee.name,
    email: employee.email,
    phone: employee.phone,
    location: employee.location,
    jobTitle: employee.jobTitle,
  });
  const [open, setOpen] = useState(false);

  const dispatch: Dispatch<any> = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateEmployeeDetails(employee.empId, updateData));
    handleClose();
  };

  useEffect(() => {
    dispatch(getEmployee(user.empId));
    if (message) alert(message);
  }, [dispatch, user.empId, message]);

  useEffect(() => {
    setUpdateData({
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      location: employee.location,
      jobTitle: employee.jobTitle,
    });
  }, [employee]);

  return (
    <Grid container>
      <Sidebar />
      <Grid item xs={12} md={10} p={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Profile</Typography>
          <Box display="flex">
            <Button variant="outlined" onClick={handleClickOpen}>
              Edit
            </Button>
            <Button sx={{ ml: 1 }} variant="outlined" onClick={handleClickOpen}>
              Change Password
            </Button>
          </Box>
        </Box>
        <Paper sx={{ display: "flex", padding: 5, marginY: 3 }} elevation={5}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >

                <Typography variant="body1">{employee.empId}</Typography>

              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"

                Name:<Typography variant="body1">{employee.name}</Typography>


              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Job Title:

                <Typography variant="body1">{employee.jobTitle}</Typography>

              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Email:

                <Typography variant="body1">{employee.email}</Typography>

              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >

                Phone:<Typography variant="body1">{employee.phone}</Typography>

              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Location:

                <Typography variant="body1">{employee.location}</Typography>

              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Edit Deatils</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="name"
              required
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              value={updateData.name}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="jobTitle"
              required
              label="Job Title"
              type="text"
              fullWidth
              variant="outlined"
              value={updateData?.jobTitle}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="email"
              required
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={updateData?.email}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="phone"
              required
              label="Phone"
              type="tel"
              fullWidth
              variant="outlined"
              value={updateData?.phone}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="location"
              required
              label="Location"
              type="text"
              fullWidth
              variant="outlined"
              value={updateData?.location}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}

