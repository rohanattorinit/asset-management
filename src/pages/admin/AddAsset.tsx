import {
  Grid,
  Breadcrumbs,
  Link,
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
import upload from "../../assets/upload.svg";
import { DragAndDrop } from "../../components/Drag and Drop/DragAndDrop";

export const AddAsset = () => {
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
      <Grid
        item
        xs={12}
        md={10.5}
        p={3}
        sx={{ height: "88vh", overflowX: "auto" }}
      >
        <Box>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Assets
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Add new Asset
            </Link>
          </Breadcrumbs>
          <Card
            sx={{
              my: 2,
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <StyledTypography>Add Asset :</StyledTypography>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <form>
                    <FlexContainer>
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Type"
                        variant="outlined"
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Status"
                        variant="outlined"
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Brand"
                        variant="outlined"
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Model No"
                        variant="outlined"
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Usability"
                        variant="outlined"
                      />
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                          color="info"
                          size="large"
                          type="submit"
                          variant="outlined"
                        >
                          Add Asset
                        </Button>
                      </Box>
                    </FlexContainer>
                  </form>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Divider orientation="vertical" />
                </Grid>

                <Grid item xs={12} md={5}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginY: "2rem" }}
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
