import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  Grid,
  Typography,
} from "@mui/material";
import { Field, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React, { Dispatch, useState } from "react";
import { Form } from "react-router-dom";
import { updateEmployeeDetails } from "../../redux/actions/EmployeeActions";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import EmployeeDetails from "../../pages/admin/EmployeeDetails";

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

function EmployeeEdit({ open, setOpen }: any) {
  //   const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Employee Details</Typography>
        <Box display="flex">
          <Button variant="outlined" onClick={handleClickOpen}>
            Edit
          </Button>
        </Box>
      </Box> */}

      {/* <Dialog open={open} onClose={handleClose}>
        <Card>
          <CardHeader title="Edit" />

          <Formik
            initialValues={{
              name: employeeDetails?.name,
              email: employeeDetails?.email,
              phone: employeeDetails?.phone,
              location: employeeDetails?.location,
              jobTitle: employeeDetails?.jobTitle,
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, errors, values, handleChange, handleBlur }) => {
              return (
                <>
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
                </>
              );
            }}
          </Formik>
        </Card>
      </Dialog> */}
    </>
  );
}

export default EmployeeEdit;
