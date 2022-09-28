import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SideBar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import React, { useEffect, useState, Dispatch } from "react";
import { useDispatch } from "react-redux";
import {
  addNote,
  changeTicketStatus,
  getServiceTicketDetails,
} from "../../redux/actions/AdminActions";
import { useLocation, useNavigate } from "react-router-dom";

export const ServiceDetails = () => {
  const [note, setNote] = useState("");
  const [select, setSelect] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const ticketId = parseInt(
    location?.pathname?.replace("/admin/service/", ""),
    10
  );
  const dispatch: Dispatch<any> = useDispatch();
  const { serviceticketdetails } = useSelector(
    (state: RootStore) => state.admin
  );

  useEffect(() => {
    dispatch(getServiceTicketDetails(ticketId));
  }, [dispatch, ticketId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (note?.length > 0) {
      dispatch(addNote(serviceticketdetails?.ticketId, note));
    }

    if (select !== serviceticketdetails?.ticketStatus) {
      dispatch(changeTicketStatus(serviceticketdetails?.ticketId, select));
    }
    (event.target as HTMLFormElement).reset();
    alert("Ticket Updated Successfully!");
    navigate(`/admin/service`);
  };
  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Grid item xs={12} md={10} p={2} sx={{ overflowX: "auto" }}>
        <Paper sx={{ display: "flex", padding: 1 }} elevation={3}>
          <Grid container m={2}>
            <Grid item xs={12} md={4}>
              <Typography fontFamily="serif" fontWeight="bold" variant="h6">
                {" "}
                Ticket ID:
                <Typography variant="body1">
                  {serviceticketdetails?.ticketId}
                </Typography>
              </Typography>
              <Typography fontFamily="serif" fontWeight="bold" variant="h6">
                Emp ID:
                <Typography
                  sx={{ textTransform: "capitalize" }}
                  variant="body1"
                >
                  {serviceticketdetails?.empId}
                </Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Asset ID:
                <Typography
                  variant="body1"
                  sx={{ textTransform: "capitalize" }}
                >
                  {serviceticketdetails?.assetId}
                </Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Time:
                <Typography variant="body1">
                  {serviceticketdetails?.createdAt}
                </Typography>
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Title:
                <Typography variant="body1">
                  {serviceticketdetails?.title}
                </Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Description:
                <Typography
                  variant="body1"
                  sx={{ textTransform: "capitalize" }}
                >
                  {serviceticketdetails?.description}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <form onSubmit={handleSubmit}>
          <Paper
            sx={{ marginY: "2rem", display: "flex", flexDirection: "column" }}
            elevation={3}
          >
            <Box m={2}>
              <FormControl>
                <InputLabel id="status">Status</InputLabel>
                <Select
                  sx={{ minWidth: "100px" }}
                  value={select}
                  onChange={(event) => {
                    setSelect(event?.target?.value);
                  }}
                >
                  <MenuItem value={"active"}>Active</MenuItem>
                  <MenuItem value={"pending"}>Pending</MenuItem>
                  <MenuItem value={"closed"}>Closed</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <TextField
              sx={{ marginX: "1.1rem" }}
              margin="none"
              name="Note"
              label="Note..."
              type="text"
              variant="outlined"
              multiline
              rows={4}
              onChange={(e) => {
                setNote(e?.target?.value);
              }}
            />

            <Box
              sx={{
                marginY: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="submit" variant="contained">
                SUBMIT
              </Button>
            </Box>
          </Paper>
        </form>
      </Grid>
    </Grid>
  );
};
