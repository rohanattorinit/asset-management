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
import {
  createTicket,
  getEmployeeAssets,
} from "../../redux/actions/EmployeeActions";
import BuildIcon from "@mui/icons-material/Build";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

interface TicketType {
  title: string;
  description: string;
}

export default function Asset() {
  const [open, setOpen] = useState(false);
  const [assetId, setAssetId] = useState<number>();

  const ticket: TicketType = {
    title: "",
    description: "",
  };
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

  const handleClick = (assetId: number) => {
    setAssetId(assetId);
    setOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      createTicket(empId, assetId as number, ticket.title, ticket.description)
    );
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
                {assets.map((asset) => (
                  <TableRow
                    key={asset.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {asset.assetId}
                    </TableCell>
                    <TableCell align="right">{asset.name}</TableCell>
                    <TableCell align="right">{asset.modelno}</TableCell>
                    <TableCell align="right">{asset.category}</TableCell>
                    <TableCell align="right">{asset.allocationTime}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Create Ticket">
                        <IconButton onClick={() => handleClick(asset.assetId)}>
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
              onChange={(e) => {
                ticket.title = e.target.value;
              }}
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
              onChange={(e) => {
                ticket.description = e.target.value;
              }}
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
