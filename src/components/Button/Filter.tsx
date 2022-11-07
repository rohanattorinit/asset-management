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
} from "../../redux/actions/AdminActions";
import { RootStore } from "../../redux/store";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import MemoryIcon from "@mui/icons-material/Memory";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import AddLocationIcon from "@mui/icons-material/AddLocation";

type Anchor = "right";

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

  const initialState = {
    menuOpen: false,
    statusOpen: false,
    brandOpen: false,
    pcOpen: false,
    ramOpen: false,
    screenTypeOpen: false,
    screenSizeOpen: false,
    locationOpen: false,
  };

  const [openObject, setOpenObject] = useState(initialState);

  const handleClick = (key: string, value: boolean) => {
    setOpenObject((prevState) => ({ ...prevState, [key]: value }));
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
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Filters
          </ListSubheader>
        }
      >
        <ListItemButton
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
                <FormControlLabel control={<Checkbox />} label={item} />
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
                <FormControlLabel control={<Checkbox />} label={item} />
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
                <FormControlLabel control={<Checkbox />} label={item?.name} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List>
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
                <FormControlLabel control={<Checkbox />} label={item} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List>
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
                <FormControlLabel control={<Checkbox />} label={item} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />

      <List>
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
                <FormControlLabel control={<Checkbox />} label={item} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
      <Divider />

      <List>
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
                <FormControlLabel control={<Checkbox />} label={item} />
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
                <FormControlLabel control={<Checkbox />} label={item} />
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
