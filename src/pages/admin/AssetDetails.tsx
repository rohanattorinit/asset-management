import { Button, Grid, Paper, Typography, Dialog } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {  useLocation, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import AssetEdit from "../../components/Button/AssetEdit";
import Alert from "../../components/ConfirmAlert/Alert";
import Confirm from "../../components/ConfirmAlert/Confirm";
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
  const [assetConfirmdel, setAssetConfirmdel] = useState(false);
  const [alertMessage, setAlertMessage] = useState('')
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[3];

  const dispatch: Dispatch<any> = useDispatch();
  const { singleAssetDetails, loading, message } = useSelector(
    (state: RootStore) => state.admin
  );

  const [openAlert, setOpenAlert] = useState(false);
  const[openAlertEdit, setOpenAlertEdit] =  useState(false);

  useEffect(() => {
    dispatch(getSingleAssetDetails(id));
  }, [message]);

  const closeFunc = (value: boolean) => {
    setAssetOpen(value);
    setOpenAlertEdit(true)
  };
  const setNavigate =()=>{setOpenAlert(false)
    if(alertMessage === "Asset Deleted Successfully"){
      navigate("/admin/assets/")
    }
    }
  
  const setMessage = () =>{
    setOpenAlertEdit(false)
  }

  

  const HandleDelete = (assetId: number) => {
    if (singleAssetDetails.status === "allocated") {
      setOpenAlert(true)
      setAlertMessage("First deallocate this asset and then try deleting it" )
       //alert("First deallocate this asset and then try deleting it");
      
    } else {
      setAssetConfirmdel(true)
      // if (window.confirm("Are you sure you want to delete this asset?")) {
      //   dispatch(deleteAsset(singleAssetDetails?.empId, assetId));
      //   navigate("/admin/assets/");
      // }
    }
    
  };

  const handleDelConfirm = (assetId: number) => {
    dispatch(deleteAsset(singleAssetDetails?.empId, assetId));
    setAssetConfirmdel(false);
    setOpenAlert(true);
    setAlertMessage("asset Deleted successfully");
    // navigate("/admin/assets/");
  };
  const detailsComp = (value: any, label: string) => {
    return (
      <>
        {
          // @ts-ignore
        singleAssetDetails[value] && (
          <Grid item xs={2} sm={4} md={4}>
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
              {label} :{" "}
              <Typography>
                {
                  // @ts-ignore

                  singleAssetDetails[value]
                }
              </Typography>
            </Typography>
          </Grid>
        )}
      </>
    );
  };



  return (
    <>
      <Grid container sx={{ height: "100%"}}>
        <SideBar />
        <Toast />
        {openAlert ? (
          <Alert title={alertMessage} setNavigate={setNavigate} />
        ) : (
          <> </>
        )}
        {openAlertEdit && (
          <Alert
            title="Asset Details Updated Successfully!"
            setNavigate={setMessage}
          />
        )}

        
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
              {assetConfirmdel && (
                <Confirm
                  title="Are you sure?"
                  handleOk={() => {
                    handleDelConfirm(singleAssetDetails.assetId);
                  }}
                  handlecancel={() => {
                    setAssetConfirmdel(false);
                  }}
                />
              )}
            </Box>
          </Box>

          <Paper sx={{ display: "flex", padding: 1, marginY: 3, overflow: "hidden"}} elevation={3}>
            <Grid container spacing={1}>
              {!singleAssetDetails?.empId?.length && loading && !open ? (
                <Loader />
              ) : (
                <>
                  {detailsComp("assetId", "Asset ID")}
                  {detailsComp("name", "Asset Name")}
                  {detailsComp("category", "Category")}
                  {detailsComp("status", "Status")}
                  {detailsComp("asset_location", "Location")}
                 
                  {detailsComp("brandName", "Brand Name")}
                  {detailsComp("modelNo", "Model No")}

                  <Grid item xs={2} sm={4} md={4}>
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
                  </Grid>
                  {detailsComp("vendor", "Vendor")}
                  {detailsComp("rent", "Rent")}
                  {detailsComp("deposit", "Deposit")}
                  {singleAssetDetails?.rentStartDate && (
                    <Grid item xs={2} sm={4} md={4}>
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
                  )}
                  {singleAssetDetails?.rentEndDate && (
                    <Grid item xs={2} sm={4} md={4}>
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
                  )}
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
                  {detailsComp("description", "Description")}
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