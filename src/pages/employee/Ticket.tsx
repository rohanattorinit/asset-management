import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { Dispatch, useEffect } from "react";
import { getEmployeeTickets } from "../../redux/actions/EmployeeActions";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

export default function Ticket() {
  const dispatch: Dispatch<any> = useDispatch();

  const { tickets, employee, message } = useSelector(
    (state: RootStore) => state.employee
  );
  useEffect(() => {
    dispatch(getEmployeeTickets(employee.empId));
  }, [dispatch, employee, message]);
  return (
    <Grid container sx={{ height: "100%" }}>
      <Sidebar />
      <Grid item xs={12} md={10} p={3}>
        <Typography variant="h4" textAlign="center" marginY={2}>
          Ticket Status
        </Typography>
        <Grid container spacing={5}>
          {tickets.map((tickets) => {
            return (
              <Grid item xs={6} md={4}>
                <Card key={tickets.ticketId}>
                  {/* <CardHeader title={"#" + tickets.ticketId} /> */}
                  <CardContent>
                    <Typography variant="h5">
                      {"# " + tickets.ticketId}
                    </Typography>
                    <Typography variant="body1">
                      Title : {tickets.title}
                    </Typography>
                    <Typography variant="body1">
                      Description : {tickets.description.slice(0, 20)}
                    </Typography>
                    <Typography variant="body1">
                      Status : {tickets.ticketStatus}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
