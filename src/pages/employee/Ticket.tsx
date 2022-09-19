import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid container>
      <Sidebar />

      <Grid item xs={12} md={10} p={3}>
        <Typography variant="h5"> Ticket Status</Typography>

        <Card sx={{ maxWidth: 345 }}>
          <CardHeader title="Ticket ID" />

          <CardContent>
            <Typography variant="h5">Note</Typography>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
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
