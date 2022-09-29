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

const AssetsTable = ({ category }: { category: string }) => {
  const { assets } = useSelector((state: RootStore) => state.admin);

  return (
    <>
      <Box>
        <TableContainer sx={{ marginY: 3 }} component={Paper}>
          <Table sx={{ minWidth: 1200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography>ID</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Model No.</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Name</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Category</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Status</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Usability</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            {assets
              ?.filter((asset) => asset?.assetType === category)
              .map((filteredAsset) => (
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
                    {filteredAsset?.status?.toUpperCase()}
                  </TableCell>
                  <TableCell align="center">
                    {filteredAsset?.usability?.toUpperCase()}
                  </TableCell>
                </TableRow>
              ))}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AssetsTable;
