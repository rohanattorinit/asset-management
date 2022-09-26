import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import SideBar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootStore } from "../../redux/store";
import { Dispatch, useEffect } from "react";
import { getAssets, getEmployees } from "../../redux/actions/AdminActions";
import CountUp from "react-countup";
const StlyedGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "244px",
  border: "2px solid black",
  backgroundColor: "#e2e8f0",
  cursor: "pointer",
  margin: "10px",
  borderRadius: "10px",
});

function AdminDashboard() {
  const { assets, employees } = useSelector((state: RootStore) => state.admin);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getAssets());
    dispatch(getEmployees());
  }, [dispatch]);
  return (
    <>
      <Grid container sx={{ height: "100%" }}>
        <SideBar />
        <Grid item xs={12} md={10} sx={{ overflowX: "auto" }}>
          <Typography variant="h3" textAlign="center" marginY={5}>
            {" "}
            Dashboard{" "}
          </Typography>

          <Grid spacing={2} container justifyContent="center">
            <StlyedGrid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "54px" }}
                variant="h5"
                color="primary"
              >
                <CountUp end={assets?.length} duration={2} />
              </Typography>

              <Typography
                sx={{ fontSize: "24px" }}
                variant="h5"
                color="primary"
              >
                Total Assets
              </Typography>
            </StlyedGrid>
            <StlyedGrid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "54px" }}
                variant="h5"
                color="primary"
              >
                <CountUp end={employees?.length} duration={2} />
              </Typography>
              <Typography
                sx={{ fontSize: "24px" }}
                variant="h5"
                color="primary"
              >
                Total Employees
              </Typography>{" "}
            </StlyedGrid>
            <StlyedGrid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "54px" }}
                variant="h5"
                color="primary"
              >
                <CountUp
                  end={
                    assets?.filter((asset) => asset?.usability === "disposed")
                      .length
                  }
                  duration={2}
                />
              </Typography>
              <Typography
                sx={{ fontSize: "24px" }}
                variant="h5"
                color="primary"
              >
                Broken Assets
              </Typography>
            </StlyedGrid>
            <StlyedGrid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "54px" }}
                variant="h5"
                color="primary"
              >
                <CountUp
                  end={
                    assets?.filter((asset) => asset?.usability === "usable")
                      .length
                  }
                  duration={2}
                />
              </Typography>
              <Typography
                sx={{ fontSize: "24px" }}
                variant="h5"
                color="primary"
              >
                Working Assets
              </Typography>
            </StlyedGrid>
            <StlyedGrid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: "54px" }}
                variant="h5"
                color="primary"
              >
                <CountUp
                  end={
                    assets?.filter((asset) => asset?.usability === "unusable")
                      .length
                  }
                  duration={2}
                />
              </Typography>
              <Typography
                sx={{ fontSize: "24px" }}
                variant="h5"
                color="primary"
              >
                Spare Assets
              </Typography>
            </StlyedGrid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AdminDashboard;
