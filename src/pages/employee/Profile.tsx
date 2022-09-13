import { Grid, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Box, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

export default function Profile() {
  const [open, setOpen] = React.useState(false);

  const { user } = useSelector((state: RootStore) => state.login);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <Sidebar />
      <Grid item xs={12} md={10} p={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Profile</Typography>

          <Button variant="outlined" onClick={handleClickOpen}>
            Edit
          </Button>
        </Box>
        <Paper sx={{ display: "flex", padding: 5, marginY: 3 }} elevation={5}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Employee ID:
                <Typography variant="body1">{user.empId}</Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Name:<Typography variant="body1">{user.name}</Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Job Title:
                <Typography variant="body1">{user.jobTitle}</Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Email:
                <Typography variant="body1">{user.email}</Typography>
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Phone:<Typography variant="body1">{user.phone}</Typography>
              </Typography>
              <Typography
                fontFamily="serif"
                fontWeight="bold"
                variant="h6"
                mt={2}
              >
                Location:
                <Typography variant="body1">{user.location}</Typography>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form>
          <DialogTitle>Edit Deatils</DialogTitle>
          <DialogContent>
            <TextField
              margin="normal"
              id="name"
              required
              label="Name"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              id="name"
              required
              label="Job Title"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="name"
              required
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="name"
              required
              label="Phone"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="name"
              required
              label="Location"
              type="email"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
}
