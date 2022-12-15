import React from "react";
import {
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { Form, Formik, Field } from "formik";
// import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import * as Yup from "yup";

import {
  updateAssetDetails,
  getFiltersByCategory,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import { TextField } from "formik-material-ui";
import moment from "moment";

const time = moment().format("MMMM DD YYYY, hh:mm:ss");
const currentYear = new Date().getFullYear();
const numericRegEx = /^[A-Z/a-z/0-9 \b]+$/;

const validationSchema = Yup.object().shape({
  make_year: Yup.number().max(
    currentYear,
    "Make year can not be in the future"
  ).typeError("Characters are not allowed")
,
  rentStartDate: Yup.date().nullable(),
  rentEndDate: Yup.date().min(Yup.ref("rentStartDate")),
  received_date: Yup.date().max(time, "Future dates can not be selected"),
  modelNo: Yup.string().matches(numericRegEx, "Invalid model no!"),
  imeiNo: Yup.string().matches(numericRegEx, "Invalid IMEI no!").nullable(),
});

const connectivityOptions = [
  { label: "Wired", value: "wired" },
  { label: "Wireless", value: "wireless" },
];

const statusOptions = [
  { label: "Surplus", value: "Surplus" },
  { label: "Broken", value: "Broken" },
  { label: "Repairable", value: "Repairable" },
];

interface Iprops {
  closeFunc: (value: boolean) => void;
}
function AssetEdit(props: Iprops) {
  const dispatch: Dispatch<any> = useDispatch();
  const { singleAssetDetails, message, filterOptions } = useSelector(
    (state: RootStore) => state.admin
  );

  useEffect(() => {
    dispatch(getFiltersByCategory([singleAssetDetails?.category]));
  }, [message, singleAssetDetails]);

  const onSubmit = (values: any) => {
    dispatch(updateAssetDetails(singleAssetDetails?.assetId, values));
    props.closeFunc(false);
  };

  const textField = (
    label: string,
    name: string,
    id: string,
    value: any,
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
      <Grid item xs={12} sm={6} md={6}>
        <Field
          label={label}
          variant="outlined"
          fullWidth
          name={name}
          id={id}
          onChange={handleChange}
          value={value}
          component={TextField}
          required
        />
      </Grid>
    );
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
    <>
      <Card sx={{ overflowY: "scroll" }}>
        <CardHeader title="Edit" />
        <Formik
          initialValues={{
            assetId: singleAssetDetails?.assetId,
            assetName: singleAssetDetails?.name,
            description: singleAssetDetails?.description,
            brandName: singleAssetDetails?.brandName,
            status: singleAssetDetails?.status,
            modelNo: singleAssetDetails?.modelNo,
            vendor: singleAssetDetails?.vendor,
            rent: singleAssetDetails?.rent,
            deposit: singleAssetDetails?.deposit,
            rentStartDate: singleAssetDetails?.rentStartDate?.slice(0, 10),
            rentEndDate: singleAssetDetails?.rentEndDate?.slice(0, 10),
            asset_location: singleAssetDetails?.asset_location,
            isRented: singleAssetDetails?.isRented,
            received_date: singleAssetDetails?.received_date?.slice(0, 10),
            processor: singleAssetDetails.processor,
            screen_type: singleAssetDetails.screen_type,
            ram: singleAssetDetails.ram,
            screen_size: singleAssetDetails.screen_size,
            operating_system: singleAssetDetails.operating_system,
            imeiNo: singleAssetDetails.imeiNo,
            connectivity: singleAssetDetails.connectivity,
            cableType: singleAssetDetails.cableType,
            ssd: singleAssetDetails.ssd,
            hdd: singleAssetDetails.hdd,
            os_version: singleAssetDetails.os_version,
            make_year: singleAssetDetails.make_year,
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ dirty, isValid, values, handleChange, handleBlur, errors }) => {
            return (
              <>
                <Form>
                  <CardContent>
                    <Grid item container spacing={1}>
                      {textField(
                        "Asset Name",
                        "assetName",
                        "assetName",
                        values?.assetName,
                        handleChange
                      )}
                      {textField(
                        "Description",
                        "description",
                        "description",
                        values?.description,
                        handleChange
                      )}

                      {singleAssetDetails?.status !== "Allocated" && (
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
                              {statusOptions?.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.value}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      )}

                      <Grid item xs={12} sm={6} md={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Asset Location
                          </InputLabel>

                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Asset Location"
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
                            {filterOptions.asset_location?.map((item) => (
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
                            Brand name
                          </InputLabel>

                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Brand Name"
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
                      {textField(
                        "Model No",
                        "modelNo",
                        "modelNo",
                        values?.modelNo,
                        handleChange
                      )}

                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          type="date"
                          InputLabelProps={{ shrink: true }}
                          label="Received Date"
                          variant="outlined"
                          fullWidth
                          name="received_date"
                          id="received_date"
                          value={values?.received_date?.slice(0, 10)}
                          onChange={handleChange}
                          component={TextField}
                        />
                      </Grid>
                      {textField(
                        "Make Year",
                        "make_year",
                        "make_year",
                        values?.make_year,
                        handleChange
                      )}

                      {singleAssetDetails?.category === "laptop" ||
                      singleAssetDetails?.category === "mobile" ||
                      singleAssetDetails?.category === "watch" ? (
                        <>
                          {singleAssetDetails?.category === "mobile" &&
                            textField(
                              "IMEI Number",
                              "imeiNo",
                              "imeiNo",
                              values?.imeiNo,
                              handleChange
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
                          {dropdownComp(
                            "Screen Size",
                            "screen_size",
                            values?.screen_size,
                            handleChange
                          )}
                          {singleAssetDetails?.category === "laptop" &&
                            dropdownComp(
                              "HDD",
                              "hdd",
                              values?.hdd,
                              handleChange
                            )}
                          {singleAssetDetails?.category !== "watch" &&
                            dropdownComp(
                              "SSD",
                              "ssd",
                              values?.ssd,
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
                                label="Operating System"
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

                          {textField(
                            "OS Version",
                            "os_version",
                            "os_version",
                            values?.os_version,
                            handleChange
                          )}
                        </>
                      ) : (
                        <> </>
                      )}

                      {singleAssetDetails.category === "mouse" ||
                      singleAssetDetails.category === "keyboard" ||
                      singleAssetDetails.category === "headset" ? (
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
                              {connectivityOptions?.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.value}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      ) : (
                        <> </>
                      )}

                      {singleAssetDetails?.category === "hdmi cable" &&
                        dropdownComp(
                          "Cable Type",
                          "cableType",
                          values?.cableType,
                          handleChange
                        )}

                      {singleAssetDetails?.isRented ? (
                        <>
                          {textField(
                            "Vendor",
                            "vendor",
                            "vendor",
                            values?.vendor,
                            handleChange
                          )}

                          {textField(
                            "Rent",
                            "rent",
                            "rent",
                            values?.rent,
                            handleChange
                          )}

                         

                          <Grid item xs={12} sm={6} md={6}>
                            <Field
                              required
                              label="Rent Start Date"
                              variant="outlined"
                              type="date"
                              fullWidth
                              name="rentStartDate"
                              id="rentStartDate"
                              onChange={handleChange}
                              value={values?.rentStartDate}
                              InputLabelProps={{ shrink: true }}
                              component={TextField}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6} md={6}>
                            <Field
                              required
                              label="Rent End Date"
                              type="date"
                              variant="outlined"
                              fullWidth
                              name="rentEndDate"
                              id="rentEndDate"
                              onChange={handleChange}
                              value={values?.rentEndDate}
                              InputLabelProps={{ shrink: true }}
                              component={TextField}
                            />
                          </Grid>
                        </>
                      ) : (
                        <> </>
                      )}

                      {singleAssetDetails?.category === "monitor" &&
                        showMoniterFields(values, handleChange)}
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button type="submit" size="large" variant="contained">
                      SAVE
                    </Button>
                  </CardActions>
                </Form>
              </>
            );
          }}
        </Formik>
      </Card>
    </>
  );
}

export default AssetEdit;
