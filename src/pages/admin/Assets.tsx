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
import RentedAssetsTable from "../../components/AssetTable/RentedAssetsTable";
import SideBar from "../../components/Sidebar/Sidebar";
import { getAssets } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";

function Assets() {
  const [value, setValue] = useState(0);
  const [isRented, setIsRented] = useState<boolean>(false);
  const { message } = useSelector((state: RootStore) => state.admin);
  const dispatch: Dispatch<any> = useDispatch();
  const [category, setCategory] = useState("hardware");

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    newValue ? setIsRented(true) : setIsRented(false);
  };

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
        <TableBody>
          {isRented ? (
            <RentedAssetsTable />
          ) : (
            <AssetsTable category="hardware" />
          )}
        </TableBody>
      </Grid>
    </Grid>
  );
}
export default Assets;
