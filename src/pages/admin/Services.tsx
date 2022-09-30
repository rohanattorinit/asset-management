import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Box,
  IconButton,
  TextField,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import SideBar from "../../components/Sidebar/Sidebar";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { Dispatch, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import {
  getServiceTicketDetails,
  getTickets,
} from "../../redux/actions/AdminActions";

function Services() {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();
  const { serviceDetails } = useSelector((state: RootStore) => state.admin);

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event?.target.value);
  };

  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (value) => {
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
        <Grid item xs={12} md={10} p={3} sx={{ overflowX: "auto" }}>
          <Box my={3} sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl sx={{ width: 300 }}>
              <TextField
                label="search here by name..."
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
                      <Typography sx={{ fontWeight: "bold" }}>Title</Typography>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {serviceDetails?.map((serviceDetail) => (
                    <TableRow key={serviceDetail?.ticketId}>
                      <TableCell component="th" scope="row">
                        # {serviceDetail?.ticketId}
                      </TableCell>
                      <TableCell align="center">
                        {serviceDetail?.assetId}
                      </TableCell>
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
                      <IconButton
                        onClick={() =>
                          SetEmployeeDetails(serviceDetail?.ticketId)
                        }
                      >
                        <OpenInNewIcon sx={{ color: "darkblue" }} />
                      </IconButton>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <Typography textAlign={"center"}>No Tickets found!</Typography>
            )}
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Services;
