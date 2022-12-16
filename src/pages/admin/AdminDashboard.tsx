import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Dispatch, useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { PiechartOne } from "../../components/PieChart/PieChartOne";
import { PiechartTwo } from "../../components/PieChart/PieChartTwo";

import SideBar from "../../components/Sidebar/Sidebar";
import { getTotalAssetCategoryCount } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "5rem",
  height: "5rem",
};

function AdminDashboard() {
  const { counts, loading } = useSelector((state: RootStore) => state.admin);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(getTotalAssetCategoryCount());
  }, []);
  return (
    <>
      <Grid container sx={{ height: "100%" }}>
        <SideBar />

        {loading ? (
          <Grid item xs={12} md={10} sx={{ marginY: "80px" }}>
            <Loader />
          </Grid>
        ) : (
          <Grid item xs={12} md={10}>
            <Grid
              container
              sx={{
                padding: 3,
                display: " flex",
                justifyContent: "space-around",
              }}
            >
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  ...commonStyles,
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "28px" }}
                  variant="h5"
                  color="primary"
                >
                  <CountUp end={counts?.totalAssets} duration={2} />
                </Typography>
                <Typography
                  sx={{ fontSize: "18px" }}
                  variant="h5"
                  color="primary"
                >
                  Total Assets
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  ...commonStyles,
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "28px" }}
                  variant="h5"
                  color="primary"
                >
                  <CountUp end={counts?.ownAssets} duration={2} />
                </Typography>
                <Typography
                  sx={{ fontSize: "18px" }}
                  variant="h5"
                  color="primary"
                >
                  Owned Assets
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  ...commonStyles,
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "28px" }}
                  variant="h5"
                  color="primary"
                >
                  <CountUp end={counts?.rentedAssets} duration={2} />
                </Typography>
                <Typography
                  sx={{ fontSize: "18px" }}
                  variant="h5"
                  color="primary"
                >
                  Rented Assets
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  ...commonStyles,
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "28px" }}
                  variant="h5"
                  color="primary"
                >
                  <CountUp end={counts?.WorkingAssets} duration={2} />
                </Typography>
                <Typography
                  sx={{ fontSize: "18px" }}
                  variant="h5"
                  color="primary"
                >
                  Working Assets
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                padding: 3,
                display: " flex",
                justifyContent: "space-around",
              }}
            >
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  ...commonStyles,
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "28px" }}
                  variant="h5"
                  color="primary"
                >
                  <CountUp end={counts?.surplusAssets} duration={2} />
                </Typography>
                <Typography
                  sx={{ fontSize: "18px" }}
                  variant="h5"
                  color="primary"
                >
                  Surplus Assets
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  ...commonStyles,
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "28px" }}
                  variant="h5"
                  color="primary"
                >
                  <CountUp end={counts?.allocatedAssets} duration={2} />
                </Typography>
                <Typography
                  sx={{ fontSize: "18px" }}
                  variant="h5"
                  color="primary"
                >
                  Allocated Assets
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  ...commonStyles,
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "28px" }}
                  variant="h5"
                  color="primary"
                >
                  <CountUp end={counts?.RepairabaleAssets} duration={2} />
                </Typography>
                <Typography
                  sx={{ fontSize: "18px" }}
                  variant="h5"
                  color="primary"
                >
                  Repairable Assets
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={2}
                sx={{
                  ...commonStyles,
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: "28px" }}
                  variant="h5"
                  color="primary"
                >
                  <CountUp end={counts?.brokenAssets} duration={2} />
                </Typography>
                <Typography
                  sx={{ fontSize: "18px" }}
                  variant="h5"
                  color="primary"
                >
                  Broken Assets
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                padding: 1,
                display: " flex",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  cursor: "pointer",
                  padding: 5,
                  justifyContent: "space-between",
                }}
              >
                <PiechartOne />
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  padding: 5,
                  justifyContent: "space-between",
                }}
              >
                <PiechartTwo />
              </Box>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default AdminDashboard;
