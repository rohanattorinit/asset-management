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
    window.scrollTo(0, 0);
  }, [message, dispatch, id]);

  const detailsComp = (value: any, label: string) => {
    return (
      <>
        {
          // @ts-ignore
          singleAssetDetails[value] && (
            // <Grid item xs={2} sm={4} md={4}>
            <Typography
              fontFamily="serif"
              fontWeight="bold"
              variant="h6"
              mt={2}
              sx={{
                textTransform: "capitalize",
                wordWrap: "break-word",
                // width: {
                //   md: "31.25rem",
                //   xs: "15rem",
                //   sm: "30rem",
                // },
              }}
            >
              {label} :
              <Typography>
                {
                  // @ts-ignore
                  singleAssetDetails[value]
                }
              </Typography>
            </Typography>
            // </Grid>
          )
        }
      </>
    );
  };

  return (
    <>
      <Grid container sx={{ height: "100%" }}>
        <SideBar />
        <Toast />
        <Grid item xs={12} md={10} p={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Assets Details</Typography>
          </Box>

          <Paper
            sx={{ display: "flex", padding: 1, marginY: 3 }}
            elevation={10}
          >
            {loading ? (
              <Grid xs={12} md={10} sx={{ marginX: "50px" }}>
                <Loader />
              </Grid>
            ) : (
              <>
                <Grid container sx={{ padding: { xs: 3, md: 8 } }}>
                  <Grid item md={4}>
                    {detailsComp("assetId", "Asset ID")}
                    {detailsComp("name", "Asset Name")}
                    {detailsComp("category", "Category")}
                    {detailsComp("status", "Status")}
                    {detailsComp("asset_location", "Location")}
                    {detailsComp("brandName", "Brand Name")}
                    {detailsComp("modelNo", "Model No")}

                    {/* <Grid item xs={2} sm={4} md={4}> */}
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
                        {singleAssetDetails?.received_date
                          ?.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("-")}
                      </Typography>
                    </Typography>
                    {detailsComp("description", "Description")}
                  </Grid>

                  <Grid item md={4}>
                    {detailsComp("vendor", "Vendor")}
                    {detailsComp("rent", "Rent")}
                    {detailsComp("deposit", "Deposit")}
                    {singleAssetDetails?.rentStartDate && (
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
                    )}
                    {singleAssetDetails?.rentEndDate && (
                      <>
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
                      </>
                    )}
                  </Grid>

                  <Grid item md={4}>
                    {detailsComp("screen_type", "Screen Type ")}
                    {detailsComp("processor", "Processor")}
                    {detailsComp("ram", "RAM")}
                    {detailsComp("screen_size", "Screen Size")}
                    {detailsComp("empName", "Employee Name")}
                    {detailsComp("empId", "Employee ID")}
                    {detailsComp("ssd", "SSD")}
                    {detailsComp("hdd", "HDD")}
                    {detailsComp("connectivity", " Connectivity")}
                    {detailsComp("make_year", "Make Year")}
                    {detailsComp("os_version", "OS Version")}
                    {detailsComp("imeiNo", "IMEI Number")}
                    {detailsComp("cableType", "Cable type")}
                  </Grid>
                </Grid>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default EmpAssetDetails;
