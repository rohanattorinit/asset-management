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
import React from "react";

export const AddAsset = () => {
  interface CreateAssetType {
    brandName: string;
    assetName: string;
    assetType: string;
    category: string;
    modelNo: string;
    description: string;
    status: string;
    usability: string;
  }
  const assetDetails: CreateAssetType = {
    brandName: "",
    assetName: "",
    assetType: "",
    category: "",
    modelNo: "",
    description: "",
    status: "",
    usability: "",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
        md={10}
        p={3}
        sx={{ height: "88vh", overflowX: "auto" }}
      >
        <Box>
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
                  <form onSubmit={handleSubmit}>
                    <FlexContainer>
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Type"
                        variant="outlined"
                        onChange={(e) => {
                          assetDetails.assetType = e.target.value;
                        }}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        onChange={(e) => {
                          assetDetails.brandName = e.target.value;
                        }}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Status"
                        variant="outlined"
                        onChange={(e) => {
                          assetDetails.status = e.target.value;
                        }}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Brand"
                        variant="outlined"
                        onChange={(e) => {
                          assetDetails.brandName = e.target.value;
                        }}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Model No"
                        variant="outlined"
                        onChange={(e) => {
                          assetDetails.modelNo = e.target.value;
                        }}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        onChange={(e) => {
                          assetDetails.description = e.target.value;
                        }}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Usability"
                        variant="outlined"
                        onChange={(e) => {
                          assetDetails.usability = e.target.value;
                        }}
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
