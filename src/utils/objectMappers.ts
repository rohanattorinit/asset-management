import CategoryIcon from "@mui/icons-material/Category";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
//import InputIcon from "@mui/icons-material/Input";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import MemoryIcon from "@mui/icons-material/Memory";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import WebhookIcon from "@mui/icons-material/Webhook";
interface FILTERS {
  category: string;
  location: string;
  os: string;
  processor: string;
  screen_size: string;
  screen_type: string;
  status: string;
  ram: string;
}

export const getFilterName = (name: string) => {
  const filters: FILTERS = {
    category: "Category",
    location: "Location",
    os: "Operating System",
    processor: "Processor",
    screen_size: "Screen Size",
    screen_type: "Screen Type",
    status: "Status",
    ram: "RAM (GB)",
  };

  //@ts-ignore
  if (filters[name]) {
    //@ts-ignore
    return filters[name];
  }
};

interface FILTER_ICON {
  category: any;
  location: any;
  os: any;
  processor: any;
  screen_size: any;
  screen_type: any;
  status: any;
  ram: any;
}

export const getFilterIcon = (name: string) => {
  const filterIcon: FILTER_ICON = {
    category: CategoryIcon,
    location: AddLocationIcon,
    os: WebhookIcon,
    processor: DeveloperBoardIcon,
    screen_size: ScreenshotMonitorIcon,
    screen_type: AddToQueueIcon,
    status: LinearScaleIcon,
    ram: MemoryIcon,
    //brands: InputIcon,
  };

  //@ts-ignore
  if (filterIcon[name]) {
    //@ts-ignore
    return filterIcon[name];
  }
};
