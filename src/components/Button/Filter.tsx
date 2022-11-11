/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, Fragment, Dispatch, useEffect } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Checkbox, ListSubheader, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CategoryIcon from "@mui/icons-material/Category";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import InputIcon from "@mui/icons-material/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrandOptions,
  getfilterOptions,
  setAssetFilters,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import MemoryIcon from "@mui/icons-material/Memory";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import WebhookIcon from "@mui/icons-material/Webhook";
import StorageIcon from "@mui/icons-material/Storage";
import UsbIcon from "@mui/icons-material/Usb";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

type Anchor = "right";

interface FILTEROBJ {
  screen_type: Array<string>;
  ram: Array<string>;
  status: Array<string>;
  assetType: Array<string>;
  category: Array<string>;
  operating_system: Array<string>;
  processor: Array<string>;
  screen_size: Array<string>;
  harddisk: Array<string>;
  asset_location: Array<string>;
  brands: Array<string>;
  connectivity: Array<string>;
}

const filterObj: FILTEROBJ = {
  screen_type: [],
  ram: [],
  status: [],
  assetType: [],
  category: [],
  operating_system: [],
  processor: [],
  screen_size: [],
  harddisk: [],
  asset_location: [],
  brands: [],
  connectivity: [],
};

export default function SwipeableTemporaryDrawer() {
  const dispatch: Dispatch<any> = useDispatch();
  const { brandOptions, filterOptions } = useSelector(
    (state: RootStore) => state.admin
  );

  useEffect(() => {
    dispatch(getBrandOptions());
    dispatch(getfilterOptions());
  }, [dispatch]);

  const [state, setState] = useState({
    right: false,
  });

  const initialOpenState = {
    menuOpen: false,
    statusOpen: false,
    brandOpen: false,
    pcOpen: false,
    ramOpen: false,
    screenTypeOpen: false,
    screenSizeOpen: false,
    locationOpen: false,
    osOpen: false,
    harddiskOpen: false,
    connectivityOpen: false,
  };

  const initialShowState = {
    menuOpen: true,
    statusOpen: true,
    brandOpen: true,
    pcOpen: true,
    ramOpen: true,
    screenTypeOpen: true,
    screenSizeOpen: true,
    locationOpen: true,
    osOpen: true,
    harddiskOpen: true,
    connectivityOpen: true,
  };

  const [openObject, setOpenObject] = useState(initialOpenState);
  const [show, setShow] = useState(initialShowState);

  const handleClick = (key: string, value: boolean) => {
    setOpenObject((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSubmitFilter = (key: string, value: string) => {
    // if (value === "Mobile") {
    //   setShow((prevState) => ({
    //     ...prevState,
    //     harddiskOpen: false,
    //     pcOpen: true,
    //     ramOpen: true,
    //     screenTypeOpen: true,
    //     screenSizeOpen: true,
    //     osOpen: true,
    //   }));
    // }

    // if (value === "Mouse" || "Keyboard" || "Headset") {
    //   if (!filterObj.category.includes(value)) {
    //     setShow((prevState) => ({
    //       ...prevState,
    //       pcOpen: false,
    //       ramOpen: false,
    //       screenTypeOpen: false,
    //       screenSizeOpen: false,
    //       osOpen: false,
    //       harddiskOpen: false,
    //     }));
    //   } else {
    //     setShow((prevState) => ({
    //       ...prevState,
    //       pcOpen: true,
    //       ramOpen: true,
    //       screenTypeOpen: true,
    //       screenSizeOpen: true,
    //       osOpen: true,
    //       harddiskOpen: true,
    //     }));
    //   }
    // }

    switch (key) {
      case "status":
        if (!filterObj.status.includes(value)) {
          filterObj.status.push(value);
        } else {
          const index = filterObj.status.indexOf(value);
          if (index > -1) {
            filterObj.status.splice(index, 1);
          }
        }
        break;
      case "ram":
        if (!filterObj.ram.includes(value)) {
          filterObj.ram.push(value);
        } else {
          const index = filterObj.ram.indexOf(value);
          if (index > -1) {
            filterObj.ram.splice(index, 1);
          }
        }
        break;
      case "operating_system":
        if (!filterObj.operating_system.includes(value)) {
          filterObj.operating_system.push(value);
        } else {
          const index = filterObj.operating_system.indexOf(value);
          if (index > -1) {
            filterObj.operating_system.splice(index, 1);
          }
        }
        break;
      case "screen_type":
        if (!filterObj.screen_type.includes(value)) {
          filterObj.screen_type.push(value);
        } else {
          const index = filterObj.screen_type.indexOf(value);
          if (index > -1) {
            filterObj.screen_type.splice(index, 1);
          }
        }
        break;
      case "category":
        if (!filterObj.category.includes(value)) {
          filterObj.category.push(value);
        } else {
          const index = filterObj.category.indexOf(value);
          if (index > -1) {
            filterObj.category.splice(index, 1);
          }
        }
        break;
      case "processor":
        if (!filterObj.processor.includes(value)) {
          filterObj.processor.push(value);
        } else {
          const index = filterObj.processor.indexOf(value);
          if (index > -1) {
            filterObj.processor.splice(index, 1);
          }
        }
        break;
      case "harddisk":
        if (!filterObj.harddisk.includes(value)) {
          filterObj.harddisk.push(value);
        } else {
          const index = filterObj.harddisk.indexOf(value);
          if (index > -1) {
            filterObj.harddisk.splice(index, 1);
          }
        }
        break;
      case "connectivity":
        if (!filterObj.connectivity.includes(value)) {
          filterObj.connectivity.push(value);
        } else {
          const index = filterObj.connectivity.indexOf(value);
          if (index > -1) {
            filterObj.connectivity.splice(index, 1);
          }
        }
        break;
      case "screen_size":
        if (!filterObj.screen_size.includes(value)) {
          filterObj.screen_size.push(value);
        } else {
          const index = filterObj.screen_size.indexOf(value);
          if (index > -1) {
            filterObj.screen_size.splice(index, 1);
          }
        }
        break;
      case "asset_location":
        if (!filterObj.asset_location.includes(value)) {
          filterObj.asset_location.push(value);
        } else {
          const index = filterObj.asset_location.indexOf(value);
          if (index > -1) {
            filterObj.asset_location.splice(index, 1);
          }
        }
        break;
      case "brands":
        if (!filterObj.brands.includes(value)) {
          filterObj.brands.push(value);
        } else {
          const index = filterObj.brands.indexOf(value);
          if (index > -1) {
            filterObj.brands.splice(index, 1);
          }
        }
        break;
    }
    console.log(filterObj);
    dispatch(setAssetFilters(filterObj));
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  const list = (anchor: Anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Filters
          </ListSubheader>
        }
      >
      </List>

      <List>
        <ListItemButton
          sx={{
            display: filterOptions.category.includes("Laptop") ? "" : "none",
          }}
          onClick={(e) => handleClick("menuOpen", !openObject.menuOpen)}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Category" />
          {openObject?.menuOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject?.menuOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ height: "160px", overflow: "auto" }}
          >
            {filterOptions?.category?.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filterObj.category.includes(item) ? true : false}
                      onChange={() => handleSubmitFilter("category", item)}
                    />
                  }
                  label={item}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List>
        <ListItemButton
          onClick={(e) => handleClick("statusOpen", !openObject.statusOpen)}
        >
          <ListItemIcon>
            <LinearScaleIcon />
          </ListItemIcon>
          <ListItemText primary="Status" />
          {openObject.statusOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject.statusOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ height: "160px", overflow: "auto" }}
          >
            {filterOptions?.status?.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filterObj.status.includes(item) ? true : false}
                      onChange={() => handleSubmitFilter("status", item)}
                    />
                  }
                  label={item}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List>
        <ListItemButton
          onClick={(e) => handleClick("brandOpen", !openObject.brandOpen)}
        >
          <ListItemIcon>
            <InputIcon />
          </ListItemIcon>
          <ListItemText primary="Brands" />
          {openObject?.brandOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject?.brandOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ height: "160px", overflow: "auto" }}
          >
            {brandOptions?.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        filterObj.brands.includes(item.name) ? true : false
                      }
                      onChange={() => handleSubmitFilter("brands", item.name)}
                    />
                  }
                  label={item?.name}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List sx={{ display: show.osOpen ? "" : "none" }}>
        <ListItemButton
          onClick={(e) => handleClick("osOpen", !openObject.osOpen)}
        >
          <ListItemIcon>
            <WebhookIcon />
          </ListItemIcon>
          <ListItemText primary="Operating System" />
          {openObject.osOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject.osOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ height: "160px", overflow: "auto" }}
          >
            {filterOptions?.os?.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        filterObj.operating_system.includes(item) ? true : false
                      }
                      onChange={() =>
                        handleSubmitFilter("operating_system", item)
                      }
                    />
                  }
                  label={item}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List sx={{ display: show.harddiskOpen ? "" : "none" }}>
        <ListItemButton
          onClick={(e) => handleClick("harddiskOpen", !openObject.harddiskOpen)}
        >
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <ListItemText primary="HDD" />
          {openObject.harddiskOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject.harddiskOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ height: "160px", overflow: "auto" }}
          >
            {filterOptions?.harddisk?.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filterObj.harddisk.includes(item) ? true : false}
                      onChange={() => handleSubmitFilter("harddisk", item)}
                    />
                  }
                  label={item}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List>
        <ListItemButton
          onClick={(e) =>
            handleClick("connectivityOpen", !openObject.connectivityOpen)
          }
        >
          <ListItemIcon>
            <UsbIcon />
          </ListItemIcon>
          <ListItemText primary="Connectivity" />
          {openObject.connectivityOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject.connectivityOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ height: "160px", overflow: "auto" }}
          >
            {filterOptions?.connectivity?.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        filterObj.connectivity.includes(item) ? true : false
                      }
                      onChange={() => handleSubmitFilter("connectivity", item)}
                    />
                  }
                  label={item}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      

      <List sx={{ display: show.pcOpen ? "" : "none" }}>
        <ListItemButton
          onClick={(e) => handleClick("pcOpen", !openObject.pcOpen)}
        >
          <ListItemIcon>
            <DeveloperBoardIcon />
          </ListItemIcon>
          <ListItemText primary="Processor" />
          {openObject?.pcOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject?.pcOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {filterOptions?.processor?.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        filterObj.processor.includes(item) ? true : false
                      }
                      onChange={() => handleSubmitFilter("processor", item)}
                    />
                  }
                  label={item}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List sx={{ display: show.screenSizeOpen ? "" : "none" }}>
        <ListItemButton
          onClick={(e) =>
            handleClick("screenSizeOpen", !openObject.screenSizeOpen)
          }
        >
          <ListItemIcon>
            <ScreenshotMonitorIcon />
          </ListItemIcon>
          <ListItemText primary="Screen Size" />
          {openObject.screenSizeOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject.screenSizeOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {filterOptions.screen_size?.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        filterObj.screen_size.includes(item) ? true : false
                      }
                      onChange={() => handleSubmitFilter("screen_size", item)}
                    />
                  }
                  label={item}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List sx={{ display: show.screenTypeOpen ? "" : "none" }}>
        <ListItemButton
          onClick={(e) =>
            handleClick("screenTypeOpen", !openObject.screenTypeOpen)
          }
        >
          <ListItemIcon>
            <AddToQueueIcon />
          </ListItemIcon>
          <ListItemText primary="Screen Type" />
          {openObject.screenTypeOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject.screenTypeOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {filterOptions.screen_type.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        filterObj.screen_type.includes(item) ? true : false
                      }
                      onChange={() => handleSubmitFilter("screen_type", item)}
                    />
                  }
                  label={item}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
      <Divider />

      <List sx={{ display: show.ramOpen ? "" : "none" }}>
        <ListItemButton
          onClick={(e) => handleClick("ramOpen", !openObject.ramOpen)}
        >
          <ListItemIcon>
            <MemoryIcon />
          </ListItemIcon>
          <ListItemText primary="RAM (GB)" />
          {openObject.ramOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject.ramOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ height: "160px", overflow: "auto" }}
          >
            {filterOptions?.ram?.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filterObj.ram.includes(item) ? true : false}
                      onChange={() => handleSubmitFilter("ram", item)}
                    />
                  }
                  label={item}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List>
        <ListItemButton
          onClick={(e) => handleClick("locationOpen", !openObject.locationOpen)}
        >
          <ListItemIcon>
            <AddLocationIcon />
          </ListItemIcon>
          <ListItemText primary="Asset Location" />
          {openObject.locationOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject.locationOpen} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ height: "160px", overflow: "auto" }}
          >
            {filterOptions?.location?.map((item) => (
              <ListItemButton sx={{ pl: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        filterObj.asset_location.includes(item) ? true : false
                      }
                      onChange={() =>
                        handleSubmitFilter("asset_location", item)
                      }
                    />
                  }
                  label={item}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      
    </Box>
  );
  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Button
            variant="outlined"
            color="primary"
            onClick={toggleDrawer(anchor, true)}
          >
            <Typography sx={{ margin: "0 5px" }}>Filters</Typography>
            <MenuIcon />
          </Button>
          ​
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}

// const FilterList = (arr: any) => {
//   return (
//     <List
//       component="div"
//       disablePadding
//       sx={{ height: "250px", overflow: "auto" }}
//     >
//       {arr?.map((item: any) => (
//         <ListItemButton sx={{ pl: 4 }}>
//           <FormControlLabel control={<Checkbox />} label={item?.name} />
//         </ListItemButton>
//       ))}
//     </List>
//   );
// };

// <List
//         sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
//         component="nav"
//         aria-labelledby="nested-list-subheader"
//         subheader={
//           <ListSubheader component="div" id="nested-list-subheader">
//             Filters
//           </ListSubheader>
//         }
//       >
//         {Object.keys(filterOptions).map((filter) => (
//           <>
//             <ListItemButton
//               key={filter}
//               // onClick={(e) => handleClick("menuOpen", !openObject.menuOpen)}
//             >
//               <ListItemIcon>{getFilterIcon(filter)}</ListItemIcon>
//               <ListItemText primary={getFilterName(filter)} />
//               {openObject?.menuOpen ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>
//           </>
//         ))}
//       </List>
