import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Dispatch } from "redux";
import SideBar from "../../components/Sidebar/Sidebar";
import {
  allocateAssets,
  deallocateAssets,
  getAssetDetails,
  getAssets,
  getEmployeeDetails,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import AllocateAsset from "../../components/AllocateAsset/AllocateAsset";
import Toast from "../../components/ErrorHandling/Toast";
import { Formik, Field, Form } from "formik";
import { updateEmployeeDetails } from "../../redux/actions/EmployeeActions";
import Loader from "../../components/Loader/Loader";

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
  email: Yup.string().required("Required"),
  jobTitle: Yup.string().required("Required"),
});

export default function EmployeeDetails() {
  const [open, setOpen] = useState(false);
  const [empOpen, setEmpOpen] = useState(false);

  const {
    admin: { employeeDetails, employeeassetsdetails, loading, message },
    employee: { message: empMessage },
  } = useSelector((state: RootStore) => state);

  const dispatch: Dispatch<any> = useDispatch();
  const location = useLocation();
  const empId = location?.pathname.replace("/admin/employee/", "");

  useEffect(() => {
    dispatch(getEmployeeDetails(empId));
    dispatch(getAssetDetails(empId));
  }, [dispatch, empId, message, empMessage]);

  const handleClickOpen = () => {
    dispatch(getAssets({ allocate: true, name: "" }));
    setOpen(true);
  };

  const HandleDeallocate = (assetId: number) => {
    dispatch(deallocateAssets(employeeDetails?.empId, assetId));
  };

  const onSubmit = (values: any) => {
    dispatch(updateEmployeeDetails(employeeDetails?.empId, values));
    setEmpOpen(false);
  };

  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Toast />
      {loading ? (
        <Loader />
      ) : (
      <Grid item xs={12} md={10} p={2} sx={{ overflowX: "auto" }}>
        <Paper sx={{ marginY: 3 }} elevation={5}>
          {!employeeDetails?.empId?.length && loading && !open ? (
            <Loader />
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px",
                }}
              >
                <Typography m={2} variant="h5">
                  Employee Details
                </Typography>
                <Box m={2} display="flex">
                  <Button variant="outlined" onClick={() => setEmpOpen(true)}>
                    Edit
                  </Button>
                </Box>
              </Box>
              <Grid display="flex" padding={1} container m={2}>
                <Grid item xs={12} md={4}>
                  <Typography fontFamily="serif" fontWeight="bold" variant="h6">
                    Employee ID:
                    <Typography variant="body1">
                      {employeeDetails?.empId}
                    </Typography>
                  </Typography>
                  <Typography
                    fontFamily="serif"
                    fontWeight="bold"
                    variant="h6"
                    mt={2}
                  >
                    Name:
                    <Typography
                      sx={{ textTransform: "capitalize" }}
                      variant="body1"
                    >
                      {employeeDetails?.name}
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
                      {employeeDetails?.jobTitle}
                    </Typography>
                  </Typography>

                  <Typography
                    fontFamily="serif"
                    fontWeight="bold"
                    variant="h6"
                    mt={2}
                  >
                    Email:
                    <Typography variant="body1">
                      {employeeDetails?.email}
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography
                    fontFamily="serif"
                    fontWeight="bold"
                    variant="h6"
                    mt={2}
                  >
                    Phone:
                    <Typography variant="body1">
                      {employeeDetails?.phone}
                    </Typography>
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
                      {employeeDetails?.location}
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </>
         )} 
        </Paper>

        <Paper sx={{ marginY: 3 }} elevation={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <Typography m={2} variant="h5" mb={5}>
              Current Asset
            </Typography>
            <Box m={2} display="flex">
              <Button variant="outlined" onClick={handleClickOpen}>
                Allocate
              </Button>
            </Box>
          </Box>

          {/* //Deallocate Asset */}

          { employeeassetsdetails?.length && loading && !open ? (
            <Loader />
          ) : employeeassetsdetails?.length ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Asset ID
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Asset Name
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Model No
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Category
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Allocation Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employeeassetsdetails?.map((asset) => (
                    <TableRow
                      key={asset?.assetId}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="right" component="th" scope="row">
                        {asset?.assetId}
                      </TableCell>
                      <TableCell align="right">{asset?.name}</TableCell>
                      <TableCell align="right">{asset?.modelno}</TableCell>
                      <TableCell align="right">{asset?.category}</TableCell>
                      <TableCell align="right">
                        {asset?.allocationTime?.slice(0, 10)}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <RemoveCircleIcon
                            sx={{ color: "#DC2626" }}
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Do you want to Delete the Asset?"
                                )
                              )
                                HandleDeallocate(asset?.assetId);
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography textAlign={"center"} variant="h5" pb={2}>
              No assets are allocated !!!
            </Typography>
          )}
        </Paper>
      </Grid>

      )}
      <AllocateAsset open={open} setOpen={setOpen} />
      <Dialog open={empOpen} onClose={() => setEmpOpen(false)}>
        <Card>
          <CardHeader title="Edit"></CardHeader>{" "}
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
                            error={errors.jobTitle}
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
                            error={errors?.email}
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
      </Dialog>
    </Grid>
  );
}
