import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { textAlign } from "@mui/system";

export default function Ticket() {
  const [textValue, setTextValue] = useState<string>("");

  const onTextChange = (e: any) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue("");
  return (
    <Grid container>
      <Sidebar />
      <Grid item xs={12} md={10}>
        <Box
          p={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ width: 200, padding: 1, margin: 2 }}
            variant="contained"
          >
            Ticket Request
          </Button>
          <Button
            sx={{ width: 200, padding: 1, margin: 2 }}
            variant="contained"
          >
            Ticket Status
          </Button>
        </Box>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
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
