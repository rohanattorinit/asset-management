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

export const ServiceDetails = () => {
  const { serviceticketdetails } = useSelector(
    (state: RootStore) => state.admin
  );

  return (
    <Grid container>
      <SideBar />
      <Grid
        item
        xs={12}
        md={10}
        p={2}
        sx={{ height: "88vh", overflowX: "auto" }}
      >
        <Paper sx={{ display: "flex", padding: 1 }} elevation={5}>
          <Grid container m={2}>
            <Grid item xs={12} md={4}>
              <Typography fontFamily="serif" fontWeight="bold" variant="h6">
                {" "}
                Ticket ID:
                <Typography variant="body1">
                  {serviceticketdetails.ticketId}
                </Typography>
              </Typography>
              <Typography fontFamily="serif" fontWeight="bold" variant="h6">
                Emp ID:
                <Typography
                  sx={{ textTransform: "capitalize" }}
                  variant="body1"
                >
                  {serviceticketdetails.empId}
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
                  {serviceticketdetails.assetId}
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
                  {serviceticketdetails.createdAt}
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
                  {serviceticketdetails.title}
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
                  {serviceticketdetails.description}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{ marginY: 3, display: "flex", flexDirection: "column" }}
          elevation={5}
        >
          <Grid container m={2}>
            <FormControl sx={{ width: 300 }}>
              <InputLabel id="status">Status</InputLabel>
              <Select>
                <MenuItem value={"pending"}>Pending</MenuItem>
                <MenuItem value={"active"}>Active</MenuItem>
                <MenuItem value={"closed"}>Closed</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              name="Note"
              label="Note..."
              type="text"
              variant="outlined"
              sx={{ width: "1000px" }}
              multiline
              rows={4}
            />
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="outlined" color="primary">
              SUBMIT
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
