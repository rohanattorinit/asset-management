import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DragAndDrop } from "../../components/DragAndDrop/DragAndDrop";
import { EmpValidationSchema } from "../../components/FormValidations/EmpValidationSchema";
import SideBar from "../../components/Sidebar/Sidebar";
import { addEmployee } from "../../redux/actions/AdminActions";

const options = [
  { label: "Senior Software Developer", value: "senior software developer" },
  { label: "Software Developer", value: "software developer" },
  {
    label: "Associate Software Developer",
    value: "associate software developer",
  },
  { label: "Human Resourse", value: "human resourse" },
  { label: "Technical Delivery Manager", value: "technical delivery manager" },
];

const AddEmployee = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    dispatch(addEmployee(values));
    navigate(`/admin/employee`);
  };
  return (
    <Grid container sx={{ bgcolor: "#F1F5F9", height: "100%" }}>
      <SideBar />
      <Grid item xs={12} md={10} p={3} sx={{ overflowX: "auto" }}>
        <Card>
          <CardHeader title="Create Employee" />
          <CardContent
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <Grid item xs={12} md={5}>
              <Formik
                initialValues={{
                  empId: "",
                  name: "",
                  email: "",
                  jobTitle: "",
                  location: "",
                  phone: "",
                }}
                validationSchema={EmpValidationSchema}
                onSubmit={onSubmit}
              >
                {({ dirty, isValid, values, handleChange, handleBlur }) => {
                  return (
                    <Form>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm={12} md={12}>
                          <Field
                            label="Employee ID"
                            variant="outlined"
                            fullWidth
                            name="empId"
                            value={values.empId}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Job Title
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Job Title"
                              value={values.jobTitle}
                              onChange={handleChange}
                              name="jobTitle"
                              required
                            >
                              <MenuItem>None</MenuItem>
                              {options.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Field
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            name="name"
                            value={values.name}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Field
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={values.email}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Field
                            label="Location"
                            variant="outlined"
                            fullWidth
                            name="location"
                            value={values.location}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Field
                            label="Phone No."
                            variant="outlined"
                            fullWidth
                            name="phone"
                            value={values.phone}
                            component={TextField}
                          />
                        </Grid>
                      </Grid>

                      <CardActions>
                        <Button type="submit" size="large" variant="contained">
                          ADD EMPLOYEE
                        </Button>
                      </CardActions>
                    </Form>
                  );
                }}
              </Formik>
            </Grid>

            <Grid item xs={12} md={2}>
              <Divider orientation={"vertical"} />
            </Grid>

            <Grid item xs={12} md={5}>
              <DragAndDrop />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default AddEmployee;
