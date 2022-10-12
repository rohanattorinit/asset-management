import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Dispatch } from "redux";
import SideBar from "../../components/Sidebar/Sidebar";
import {
  deallocateAssets,
  getAssetDetails,
  getAssets,
  getEmployeeDetails,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import AllocateAsset from "../../components/AllocateAsset/AllocateAsset";
import Toast from "../../components/ErrorHandling/Toast";
import Loader from "../../components/Loader/Loader";

export default function EmployeeDetails() {
  const [open, setOpen] = useState(false);
  const { employeeDetails, employeeassetsdetails, message, loading } =
    useSelector((state: RootStore) => state.admin);

  const dispatch: Dispatch<any> = useDispatch();
  const location = useLocation();
  const empId = location?.pathname.replace("/admin/employee/", "");

  useEffect(() => {
    dispatch(getEmployeeDetails(empId));
    dispatch(getAssetDetails(empId));
    dispatch(getAssets());
  }, [dispatch, message, empId]);

  const handleClickOpen = () => {
    dispatch(getAssets({ allocate: true, name: "" }));
    setOpen(true);
  };

  const HandleDeallocate = (assetId: number) => {
    dispatch(deallocateAssets(employeeDetails?.empId, assetId));
  };

  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Toast />
      <Grid item xs={12} md={10} p={2} sx={{ overflowX: "auto" }}>
        <Paper sx={{ display: "flex", padding: 1 }} elevation={5}>
          <Grid container m={2}>
            <Grid item xs={12} md={4}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                {" "}
                Employee ID:
                <Typography variant="body1">
                  {employeeDetails?.empId}
                </Typography>
              </Typography>
              <Typography fontFamily="serif" fontWeight="bold" variant="h6">
                Name:
                <Typography
                  sx={{ textTransform: "capitalize" }}
                  variant="body1"
                >
                  {employeeDetails?.name}
                </Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Job Title:
                <Typography
                  variant="body1"
                  sx={{ textTransform: "capitalize" }}
                >
                  {employeeDetails?.jobTitle}
                </Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Email:
                <Typography variant="body1">
                  {employeeDetails?.email}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Phone:
                <Typography variant="body1">
                  {employeeDetails?.phone}
                </Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Location:
                <Typography
                  variant="body1"
                  sx={{ textTransform: "capitalize" }}
                >
                  {employeeDetails?.location}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ marginY: 3 }} elevation={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <Typography m={2} variant="h5">
              Current Asset
            </Typography>
            <Box m={2} display="flex">
              <Button variant="outlined" onClick={handleClickOpen}>
                Allocate
              </Button>
            </Box>
          </Box>
          {/* //Deallocate Asset */}

          {/* {!employeeassetsdetails.length && !loading ? (
            <Typography textAlign={"center"}>
              No assets are allocated !!!
            </Typography>
          ) : !employeeassetsdetails.length && loading ? (
            <Loader />
          ) : ( */}

          {employeeassetsdetails.length ? (
            loading || !employeeassetsdetails.length ? (
              <Loader />
            ) : (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Asset ID
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Asset Name
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Model No
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Category
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Allocation Time
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employeeassetsdetails?.map((asset) => (
                      <TableRow
                        key={asset?.assetId}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="right" component="th" scope="row">
                          {asset?.assetId}
                        </TableCell>
                        <TableCell align="right">{asset?.name}</TableCell>
                        <TableCell align="right">{asset?.modelno}</TableCell>
                        <TableCell align="right">{asset?.category}</TableCell>
                        <TableCell align="right">
                          {asset?.allocationTime}
                        </TableCell>
                        <TableCell align="right">
                          <IconButton>
                            <RemoveCircleIcon
                              sx={{ color: "#DC2626" }}
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Do you want to Delete the Asset?"
                                  )
                                )
                                  HandleDeallocate(asset?.assetId);
                              }}
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )
          ) : (
            <Typography textAlign={"center"}>
              No assets are allocated !!!
            </Typography>
          )}
        </Paper>
      </Grid>
      <AllocateAsset open={open} setOpen={setOpen} />
    </Grid>
  );
}
