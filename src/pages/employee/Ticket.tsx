import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  getEmployeeTickets,
  getNote,
} from "../../redux/actions/EmployeeActions";
import { RootStore } from "../../redux/store";
import { EmpTicketType } from "../../redux/types";
import Toast from "../../components/ErrorHandling/Toast";
import Loader from "../../components/Loader/Loader";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Ticket() {
  const [open, setOpen] = useState(false);
  const [ticket, setTicket] = useState<EmpTicketType>();

  const dispatch: Dispatch<any> = useDispatch();

  const { tickets, message, noteDetails, loading } = useSelector(
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
    <Grid
      container
      //  sx={{ height: "100%" }}
    >
      <Sidebar />
      <Toast />
      <Grid item xs={12} md={10} p={3}>
        <Typography variant="h4" textAlign="center" marginY={2}>
          Ticket Status
        </Typography>

        {tickets.length || loading ? (
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginY: "60px",
            }}
          >
            {loading && !open ? (
              // <Loader />
              <Box>
                <CircularProgress
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </Box>
            ) : (
              tickets?.map((ticket) => {
                return (
                  <Grid item minWidth={300}>
                    <Card
                      key={ticket?.ticketId}
                      onClick={() => handleClick(ticket?.ticketId)}
                      sx={{
                        bgcolor:
                          ticket?.ticketStatus === "active"
                            ? "#EF9A9A"
                            : ticket?.ticketStatus === "pending"
                            ? "#FFE0B2"
                            : "#B2DFDB",
                        cursor: "pointer",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {"ID: " + ticket?.ticketId}
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
                  </Grid>
                );
              })
            )}
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogContent>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <CardContent>
                    <Typography variant="h6">
                      {"ID: " + ticket?.ticketId}
                    </Typography>
                    <Typography variant="body1">
                      Title : {ticket?.title}
                    </Typography>
                    <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
                      Description : {ticket?.description}
                    </Typography>
                    <Typography variant="body1">
                      Status : {ticket?.ticketStatus}
                    </Typography>
                    <Typography variant="body1">
                      Note : {ticket?.note}
                      {noteDetails.length ? (
                        noteDetails.map((note) => {
                          return (
                            <Timeline position="left">
                              <TimelineItem>
                                <TimelineSeparator>
                                  <TimelineDot color="success" />
                                  <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                  <>{note?.note}</>
                                </TimelineContent>
                              </TimelineItem>
                            </Timeline>
                          );
                        })
                      ) : (
                        <> No note </>
                      )}
                    </Typography>
                  </CardContent>
                )}
              </DialogContent>
            </Dialog>
          </Grid>
        ) : (
          <Typography textAlign={"center"}>No tickets found!</Typography>
        )}
      </Grid>
    </Grid>
  );
}
