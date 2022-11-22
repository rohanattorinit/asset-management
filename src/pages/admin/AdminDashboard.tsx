import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Dispatch, useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { PiechartOne } from "../../components/PieChart/PieChartOne";
import { PiechartTwo } from "../../components/PieChart/PieChartTwo";


import SideBar from "../../components/Sidebar/Sidebar";
import { getAssets, getEmployees, getTotalAssetCategoryCount } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
};


 function AdminDashboard() {
  const { assets } = useSelector((state: RootStore) => state.admin);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getAssets({ name: "" }))
    dispatch(getEmployees({ name: "" }))
    dispatch(getTotalAssetCategoryCount())
  }, []);

  return (
  <>
      <Grid container sx={{ height: "100%" }}>
        <SideBar />

        <Grid item xs={12} md={10} >
          

      <Grid container  sx={{  padding: 3, display : " flex", justifyContent:"space-around"  }} >
          <Grid item xs={12} md={2} sx={{ ...commonStyles, borderRadius: '16px', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center' }} >
          <Typography
                 sx={{ fontSize: "28px" }}
                variant="h5"
                color="primary"
              >
              <CountUp end={assets?.length} duration={2} />
               </Typography>
          <Typography
                 sx={{ fontSize: "18px" }}
                variant="h5"
                color="primary"
              >
                Total Assets
               </Typography>
               
          </Grid>

          <Grid item xs={12} md={2} sx={{  ...commonStyles, borderRadius: '16px', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center' }} >
          <Typography
                 sx={{ fontSize: "28px" }}
                variant="h5"
                color="primary"
              >
                <CountUp end={
                    assets?.filter((asset) => !asset?.isRented)
                       .length
                   }
                   duration={2}
                 />
               </Typography>
          <Typography
                 sx={{ fontSize: "18px" }}
                variant="h5"
                color="primary"
              >
                Owned Assets
               </Typography>
               
          </Grid>
          <Grid item xs={12} md={2} sx={{  ...commonStyles, borderRadius: '16px', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center' }} >
          <Typography
                 sx={{ fontSize: "28px" }}
                variant="h5"
                color="primary"
              >
                <CountUp
                   end={
                    assets?.filter((asset) => asset?.isRented)
                       .length
                   }
                   duration={2}
                 />
               </Typography>
          <Typography
                 sx={{ fontSize: "18px" }}
                variant="h5"
                color="primary"
              >
                Rented Assets
               </Typography>
               
          </Grid>
          </Grid>

          <Grid container  sx={{  padding: 3, display : " flex", justifyContent:"space-around" }} >
          <Grid item xs={12} md={2} sx={{  ...commonStyles, borderRadius: '16px', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}} >
          <Typography
                 sx={{ fontSize: "28px" }}
                variant="h5"
                color="primary"
              >
                <CountUp
                   end={
                    assets?.filter((asset) => asset?.status === "surplus")
                       .length
                   }
                   duration={2}
                 />
               </Typography>
          <Typography
                 sx={{ fontSize: "18px" }}
                variant="h5"
                color="primary"
              >
                Surplus Assets
               </Typography>
               
          </Grid>

          <Grid item xs={12} md={2} sx={{  ...commonStyles, borderRadius: '16px', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}} >
          <Typography
                 sx={{ fontSize: "28px" }}
                variant="h5"
                color="primary"
              >
                <CountUp
                   end={
                    assets?.filter((asset) => asset?.status === "allocated" ||  "surplus")
                       .length
                   }
                   duration={2}
                 />
               </Typography>
          <Typography
                 sx={{ fontSize: "18px" }}
                variant="h5"
                color="primary"
              >
                Working Assets
               </Typography>
               
          </Grid>
          <Grid item xs={12} md={2} sx={{  ...commonStyles, borderRadius: '16px', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}} >
          <Typography
                 sx={{ fontSize: "28px" }}
                variant="h5"
                color="primary"
              >
                <CountUp
                   end={
                    assets?.filter((asset) => asset?.status === "repairable")
                       .length
                   }
                   duration={2}
                 />
               </Typography>
          <Typography
                 sx={{ fontSize: "18px" }}
                variant="h5"
                color="primary"
              >
                Repairable Assets
               </Typography>
               
          </Grid>
          <Grid item xs={12} md={2} sx={{  ...commonStyles, borderRadius: '16px', display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}} >
          <Typography
                 sx={{ fontSize: "28px" }}
                variant="h5"
                color="primary"
              >
                <CountUp
                   end={
                    assets?.filter((asset) => asset?.status === "broken")
                       .length
                   }
                   duration={2}
                 />
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
          <Grid container  sx={{  padding: 1, display : " flex", justifyContent:"space-around" }} >
              <Box sx={{  padding: 5,  justifyContent:"space-between" }}>
              <PiechartOne />
              </Box>
              <Box sx={{  padding: 5,  justifyContent:"space-between", }}>
                <PiechartTwo/>
              </Box>
          </Grid>
      </Grid>
</Grid>
      
     
  </>
  );
}

 export default AdminDashboard;





//  {/* //         <Toast />
//         <Grid item xs={12} md={10} sx={{ overflowX: "auto" }}>
//           <Typography variant="h3" textAlign="center" marginY={5}>
//             Dashboard
//           </Typography>

//           <Grid spacing={2} container justifyContent="center">
//             <StlyedGrid
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "54px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 <CountUp end={assets?.length} duration={2} />
//               </Typography>

//               <Typography
//                 sx={{ fontSize: "24px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 Total Assets
//               </Typography>
//             </StlyedGrid>
//             <StlyedGrid
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "54px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 <CountUp end={employees?.length} duration={2} />
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "24px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 Total Employees
//               </Typography>{" "}
//             </StlyedGrid>
//             <StlyedGrid
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "54px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 <CountUp
//                   end={
//                     assets?.filter((asset) => asset?.usability === "disposed")
//                       .length
//                   }
//                   duration={2}
//                 />
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "24px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 Broken Assets
//               </Typography>
//             </StlyedGrid>
//             <StlyedGrid
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "54px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 <CountUp
//                   end={
//                     assets?.filter((asset) => asset?.usability === "usable")
//                       .length
//                   }
//                   duration={2}
//                 />
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "24px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 Working Assets
//               </Typography>
//             </StlyedGrid>
//             <StlyedGrid
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "54px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 <CountUp
//                   end={
//                     assets?.filter((asset) => asset?.usability === "unusable")
//                       .length
//                   }
//                   duration={2}
//                 />
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "24px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 Spare Assets
//               </Typography>
//             </StlyedGrid>
//           </Grid>
//         </Grid> */}




// import styled from "@emotion/styled";
// import { Grid, Typography } from "@mui/material";
// import { Dispatch, useEffect } from "react";
// import CountUp from "react-countup";
// import { useDispatch, useSelector } from "react-redux";
// import Toast from "../../components/ErrorHandling/Toast";
// import SideBar from "../../components/Sidebar/Sidebar";
// import { getAssets, getEmployees } from "../../redux/actions/AdminActions";
// import { RootStore } from "../../redux/store";

// const StlyedGrid = styled(Grid)({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "250px",
//   height: "244px",
//   border: "2px solid black",
//   backgroundColor: "#e2e8f0",
//   margin: "10px",
//   borderRadius: "10px",
// });

// function AdminDashboard() {
//   const { assets, employees } = useSelector((state: RootStore) => state.admin);
//   const dispatch: Dispatch<any> = useDispatch();

//   useEffect(() => {
//     dispatch(getAssets({ name: "" }));
//     dispatch(getEmployees({ name: "" }));
//   }, [dispatch]);

//   return (
//     <>
//       <Grid container sx={{ height: "100%" }}>
//         <SideBar />
//         <Toast />
//         <Grid item xs={12} md={10} sx={{ overflowX: "auto" }}>
//           <Typography variant="h3" textAlign="center" marginY={5}>
//             Dashboard
//           </Typography>

//           <Grid spacing={2} container justifyContent="center">
//             <StlyedGrid
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "54px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 <CountUp end={assets?.length} duration={2} />
//               </Typography>

//               <Typography
//                 sx={{ fontSize: "24px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 Total Assets
//               </Typography>
//             </StlyedGrid>
//             <StlyedGrid
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "54px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 <CountUp end={employees?.length} duration={2} />
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "24px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 Total Employees
//               </Typography>{" "}
//             </StlyedGrid>
//             <StlyedGrid
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "54px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 <CountUp
//                   end={
//                     assets?.filter((asset) => asset?.usability === "disposed")
//                       .length
//                   }
//                   duration={2}
//                 />
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "24px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 Broken Assets
//               </Typography>
//             </StlyedGrid>
//             <StlyedGrid
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "54px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 <CountUp
//                   end={
//                     assets?.filter((asset) => asset?.usability === "usable")
//                       .length
//                   }
//                   duration={2}
//                 />
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "24px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 Working Assets
//               </Typography>
//             </StlyedGrid>
//             <StlyedGrid
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{ fontSize: "54px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 <CountUp
//                   end={
//                     assets?.filter((asset) => asset?.usability === "unusable")
//                       .length
//                   }
//                   duration={2}
//                 />
//               </Typography>
//               <Typography
//                 sx={{ fontSize: "24px" }}
//                 variant="h5"
//                 color="primary"
//               >
//                 Spare Assets
//               </Typography>
//             </StlyedGrid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default AdminDashboard;
