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
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Dispatch } from "redux";
import Toast from "../../components/ErrorHandling/Toast";
import Loader from "../../components/Loader/Loader";
import SideBar from "../../components/Sidebar/Sidebar";
import { getSingleAssetDetails } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

const AssetDetails=()=> {
  const [open, setOpen] = useState(false);
  const [empOpen, setEmpOpen] = useState(false);
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/")[3];
  console.log(id);

  const dispatch: Dispatch<any> = useDispatch();
  const { singleAssetDetails, loading } = useSelector(
    (state: RootStore) => state.admin
  );
  console.log(singleAssetDetails)
  const state = useSelector((state: RootStore) => state);
  console.log(state);

  useEffect(() => {
    dispatch(getSingleAssetDetails(id));
  }, [dispatch]);

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
          {loading && !open ? (
            <Loader />
          ) : (
            <Grid container m={2}>
              <Grid item xs={12} md={6}>
                <Typography fontFamily="serif" fontWeight="bold" variant="h6">
                  Asset ID : <Typography>{singleAssetDetails?.assetId}</Typography>
                </Typography>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Asset Name: <Typography>{singleAssetDetails?.name}</Typography>
                </Typography>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                   Description : <Typography>{singleAssetDetails?.description}</Typography>
                  
                </Typography>

                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Usability: <Typography>{singleAssetDetails?.usability}</Typography>
                </Typography>

                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Brand Name: <Typography>{singleAssetDetails?.brandName}</Typography>
                </Typography>

                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                >
                  Status: <Typography>{singleAssetDetails?.status}</Typography>
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                  sx={{
                    textTransform: "capitalize",
                    wordWrap: "break-word",
                    width: { md: "31.25rem", xs: "15rem", sm: "30rem" },
                  }}
                >
                 Model No: <Typography>{singleAssetDetails?.modelNo}</Typography>
                </Typography>

                {singleAssetDetails?.isRented? (<><Grid item xs={12} md={8}>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                  sx={{
                    textTransform: "capitalize",
                    wordWrap: "break-word",
                    width: { md: "31.25rem", xs: "15rem", sm: "30rem" },
                  }}
                >
                  Vendor : <Typography>{singleAssetDetails?.vendor}</Typography>
                </Typography>
                
              </Grid>
              
              <Grid item xs={12} md={8}>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                  sx={{
                    textTransform: "capitalize",
                    wordWrap: "break-word",
                    width: { md: "31.25rem", xs: "15rem", sm: "30rem" },
                  }}
                >
                  rent : <Typography>{singleAssetDetails?.rent}</Typography>
                </Typography>


                
                
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                  sx={{
                    textTransform: "capitalize",
                    wordWrap: "break-word",
                    width: { md: "31.25rem", xs: "15rem", sm: "30rem" },
                  }}
                >
                  Deposit : <Typography>{singleAssetDetails?.deposit}</Typography>
                </Typography>
                </Grid>

                <Grid item xs={12} md={8}>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                  sx={{
                    textTransform: "capitalize",
                    wordWrap: "break-word",
                    width: { md: "31.25rem", xs: "15rem", sm: "30rem" },
                  }}
                >
                  Rent Start From : <Typography>{singleAssetDetails?.rent}</Typography>
                </Typography>
                </Grid>

                <Grid item xs={12} md={8}>
                <Typography
                  fontFamily="serif"
                  fontWeight="bold"
                  variant="h6"
                  mt={2}
                  sx={{
                    textTransform: "capitalize",
                    wordWrap: "break-word",
                    width: { md: "31.25rem", xs: "15rem", sm: "30rem" },
                  }}
                >
                  Rent End Date : <Typography>{singleAssetDetails?.rent}</Typography>
                </Typography>
                </Grid>
                


</>):(<> </>)}
                
              </Grid>

                  
              

              

            </Grid>
          )}
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
