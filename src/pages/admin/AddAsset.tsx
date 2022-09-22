import {
  Grid,
  Card,
  styled,
  TextField,
  Divider,
  Box,
  Button,
} from "@mui/material";
import SideBar from "../../components/Sidebar/Sidebar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DragAndDrop } from "../../components/DragAndDrop/DragAndDrop";
import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import { addAsset } from "../../redux/actions/AdminActions";
import { useNavigate } from "react-router-dom";

export const AddAsset = () => {
  let navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();

  const [assetDetails, setAssetDetails] = useState({
    brandName: "",
    assetName: "",
    assetType: "",
    category: "",
    modelNo: "",
    description: "",
    status: "",
    usability: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAssetDetails({
      ...assetDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addAsset(assetDetails));

    setAssetDetails({
      brandName: "",
      assetName: "",
      assetType: "",
      category: "",
      modelNo: "",
      description: "",
      status: "",
      usability: "",
    });

    navigate(`/admin/assets`);
  };

  const StyledTypography = styled(Typography)({
    fontWeight: "bold",
    fontSize: "1.25rem",
    margin: "10px",
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
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Type"
                        variant="outlined"
                        placeholder="E.g: Hardware"
                        name="assetType"
                        value={assetDetails?.assetType}
                        onChange={handleChange}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        placeholder="E.g: Macbook M1"
                        name="assetName"
                        onChange={handleChange}
                        value={assetDetails?.assetName}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Status"
                        variant="outlined"
                        placeholder="E.g: available"
                        name="status"
                        onChange={handleChange}
                        value={assetDetails?.status}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Category"
                        variant="outlined"
                        placeholder="E.g: Laptop"
                        name="category"
                        onChange={handleChange}
                        value={assetDetails?.category}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Brand"
                        variant="outlined"
                        placeholder="E.g: Apple"
                        name="brandName"
                        onChange={handleChange}
                        value={assetDetails?.brandName}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Model No"
                        variant="outlined"
                        placeholder="E.g: 12345678"
                        name="modelNo"
                        onChange={handleChange}
                        value={assetDetails?.modelNo}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        placeholder="E.g: M1 processor, 256GB SSD"
                        name="description"
                        onChange={handleChange}
                        value={assetDetails?.description}
                      />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        id="outlined-basic"
                        label="Usability"
                        variant="outlined"
                        placeholder="E.g: usable"
                        name="usability"
                        onChange={handleChange}
                        value={assetDetails?.usability}
                      />
                    </Box>
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
