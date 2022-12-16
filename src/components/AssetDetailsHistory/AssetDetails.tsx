import { Button, Grid, Paper, Typography, Dialog } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import Loader from "../../components/Loader/Loader";
import {
  getSingleAssetDetails,
  deleteAsset,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import AssetEdit from "../Button/AssetEdit";
import Alert from "../ConfirmAlert/Alert";
import Confirm from "../ConfirmAlert/Confirm";
const AssetDetails = () => {
  const [open, setOpen] = useState(false);
  const [assetOpen, setAssetOpen] = useState(false);
  const [assetConfirmdel, setAssetConfirmdel] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const location = useLocation();
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertEdit, setOpenAlertEdit] = useState(false);
  const navigate = useNavigate();
  const id = location.pathname.split("/")[3];
  const dispatch: Dispatch<any> = useDispatch();

  const { singleAssetDetails, loading, message, singleAssetTickets } =
    useSelector((state: RootStore) => state.admin);
  const ticket = singleAssetTickets?.filter(
    (ticket) =>
      ticket?.ticketStatus === "pending" || ticket?.ticketStatus === "active"
  );

  useEffect(() => {
    dispatch(getSingleAssetDetails(id));
  }, [message]);
  const closeFunc = (value: boolean) => {
    setAssetOpen(value);
    setOpenAlertEdit(true);
  };
  const setNavigate = () => {
    setOpenAlert(false);
    if (alertMessage === "Asset deleted successfully") {
      navigate("/admin/assets/");
    }
  };
  const setMessage = () => {
    setOpenAlertEdit(false);
  };
  const HandleDelete = (assetId: number) => {
    if (singleAssetDetails.status === "Allocated") {
      setOpenAlert(true);
      setAlertMessage("First deallocate this asset and then try deleting it");
    } else if (ticket?.length !== 0) {
      setOpenAlert(true);
      setAlertMessage("First closed asset tickets  and then try deleting it");
    } else {
      setAssetConfirmdel(true);
    }
  };
  const handleDelConfirm = (assetId: number) => {
    dispatch(deleteAsset(singleAssetDetails?.empId, assetId));
    setAssetConfirmdel(false);
    setOpenAlert(true);
    setAlertMessage("Asset deleted successfully");
  };
  const detailsComp = (value: any, label: string) => {
    return (
      <>
        {
          // @ts-ignore
          singleAssetDetails[value] && (
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
          )
        }
      </>
    );
  };
  return (
    <>
      {openAlert ? (
        <Alert title={alertMessage} setNavigate={setNavigate} />
      ) : (
        <> </>
      )}
      {openAlertEdit && (
        <Alert
          title="Asset details updated successfully"
          setNavigate={setMessage}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Asset Details</Typography>
        {singleAssetDetails?.is_active ? (
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
        ) : (
          <Typography sx={{ fontSize: 16, color: "red" }}>
            This Asset is Deleted !!!{" "}
          </Typography>
        )}
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <Paper sx={{ display: "flex", padding: 1, marginY: 3 }} elevation={10}>
          {!singleAssetDetails?.empId?.length && loading && !open ? (
            <Loader />
          ) : (
            <>
              <Grid container sx={{ padding: 7 }}>
                <Grid item md={4}>
                  {detailsComp("assetId", "Asset ID")}
                  {detailsComp("name", "Asset Name")}
                  {detailsComp("category", "Category")}
                  {detailsComp("status", "Status")}
                  {detailsComp("asset_location", "Location")}
                  {detailsComp("brandName", "Brand Name")}
                  {detailsComp("modelNo", "Model No")}
                  {detailsComp("operating_system", "Operating System")}

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
      )}
      <Dialog open={assetOpen} onClose={() => setAssetOpen(false)}>
        <AssetEdit closeFunc={closeFunc} />
      </Dialog>
    </>
  );
};
export default AssetDetails;
