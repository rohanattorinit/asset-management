import React, { Dispatch } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  Divider,
  Box,
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
import { addAsset } from "../../redux/actions/AdminActions";
import { AssetCsv } from "../../components/DragAndDrop/AssetCsv";

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
//password validation

const numericRegEx = /(?=.*[0-9])/;
const nl = /^[A-Z/a-z/0-9 \b]+$/;
const re = /^[A-Z/a-z/ \b]+$/;

//validation schema
let validationSchema = Yup?.object()?.shape({
  brandName: Yup?.string()
    .matches(re, "Brand name can have letters only!")
    .required("Required"),

  assetType: Yup?.string()
    .matches(re, "Asset type can have letters only!")
    .required("Required"),
  assetName: Yup?.string()
    .matches(nl, "Asset name can have numbers & letters only!")
    .required("Required"),

  category: Yup?.string()
    .matches(re, "Category can have letters only!")
    .required("Required"),

  modelNo: Yup?.string()
    .matches(numericRegEx, "Invalid model no!")
    .matches(numericRegEx, "Invalid model no!")

    .required("Required!"),

  description: Yup?.string()
    .matches(nl, "Description can have Numbers & letters only!")
    .required("Required"),
});

const AddAsset = () => {
  const dispatch: Dispatch<any> = useDispatch();
  let navigate = useNavigate();

  const onSubmit = (values: any) => {
    dispatch(addAsset(values));
    console.log(values);
    navigate(`/admin/assets`);
  };

  return (
    <Grid container sx={{ bgcolor: "#F1F5F9", height: "100%" }}>
      <SideBar />
      <Grid item xs={12} md={10} p={3} sx={{ overflowX: "auto" }}>
        <Card>
          <CardHeader title="Add new asset"></CardHeader>
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
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={2}>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Brand Name"
                          variant="outlined"
                          fullWidth
                          name="brandName"
                          value={values?.brandName}
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
                            label="Asset Type
                      "
                            value={values?.assetType}
                            onChange={handleChange}
                            name="assetType"
                            required
                          >
                            {assetTypeOptions?.map((item) => (
                              <MenuItem key={item?.value} value={item?.value}>
                                {item?.label}
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
                          value={values?.assetName}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Category"
                          variant="outlined"
                          fullWidth
                          name="category"
                          value={values?.category}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Model No"
                          variant="outlined"
                          fullWidth
                          name="modelNo"
                          value={values?.modelNo}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Description"
                          variant="outlined"
                          fullWidth
                          name="description"
                          value={values?.description}
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
                            label="Status
                      "
                            value={values?.status}
                            onChange={handleChange}
                            name="status"
                            required
                          >
                            {statusOptions?.map((item) => (
                              <MenuItem key={item?.value} value={item?.value}>
                                {item?.label}
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
                            value={values?.usability}
                            onChange={handleChange}
                            name="usability"
                            required
                          >
                            {usabilityOptions?.map((item) => (
                              <MenuItem key={item?.value} value={item?.value}>
                                {item?.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button type="submit" size="large" variant="contained">
                      ADD ASSET
                    </Button>
                  </CardActions>
                </Form>
              );
            }}
          </Formik>
          <Divider orientation="horizontal" />
          <AssetCsv />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default AddAsset;
