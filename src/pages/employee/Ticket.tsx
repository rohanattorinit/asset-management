import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { Dispatch, useEffect } from "react";
import { getEmployeeTickets } from "../../redux/actions/EmployeeActions";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

export default function Ticket() {
  const dispatch: Dispatch<any> = useDispatch();

  const { tickets, employee } = useSelector(
    (state: RootStore) => state.employee
  );

  useEffect(() => {
    dispatch(getEmployeeTickets(employee.empId));
  }, [dispatch, employee.empId]);

  return (
    <Grid container>
      <Sidebar />
      <Grid item xs={12} md={10}>
        <Typography variant="h4" textAlign="center" marginY={5}>
          Ticket Status
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {tickets.map((tickets) => {
            return (
              <Card
                sx={{ width: "18rem", height: "15rem" }}
                key={tickets.ticketId}
              >
                <CardHeader title={"#" + tickets.ticketId} />
                <CardContent>
                  <Typography variant="body1">
                    Title : {tickets.title}
                  </Typography>
                  <Typography variant="body1">
                    Description : {tickets.description}
                  </Typography>
                  <Typography variant="body1">
                    Status : {tickets.ticketStatus}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

// import { Grid } from "@mui/material";
// import { useState } from "react";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import Button from "@mui/material/Button";
// import { Box } from "@mui/material";
// import TextField from "@mui/material/TextField";

// export default function Ticket() {
//   // const [textValue, setTextValue] = useState<string>("");

//   // const onTextChange = (e: any) => setTextValue(e.target.value);

//   return (
//     <Grid container>
//       <Sidebar />
//       {/* <Grid item xs={12} md={10} p={3}>
//         <Grid container justifyContent="center">
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginY: 3,
//               }}
//             >
//               <Button variant="outlined">Ticket Request</Button>
//               <Button variant="outlined">Ticket Status</Button>
//             </Box>
//             <TextField
//               sx={{ marginTop: "5" }}
//               onChange={onTextChange}
//               value={textValue}
//               label={"Asset ID"} //optional
//             />
//             <TextField
//               sx={{ mt: 3 }}
//               onChange={onTextChange}
//               value={textValue}
//               label={"Request Subject"} //optional
//             />
//             <TextField
//               sx={{ mt: 3 }}
//               onChange={onTextChange}
//               value={textValue}
//               label={"Describe Issue"}
//               multiline
//               rows={4} //optional
//             />
//             <Box sx={{ mt: 3 }} textAlign="center">
//               <Button variant="contained">Create Request</Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Grid>*/}

//     </Grid>
//   );
// }
