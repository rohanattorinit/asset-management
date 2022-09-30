import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  TableBody,
  Tabs,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Dispatch } from "redux";
import AssetsTable from "../../components/AssetTable/AssetsTable";
import Toast from "../../components/ErrorHandling/Toast";
import SideBar from "../../components/Sidebar/Sidebar";
import { getAssets } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

function Assets() {
  const [value, setValue] = useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
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

  const handleRented = () => {};

  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Toast />
      <Grid item xs={12} md={10} p={3}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            onClick={handleRented}
            centered
          >
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
        <TableBody>
          {category && category === "hardware" ? (
            <AssetsTable category="hardware" />
          ) : (
            <AssetsTable category="software" />
          )}
        </TableBody>
      </Grid>
    </Grid>
  );
}
export default Assets;
