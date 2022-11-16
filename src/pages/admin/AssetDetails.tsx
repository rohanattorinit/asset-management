import {
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Dialog,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Dispatch } from "redux";
import Toast from "../../components/ErrorHandling/Toast";
import Loader from "../../components/Loader/Loader";
import SideBar from "../../components/Sidebar/Sidebar";
import {
  getSingleAssetDetails,
  updateAssetDetails,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

const usabilityOptions = [
  { label: "Usable", value: "usable" },
  { label: "Unusable", value: "unusable" },
  { label: "Disposed", value: "disposed" },
];

const AssetDetails = () => {
  const [open, setOpen] = useState(false);
  const [assetOpen, setAssetOpen] = useState(false);
  const location = useLocation();

  const id = location.pathname.split("/")[3];

  const dispatch: Dispatch<any> = useDispatch();
  const { singleAssetDetails, loading, message } = useSelector(
    (state: RootStore) => state.admin
  );

  const state = useSelector((state: RootStore) => state);

  useEffect(() => {
    dispatch(getSingleAssetDetails(id));
  }, [message]);

  const onSubmit = (values: any) => {
    //console.log(values);
    dispatch(updateAssetDetails(singleAssetDetails?.assetId, values));
    setAssetOpen(false);
  };

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
            <Box>
              <Button variant="outlined" onClick={() => setAssetOpen(true)}>
                Edit
              </Button>
              <> </>
              <Button variant="outlined" color="warning">
                Delete
              </Button>
            </Box>
          </Box>

          <Paper sx={{ display: "flex", padding: 1, marginY: 3 }} elevation={3}>
            <Grid container m={2}>
              {!singleAssetDetails?.empId?.length && loading && !open ? (
                <Loader />
              ) : (
                <>
                  <Grid item xs={12} md={6}>
                    <Typography
                      fontFamily="serif"
                      fontWeight="bold"
                      variant="h6"
                    >
                      Asset ID :{" "}
                      <Typography>{singleAssetDetails?.assetId}</Typography>
                    </Typography>
                    <Typography
                      fontFamily="serif"
                      fontWeight="bold"
                      variant="h6"
                      mt={2}
                    >
                      Asset Name:{" "}
                      <Typography>{singleAssetDetails?.name}</Typography>
                    </Typography>

                    <Typography
                      fontFamily="serif"
                      fontWeight="bold"
                      variant="h6"
                      mt={2}
                    >
                      Location:{" "}
                      <Typography>
                        {singleAssetDetails?.asset_location}
                      </Typography>
                    </Typography>

                    <Typography
                      fontFamily="serif"
                      fontWeight="bold"
                      variant="h6"
                      mt={2}
                    >
                      Description :{" "}
                      <Typography
                        variant="body1"
                        sx={{
                          textTransform: "capitalize",
                          wordWrap: "break-word",
                          width: { md: "31.25rem", xs: "15rem", sm: "30rem" },
                        }}
                      >
                        {singleAssetDetails?.description}
                      </Typography>
                    </Typography>

                    <Typography
                      fontFamily="serif"
                      fontWeight="bold"
                      variant="h6"
                      mt={2}
                    >
                      Processor:{" "}
                      <Typography>{singleAssetDetails?.processor}</Typography>
                    </Typography>

                    <Typography
                      fontFamily="serif"
                      fontWeight="bold"
                      variant="h6"
                      mt={2}
                    >
                      Screen Type:{" "}
                      <Typography>{singleAssetDetails?.screen_type}</Typography>
                    </Typography>

                    <Typography
                      fontFamily="serif"
                      fontWeight="bold"
                      variant="h6"
                      mt={2}
                    >
                      Screen Size:{" "}
                      <Typography>{singleAssetDetails?.screen_size}</Typography>
                    </Typography>

                    <Typography
                      fontFamily="serif"
                      fontWeight="bold"
                      variant="h6"
                      mt={2}
                    >
                      Brand Name:{" "}
                      <Typography>{singleAssetDetails?.brandName}</Typography>
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
                      Model No:{" "}
                      <Typography>{singleAssetDetails?.modelNo}</Typography>
                    </Typography>
                    {singleAssetDetails?.status === "allocated" ? (
                      <>
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
                          Employee Name:
                          <Typography>{singleAssetDetails?.empName}</Typography>
                        </Typography>
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
                          Employee ID:
                          <Typography>{singleAssetDetails?.empId}</Typography>
                        </Typography>
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
                          RAM:
                          <Typography>{singleAssetDetails?.ram}</Typography>
                        </Typography>
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
                          HDD:
                          <Typography>{singleAssetDetails?.hdd}</Typography>
                        </Typography>
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
                          SSD:
                          <Typography>{singleAssetDetails?.ssd}</Typography>
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}

                    {singleAssetDetails?.isRented ? (
                      <>
                        <Grid item xs={12} md={8}>
                          <Typography
                            fontFamily="serif"
                            fontWeight="bold"
                            variant="h6"
                            mt={2}
                            sx={{
                              textTransform: "capitalize",
                              wordWrap: "break-word",
                              width: {
                                md: "31.25rem",
                                xs: "15rem",
                                sm: "30rem",
                              },
                            }}
                          >
                            Vendor :{" "}
                            <Typography>
                              {singleAssetDetails?.vendor}
                            </Typography>
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
                              width: {
                                md: "31.25rem",
                                xs: "15rem",
                                sm: "30rem",
                              },
                            }}
                          >
                            rent :{" "}
                            <Typography>{singleAssetDetails?.rent}</Typography>
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
                              width: {
                                md: "31.25rem",
                                xs: "15rem",
                                sm: "30rem",
                              },
                            }}
                          >
                            Deposit :{" "}
                            <Typography>
                              {singleAssetDetails?.deposit}
                            </Typography>
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
                              width: {
                                md: "31.25rem",
                                xs: "15rem",
                                sm: "30rem",
                              },
                            }}
                          >
                            Rent Start From :{" "}
                            <Typography>
                              {singleAssetDetails?.rentStartDate?.slice(0, 10)}
                            </Typography>
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
                              width: {
                                md: "31.25rem",
                                xs: "15rem",
                                sm: "30rem",
                              },
                            }}
                          >
                            Rent End Date :{" "}
                            <Typography>
                              {singleAssetDetails?.rentEndDate?.slice(0, 10)}
                            </Typography>
                          </Typography>
                        </Grid>
                      </>
                    ) : (
                      <> </>
                    )}
                  </Grid>{" "}
                </>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={assetOpen} onClose={() => setAssetOpen(false)}>
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
            }}
            // validationSchema={AssetValidationSchema}
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
                            label="Asset ID"
                            variant="outlined"
                            fullWidth
                            name="assetId"
                            id="assetId"
                            value={values?.assetId}
                            disabled
                            onChange={handleChange}
                          />
                        </Grid>
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
                          <TextField
                            label="Location"
                            variant="outlined"
                            fullWidth
                            name="asset_location"
                            id="asset_location"
                            onChange={handleChange}
                            value={values?.asset_location}
                            required
                          />
                        </Grid>

                        {/* <Grid item xs={12} sm={6} md={6}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                              Usability
                            </InputLabel>

                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              label="Usability"
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
                        </Grid> */}
                        <Grid item xs={12} sm={6} md={6}>
                          <TextField
                            label="Brand Name"
                            variant="outlined"
                            fullWidth
                            name="brandName"
                            id="brandName"
                            onChange={handleChange}
                            value={values?.brandName}
                            required
                          />
                        </Grid>
                        {/* <Grid item xs={12} sm={6} md={6}>
                          <TextField
                            label="Status"
                            variant="outlined"
                            fullWidth
                            name="status"
                            id="status"
                            onChange={handleChange}
                            value={values?.status}
                            required
                          />
                        </Grid> */}
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
      </Dialog>
    </>
  );
};

export default AssetDetails;
