import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Card, CardContent } from "@mui/material";
import { getEmployeeTickets } from "../../redux/actions/EmployeeActions";
import { Dispatch, useEffect } from "react";
import { RootStore } from "../../redux/store";
import SideBar from "../../components/Sidebar/Sidebar";
import Carousel from "../../components/Carousel/Carousel";
import Toast from "../../components/ErrorHandling/Toast";
import Loader from "../../components/Loader/Loader";

export default function Dashboard() {
  const dispatch: Dispatch<any> = useDispatch();

  const { tickets, loading } = useSelector(
    (state: RootStore) => state?.employee
  );

  const { user } = useSelector((state: RootStore) => state.login);

  const filteredStatus = tickets?.filter((currentticket) => {
    return currentticket?.ticketStatus === "active";
  });

  useEffect(() => {
    dispatch(getEmployeeTickets(user?.empId));
  }, [dispatch, user]);

  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Toast/>
      <Grid item xs={12} md={10} p={3}>
        <Box p={2}>
          <Carousel />
        </Box>
        <Box mt={2}>
          <Typography variant="h5" marginY={2}>
            Your Active Tickets
          </Typography>
          {loading || filteredStatus.length ? (
            <Grid container spacing={5}>
              {loading ? (
                <Loader />
              ) : (
                filteredStatus?.map((requeststatus) => {
                  return (
                    <Grid item xs={6} md={3}>
                      <Card key={requeststatus?.ticketId}>
                        <CardContent>
                          <Typography variant="h5">
                            {"# " + requeststatus?.ticketId}
                          </Typography>
                          <Typography variant="body1">
                            Title : {requeststatus?.title}
                          </Typography>
                          <Typography variant="body1">
                            Description :{" "}
                            {requeststatus?.description?.slice(0, 20)}
                          </Typography>
                          <Typography variant="body1">
                            Status : {requeststatus?.ticketStatus}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })
              )}
            </Grid>
          ) : (
            <Typography textAlign={"center"}>No Active Tickets!!!</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
