import { Box, Button,  Grid, Tab, Tabs, TextField } from "@mui/material";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Dispatch } from "redux";
import AssetsTable from "../../components/AssetTable/AssetsTable";
import RentedAssetsTable from "../../components/AssetTable/RentedAssetsTable";
import Toast from "../../components/ErrorHandling/Toast";
import SideBar from "../../components/Sidebar/Sidebar";
import { getAssets, setAssetFilters } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import RentedAssetsFinancialTable from "../../components/AssetTable/RentedAssetsFinancialTable";
import { AssetTypes } from "../../redux/types";
import Filter from "../../components/Button/Filter";
function Assets() {
  const [value, setValue] = useState(0);
  const [isRented, setIsRented] = useState<number>(0);
  const { message, assets } = useSelector((state: RootStore) => state.admin);
  const [search, setSearch] = useState("");
  const dispatch: Dispatch<any> = useDispatch();
  const [filteredAsset, setFilteredAssets] = useState<AssetTypes[]>([]);
  
  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (search) => {
      setSearch(search);
    },
    // delay in ms
    300,
  );

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    newValue === 0 ? setIsRented(0) : newValue === 1 ? setIsRented(1) : newValue === 2 && setIsRented(1);
  };

  console.log('assests hey', assets)
  console.log('filteredAsset hey',filteredAsset)

  // useEffect(() => {
  //   dispatch(
  //     setAssetFilters({
  //       name: search,
  //     })
  //   );
  // }, [message, search]);

  useEffect(() => {
    if (isRented) {
      //@ts-ignore
      setFilteredAssets(assets?.filter((asset) => asset?.isRented === 1));
    } else {
      //@ts-ignore
      setFilteredAssets(assets?.filter((asset) => asset?.isRented === 0));
    }
  }, [assets, isRented]);

  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Toast />
      <Grid item xs={12} md={10} p={3}>
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={3}>
            <Filter name={search}/>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="search by asset name..."
              onChange={(e) => debounced(e?.target?.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="outlined" color="primary" component={RouterLink} to="/admin/assets/create">
                Add new Asset
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Tabs value={value} onChange={handleTabChange} centered>
            <Tab label="Owned Assets" />
            <Tab label="Rented Assets" />
            <Tab label="Rented Assets Financial" />
          </Tabs>
        </Box>
        <Box>
          {value === 1 ? (
            <AssetsTable assets={filteredAsset} />
          ) : value === 0 ? (
            <AssetsTable assets={filteredAsset} />
          ) : (
            <RentedAssetsFinancialTable search={search} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
export default Assets;