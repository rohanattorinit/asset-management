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
} from "@mui/material";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Link as RouterLink } from "react-router-dom";
import { Dispatch } from "redux";
import SideBar from "../../components/Sidebar/Sidebar";
import { getAssets } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
function Assets() {
  const { assets } = useSelector((state: RootStore) => state.admin);

  const dispatch: Dispatch<any> = useDispatch();

  const [category, setCategory] = React.useState("hardware");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  useEffect(() => {
    dispatch(getAssets());
  }, [dispatch]);

  const AssetsTable = ({ category }: { category: string }) => {
    return (
      <>
        {assets
          .filter((asset) => asset.assetType === category)
          .map((filteredAsset) => (
            <TableRow key={filteredAsset.assetId}>
              <TableCell align="center">{filteredAsset.assetId}</TableCell>
              <TableCell align="center">{filteredAsset.modelNo}</TableCell>
              <TableCell align="center">{filteredAsset.name}</TableCell>
              <TableCell align="center">{filteredAsset.status}</TableCell>
              <TableCell align="center">{filteredAsset.usability}</TableCell>
            </TableRow>
          ))}
      </>
    );
  };

  return (
    <Grid container>
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
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Serial No.</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Usability</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {category === "hardware" ? (
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
