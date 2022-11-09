import React from "react";
import {
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";

import {
  getfilterOptions,
  updateAssetDetails,
  getBrandOptions,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
interface Iprops {
  closeFunc: (value: boolean) => void;
}
function AssetEdit(props: Iprops) {
  const dispatch: Dispatch<any> = useDispatch();
  const { singleAssetDetails, message, filterOptions, brandOptions } =
    useSelector((state: RootStore) => state.admin);

  useEffect(() => {
    dispatch(getBrandOptions());
    dispatch(getfilterOptions());
  }, [message]);

  const onSubmit = (values: any) => {
    console.log(values);
    //
    dispatch(updateAssetDetails(singleAssetDetails?.assetId, values));

    props.closeFunc(false);
  };
  return (
    <>
      <Card>
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
            rentStartDate: singleAssetDetails?.rentStartDate,
            rentEndDate: singleAssetDetails?.rentEndDate,
            asset_location: singleAssetDetails?.asset_location,
            isRented: singleAssetDetails?.isRented,
            received_date: singleAssetDetails?.received_date,
            processor: singleAssetDetails.processor,
            screen_type: singleAssetDetails.screen_type,
            ram: singleAssetDetails.ram,
            screen_size: singleAssetDetails.screen_size,
            operating_system: singleAssetDetails.operating_system,
          }}
          onSubmit={onSubmit}
        >
          {({ dirty, isValid, values, handleChange, handleBlur, errors }) => {
            return (
              <>
                <Form>
                  <CardContent>
                    <Grid item container spacing={1}>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          label="Asset Name"
                          variant="outlined"
                          fullWidth
                          name="assetName"
                          id="assetName"
                          onChange={handleChange}
                          value={values?.assetName}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          label="Description"
                          variant="outlined"
                          fullWidth
                          name="description"
                          id="description"
                          onChange={handleChange}
                          value={values?.description}
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
                            {filterOptions.location?.map((item) => (
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
                            {brandOptions?.map((item) => (
                              <MenuItem key={item.name} value={item.name}>
                                {item.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          label="Model No."
                          variant="outlined"
                          fullWidth
                          name="modelNo"
                          id="modelNo"
                          onChange={handleChange}
                          value={values?.modelNo}
                          required
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          type="date"
                          InputLabelProps={{ shrink: true }}
                          label="Received Date"
                          variant="outlined"
                          fullWidth
                          name="received_date"
                          id="received_date"
                          value={values?.received_date?.slice(0, 10)}
                          onChange={handleChange}
                        />
                      </Grid>
                      {singleAssetDetails?.category === "laptop" ? (
                        <>
                          {" "}
                          <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel id="demo-simple-select-outlined-label">
                                Processor
                              </InputLabel>

                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="processor"
                                value={values?.processor}
                                onChange={handleChange}
                                name="processor"
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
                                {filterOptions.processor?.map((item) => (
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
                                Screen type
                              </InputLabel>

                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="processor"
                                value={values?.screen_type}
                                onChange={handleChange}
                                name="screen_type"
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
                                {filterOptions.screen_type?.map((item) => (
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
                                Ram
                              </InputLabel>

                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="ram"
                                value={values?.ram}
                                onChange={handleChange}
                                name="ram"
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
                                {filterOptions.ram?.map((item) => (
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
                                Screen Size
                              </InputLabel>

                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="screen_size"
                                value={values?.screen_size}
                                onChange={handleChange}
                                name="screen_size"
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
                                {filterOptions.screen_size?.map((item) => (
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
                                label="os"
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
                                {filterOptions.os?.map((item) => (
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

                      {singleAssetDetails?.isRented ? (
                        <>
                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              label="Vendor"
                              variant="outlined"
                              fullWidth
                              name="vendor"
                              id="vendor"
                              onChange={handleChange}
                              value={values?.vendor}
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              label="Rent"
                              variant="outlined"
                              fullWidth
                              name="rent"
                              id="rent"
                              onChange={handleChange}
                              value={values?.rent}
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              label="Deposit"
                              variant="outlined"
                              fullWidth
                              name="deposit"
                              id="deposit"
                              onChange={handleChange}
                              value={values?.deposit}
                              required
                            />
                          </Grid>

                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              required
                              label="Rent Start Date"
                              variant="outlined"
                              type="date"
                              fullWidth
                              name="rentStartDate"
                              id="rentStartDate"
                              onChange={handleChange}
                              value={values?.rentStartDate?.slice(0, 10)}
                              InputLabelProps={{ shrink: true }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6} md={6}>
                            <TextField
                              required
                              label="Rent End Date"
                              type="date"
                              variant="outlined"
                              fullWidth
                              name="rentEndDate"
                              id="rentEndDate"
                              onChange={handleChange}
                              value={values?.rentEndDate?.slice(0, 10)}
                              InputLabelProps={{ shrink: true }}
                            />
                          </Grid>
                        </>
                      ) : (
                        <> </>
                      )}

                      {singleAssetDetails?.category === "monitor" ? (
                        <>
                          <Grid item xs={12} sm={6} md={6}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel id="demo-simple-select-outlined-label">
                                Screen type
                              </InputLabel>

                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="processor"
                                value={values?.screen_type}
                                onChange={handleChange}
                                name="screen_type"
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
                                {filterOptions.screen_type?.map((item) => (
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
                                Screen Size
                              </InputLabel>

                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="screen_size"
                                value={values?.screen_size}
                                onChange={handleChange}
                                name="screen_size"
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
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button type="submit" size="large" variant="contained">
                      EDIT
                    </Button>
                  </CardActions>{" "}
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
