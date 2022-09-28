import { Grid, Typography, Box, IconButton, Button } from "@mui/material";
import React, { Dispatch, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import {
  createTicket,
  getEmployeeAssets,
} from "../../redux/actions/EmployeeActions";
import BuildIcon from "@mui/icons-material/Build";
import { useNavigate } from "react-router-dom";

export default function Asset() {
  const [open, setOpen] = useState(false);
  const [assetId, setAssetId] = useState<number>();
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTicket({
      ...ticket,
      [name]: value,
    });
  };

  const {
    login: {
      user: { empId },
    },
    employee: { assets },
  } = useSelector((state: RootStore) => state);
  let navigate = useNavigate();

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
      createTicket(empId, assetId as number, ticket?.title, ticket?.description)
    );
    setOpen(false);
    setTicket({
      title: "",
      description: "",
    });
    navigate(`/ticket`);
  };

  return (
    <Grid container sx={{ height: "100%" }}>
      <Sidebar />

      <Grid
        item
        xs={12}
        md={10}
        p={3}
        sx={{
          display: "inline-block",
          verticalAlign: "top",
          height: "100%",
          overflow: "auto",
        }}
      >
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
                {assets?.map((asset) => (
                  <TableRow
                    key={asset?.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {asset?.assetId}
                    </TableCell>
                    <TableCell align="right">{asset?.name}</TableCell>
                    <TableCell align="right">{asset?.modelno}</TableCell>
                    <TableCell align="right">{asset?.category}</TableCell>
                    <TableCell align="right">{asset?.allocationTime}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Create Ticket">
                        <IconButton onClick={() => handleClick(asset?.assetId)}>
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
              name="title"
              required
              label="Title"
              type="text"
              fullWidth
              variant="outlined"
              value={ticket?.title}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="description"
              required
              label="Describe issue..."
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={ticket?.description}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}
