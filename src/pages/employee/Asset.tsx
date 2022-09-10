import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Asset() {
  function createData(
    Id: number | string,
    name: string,
    model: number | string,
    typeofasset: string,
    date: Date
  ) {
    return { Id, name, model, typeofasset, date };
  }
  const rows = [
    createData(
      5786,
      "Asus Zenbook 17",
      6.0,
      "Fold Laptop",
      new Date("2022-11-09")
    ),
    createData(64, "sf", 9.0, "jsbj", new Date("01 Jan 1970 00:00:00 GMT")),
    createData(
      "Eclair",
      "svxsh",
      16.0,
      "sxhsh",
      new Date("01 Jan 1970 00:00:00 GMT")
    ),
    createData(
      "Cupcake",
      "xvaghv",
      3.7,
      "sxjs",
      new Date("01 Jan 1970 00:00:00 GMT")
    ),
    createData(
      "Gingerbread",
      "axhs",
      16.0,
      "svxjs",
      new Date("01 Jan 1970 00:00:00 GMT")
    ),
  ];
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
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.model}</TableCell>
                    <TableCell align="right">{row.typeofasset}</TableCell>
                    <TableCell align="right">{row.date.toString()}</TableCell>
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
