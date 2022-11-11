

import {
  Box,
  Button,
  
  Grid,
 
  Modal,
 
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
import RentedAssetsFinancialTable from "../../components/AssetTable/RentedAssetsFinancialTable";
function Assets() {
  const [value, setValue] = useState(0);
  const [isRented, setIsRented] = useState<boolean>(false);
  const { message } = useSelector((state: RootStore) => state.admin);

  const [search, setSearch] = useState("");
  const dispatch: Dispatch<any> = useDispatch();
  
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
 
  const handleOpenmodal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  useEffect(() => {
    dispatch(
      getAssets({
        name: search,
        
        isRented: isRented ? 1 : 0,
      })
    );
  }, [dispatch, message, search,  isRented]);
  return (
    <Grid container sx={{ height: "100%" }}>
      <SideBar />
      <Toast />
      <Grid item xs={12} md={10} p={3}>
        <Grid container alignItems="center">
          
          <Grid item xs={3}>
            <Filter />
          </Grid>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Filters
              </Typography>
              </Box>
          </Modal>
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
            <Tab label="Rented Assets Financial" />

          </Tabs>
        </Box>

        {/* <Box>{isRented ? <RentedAssetsTable /> : <AssetsTable />}</Box> */}
        <Box>
          {value === 1 ? (
            <RentedAssetsTable />
          ) : value === 0 ? (
            <AssetsTable />
          ) : (
            <RentedAssetsFinancialTable />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
export default Assets;
