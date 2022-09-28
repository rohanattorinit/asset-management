import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/Sidebar/Sidebar";

import { RootStore } from "../../redux/store";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function RentalAssets() {
  return (
    <>
      <Grid container sx={{ height: "100%" }}>
        <SideBar />

        <Grid item xs={12} md={10} p={3} sx={{ overflowX: "auto" }}>
          <Box marginY={2}></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          ></Box>
          <Box my={3}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography align="center">Asset Name</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography align="center">Agency</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography align="center">Rent per month</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography align="center">Start Date of rent</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography align="center">End date of rent</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography align="center">Deposit</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography align="center">Status</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.calories}</TableCell>
                      <TableCell align="center">{row.fat}</TableCell>
                      <TableCell align="center">{row.carbs}</TableCell>
                      <TableCell align="center">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default RentalAssets;
