import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogContent,
  Grid,
} from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { Dispatch, useEffect, useState } from "react";
import {
  getEmployeeTickets,
  getNote,
} from "../../redux/actions/EmployeeActions";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { EmpTicketType } from "../../redux/types";

export default function Ticket() {
  const [open, setOpen] = useState(false);
  const [ticket, setTicket] = useState<EmpTicketType>();

  const dispatch: Dispatch<any> = useDispatch();

  const { tickets, message, noteDetails } = useSelector(
    (state: RootStore) => state?.employee
  );
  const { user } = useSelector((state: RootStore) => state?.login);

  useEffect(() => {
    dispatch(getEmployeeTickets(user?.empId));
  }, [dispatch, user, message]);

  const handleClick = (ticketId: number) => {
    setTicket(tickets?.filter((ticket) => ticket?.ticketId === ticketId)[0]);
    dispatch(getNote(ticketId));
    setOpen(true);
  };

  return (
    <Grid container sx={{ height: "100%" }}>
      <Sidebar />
      <Grid item xs={12} md={10} p={3}>
        <Typography variant="h4" textAlign="center" marginY={2}>
          Ticket Status
        </Typography>
        <Grid container spacing={5}>
          {tickets?.map((ticket) => {
            return (
              <Grid item xs={6} md={4}>
                <Button onClick={() => handleClick(ticket?.ticketId)}>
                  <Card key={ticket?.ticketId}>
                    <CardContent>
                      <Typography variant="h5">
                        {"# " + ticket?.ticketId}
                      </Typography>
                      <Typography variant="body1">
                        Title : {ticket?.title}
                      </Typography>
                      <Typography variant="body1">
                        Description : {ticket?.description.slice(0, 10)}...
                      </Typography>
                      <Typography variant="body1">
                        Status : {ticket?.ticketStatus}
                      </Typography>
                    </CardContent>
                  </Card>
                </Button>
              </Grid>
            );
          })}
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogContent>
              <CardContent>
                <Typography variant="h5">{"# " + ticket?.ticketId}</Typography>
                <Typography variant="body1">Title : {ticket?.title}</Typography>
                <Typography variant="body1">
                  Description : {ticket?.description.slice(0, 50)}
                </Typography>
                <Typography variant="body1">
                  Status : {ticket?.ticketStatus}
                </Typography>
                <Typography variant="body1">Note :</Typography>
                {noteDetails.map((note) => {
                  console.log(note);
                  return (
                    <p>
                      <li>{note?.note}</li>
                    </p>
                  );
                })}
              </CardContent>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </Grid>
  );
}
