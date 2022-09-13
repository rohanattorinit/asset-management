import { Grid, Typography, Box } from "@mui/material";
import React, { Dispatch, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getEmployeeAssets } from "../../redux/actions/EmployeeActions";

export default function Asset() {
  const {
    login: {
      user: { empId },
    },
    employee: { assets },
  } = useSelector((state: RootStore) => state);

  let dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeAssets(empId));
  }, [dispatch, empId]);

  return (
    <Grid container>
      <Sidebar />
      <Grid item xs={12} md={10} p={3}>
        <Typography>Current Asset</Typography>
        <Box sx={{ overflowX: "auto" }}>
          <TableContainer sx={{ width: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Asset ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Model</TableCell>
                  <TableCell align="right">Type of Asset</TableCell>
                  <TableCell align="right">Date of Allocation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assets.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.assetId}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.modelno}</TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell align="right">{row.allocationTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
}
