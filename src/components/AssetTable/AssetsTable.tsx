import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

const AssetsTable = ({ category }: { category: string }) => {
  const { assets } = useSelector((state: RootStore) => state.admin);

  return (
    <>
        <TableContainer component={Paper}>
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
                  <Typography sx={{ fontWeight: "bold" }}>
                    Asset Name
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: "bold" }}>Category</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: "bold" }}>
                    Asset Location
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: "bold" }}>Status</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: "bold" }}>Usability</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            {assets?.map((filteredAsset) => (
              <TableRow key={filteredAsset?.assetId}>
                <TableCell align="center">{filteredAsset?.assetId}</TableCell>
                <TableCell align="center">{filteredAsset?.modelNo}</TableCell>
                <TableCell align="center">
                  {filteredAsset?.name?.toUpperCase()}
                </TableCell>
                <TableCell align="center">
                  {filteredAsset?.category?.toUpperCase()}
                </TableCell>
                <TableCell align="center">
                  {filteredAsset?.asset_location?.toUpperCase()}
                </TableCell>
                <TableCell align="center">
                  {filteredAsset?.status?.toUpperCase()}
                </TableCell>
                <TableCell align="center">
                  {filteredAsset?.usability?.toUpperCase()}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </TableContainer>
    </>
  );
};

export default AssetsTable;
