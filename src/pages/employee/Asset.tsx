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
  CircularProgress,
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
import Toast from "../../components/ErrorHandling/Toast";
import Loader from "../../components/Loader/Loader";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Asset() {
  const [open, setOpen] = useState(false);
  const [assetId, setAssetId] = useState<number>();
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
  });

  const setAssetDetails = (assetId: number) => {
    navigate(`/assets/${assetId}`);
    //console.log(assetId);
  };

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
    employee: { assets, loading },
  } = useSelector((state: RootStore) => state);
  const navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeAssets(empId));
  }, [dispatch, empId]);

  const handleClick = (assetId: number) => {
    setAssetId(assetId);
    setOpen(true);
  };

  const handleNewRequest = () => {
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
      <Toast />
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Current Asset</Typography>
          <Button sx={{ ml: 1 }} variant="outlined" onClick={handleNewRequest}>
            Request for new asset
          </Button>
        </Box>

        <Box sx={{ overflowX: "auto" }}>
          {loading ? (
            <Loader />
          ) : (
            <TableContainer sx={{ width: "auto" }}>
              {assets?.length ? (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Asset ID
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Model No.
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Asset Name
                      </TableCell>

                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Category
                      </TableCell>

                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Description
                      </TableCell>

                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Date of Allocation
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: "bold" }}>
                        Details
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {assets?.map((asset) => (
                      <TableRow
                        key={asset?.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {asset?.assetId}
                        </TableCell>
                        <TableCell align="right">{asset?.modelno}</TableCell>
                        <TableCell align="right">{asset?.name}</TableCell>
                        <TableCell align="right">{asset?.category}</TableCell>
                        <TableCell align="right">
                          {asset?.description}
                        </TableCell>
                        <TableCell align="right">
                          {asset?.allocationTime?.slice(0, 10)}
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip title="Asset Details">
                            <IconButton
                              onClick={() => setAssetDetails(asset?.assetId)}
                            >
                              <OpenInNewIcon
                                sx={{ cursor: "pointer", color: "darkblue" }}
                              />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                        <TableCell align="right">
                          <Tooltip
                            title="Create Ticket"
                            children={
                              <IconButton
                                onClick={() => handleClick(asset?.assetId)}
                              >
                                <BuildIcon sx={{ cursor: "pointer" }} />
                              </IconButton>
                            }
                          />

                          
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <Typography textAlign={"center"}>No Assets found!</Typography>
              )}
            </TableContainer>
          )}
        </Box>
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit}>
          <DialogTitle sx={{ fontWeight: "bold" }}>Create Ticket</DialogTitle>
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
              label="Describe issue/reason..."
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
