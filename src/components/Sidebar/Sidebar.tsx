import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
export default function SideBar() {
  const isAdmin = true;
  return isAdmin ? <AdminSidebar /> : <EmployeeSidebar />;
}
const AdminSidebar = () => {
  return (
    <Grid item xs={1.5} sx={{ height: "88vh", bgcolor: "#0369A1" }}>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Button component={Link} to="/employee/profile">
          <Typography p={3} variant="h5" color="white">
            Dashboard
          </Typography>
        </Button>
        <Button component={Link} to="/employee/asset">
          <Typography p={3} variant="h5" color="white">
            Employee
          </Typography>
        </Button>
        <Button component={Link} to="/employee/ticket">
          <Typography p={3} variant="h5" color="white">
            Asset
          </Typography>
        </Button>
        <Button component={Link} to="/employee/ticket">
          <Typography p={3} variant="h5" color="white">
            Service
          </Typography>
        </Button>
      </Box>
    </Grid>
  );
};
const EmployeeSidebar = () => {
  return (
    <Grid item xs={1.5} sx={{ height: "88vh", bgcolor: "#0369A1" }}>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Button component={Link} to="/employee/profile">
          <Typography p={3} variant="h5" color="white">
            Profile
          </Typography>
        </Button>
        <Button component={Link} to="/employee/asset">
          <Typography p={3} variant="h5" color="white">
            Asset
          </Typography>
        </Button>
        <Button component={Link} to="/employee/ticket">
          <Typography p={3} variant="h5" color="white">
            Request
          </Typography>
        </Button>
      </Box>
    </Grid>
  );
};
