import {
  Grid,
  Tab,
  Tabs,
  Button,
  TableCell,
  TableContainer,
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Dispatch } from "redux";
import SideBar from "../../components/Sidebar/Sidebar";
import { getAssets } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
function Assets() {
  const [value, setValue] = useState<number>(0);
  const { assets } = useSelector((state: RootStore) => state.admin);

  const dispatch: Dispatch<any> = useDispatch();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getAssets());
  }, [dispatch]);

  return (
    <Grid container>
      <SideBar />
      <Grid item xs={12} md={10} p={3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/admin/assets/create"
          >
            Add new Asset
          </Button>
        </Box>

        <Box marginY={2}>
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab sx={{ fontSize: "1.1rem" }} label="Hardware"></Tab>
            <Tab sx={{ fontSize: "1.1rem" }} label="Software"></Tab>
          </Tabs>
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
                {assets.map((asset) => (
                  <TableRow key={asset.assetId}>
                    <TableCell align="center">{asset.assetId}</TableCell>
                    <TableCell align="center">{asset.modelNo}</TableCell>
                    <TableCell align="center">{asset.name}</TableCell>
                    <TableCell align="center">{asset.status}</TableCell>
                    <TableCell align="center">{asset.usability}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Assets;
