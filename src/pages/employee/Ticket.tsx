import { Grid } from "@mui/material";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Ticket() {
  const [textValue, setTextValue] = useState<string>("");

  const onTextChange = (e: any) => setTextValue(e.target.value);

  return (
    <Grid container>
      <Sidebar />
      <Grid item xs={12} md={10} p={3}>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginY: 3,
              }}
            >
              <Button variant="outlined">Ticket Request</Button>
              <Button variant="outlined">Ticket Status</Button>
            </Box>
            <TextField
              sx={{ marginTop: "5" }}
              onChange={onTextChange}
              value={textValue}
              label={"Asset ID"} //optional
            />
            <TextField
              sx={{ mt: 3 }}
              onChange={onTextChange}
              value={textValue}
              label={"Request Subject"} //optional
            />
            <TextField
              sx={{ mt: 3 }}
              onChange={onTextChange}
              value={textValue}
              label={"Describe Issue"}
              multiline
              rows={4} //optional
            />
            <Box sx={{ mt: 3 }} textAlign="center">
              <Button variant="contained">Create Request</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
