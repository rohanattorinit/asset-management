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
import { Dispatch, useEffect, useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AssetCsv } from "../../components/DragAndDrop/AssetCsv";
import SideBar from "../../components/Sidebar/Sidebar";
import {
  addAsset,
  getEmployees,
  getFiltersByCategory,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import Toast from "../../components/ErrorHandling/Toast";
import { AssetValidationSchema } from "../../components/FormValidations/AssetValidationSchema";
import Alert from "../../components/ConfirmAlert/Alert";
import { FormInitialValues } from "../../components/InitialValues/FormInitialValues";

const assetTypeOptions = [
  { label: "Hardware", value: "hardware" },
  { label: "Software", value: "software" },
];

const connectivityOptions = [
  { label: "Wired", value: "wired" },
  { label: "Wireless", value: "wireless" },
];

const AddAsset = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [category, setCategory] = useState<string[]>([]);
  const { message, filterOptions, employees } = useSelector(
    (state: RootStore) => state.admin
  );

  const navigate = useNavigate();

  const onSubmit = (values: any, { resetForm }: any) => {
    values.rent = parseInt(values.rent.split(",").join(""), 10);
    values.deposit = parseInt(values.deposit.split(",").join(""), 10);
    dispatch(addAsset(values));

    resetForm({ values: "" });
  };
  const setChangeCategory = (value: string) => {
    setCategory((prevValue) => {
      return [value];
    });
  };

  useEffect(() => {
    dispatch(getFiltersByCategory(category));
    dispatch(getEmployees({ name: "" }));
  }, [category]);

  const setNavigate = () => {
    navigate("/admin/assets");
  };

  const dropdownComp = (
    label: string,
    key: string,
    value: string,
    handleChange: {
      (e: React.ChangeEvent<any>): void;
      <T = string | React.ChangeEvent<any>>(
        field: T
      ): T extends React.ChangeEvent<any>
        ? void
        : (e: string | React.ChangeEvent<any>) => void;
    }
  ) => {
    return (
      <>
        <Grid item xs={12} sm={6} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              {label}
            </InputLabel>

            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label={key}
              value={value}
              onChange={handleChange}
              name={key}
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
              {
                // @ts-ignore
                filterOptions[key]?.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>
      </>
    );
  };

  const showMoniterFields = (
    values: any,
    handleChange: {
      (e: React.ChangeEvent<any>): void;
      <T = string | React.ChangeEvent<any>>(
        field: T
      ): T extends React.ChangeEvent<any>
        ? void
        : (e: string | React.ChangeEvent<any>) => void;
    }
  ) => {
    return (
      <>
        {dropdownComp(
          "Screen Type",
          "screen_type",
          values?.screen_type,
          handleChange
        )}
        {dropdownComp(
          "Screen Size",
          "screen_size",
          values?.screen_size,
          handleChange
        )}
      </>
    );
  };

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
                initialValues={FormInitialValues}
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
                              {assetTypeOptions?.map((item) => (
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
                              Category
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Category"
                              value={values?.category}
                              onChange={(e) => {
                                handleChange(e);
                                setChangeCategory(e?.target?.value);
                              }}
                              name="category"
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
                              {filterOptions?.category?.map((item) => (
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
                              {filterOptions?.brandName?.map((item) => (
                                <MenuItem key={item} value={item}>
                                  {item}
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
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            InputProps={{
                              inputProps: {
                                type: "number",
                                min: 1990,
                                max: 4000,
                              },
                            }}
                            label="Make Year"
                            variant="outlined"
                            fullWidth
                            name="make_year"
                            value={values?.make_year}
                            component={TextField}
                            required
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
                            required
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
                              {filterOptions?.asset_location?.map((item) => (
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
                            required
                            onKeyDown={(e: any) => e.preventDefault()}
                          />
                        </Grid>

                        {dropdownComp(
                          "Status",
                          "status",
                          values?.status,
                          handleChange
                        )}
                        <Grid item xs={12} sm={6} md={6}>
                          <Field
                            label="Description"
                            variant="outlined"
                            fullWidth
                            name="description"
                            required
                            value={values?.description}
                            component={TextField}
                          />
                        </Grid>

                        {/* conditonal Rendering */}

                        {values?.category === "Laptop" ||
                        values?.category === "Mobile" ||
                        values?.category === "Watch" ? (
                          <>
                            {values?.category === "Mobile" && (
                              <Grid item xs={12} sm={6} md={6}>
                                <Field
                                  label="IMEI Number"
                                  variant="outlined"
                                  fullWidth
                                  name="imeiNo"
                                  value={values?.imeiNo}
                                  component={TextField}
                                  required
                                />
                              </Grid>
                            )}
                            {dropdownComp(
                              "Processor",
                              "processor",
                              values?.processor,
                              handleChange
                            )}
                            {dropdownComp(
                              "Screen Type",
                              "screen_type",
                              values?.screen_type,
                              handleChange
                            )}
                            {dropdownComp(
                              "RAM",
                              "ram",
                              values?.ram,
                              handleChange
                            )}
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
                                  {filterOptions?.operating_system?.map(
                                    (item) => (
                                      <MenuItem key={item} value={item}>
                                        {item}
                                      </MenuItem>
                                    )
                                  )}
                                </Select>
                              </FormControl>
                            </Grid>
                            {dropdownComp(
                              "Screen Size(in)",
                              "screen_size",
                              values?.screen_size,
                              handleChange
                            )}
                            {values?.category === "Laptop" &&
                              dropdownComp(
                                "HDD",
                                "hdd",
                                values?.hdd,
                                handleChange
                              )}
                            {values?.category !== "Watch" &&
                              dropdownComp(
                                "SSD",
                                "ssd",
                                values?.ssd,
                                handleChange
                              )}

                            <Grid item xs={12} sm={6} md={6}>
                              <Field
                                label="OS Version"
                                variant="outlined"
                                fullWidth
                                required
                                name="os_version"
                                value={values?.os_version}
                                component={TextField}
                              />
                            </Grid>
                          </>
                        ) : (
                          <> </>
                        )}

                        {values.category === "Monitor" &&
                          showMoniterFields(values, handleChange)}

                        {values.category === "Mouse" ||
                        values.category === "Keyboard" ||
                        values.category === "Headset" ? (
                          <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel id="demo-simple-select-outlined-label">
                                Connectivity
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Connectivity"
                                value={values?.connectivity}
                                onChange={handleChange}
                                name="connectivity"
                                required
                              >
                                {connectivityOptions?.map((item) => (
                                  <MenuItem
                                    key={item?.value}
                                    value={item?.value}
                                  >
                                    {item?.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                        ) : (
                          <> </>
                        )}

                        {values?.category === "Hdmi cable" ? (
                          <>
                            <Grid item xs={12} sm={6} md={6}>
                              <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">
                                  Cable Type
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  label="Hdmi cable"
                                  value={values?.cableType}
                                  onChange={handleChange}
                                  name="cableType"
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
                                  {filterOptions?.cableType?.map((item) => (
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

                        {values.status === "Allocated" ? (
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
                                        width: "50px",
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
                            <Grid item xs={12} sm={6} md={6}>
                              <Field
                                label="Allocation Date"
                                type="date"
                                variant="outlined"
                                fullWidth
                                name="allocationTime"
                                value={values?.allocationTime}
                                component={TextField}
                                required
                                InputLabelProps={{ shrink: true }}
                              />
                            </Grid>
                          </>
                        ) : (
                          <></>
                        )}

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
        {message && <Alert title={message} setNavigate={setNavigate} />}
      </Grid>
    </Grid>
  );
};

export default AddAsset;
