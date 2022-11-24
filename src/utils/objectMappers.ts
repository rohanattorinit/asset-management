import CategoryIcon from "@mui/icons-material/Category";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import WebhookIcon from "@mui/icons-material/Webhook";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import MemoryIcon from "@mui/icons-material/Memory";
import InputIcon from "@mui/icons-material/Input";
import CableIcon from "@mui/icons-material/Cable";
import StorageIcon from "@mui/icons-material/Storage";
import UsbIcon from "@mui/icons-material/Usb";

interface FILTERS {
  screen_type: string;
  ram: string;
  status: string;
  assetType: string;
  category: string;
  operating_system: string;
  processor: string;
  screen_size: string;
  hdd: string;
  ssd: string;
  cableType: string;
  asset_location: string;
  brandName: string;
  connectivity: string;
}

export const getFilterName = (name: string) => {
  const filters: FILTERS = {
    screen_type: "Screen Type",
    ram: "RAM",
    status: "Status",
    assetType: "Asset Type",
    category: "Category",
    operating_system: "Operating System",
    processor: "Processor",
    screen_size: "Screen Size",
    hdd: "HDD",
    ssd: "SSD",
    cableType: "Cable Type",
    asset_location: "Asset Location",
    brandName: "BrandName",
    connectivity: "Connectivity",
  };

  //@ts-ignore
  if (filters[name]) {
    //@ts-ignore
    return filters[name];
  }
};

interface FILTER_ICON {
  category: any;
  asset_location: any;
  operating_system: any;
  processor: any;
  screen_size: any;
  screen_type: any;
  status: any;
  ram: any;
  brandName: any;
  cableType: any;
  hdd: any;
  ssd: any;
  connectivity: any;
}

export const getFilterIcon = (name: string) => {
  const filterIcon: FILTER_ICON = {
    category: CategoryIcon,
    asset_location: AddLocationIcon,
    operating_system: WebhookIcon,
    processor: DeveloperBoardIcon,
    screen_size: ScreenshotMonitorIcon,
    screen_type: AddToQueueIcon,
    status: LinearScaleIcon,
    ram: MemoryIcon,
    brandName: InputIcon,
    cableType: CableIcon,
    hdd: StorageIcon,
    ssd: StorageIcon,
    connectivity: UsbIcon,
  };

  //@ts-ignore
  if (filterIcon[name]) {
    //@ts-ignore
    return filterIcon[name];
  }
};
