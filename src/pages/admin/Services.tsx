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
import {
  getServiceDetails,
  getServiceTicketDetails,
} from "../../redux/actions/AdminActions";

function Services() {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event?.target?.value as string);
  };
  let navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();
  const { serviceDetails } = useSelector((state: RootStore) => state.admin);

  useEffect(() => {
    dispatch(getServiceDetails());
  }, [dispatch]);

  const handleChange = (e: any) => {
    setSearch(e?.target?.value);
  };

  let filteredService = serviceDetails?.filter((serviceDetail) => {
    if (search?.length === 0) return serviceDetails;
    return serviceDetail?.title.toLowerCase().includes(search.toLowerCase());
  });

  filteredService = filteredService?.filter((serviceDetail) => {
    if (status === "pending") {
      return serviceDetail?.ticketStatus?.toLowerCase() === "pending";
    } else if (status === "active") {
      return serviceDetail?.ticketStatus?.toLowerCase() === "active";
    } else if (status === "closed") {
      return serviceDetail?.ticketStatus?.toLowerCase() === "closed";
    } else return filteredService;
  });

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
                label="search here by title..."
                onChange={handleChange}
                value={search}
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
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"pending"}>Pending</MenuItem>
                <MenuItem value={"active"}>Active</MenuItem>
                <MenuItem value={"closed"}>Closed</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TableContainer style={{ fontSize: "100" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography>Ticket ID</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>Asset ID</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>Title</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>EMP ID</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>Ticket Status</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredService?.map((serviceDetail) => (
                  <TableRow key={serviceDetail?.ticketId}>
                    <TableCell component="th" scope="row">
                      # {serviceDetail?.ticketId}
                    </TableCell>
                    <TableCell align="center">
                      {serviceDetail?.assetId}
                    </TableCell>
                    <TableCell align="center">{serviceDetail?.title}</TableCell>
                    <TableCell align="center">{serviceDetail?.empId}</TableCell>
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
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Services;
