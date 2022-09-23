import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, styled, Card, CardContent } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";

import { getEmployeeTickets } from "../../redux/actions/EmployeeActions";

import { Dispatch, useEffect, useState } from "react";
import { RootStore } from "../../redux/store";
import SideBar from "../../components/Sidebar/Sidebar";
import Carousel from "../../components/Carousel/Carousel";
const StlyedGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "244px",
  border: "2px solid black",
  borderRadius: "10px",
  backgroundColor: "#CBCBCB",
  cursor: "pointer",
  margin: "10px",
});

export default function Dashboard() {
  const dispatch: Dispatch<any> = useDispatch();

  const { tickets } = useSelector((state: RootStore) => state.employee);

  const { user } = useSelector((state: RootStore) => state.login);

  let filteredstatus = tickets.filter((currentticket) => {
    if (currentticket.ticketStatus === "active") return currentticket;
  });

  useEffect(() => {
    dispatch(getEmployeeTickets(user.empId));
  }, [dispatch, user]);

  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Grid item xs={12} md={10} p={3}>
        <Box p={2}>
          <Carousel />
        </Box>
        <Box mt={2}>
          <Typography variant="h5" marginY={2}>
            Your Active Tickets
          </Typography>
          <Grid container spacing={5}>
            {filteredstatus.map((requeststatus) => {
              return (
                <Grid item xs={6} md={3}>
                  <Card key={requeststatus.ticketId}>
                    {/* <CardHeader title={"#" + tickets.ticketId} /> */}
                    <CardContent>
                      <Typography variant="h5">
                        {"# " + requeststatus.ticketId}
                      </Typography>
                      <Typography variant="body1">
                        Title : {requeststatus.title}
                      </Typography>
                      <Typography variant="body1">
                        Description : {requeststatus.description.slice(0, 20)}
                      </Typography>
                      <Typography variant="body1">
                        Status : {requeststatus.ticketStatus}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
