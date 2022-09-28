import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React, { Dispatch, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  Box,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import {
  changePassword,
  updateEmployeeDetails,
} from "../../redux/actions/EmployeeActions";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getUserProfile } from "../../redux/actions/AuthAction";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const re = /^[A-Z/a-z/ \b]+$/;
let validationSchema = Yup?.object()?.shape({
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "to short")
    .max(10, "to long")
    .required("Required"),
  location: Yup?.string()
    .matches(re, "Location can have letters only!")
    .required("Required"),
  name: Yup?.string()
    .matches(re, "Name can have letters only!")
    .required("Please enter valid name")
    .nullable(),
});
interface NewPasswordType {
  password?: string;
  confirmPassword?: string;
}
export default function Profile() {
  const {
    login: { user },
    employee: { message },
  } = useSelector((state: RootStore) => state);
  const [password, setPassword] = useState<NewPasswordType>();
  const [open, setOpen] = useState(false);
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const dispatch: Dispatch<any> = useDispatch();
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (password?.password === password?.confirmPassword) {
      e.preventDefault();
      dispatch(changePassword(password?.password!));

      setOpenPasswordDialog(false);
    } else {
      e.preventDefault();
      alert("Password must match!!");
    }
  };
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch, message]);

  const onSubmit = (values: any) => {
    dispatch(updateEmployeeDetails(user?.empId, values));
    setOpen(false);
  };
  return (
    <Grid container sx={{ height: "100%" }}>
      <Sidebar />
      <Grid item xs={12} md={10} p={3} sx={{ overflowX: "auto" }}>
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
        <Paper
          sx={{
            display: "flex",
            padding: 5,
            marginY: 3,
          }}
          elevation={5}
        >
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                EmpId:
                <Typography variant="body1">{user?.empId}</Typography>
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
                  {user?.name}
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
                  {user?.jobTitle}
                </Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Email:
                <Typography variant="body1">{user?.email}</Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Phone:<Typography variant="body1">{user?.phone}</Typography>
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
                  {user?.location}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Card>
          <CardHeader title="Edit"></CardHeader>{" "}
          <Formik
            initialValues={{
              name: user?.name,
              email: user?.email,
              phone: user?.phone,
              location: user?.location,
              jobTitle: user?.jobTitle,
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, errors, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1}>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Name"
                          variant="outlined"
                          fullWidth
                          name="name"
                          id="name"
                          value={values?.name}
                          component={TextField}
                          onChange={handleChange}
                          error={errors?.name}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Job Title"
                          disabled
                          variant="outlined"
                          fullWidth
                          name="jobTitle"
                          id="jobTitle"
                          onChange={handleChange}
                          value={values?.jobTitle}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Email"
                          disabled
                          variant="outlined"
                          fullWidth
                          name="email"
                          id="email"
                          onChange={handleChange}
                          value={values?.email}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Phone No"
                          variant="outlined"
                          fullWidth
                          name="phone"
                          id="phone"
                          onChange={handleChange}
                          value={values?.phone}
                          component={TextField}
                          error={errors?.phone}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Location"
                          variant="outlined"
                          fullWidth
                          name="location"
                          id="location"
                          onChange={handleChange}
                          value={values?.location}
                          component={TextField}
                          error={errors?.location}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button type="submit" size="large" variant="contained">
                      EDIT
                    </Button>
                  </CardActions>
                </Form>
              );
            }}
          </Formik>
        </Card>{" "}
      </Dialog>
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
              type="password"
              fullWidth
              variant="outlined"
              onChange={handlePasswordChange}
            />
            <TextField
              margin="dense"
              name="confirmPassword"
              required
              label="Confirm New Password"
              type="password"
              fullWidth
              variant="outlined"
              onChange={handlePasswordChange}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}
