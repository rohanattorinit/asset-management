import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

function RentedAssetsTable({ category }: { category: string }) {
  const { assets } = useSelector((state: RootStore) => state.admin);

  const filterRentalAssets = assets?.filter((asset) => {
    return asset?.isRented;
  });

  return (
    <>
      <Box>
        <TableContainer sx={{ marginY: 3 }} component={Paper}>
          <Table sx={{ minWidth: 1200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography>AssetID</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Asset Name</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Vendor</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Rent(pr month)</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Start Date of rent</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>End date of rent</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Deposit</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Status</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            {filterRentalAssets
              ?.filter((asset) => asset?.assetType === category)
              .map((rentalAsset) => (
                <TableRow key={rentalAsset?.assetId}>
                  <TableCell align="center">{rentalAsset?.assetId}</TableCell>
                  <TableCell align="center">{rentalAsset?.name}</TableCell>
                  <TableCell align="center">{rentalAsset?.vendor}</TableCell>
                  <TableCell align="center">{rentalAsset?.rent}</TableCell>
                  <TableCell align="center">
                    {rentalAsset?.rentStartDate}
                  </TableCell>
                  <TableCell align="center">
                    {rentalAsset?.rentEndDate}
                  </TableCell>
                  <TableCell align="center">{rentalAsset?.deposit}</TableCell>
                  <TableCell align="center">
                    {rentalAsset?.status.toUpperCase()}
                  </TableCell>
                </TableRow>
              ))}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default RentedAssetsTable;
