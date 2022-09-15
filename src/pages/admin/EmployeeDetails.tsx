import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Grid,
  Typography,
  IconButton,
  Box,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import SideBar from "../../components/Sidebar/Sidebar";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { RootStore } from "../../redux/store";
import { useSelector } from "react-redux";
//import { getEmployee } from "../../redux/actions/EmployeeActions";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import {
  deallocateAssets,
  getEmployeeAssetDetails,
} from "../../redux/actions/AdminActions";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
];

export default function EmployeeDetails() {
  const { employeedetails, employeeassetsdetails, message } = useSelector(
    (state: RootStore) => state.admin
  );

  const dispatch: Dispatch<any> = useDispatch();

  // useEffect(() => {
  //   dispatch(getEmployeeAssetDetails(employeedetails.empId));
  // }, [dispatch, employeedetails.empId, message]);

  const [values] = React.useState(["Laptop", "Mouse", "KeyBoard", "Charger"]);
  const [selected, setSelected] = useState("Bam");

  function handleChange(event: any) {
    setSelected(event.target.value);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HandleDeallocate = (assetId: number) => {
    dispatch(deallocateAssets(employeedetails.empId, assetId));
  };

  return (
    <Grid container>
      <SideBar />
      <Grid item xs={12} md={10} p={2}>
        <Paper sx={{ display: "flex", padding: 1 }} elevation={5}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                {" "}
                Employee ID:
                <Typography variant="body1">{employeedetails.empId}</Typography>
              </Typography>
              <Typography fontFamily="serif" fontWeight="bold" variant="h6">
                Name:
                <Typography variant="body1">{employeedetails.name}</Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Job Title:
                <Typography variant="body1">
                  {employeedetails.jobTitle}
                </Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Email:
                <Typography variant="body1">{employeedetails.email}</Typography>
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
                <Typography variant="body1">{employeedetails.phone}</Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Location:
                <Typography variant="body1">
                  {employeedetails.location}
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
            }}
          >
            <Typography variant="h5">Current Asset</Typography>
            <Box display="flex">
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
                {employeeassetsdetails.map((asset) => (
                  <TableRow
                    key={asset.assetId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right" component="th" scope="row">
                      {asset.assetId}
                    </TableCell>
                    <TableCell align="right">{asset.name}</TableCell>
                    <TableCell align="right">{asset.modelno}</TableCell>
                    <TableCell align="right">{asset.category}</TableCell>
                    <TableCell align="right">{asset.allocationTime}</TableCell>
                    <IconButton>
                      <RemoveCircleIcon
                        sx={{ color: "#dc2626" }}
                        onClick={() => HandleDeallocate(asset.assetId)}
                      />
                    </IconButton>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form>
          <DialogTitle>Allocate Asset</DialogTitle>
          <DialogContent>
            <InputLabel htmlFor="agent-simple">Category</InputLabel>
            <Select value={selected} onChange={handleChange}>
              {values.map((value, index) => {
                return <MenuItem value={value}>{value}</MenuItem>;
              })}
            </Select>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>AssetID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Allocate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <Button
                        onClick={() => {
                          alert("Asset is Alloted");
                        }}
                      >
                        <CheckCircleOutlineIcon sx={{ color: "darkblue" }} />
                      </Button>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button type="submit">Close</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}
