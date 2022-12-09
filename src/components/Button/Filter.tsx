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
  ListItemIcon,
  ListSubheader,
  Divider,
  FormControlLabel,
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

const FilterState = {
  screen_type: [],
  ram: [],
  status: [],
  assetType: [],
  category: [],
  operating_system: [],
  processor: [],
  screen_size: [],
  hdd: [],
  ssd: [],
  cableType: [],
  asset_location: [],
  brandName: [],
  connectivity: [],
};

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

export default function SwipeableTemporaryDrawer({ name }: { name: string }) {
  const dispatch: Dispatch<any> = useDispatch();
  const { filterOptions }: any = useSelector((state: RootStore) => state.admin);
  const [filterObject, setFilterObject] = useState<any>(FilterState);

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const [state, setState] = useState({
    right: false,
  });

  const [openObject, setOpenObject] = useState<any>(initialOpenState);

  const handleClick = (key: string, value: boolean) => {
    setOpenObject((prevState: any) => ({ ...prevState, [key]: value }));
  };

  useEffect(() => {
    dispatch(getFiltersByCategory(selectedCategory));
  }, [selectedCategory]);

  useEffect(() => {
    const localFilterOptions = localStorage.getItem("filterObject");
    const localOpenObject = localStorage.getItem("openObject");
    const chartValue = localStorage.getItem("pieChartItem");

    if (chartValue?.length) {
      const valueInCapital =
        JSON.parse(chartValue)?.category?.charAt(0).toUpperCase() +
        JSON.parse(chartValue)?.category?.slice(1);

      const isSurplus = JSON.parse(chartValue)?.surplus;

      if (
        !selectedCategory.includes(valueInCapital) ||
        !filterObject.category.includes(valueInCapital)
      ) {
        setSelectedCategory((prev) => [...prev, valueInCapital]);

        if (isSurplus) {
          setFilterObject((prev: any) => ({
            ...prev,
            category: [...prev.category, valueInCapital],
            status: [...prev.status, "Surplus"],
          }));

          setOpenObject({
            category: true,
            status: true,
          });
        } else {
          setFilterObject((prev: any) => {
            return {
              ...prev,
              category: [...prev.category, valueInCapital],
            };
          });
          if (!openObject.menuOpen) {
            setOpenObject((prev: any) => ({ category: true }));
          }
        }
      }
    } else {
      if (
        localFilterOptions &&
        localFilterOptions !== JSON.stringify(FilterState)
      ) {
        setSelectedCategory(JSON.parse(localFilterOptions!)?.category);
        setFilterObject(JSON.parse(localFilterOptions));
      }
      if (
        localOpenObject &&
        localFilterOptions !== JSON.stringify(initialOpenState)
      ) {
        setOpenObject(JSON.parse(localOpenObject));
      }
    }
    localStorage.removeItem("pieChartItem");
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    localStorage.setItem("filterObject", JSON.stringify(filterObject));
    localStorage.setItem("openObject", JSON.stringify(openObject));

    dispatch(setAssetFilters(filterObject, { name }, signal));
    return () => {
      controller.abort();
    };
  }, [filterObject, openObject, name]);

  const handleSubmitFilter = (key: string, value: string) => {
    if (key === "category") {
      if (selectedCategory.includes(value))
        setSelectedCategory([
          ...selectedCategory?.filter((category) => category !== value),
        ]);
      else {
        setSelectedCategory([...selectedCategory, value]);
      }
    }

    if (!filterObject[key]?.includes(value)) {
      setFilterObject({
        ...filterObject,

        [key]: [...filterObject[key], value],
      });
    } else {
      setFilterObject((filterObject: any) => ({
        ...filterObject,

        [key]: filterObject[key]?.filter((item: any) => item !== value),
      }));
    }
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
              <>
                <ListItemButton
                  sx={{
                    pl: 4,
                    textTransform: "capitalize",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filterObject[filter]?.includes(type)}
                        onChange={() => handleSubmitFilter(filter, type)}
                      />
                    }
                    label={type}
                  />
                </ListItemButton>
              </>
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <ListSubheader component="div" id="nested-list-subheader">
              Filter By
            </ListSubheader>
            <Button
              sx={{ mr: 2, my: 2 }}
              variant="outlined"
              onClick={() => {
                setFilterObject(FilterState);
                setSelectedCategory([]);
                setOpenObject([]);
              }}
            >
              Clear
            </Button>
          </Box>
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
