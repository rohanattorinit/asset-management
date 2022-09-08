import {
  Grid,
  Breadcrumbs,
  Link,
  Card,
  styled,
  TextField,
  Divider,
} from "@mui/material";
import { Container } from "@mui/system";
import SideBar from "../../components/Sidebar/Sidebar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import upload from "../../assets/upload.svg";

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
      <Grid item xs={12} md={10.5}>
        <Container>
          <Breadcrumbs
            sx={{ margin: "1rem 3.5rem" }}
            separator="›"
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="#">
              Employee Details
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Add new employee
            </Link>
          </Breadcrumbs>
          <Card
            sx={{
              margin: "1rem 3.5rem",
              width: "75rem",
              height: "31.25rem",
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <StyledTypography>Create Employee :</StyledTypography>
              <Grid container>
                <Grid item xs={12} md={6}>
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
                  </FlexContainer>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Divider orientation="vertical" />
                </Grid>

                <Grid item xs={12} md={5}>
                  <img src={upload} alt="upload" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};
