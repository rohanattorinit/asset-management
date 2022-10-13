import {
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import React, { useState } from "react";
import Toast from "../../components/ErrorHandling/Toast";
import SideBar from "../../components/Sidebar/Sidebar";

function AssetDetails() {
  const [open, setOpen] = useState(false);
  const [empOpen, setEmpOpen] = useState(false);
  return (
    <>
      <Grid container sx={{ height: "100%" }}>
        <SideBar />
        <Toast />
        <Grid item xs={12} md={10} p={2} sx={{ overflowX: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Asset Details</Typography>
            <Box display="flex">
              <Button variant="outlined" onClick={() => setOpen(true)}>
                Edit
              </Button>
            </Box>
          </Box>
          <Paper sx={{ display: "flex", padding: 1, marginY: 3 }} elevation={3}>
            <Grid container m={2}>
              <Grid item xs={12} md={4}>
                <Typography fontFamily="serif" fontWeight="bold" variant="h6">
                  {" "}
                  Asset ID :
                </Typography>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Asset Name:
                </Typography>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Model No:
                </Typography>

                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Usability :
                </Typography>

                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Status :
                </Typography>
              </Grid>

              <Grid item xs={12} md={8}>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Description :
                </Typography>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Emp Id :
                </Typography>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Emp Name :
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* <dialog open={empOpen} onClose={() => setEmpOpen(false)}>
        <Card>
          <CardHeader title="Edit"></CardHeader>
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
                </>
              );
            }}
          </Formik>
        </Card>
      </Dialog> */}
    </>
  );
}

export default AssetDetails;
