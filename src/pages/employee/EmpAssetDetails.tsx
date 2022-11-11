import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Dispatch } from "redux";
import Toast from "../../components/ErrorHandling/Toast";
import Loader from "../../components/Loader/Loader";
import SideBar from "../../components/Sidebar/Sidebar";
import { getSingleAssetDetails } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

const EmpAssetDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const dispatch: Dispatch<any> = useDispatch();
  const { singleAssetDetails, loading, message } = useSelector(
    (state: RootStore) => state.admin
  );

  useEffect(() => {
    dispatch(getSingleAssetDetails(id));
  }, [message, dispatch, id]);

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
            <Typography variant="h5">Assets Details</Typography>
          </Box>

          <Paper sx={{ display: "flex", padding: 1, marginY: 3 }} elevation={3}>
            <Grid container m={2}>
              {!singleAssetDetails?.empId?.length && loading ? (
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
                      Brand Name:{" "}
                      <Typography>{singleAssetDetails?.brandName}</Typography>
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
                      Model No:{" "}
                      <Typography>{singleAssetDetails?.modelNo}</Typography>
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    {singleAssetDetails?.category === "laptop" ||
                    singleAssetDetails?.category === "mobile" ? (
                      <>
                        <Typography
                          fontFamily="serif"
                          fontWeight="bold"
                          variant="h6"
                          mt={2}
                        >
                          Processor:{" "}
                          <Typography>
                            {singleAssetDetails?.processor}
                          </Typography>
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
                          RAM (GB)
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
                          Operating System
                          <Typography>
                            {singleAssetDetails?.operating_system}
                          </Typography>
                        </Typography>

                        <Typography
                          fontFamily="serif"
                          fontWeight="bold"
                          variant="h6"
                          mt={2}
                        >
                          Screen Type:{" "}
                          <Typography>
                            {singleAssetDetails?.screen_type}
                          </Typography>
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
                          Screen Size
                          <Typography>
                            {singleAssetDetails?.screen_size}
                          </Typography>
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}

                    {singleAssetDetails?.category === "monitor" ? (
                      <>
                        <Typography
                          fontFamily="serif"
                          fontWeight="bold"
                          variant="h6"
                          mt={2}
                        >
                          Screen Type:{" "}
                          <Typography>
                            {singleAssetDetails?.screen_type}
                          </Typography>
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
                          Screen Size
                          <Typography>
                            {singleAssetDetails?.screen_size}
                          </Typography>
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                  </Grid>
                </>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default EmpAssetDetails;
