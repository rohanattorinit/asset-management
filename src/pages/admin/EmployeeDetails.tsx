import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Typography, IconButton, Box, TextField } from "@mui/material";
import SideBar from "../../components/Sidebar/Sidebar";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { RootStore } from "../../redux/store";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import {
  allocateAssets,
  deallocateAssets,
  getAssetDetails,
  getAssets,
  getEmployeeDetails,
} from "../../redux/actions/AdminActions";
import Checkbox from "@mui/material/Checkbox";
import { useLocation } from "react-router-dom";

export default function EmployeeDetails() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [assetIdCheck, setAssetId] = useState<number[]>([]);

  const { employeeDetails, employeeassetsdetails, message, assets } =
    useSelector((state: RootStore) => state.admin);
  const dispatch: Dispatch<any> = useDispatch();
  const location = useLocation();
  const empId = location?.pathname.replace("/admin/employee/", "");
  useEffect(() => {
    dispatch(getEmployeeDetails(empId));
    dispatch(getAssetDetails(empId));
    dispatch(getAssets());
  }, [dispatch, message, empId]);

  const handleChange = (e: any) => {
    setSearch(e?.target?.value);
  };

  const filteredAsset = assets?.filter((asset) => {
    if (search?.length === 0) {
      return asset?.status === "available" && asset?.usability === "usable";
    }
    return (
      asset?.status === "available" &&
      asset?.usability === "usable" &&
      asset?.name?.toLowerCase()?.includes(search?.toLowerCase())
    );
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HandleDeallocate = (assetId: number) => {
    dispatch(deallocateAssets(employeeDetails?.empId, assetId));
  };

  const handleCheckChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    assetId: number
  ) => {
    if (event?.target?.checked) setAssetId([...assetIdCheck, assetId]);
    else {
      setAssetId(assetIdCheck?.filter((e) => e !== assetId));
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(allocateAssets(employeeDetails?.empId, assetIdCheck));
    setAssetId([]);
    setOpen(false);
  };
  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Asset ID</TableCell>
                  <TableCell align="right">Asset Name</TableCell>
                  <TableCell align="right">Model No</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Allocation Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employeeassetsdetails?.map((asset) => (
                  <TableRow
                    key={asset?.assetId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right" component="th" scope="row">
                      {asset?.assetId}
                    </TableCell>
                    <TableCell align="right">{asset?.name}</TableCell>
                    <TableCell align="right">{asset?.modelno}</TableCell>
                    <TableCell align="right">{asset?.category}</TableCell>
                    <TableCell align="right">{asset?.allocationTime}</TableCell>
                    <IconButton>
                      <RemoveCircleIcon
                        sx={{ color: "#DC2626" }}
                        onClick={() => {
                          if (
                            window.confirm("Do you want to Delete the Asset?")
                          )
                            HandleDeallocate(asset?.assetId);
                        }}
                      />
                    </IconButton>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      {/* Allocate an Asset */}
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Allocate Asset</DialogTitle>
          <DialogContent>
            <TextField
              label="search by AssetName..."
              onChange={handleChange}
              value={search}
            ></TextField>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Asset Name</TableCell>
                    <TableCell align="right">AssetID</TableCell>
                    <TableCell align="right">Allocate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredAsset?.map((asset) => (
                    <TableRow
                      key={asset?.assetId}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {asset?.name}
                      </TableCell>
                      <TableCell align="right">{asset?.assetId}</TableCell>

                      <Checkbox
                        sx={{ color: "darkblue" }}
                        onChange={(event) =>
                          handleCheckChange(event, asset?.assetId)
                        }
                      />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button type="submit" variant="contained">
              Allocate
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}
