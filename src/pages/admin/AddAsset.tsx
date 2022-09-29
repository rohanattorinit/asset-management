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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import SideBar from "../../components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { addAsset } from "../../redux/actions/AdminActions";
import { AssetCsv } from "../../components/DragAndDrop/AssetCsv";
import { AssetValidationSchema } from "../../components/FormValidations/AssetValidationSchema";
const statusOptions = [
  { label: "Allocated", value: "allocated" },
  { label: "Available", value: "available" },
];
const usabilityOptions = [
  { label: "Usable", value: "usable" },
  { label: "Unusable", value: "unusable" },
  { label: "Disposed", value: "disposed" },
];
const assetTypeOptions = [
  { label: "Hardware", value: "hardware" },
  { label: "Software", value: "software" },
];

const AddAsset = () => {
  const dispatch: Dispatch<any> = useDispatch();
  let navigate = useNavigate();

  const onSubmit = (values: any) => {
    //dispatch(addAsset(values));
    console.log(values);
    //navigate(`/admin/assets`);
  };
  return (
    <Grid container sx={{ bgcolor: "#F1F5F9", height: "100%" }}>
      <SideBar />
      <Grid item xs={12} md={10} p={3} sx={{ overflowX: "auto" }}>
        <Card>
          <CardHeader title="Add new asset" />
          <CardContent
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <Grid item xs={12} md={5}>
              <Formik
                initialValues={{
                  brandName: "",
                  assetType: "",
                  assetName: "",
                  category: "",
                  modelNo: "",
                  description: "",
                  status: "",
                  usability: "",
                  vendor: "",
                  rent: "",
                  deposit: "",
                  rentStartDate: "",
                  rentEndDate: "",
                }}
                validationSchema={AssetValidationSchema}
                onSubmit={onSubmit}
              >
                {({
                  dirty,
                  isValid,
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => {
                  return (
                    <Form>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Brand Name"
                            variant="outlined"
                            fullWidth
                            name="brandName"
                            value={values.brandName}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Asset Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Asset Type"
                              value={values.assetType}
                              onChange={handleChange}
                              name="assetType"
                              required
                            >
                              {assetTypeOptions.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Asset Name"
                            variant="outlined"
                            fullWidth
                            name="assetName"
                            value={values.assetName}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Category"
                            variant="outlined"
                            fullWidth
                            name="category"
                            value={values.category}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Model No"
                            variant="outlined"
                            fullWidth
                            name="modelNo"
                            value={values.modelNo}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Description"
                            variant="outlined"
                            fullWidth
                            name="description"
                            value={values.description}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Status
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Status"
                              value={values.status}
                              onChange={handleChange}
                              name="status"
                              required
                            >
                              {statusOptions.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Usability
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Usability
                    "
                              value={values.usability}
                              onChange={handleChange}
                              name="usability"
                              required
                            >
                              {usabilityOptions.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                          <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                              Is your asset rented?
                            </FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="no"
                              name="radio-buttons-group"
                            >
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="Yes"
                                name="yes"
                                onChange={handleChange}
                              />
                              <FormControlLabel
                                value="0"
                                control={<Radio />}
                                label="No"
                                name="no"
                                onChange={handleChange}
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Vendor"
                            variant="outlined"
                            fullWidth
                            name="vendor"
                            value={values.vendor}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Rent per month"
                            variant="outlined"
                            fullWidth
                            name="rent"
                            value={values.rent}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Deposit"
                            variant="outlined"
                            fullWidth
                            name="deposit"
                            value={values.deposit}
                            component={TextField}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            type="date"
                            label="Start date of rent"
                            variant="outlined"
                            fullWidth
                            name="rentStartDate"
                            value={values.rentStartDate}
                            component={TextField}
                            InputLabelProps={{ shrink: true }}
                            onChange={handleChange}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            type="date"
                            label="End date of rent"
                            variant="outlined"
                            fullWidth
                            name="rentEndDate"
                            value={values.rentEndDate}
                            component={TextField}
                            InputLabelProps={{ shrink: true }}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>

                      <CardActions>
                        <Button type="submit" size="large" variant="contained">
                          ADD ASSET
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
              <AssetCsv />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddAsset;
