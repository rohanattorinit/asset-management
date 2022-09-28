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
import SideBar from "../../components/Sidebar/Sidebar";
import { getAssets } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

function Assets() {
  const { assets, message } = useSelector((state: RootStore) => state.admin);

  const dispatch: Dispatch<any> = useDispatch();

  const [category, setCategory] = useState("hardware");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event?.target?.value as string);
  };

  useEffect(() => {
    dispatch(getAssets());
  }, [dispatch, message]);

  const AssetsTable = ({ category }: { category: string }) => {
    return (
      <>
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
      </>
    );
  };

  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Grid item xs={12} md={10} p={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <FormControl sx={{ width: 300 }}>
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={handleChange}>
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
              <TableBody>
                {category && category === "hardware" ? (
                  <AssetsTable category="hardware" />
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

export default Assets;
