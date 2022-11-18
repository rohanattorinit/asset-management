/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, Fragment, Dispatch, useEffect } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Checkbox,
  Collapse,
  Divider,
  FormControlLabel,
  ListItemIcon,
  ListSubheader,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import {
  getFiltersByCategory,
  setAssetFilters,
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import { getFilterIcon, getFilterName } from "../../utils/objectMappers";

type Anchor = "right";

interface FILTEROBJ {
  screen_type: Array<string>;
  ram: Array<string>;
  status: Array<string>;
  assetType: Array<string>;
  category: Array<string>;
  os: Array<string>;
  processor: Array<string>;
  screen_size: Array<string>;
  hdd: Array<string>;
  ssd: Array<string>;
  location: Array<string>;
  cableType: Array<string>;
  brandName: Array<string>;
  connectivity: Array<string>;
}

const filterObj: FILTEROBJ = {
  screen_type: [],
  ram: [],
  status: [],
  assetType: [],
  category: [],
  os: [],
  processor: [],
  screen_size: [],
  hdd: [],
  ssd: [],
  cableType: [],
  location: [],
  brandName: [],
  connectivity: [],
};

export default function SwipeableTemporaryDrawer() {
  const dispatch: Dispatch<any> = useDispatch();
  const { filterOptions }: any = useSelector((state: RootStore) => state.admin);

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getFiltersByCategory(selectedCategory));
  }, [selectedCategory]);

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
    hddOpen: false,
    ssdOpen: false,
    cableOpen: false,
    connectivityOpen: false,
  };

  const [openObject, setOpenObject] = useState<any>(initialOpenState);

  const handleClick = (key: string, value: boolean) => {
    setOpenObject((prevState: any) => ({ ...prevState, [key]: value }));
  };

  const handleSubmitFilter = (key: string, value: string) => {
    switch (key) {
      case "status":
        if (!filterObj.status.includes(value)) {
          filterObj.status.push(value);
        } else {
          const index = filterObj.status.indexOf(value);
          if (index > -1) {
            filterObj.status?.splice(index, 1);
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
      case "os":
        if (!filterObj.os.includes(value)) {
          filterObj.os.push(value);
        } else {
          const index = filterObj.os.indexOf(value);
          if (index > -1) {
            filterObj.os.splice(index, 1);
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
        if (selectedCategory.includes(value))
          setSelectedCategory([
            ...selectedCategory?.filter((category) => category !== value),
          ]);
        else {
          setSelectedCategory([...selectedCategory, value]);
        }

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
      case "hdd":
        if (!filterObj.hdd.includes(value)) {
          filterObj.hdd.push(value);
        } else {
          const index = filterObj.hdd.indexOf(value);
          if (index > -1) {
            filterObj.hdd.splice(index, 1);
          }
        }
        break;
      case "ssd":
        if (!filterObj.ssd.includes(value)) {
          filterObj.ssd.push(value);
        } else {
          const index = filterObj.ssd.indexOf(value);
          if (index > -1) {
            filterObj.ssd.splice(index, 1);
          }
        }
        break;
      case "cableType":
        if (!filterObj.cableType.includes(value)) {
          filterObj.cableType.push(value);
        } else {
          const index = filterObj.cableType.indexOf(value);
          if (index > -1) {
            filterObj.cableType.splice(index, 1);
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
      case "location":
        if (!filterObj.location.includes(value)) {
          filterObj.location.push(value);
        } else {
          const index = filterObj.location.indexOf(value);
          if (index > -1) {
            filterObj.location.splice(index, 1);
          }
        }
        break;
      case "brandName":
        if (!filterObj.brandName.includes(value)) {
          filterObj.brandName.push(value);
        } else {
          const index = filterObj.brandName.indexOf(value);
          if (index > -1) {
            filterObj.brandName.splice(index, 1);
          }
        }
        break;
    }
    // console.log(filterObj);
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

  let filtersEl: any;

  filtersEl = Object.keys(filterOptions)?.map((filter) => {
    const FilterIcon = getFilterIcon(filter);
    return (
      <>
        <ListItemButton
          onClick={(e) => handleClick(filter, !openObject[filter])}
        >
          <ListItemIcon>{FilterIcon ? <FilterIcon /> : null}</ListItemIcon>
          <ListItemText primary={getFilterName(filter)} />
          {openObject[filter] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openObject[filter]} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              height: "160px",
              overflow: "auto",
              "::-webkit-scrollbar ": {
                display: "none",
              },
            }}
          >
            {filterOptions[filter]?.map((type: any) => (
              <ListItemButton
                sx={{
                  pl: 4,
                  textTransform: "capitalize",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      // @ts-ignore
                      checked={filterObj[filter]?.includes(type) ? true : false}
                      onChange={() => handleSubmitFilter(filter, type)}
                    />
                  }
                  label={type}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <Divider />
      </>
    );
  });

  const list = (anchor: Anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Filter By
          </ListSubheader>
        }
      >
        <Divider />
        <List>{filtersEl}</List>
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const)?.map((anchor) => (
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
