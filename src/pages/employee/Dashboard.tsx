import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Grid, styled } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";

const StlyedGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "244px",
  border: "2px solid black",
  borderRadius: "10px",
  backgroundColor: "#CBCBCB",
  cursor: "pointer",
  margin: "10px",
});

export default function Dashboard() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/ticket");
  };
  return (
    <Box p={3}>
      <Typography variant="h3" textAlign="center">
        Dashboard
      </Typography>
      <Grid container justifyContent="center" my={3}>
        <StlyedGrid item onClick={() => navigate("/profile")}>
          <PersonIcon
            color="primary"
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </StlyedGrid>

        <StlyedGrid item onClick={() => navigate("/asset")}>
          <WebAssetIcon
            color="primary"
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </StlyedGrid>

        <StlyedGrid item onClick={handleClick}>
          <DeviceUnknownIcon
            color="primary"
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </StlyedGrid>
      </Grid>
    </Box>
  );
}
