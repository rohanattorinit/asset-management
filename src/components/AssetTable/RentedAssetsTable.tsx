import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

import { RootStore } from "../../redux/store";

function RentedAssetsTable() {
  const { assets, loading } = useSelector((state: RootStore) => state.admin);

  return (
    <>
      <Box>
        {loading ? (
          <Loader />
        ) : (
          <TableContainer sx={{ marginY: 3 }} component={Paper}>
            <Table sx={{ minWidth: 1200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>AssetID</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Asset Name
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>Vendor</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Rent(pr month)
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      Start Date of rent
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>
                      End date of rent
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>Deposit</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography sx={{ fontWeight: "bold" }}>Status</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assets?.map((rentalAsset) => (
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
                      {rentalAsset?.status?.toUpperCase()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  );
}

export default RentedAssetsTable;
