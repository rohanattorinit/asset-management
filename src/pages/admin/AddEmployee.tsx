import React, { Dispatch } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  Divider,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import SideBar from "../../components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/actions/AdminActions";
import { DragAndDrop } from "../../components/DragAndDrop/DragAndDrop";

const options = [
  { label: "Senior Software Developer", value: "senior_software_developer" },
  { label: "Software Developer", value: "software_developer" },
  {
    label: "Associate Software Developer",
    value: "associate_software_developer",
  },
  { label: "Human Resourse", value: "human_resourse" },
  { label: "Technical Delivery Manager", value: "technical_delivery_manager" },
];

//password validation

const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const re = /^[A-Z/a-z/ \b]+$/;

//validation schema
let validationSchema = Yup?.object()?.shape({
  empId: Yup?.string()
    .matches(numericRegEx, "Invalid employee ID")
    .matches(uppercaseRegEx, "Invalid employee ID ")
    .required("Required"),

  name: Yup?.string()
    .matches(re, "Name can have letters only!")
    .required("Required"),

  email: Yup?.string().email("Invalid email").required("Required"),

  location: Yup?.string()
    .matches(re, "Location can have letters only!")

    .required("Required!"),

  phone: Yup?.string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "to short")
    .max(10, "to long")
    .required("Required"),
});

const AddEmployee = () => {
  const dispatch: Dispatch<any> = useDispatch();
  let navigate = useNavigate();

  const onSubmit = (values: any) => {
    dispatch(addEmployee(values));
    navigate(`/admin/employee`);
  };

  return (
    <Grid container sx={{ bgcolor: "#F1F5F9", height: "100%" }}>
      <SideBar />
      <Grid item xs={12} md={10} p={3} sx={{ overflowX: "auto" }}>
        <Card>
          <CardHeader title="Create Employee"></CardHeader>
          <Formik
            initialValues={{
              empId: "",
              name: "",
              email: "",
              jobTitle: "",
              location: "",
              phone: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={4}>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Employee ID"
                          variant="outlined"
                          fullWidth
                          name="empId"
                          value={values?.empId}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Job Title
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Job Title"
                            value={values?.jobTitle}
                            onChange={handleChange}
                            name="jobTitle"
                            required
                          >
                            <MenuItem>None</MenuItem>
                            {options?.map((item) => (
                              <MenuItem key={item?.value} value={item?.value}>
                                {item?.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Full Name"
                          variant="outlined"
                          fullWidth
                          name="name"
                          value={values?.name}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={values?.email}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Location"
                          variant="outlined"
                          fullWidth
                          name="location"
                          value={values?.location}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Phone No."
                          variant="outlined"
                          fullWidth
                          name="phone"
                          value={values?.phone}
                          component={TextField}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button type="submit" size="large" variant="contained">
                      ADD EMPLOYEE
                    </Button>
                  </CardActions>
                </Form>
              );
            }}
          </Formik>
          <Divider orientation="horizontal" />
          <DragAndDrop />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}></Grid>
    </Grid>
  );
};

export default AddEmployee;
