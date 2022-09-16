import { Grid, Typography, Box, IconButton, Button } from "@mui/material";
import React, { Dispatch, useEffect, useState } from "react";
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
import BuildIcon from "@mui/icons-material/Build";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function Asset() {
  const [open, setOpen] = useState(false);

  const {
    login: {
      user: { empId },
    },
    employee: { assets },
  } = useSelector((state: RootStore) => state);

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeAssets(empId));
  }, [dispatch, empId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
  };

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
                    <TableCell align="right">
                      <Tooltip title="Create Ticket">
                        <IconButton onClick={() => setOpen(true)}>
                          <BuildIcon sx={{ cursor: "pointer" }} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Create Ticket</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="Ticket Title"
              required
              label="Title"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              name="Ticket Description"
              required
              label="Describe issue..."
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}
