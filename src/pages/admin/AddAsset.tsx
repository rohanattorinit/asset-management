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
import { Dispatch, useEffect } from "react";

import FormLabel from "@mui/material/FormLabel";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AssetCsv } from "../../components/DragAndDrop/AssetCsv";
import SideBar from "../../components/Sidebar/Sidebar";
import {
  addAsset,
  getBrandOptions,
  getfilterOptions,
  getEmployees,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import Toast from "../../components/ErrorHandling/Toast";
import { AssetValidationSchema } from "../../components/FormValidations/AssetValidationSchema";

const assetTypeOptions = [
  { label: "Hardware", value: "hardware" },
  { label: "Software", value: "software" },
];

const AddAsset = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { message, brandOptions, filterOptions, employees } = useSelector(
    (state: RootStore) => state.admin
  );
  const navigate = useNavigate();

  const onSubmit = (values: any, { resetForm }: any) => {
    values.rent = parseInt(values.rent.split(",").join(""), 10);
    values.deposit = parseInt(values.deposit.split(",").join(""), 10);
    dispatch(addAsset(values));
    console.log(values);
    resetForm({ values: "" });
  };
  useEffect(() => {
    dispatch(getBrandOptions());
    dispatch(getfilterOptions());
    dispatch(getEmployees({ name: "" }));

    if (message) {
      navigate("/admin/assets");
    }
  }, [message, navigate, dispatch]);

  return (
    <Grid container sx={{ bgcolor: "#F1F5F9", height: "100%" }}>
      <SideBar />
      <Toast />
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
                  asset_location: "",
                  received_date: "",
                  description: "",
                  status: "",
                  vendor: "",
                  rent: "",
                  deposit: "",
                  rentStartDate: "",
                  rentEndDate: "",
                  isRented: false,
                  screen_type: "",
                  ram: "",
                  operating_system: "",
                  processor: "",
                  screen_size: "",
                  empId: "",
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
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Brand Name
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="brandName"
                              value={values?.brandName}
                              onChange={handleChange}
                              name="brandName"
                              required
                              MenuProps={{
                                PaperProps: {
                                  sx: {
                                    maxHeight: {
                                      xs: 48 * 4 + 8,
                                      sm: 36 * 4 + 8,
                                    },
                                  },
                                },
                              }}
                            >
                              {brandOptions?.map((item) => (
                                <MenuItem key={item?.name} value={item?.name}>
                                  {item?.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
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
                              value={values?.assetType}
                              onChange={handleChange}
                              name="assetType"
                              required
                            >
                              {assetTypeOptions.map((item) => (
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
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Category
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Category"
                              value={values?.category}
                              onChange={handleChange}
                              name="category"
                              required
                            >
                              {filterOptions.category.map((item) => (
                                <MenuItem key={item} value={item}>
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>

                        {values?.category === "Laptop" ||
                        values?.category === "Mobile" ? (
                          <>
                            <Grid item xs={12} sm={6} md={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Processor
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  label="Processor"
                                  value={values?.processor}
                                  onChange={handleChange}
                                  name="processor"
                                  required
                                >
                                  {filterOptions?.processor?.map((item) => (
                                    <MenuItem key={item} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Screen Type
                                </InputLabel>

                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  label="Screen Type"
                                  value={values?.screen_type}
                                  onChange={handleChange}
                                  name="screen_type"
                                  required
                                >
                                  {filterOptions.screen_type.map((item) => (
                                    <MenuItem key={item} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                  RAM (GB)
                                </InputLabel>

                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  label="RAM (GB)"
                                  value={values?.ram}
                                  onChange={handleChange}
                                  name="ram"
                                  required
                                >
                                  {filterOptions.ram.map((item) => (
                                    <MenuItem key={item} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Operating System
                                </InputLabel>

                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  label="operatingsystem"
                                  value={values?.operating_system}
                                  onChange={handleChange}
                                  name="operating_system"
                                  required
                                >
                                  {filterOptions.os?.map((item) => (
                                    <MenuItem key={item} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Screen Size (Inches)
                                </InputLabel>

                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  label="Screen Size"
                                  value={values?.screen_size}
                                  onChange={handleChange}
                                  name="screen_size"
                                  required
                                >
                                  {filterOptions.screen_size?.map((item) => (
                                    <MenuItem key={item} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>
                          </>
                        ) : (
                          <> </>
                        )}

                        {values.category === "Monitor" ? (
                          <>
                            <Grid item xs={12} sm={6} md={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Screen Type
                                </InputLabel>

                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  label="Screen Type"
                                  value={values?.screen_type}
                                  onChange={handleChange}
                                  name="screen_type"
                                  required
                                >
                                  {filterOptions.screen_type.map((item) => (
                                    <MenuItem key={item} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Screen Size (Inches)
                                </InputLabel>

                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  label="Screen Size"
                                  value={values?.screen_size}
                                  onChange={handleChange}
                                  name="screen_size"
                                  required
                                >
                                  {filterOptions.screen_size?.map((item) => (
                                    <MenuItem key={item} value={item}>
                                      {item}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>
                          </>
                        ) : (
                          <></>
                        )}

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
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Asset Location
                            </InputLabel>

                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="operatingsystem"
                              value={values?.asset_location}
                              onChange={handleChange}
                              name="asset_location"
                              required
                            >
                              {filterOptions.location?.map((item) => (
                                <MenuItem key={item} value={item}>
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            type="date"
                            label="Received date"
                            variant="outlined"
                            fullWidth
                            name="received_date"
                            value={values?.received_date}
                            component={TextField}
                            InputLabelProps={{ shrink: true }}
                            onChange={handleChange}
                            onKeyDown={(e: any) => e.preventDefault()}
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
                              value={values?.status}
                              onChange={handleChange}
                              name="status"
                              required
                            >
                              {filterOptions.status?.map((item) => (
                                <MenuItem key={item} value={item}>
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>

                        {values.status === "allocated" ? (
                          <>
                            <Grid item xs={12} sm={6} md={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Allocated To
                                </InputLabel>

                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  label="empName"
                                  value={values?.empId}
                                  onChange={handleChange}
                                  name="empId"
                                  required
                                  MenuProps={{
                                    PaperProps: {
                                      sx: {
                                        maxHeight: {
                                          xs: 48 * 4 + 8,
                                          sm: 36 * 4 + 8,
                                        },
                                      },
                                    },
                                  }}
                                >
                                  {employees?.map((item) => (
                                    <MenuItem
                                      key={item?.empId}
                                      value={item?.empId}
                                    >
                                      {item?.name} ({item.empId})
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Grid>
                          </>
                        ) : (
                          <></>
                        )}

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

                        <Grid item xs={12} sm={12} md={12}>
                          <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                              Is your asset rented?
                              <Field
                                type="checkbox"
                                name="isRented"
                                onChange={handleChange}
                              />
                            </FormLabel>
                          </FormControl>
                        </Grid>

                        {values?.isRented ? (
                          <>
                            <Grid item xs={12} sm={6} md={6}>
                              <Field
                                label="Vendor"
                                variant="outlined"
                                fullWidth
                                name="vendor"
                                value={values?.vendor}
                                component={TextField}
                              />
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                              <Field
                                label="Rent per month (GST inclusive)"
                                variant="outlined"
                                fullWidth
                                name="rent"
                                value={values?.rent
                                  ?.replace(/,/gi, "")
                                  .split(/(?=(?:\d{3})+$)/)
                                  .join(",")}
                                component={TextField}
                              />
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                              <Field
                                label="Deposit"
                                variant="outlined"
                                fullWidth
                                name="deposit"
                                value={values?.deposit
                                  ?.replace(/,/gi, "")
                                  .split(/(?=(?:\d{3})+$)/)
                                  .join(",")}
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
                                value={values?.rentStartDate}
                                component={TextField}
                                InputLabelProps={{ shrink: true }}
                                onChange={handleChange}
                                onKeyDown={(e: any) => e.preventDefault()}
                              />
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
                              <Field
                                type="date"
                                label="End date of rent"
                                variant="outlined"
                                fullWidth
                                name="rentEndDate"
                                value={values?.rentEndDate}
                                component={TextField}
                                InputLabelProps={{ shrink: true }}
                                onChange={handleChange}
                                onKeyDown={(e: any) => e.preventDefault()}
                              />
                            </Grid>
                          </>
                        ) : (
                          <> </>
                        )}
                      </Grid>

                      <CardActions>
                        <Button
                          type="submit"
                          size="large"
                          variant="contained"
                          data-testid={"add_asset_button"}
                        >
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
