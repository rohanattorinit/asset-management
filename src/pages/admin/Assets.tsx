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
  Tabs,
  Tab,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Dispatch } from "redux";
import AssetsTable from "../../components/AssetTable/AssetsTable";
import SideBar from "../../components/Sidebar/Sidebar";
import { getAssets } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

function Assets() {
  const [value, setValue] = useState("0");

  const handleTabChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };

  const { message } = useSelector((state: RootStore) => state.admin);
  const dispatch: Dispatch<any> = useDispatch();
  const [category, setCategory] = useState("hardware");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event?.target?.value as string);
  };

  useEffect(() => {
    dispatch(getAssets());
  }, [dispatch, message]);

  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Grid item xs={12} md={10} p={3}>
        <Box sx={{ width: "100%" }}>
          <Tabs value={value} onChange={handleTabChange} centered>
            <Tab label="Owned Assets" />
            <Tab label="Rented Assets" />
          </Tabs>
        </Box>

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
