import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

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

  const { tickets, employee } = useSelector(
    (state: RootStore) => state.employee
  );

  useEffect(() => {
    dispatch(getEmployeeTickets(employee.empId));
  }, [dispatch, employee.empId]);

  return (
    <Grid container>
      <Sidebar />
      <Grid item xs={12} md={10}>
        <Typography variant="h4" textAlign="center" marginY={5}>
          Ticket Status
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {tickets.map((tickets) => {
            return (
              <Card
                sx={{ width: "18rem", height: "15rem" }}
                key={tickets.ticketId}
              >
                <CardHeader title={"#" + tickets.ticketId} />
                <CardContent>
                  <Typography variant="body1">
                    Title : {tickets.title}
                  </Typography>
                  <Typography variant="body1">
                    Description : {tickets.description}
                  </Typography>
                  <Typography variant="body1">
                    Status : {tickets.ticketStatus}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
