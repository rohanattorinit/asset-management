import {
  Box,
  Button,
  Grid,
  SelectChangeEvent,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Dispatch } from "redux";
import AssetsTable from "../../components/AssetTable/AssetsTable";
import RentedAssetsTable from "../../components/AssetTable/RentedAssetsTable";
import Toast from "../../components/ErrorHandling/Toast";
import SideBar from "../../components/Sidebar/Sidebar";
import { getAssets } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import Filter from "../../components/Button/Filter";
function Assets() {
  const [value, setValue] = useState(0);
  const [isRented, setIsRented] = useState<boolean>(false);
  const { message } = useSelector((state: RootStore) => state.admin);

  const [search, setSearch] = useState("");
  const dispatch: Dispatch<any> = useDispatch();
  const [category, setCategory] = useState("hardware");

  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (search) => {
      setSearch(search);
    },
    // delay in ms
    300
  );

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    newValue ? setIsRented(true) : setIsRented(false);
  };
  // const handleChange = (event: SelectChangeEvent) => {
  //   setCategory(event?.target?.value);
  // };
  useEffect(() => {
    dispatch(
      getAssets({
        name: search,
        assetType: category,
        isRented: isRented ? 1 : 0,
      })
    );
  }, [dispatch, message, search, category, isRented]);
  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Toast />
      <Grid item xs={12} md={10} p={3}>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={3}>
            {/* <FormControl>
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
            </FormControl> */}
            <Filter />
          </Grid>
          <Grid item xs={6}>
            ​
            <TextField
              label="search here by name..."
              onChange={(e) => debounced(e?.target?.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="outlined"
                color="primary"
                component={RouterLink}
                to="/admin/assets/create"
              >
                Add new Asset
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box>
          <Tabs value={value} onChange={handleTabChange} centered>
            <Tab label="Owned Assets" />
            <Tab label="Rented Assets" />
          </Tabs>
        </Box>

        <Box>{isRented ? <RentedAssetsTable /> : <AssetsTable />}</Box>
      </Grid>
    </Grid>
  );
}
export default Assets;
