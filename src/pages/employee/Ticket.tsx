import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Ticket() {
  return (
    <Grid container>
      <Sidebar />
      <Grid
        item
        xs={12}
        md={10}
        p={3}
        sx={{ height: "88vh", overflowX: "auto" }}
      >
        <Grid container>
          <Typography variant="h5"> Ticket Status</Typography>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={"Ticket ID"} />
            <CardContent>
              <Typography variant="body1">Ticket Title :</Typography>
              <Typography variant="body1">Description :</Typography>
              <Typography variant="body1">Status :</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={"Ticket ID"} />
            <CardContent>
              <Typography variant="body1">Ticket Title :</Typography>
              <Typography variant="body1">Description :</Typography>
              <Typography variant="body1">Status :</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={"Ticket ID"} />
            <CardContent>
              <Typography variant="body1">Ticket Title :</Typography>
              <Typography variant="body1">Description :</Typography>
              <Typography variant="body1">Status :</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={"Ticket ID"} />
            <CardContent>
              <Typography variant="body1">Ticket Title :</Typography>
              <Typography variant="body1">Description :</Typography>
              <Typography variant="body1">Status :</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={"Ticket ID"} />
            <CardContent>
              <Typography variant="body1">Ticket Title :</Typography>
              <Typography variant="body1">Description :</Typography>
              <Typography variant="body1">Status :</Typography>
            </CardContent>
          </Card>
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
