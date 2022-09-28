import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import { Button, Dialog, DialogContent, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { Dispatch, useEffect, useState } from "react";
import { getEmployeeTickets } from "../../redux/actions/EmployeeActions";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { EmpTicketType } from "../../redux/types";

export default function Ticket() {
   const [open, setOpen] = useState(false);
   const [ticket, setTicket] = useState<EmpTicketType>();

   const dispatch: Dispatch<any> = useDispatch();

   const { tickets, message } = useSelector(
      (state: RootStore) => state.employee
   );
   const { user } = useSelector((state: RootStore) => state.login);

   useEffect(() => {
      dispatch(getEmployeeTickets(user?.empId));
   }, [dispatch, user, message]);

   const handleClick = (ticketId: number) => {
      setTicket(tickets?.filter((ticket) => ticket?.ticketId === ticketId)[0]);
      setOpen(true);
   };

   return (
      <Grid container sx={{ height: "100%" }}>
         <Sidebar />
         <Grid item xs={12} md={10} p={3}>
            <Typography variant="h4" textAlign="center" marginY={2}>
               Ticket Status
            </Typography>
            <Grid container spacing={2}>
               {tickets?.map((ticket) => {
                  return (
                     <Grid item minWidth={300}>
                        <Card
                           key={ticket?.ticketId}
                           onClick={() => handleClick(ticket?.ticketId)}
                           sx={{
                              bgcolor:
                                 ticket?.ticketStatus == "active"
                                    ? "#EF9A9A"
                                    : ticket?.ticketStatus == "pending"
                                    ? "#FFE0B2"
                                    : "#B2DFDB",
                           }}
                        >
                           <CardContent>
                              <Typography variant="h6">
                                 {"ID: " + ticket?.ticketId}
                              </Typography>
                              <Typography variant="body1">
                                 Title : {ticket?.title}
                              </Typography>
                              <Typography variant="body1">
                                 Description :{" "}
                                 {ticket?.description.slice(0, 10)}...
                              </Typography>
                              <Typography variant="body1">
                                 Status : {ticket?.ticketStatus}
                              </Typography>
                           </CardContent>
                        </Card>
                     </Grid>
                  );
               })}
               <Dialog open={open} onClose={() => setOpen(false)}>
                  <DialogContent>
                     <CardContent>
                        <Typography variant="h6">
                           {"ID: " + ticket?.ticketId}
                        </Typography>
                        <Typography variant="body1">
                           Title : {ticket?.title}
                        </Typography>
                        <Typography variant="body1">
                           Description : {ticket?.description.slice(0, 50)}
                        </Typography>
                        <Typography variant="body1">
                           Status : {ticket?.ticketStatus}
                        </Typography>
                        <Typography variant="body1">
                           Note : {ticket?.note}
                        </Typography>
                     </CardContent>
                  </DialogContent>
               </Dialog>
            </Grid>
         </Grid>
      </Grid>
   );
}
