import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
 
  Tooltip,
} from "@mui/material";
import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import Toast from "../../components/ErrorHandling/Toast";
import Loader from "../../components/Loader/Loader";
import SideBar from "../../components/Sidebar/Sidebar";
import {
  getServiceTicketDetails,
  getTickets,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

function Services() {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();
  const { serviceDetails, loading } = useSelector(
    (state: RootStore) => state.admin
  );

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event?.target.value);
  };

  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (value: any) => {
      setSearch(value);
    },
    // delay in ms
    300
  );

  useEffect(() => {
    dispatch(getTickets({ status: status, title: search }));
  }, [dispatch, search, status]);

  const SetEmployeeDetails = (ticketId: number) => {
    dispatch(getServiceTicketDetails(ticketId));
    navigate(`/admin/service/${ticketId}`);
  };

  return (
    <>
      <Grid container sx={{ height: "100%" }}>
        <SideBar />
        <Toast />
        <Grid item xs={12} md={10} p={3} sx={{ overflowX: "auto" }}>
          <Box my={3} sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl sx={{ width: 300 }}>
              <TextField
                label="search by title..."
                onChange={(e) => debounced(e?.target?.value)}
              ></TextField>
            </FormControl>
            <FormControl sx={{ width: 300 }}>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="Status"
                value={status}
                label="Ticket Status"
                onChange={handleStatusChange}
              >
                <MenuItem value={""}>All</MenuItem>
                <MenuItem value={"pending"}>Pending</MenuItem>
                <MenuItem value={"active"}>Active</MenuItem>
                <MenuItem value={"closed"}>Closed</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {loading ? (
            <Loader />
          ) : (
            <TableContainer style={{ fontSize: "100" }}>
              {serviceDetails.length ? (
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Ticket ID
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Asset ID
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Title
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold" }}>
                          EMP ID
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Ticket Status
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Details
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {serviceDetails?.map((serviceDetail) => (
                      <TableRow key={serviceDetail?.ticketId}>
                        <TableCell component="th" scope="row">
                          # {serviceDetail?.ticketId}
                        </TableCell>

                        {serviceDetail?.assetId ? (
                          <TableCell align="center">
                            {serviceDetail?.assetId}
                          </TableCell>
                        ) : (
                          <TableCell align="center"> New request </TableCell>
                        )}

                        <TableCell align="center">
                          {serviceDetail?.title}
                        </TableCell>
                        <TableCell align="center">
                          {serviceDetail?.empId}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {serviceDetail?.ticketStatus?.toUpperCase()}
                        </TableCell>
                        <TableCell align="center">
                          <Tooltip
                            title="Ticket Details"
                            children={
                              <IconButton
                                onClick={() =>
                                  SetEmployeeDetails(serviceDetail?.ticketId)
                                }
                              >
                                <OpenInNewIcon sx={{ color: "darkblue" }} />
                              </IconButton>
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <Typography textAlign={"center"}>No Tickets found!</Typography>
              )}
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Services;
