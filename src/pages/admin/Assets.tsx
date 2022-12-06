import { Box, Button, Grid, Tab, Tabs, TextField, Badge } from "@mui/material";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import AssetsTable from "../../components/AssetTable/AssetsTable";
// import RentedAssetsTable from "../../components/AssetTable/RentedAssetsTable";
import Toast from "../../components/ErrorHandling/Toast";
import SideBar from "../../components/Sidebar/Sidebar";
// import { getAssets, setAssetFilters } from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import RentedAssetsFinancialTable from "../../components/AssetTable/RentedAssetsFinancialTable";
import { AssetTypes } from "../../redux/types";
import Filter from "../../components/Button/Filter";
import { bgcolor } from "@mui/system";

function Assets() {
  const [value, setValue] = useState(0);
  const [isRented, setIsRented] = useState<number>(0);
  const { assets } = useSelector((state: RootStore) => state.admin);
  const [search, setSearch] = useState("");
  const filterObject = localStorage.getItem("filterObject");
  // const dispatch: Dispatch<any> = useDispatch();
  const [filteredAsset, setFilteredAssets] = useState<AssetTypes[]>([]);
  const [badgeCount, setBadgeCount] = useState<string[]>([]);
  // Debounce callback
  const debounced = useDebouncedCallback(
    // function
    (search) => {
      setSearch(search);
    },
    // delay in ms
    300
  );

  useEffect(() => {
    const selectedFilters = JSON.parse(filterObject!);
    let appliedFilterCount: any;
    if (selectedFilters !== null) {
      appliedFilterCount = Object.keys(selectedFilters)?.filter((filter) => {
        if (selectedFilters[filter]?.length) {
          return filter;
        }
      });
    }
    setBadgeCount(appliedFilterCount);
  }, [filterObject]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    newValue === 0
      ? setIsRented(0)
      : newValue === 1
      ? setIsRented(1)
      : newValue === 2 && setIsRented(1);
  };

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
      <Grid item xs={12} md={10} p={3} sx={{ overflowX: "auto" }}>
        <Grid
          container
          md={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item md={2}>
            <Badge badgeContent={badgeCount?.length} color="primary">
              <Filter name={search} />
            </Badge>
          </Grid>
          <Grid item md={4}>
            <TextField
              label="search by asset name..."
              onChange={(e) => debounced(e?.target?.value)}
              fullWidth
            />
          </Grid>
          <Grid item md={2}>
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/admin/assets/create"
            >
              Add new Asset
            </Button>
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
