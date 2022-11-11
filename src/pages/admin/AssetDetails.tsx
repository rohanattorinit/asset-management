import { Button, Grid, Paper, Typography, Dialog } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import AssetEdit from "../../components/Button/AssetEdit";
import Toast from "../../components/ErrorHandling/Toast";
import Loader from "../../components/Loader/Loader";
import SideBar from "../../components/Sidebar/Sidebar";
import {
  deleteAsset,
  getSingleAssetDetails,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

const AssetDetails = () => {
  const [open, setOpen] = useState(false);
  const [assetOpen, setAssetOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[3];

  const dispatch: Dispatch<any> = useDispatch();
  const { singleAssetDetails, loading, message } = useSelector(
    (state: RootStore) => state.admin
  );

  const state = useSelector((state: RootStore) => state);

  useEffect(() => {
    dispatch(getSingleAssetDetails(id));
    
  }, [message]);

  const closeFunc = (value: boolean) => {
    setAssetOpen(value);
  };

  const HandleDelete = (assetId: number) => {
    if (singleAssetDetails.status === "allocated") {
      alert("First deallocate this asset and then try deleting it");
    } else {
      if (window.confirm("Are you sure you want to delete this asset?")) {
        dispatch(deleteAsset(singleAssetDetails?.empId, assetId));
        navigate("/admin/assets/");
      }
    }
    // if (window.confirm("Are you sure you want to delete this asset?")) {
    //   dispatch(deleteAsset(singleAssetDetails?.empId, assetId));
    //   navigate("/admin/assets/");
    // }
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
              <Button
                variant="outlined"
                color="warning"
                onClick={() => {
                  HandleDelete(singleAssetDetails.assetId);
                }}
              >
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
                  <Grid item xs={12} md={4}>
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
                      Category:{" "}
                      <Typography>{singleAssetDetails?.category}</Typography>
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
                  </Grid>

                  <Grid item xs={12} md={4}>
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
                    {singleAssetDetails?.category === "laptop" ? (
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
                          Processor:
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
                          Operating System:
                          <Typography>
                            {singleAssetDetails?.operating_system}
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
                          Screen Size:
                          <Typography>
                            {singleAssetDetails?.screen_size}
                          </Typography>
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}

                    {singleAssetDetails?.category === "monitor" || singleAssetDetails?.category === "mobile"? (
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
                          Screen Size:
                          <Typography>
                            {singleAssetDetails?.screen_size}
                          </Typography>
                        </Typography>
                      </>
                    ) : (
                      <> </>
                    )}

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
                      Received Date:
                      <Typography>
                        {singleAssetDetails?.received_date?.slice(0, 10)}
                      </Typography>
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
                      </>
                    ) : (
                      <></>
                    )}
                  </Grid>

                  {singleAssetDetails?.isRented ? (
                    <Grid item xs={12} md={4}>
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
                        <Typography>{singleAssetDetails?.vendor}</Typography>
                      </Typography>
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
                        <Typography>{singleAssetDetails?.deposit}</Typography>
                      </Typography>

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
                  ) : (
                    <> </>
                  )}
                </>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={assetOpen} onClose={() => setAssetOpen(false)}>
        <AssetEdit closeFunc={closeFunc} />
      </Dialog>
    </>
  );
};

export default AssetDetails;
