import {
  Grid,
  Card,
  styled,
  TextField,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import SideBar from "../../components/Sidebar/Sidebar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DragAndDrop } from "../../components/Drag and Drop/DragAndDrop";

export const AddEmployee = () => {
  const StyledTypography = styled(Typography)({
    fontWeight: "bold",
    fontSize: "1.25rem",
    margin: "10px",
  });
  const FlexContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
  });
  return (
    <Grid container sx={{ bgcolor: "#f1f5f9" }}>
      <SideBar />
      <Grid item xs={12} md={10} p={3}>
        <Box>
          <Card
            sx={{
              my: 2,
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <StyledTypography>Create Employee :</StyledTypography>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <form>
                    <FlexContainer>
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                      />
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                      />
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="Job Title"
                        variant="outlined"
                      />
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                      />
                      <TextField
                        margin="normal"
                        required
                        id="outlined-basic"
                        label="Phone No"
                        variant="outlined"
                      />
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                          color="info"
                          size="large"
                          type="submit"
                          variant="outlined"
                        >
                          Submit
                        </Button>
                      </Box>
                    </FlexContainer>
                  </form>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Divider orientation="vertical" />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={5}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginY: "6rem" }}
                  >
                    <DragAndDrop />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};
