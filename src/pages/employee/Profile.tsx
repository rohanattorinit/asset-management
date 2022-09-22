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
  changePassword,
  getEmployee,
  updateEmployeeDetails,
} from "../../redux/actions/EmployeeActions";

interface UpdateType {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  jobTitle?: string;
}
interface NewPasswordType {
  password?: string;
  confirmPassword?: string;
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
  const [password, setPassword] = useState<NewPasswordType>();
  const [open, setOpen] = useState(false);
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);

  const dispatch: Dispatch<any> = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateEmployeeDetails(employee.empId, updateData));
    setOpen(false);
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changePassword(employee.empId, password?.password!));
    setOpenPasswordDialog(false);
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
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Edit
            </Button>
            <Button
              sx={{ ml: 1 }}
              variant="outlined"
              onClick={() => setOpenPasswordDialog(true)}
            >
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
                EmpId:
                <Typography variant="body1">{employee.empId}</Typography>
              </Typography>
              <Typography
                mt={2}
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
              >
                Name:
                <Typography
                  variant="body1"
                  sx={{ textTransform: "capitalize" }}
                >
                  {employee.name}
                </Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Job Title:
                <Typography
                  variant="body1"
                  sx={{ textTransform: "capitalize" }}
                >
                  {employee.jobTitle}
                </Typography>
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
                <Typography
                  variant="body1"
                  sx={{ textTransform: "capitalize" }}
                >
                  {employee.location}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Edit Details</DialogTitle>
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

      {/* Chnage password dialog */}
      <Dialog
        open={openPasswordDialog}
        onClose={() => setOpenPasswordDialog(false)}
      >
        <form onSubmit={handlePasswordSubmit}>
          <DialogTitle>Change Password</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="password"
              required
              label="New Password"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handlePasswordChange}
            />
            <TextField
              margin="dense"
              name="confirmPassword"
              required
              label="Confirm New Password"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handlePasswordChange}
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
