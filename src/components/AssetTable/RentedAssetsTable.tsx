import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";
import { RootStore } from "../../redux/store";

function RentedAssetsTable() {
  const navigate = useNavigate();
  const setAssetDetails = (assetId: number) => {
    navigate(`/admin/assets/${assetId}`);
  };
  const { assets, loading } = useSelector((state: RootStore) => state.admin);

  return (
    <>
      <Box>
        {loading ? (
          <Loader />
        ) : (
          <TableContainer sx={{ marginY: 3 }} component={Paper}>
            {assets.length ? (
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>AssetID</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Model No.</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Asset Name</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Category</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Asset Location</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Status</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Usability</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>

                {assets?.map((rentalAsset) => (
                  <TableRow key={rentalAsset?.assetId}>
                    <TableCell align="center">{rentalAsset?.assetId}</TableCell>
                    <TableCell align="center">{rentalAsset?.modelNo}</TableCell>
                    <TableCell align="center">{rentalAsset?.name?.toUpperCase()}</TableCell>
                    <TableCell align="center">{rentalAsset?.category?.toUpperCase()}</TableCell>
                    <TableCell align="center">{rentalAsset?.asset_location?.toUpperCase()}</TableCell>
                    <TableCell align="center">{rentalAsset?.status?.toUpperCase()}</TableCell>
                    <TableCell align="center">{rentalAsset?.usability?.toUpperCase()}</TableCell>
                    <IconButton onClick={() => setAssetDetails(rentalAsset?.assetId)}>
                      <OpenInNewIcon sx={{ color: "darkblue" }} />
                    </IconButton>
                  </TableRow>
                ))}
              </Table>
            ) : (
              <Typography textAlign={"center"}>No Assets found!</Typography>
            )}
          </TableContainer>
        )}
      </Box>
    </>
  );
}

export default RentedAssetsTable;
