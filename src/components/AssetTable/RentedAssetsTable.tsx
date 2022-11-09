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
                      <Typography sx={{ fontWeight: "bold" }}>Asset Name</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Brand Name</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Category</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Screen Type</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Screen Size</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Ram</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Status</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Processor</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ fontWeight: "bold" }}>Operating System</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>

                {assets?.map((rentalAsset) => (
                  <TableRow key={rentalAsset?.assetId}>
                    <TableCell align="center">{rentalAsset?.assetId}</TableCell>
                    
                    <TableCell align="center">{rentalAsset?.name?.toUpperCase()}</TableCell>
                    <TableCell align="center">{rentalAsset?.brandName}</TableCell>
                    <TableCell align="center">{rentalAsset?.category?.toUpperCase()}</TableCell>
                    <TableCell align="center">{rentalAsset?.screen_type?.toUpperCase()}</TableCell>
                    <TableCell align="center">{rentalAsset?.screen_size}</TableCell>
                    <TableCell align="center">{rentalAsset?.ram}</TableCell>
                    <TableCell align="center">{rentalAsset?.status?.toUpperCase()}</TableCell>
                    <TableCell align="center">{rentalAsset?.processor?.toUpperCase()}</TableCell>
                    <TableCell align="center">{rentalAsset?.operating_system?.toUpperCase()}</TableCell>
                   
                    {/* <TableCell align="center">{rentalAsset?.usability?.toUpperCase()}</TableCell> */}
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
