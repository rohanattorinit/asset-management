import {
  Grid,
  Button,
  TableCell,
  TableContainer,
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Dispatch } from "redux";
import Toast from "../../components/ErrorHandling/Toast";
import SideBar from "../../components/Sidebar/Sidebar";
import { getAssets } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import { AssetTypes } from "../../redux/types";

function RentedAssetsTable() {
  const { assets, message } = useSelector((state: RootStore) => state.admin);

  const dispatch: Dispatch<any> = useDispatch();

  const [category, setCategory] = useState("hardware");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event?.target?.value as string);
  };

  const filterRentalAssets = assets?.filter((asset) => {
    return asset?.isRented;
  });

  useEffect(() => {
    dispatch(getAssets());
  }, [dispatch, message]);

  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Toast />
      <Grid item xs={12} md={10} p={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <FormControl sx={{ width: 300 }}>
            <InputLabel>Category</InputLabel>
            <Select
              labelId="category"
              id="Category"
              label="Category"
              value={category}
              onChange={handleChange}
            >
              <MenuItem value={"software"}>Software</MenuItem>
              <MenuItem value={"hardware"}>Hardware</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/admin/assets/create"
          >
            Add new Asset
          </Button>
        </Box>

        <Box>
          <TableContainer sx={{ marginY: 3 }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
              <TableBody>
                {category && category === "hardware" ? (
                  <AssetsTable
                    category="hardware"
                    filterRentalAssets={filterRentalAssets}
                  />
                ) : (
                  <AssetsTable category="software" />
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
}
const AssetsTable = ({
  category,
  isRented,
  filterRentalAssets,
}: {
  category: string;
  isRented?: boolean;
  filterRentalAssets?: AssetTypes[];
}) => {
  return (
    <>
      {filterRentalAssets
        ?.filter((asset) => asset?.assetType === category)
        .map((rentalAsset) => (
          <TableRow key={rentalAsset?.assetId}>
            <TableCell align="center">{rentalAsset?.assetId}</TableCell>
            <TableCell align="center">{rentalAsset?.name}</TableCell>
            <TableCell align="center">{rentalAsset?.vendor}</TableCell>
            <TableCell align="center">{rentalAsset?.rent}</TableCell>
            <TableCell align="center">{rentalAsset?.rentStartDate}</TableCell>
            <TableCell align="center">{rentalAsset?.rentEndDate}</TableCell>
            <TableCell align="center">{rentalAsset?.deposit}</TableCell>
            <TableCell align="center">
              {rentalAsset?.status.toUpperCase()}
            </TableCell>
          </TableRow>
        ))}
    </>
  );
};
export default RentedAssetsTable;
