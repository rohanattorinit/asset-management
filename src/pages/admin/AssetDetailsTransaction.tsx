import { Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import AssetDetails from "../../components/AssetDetailsHistory/AssetDetails";
import AssetTransactionHistory from "../../components/AssetDetailsHistory/AssetTransactionHistory";
import Toast from "../../components/ErrorHandling/Toast";
import SideBar from "../../components/Sidebar/Sidebar";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const allyProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};
function AssetDetailsTransaction() {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        container
        sx={{
          height: "100%",
          overflowX: "hidden",
          "::-webkit-scrollbar ": {
            display: "none",
          },
        }}
      >
        <SideBar />
        <Toast />
        <Grid item xs={12} md={10} p={3}>
          ​
          <Box>
            <Tabs value={value} onChange={handleTabChange} centered>
              <Tab label="Asset Details" {...allyProps(0)} />
              <Tab label="Asset Transaction History" {...allyProps(1)} />
            </Tabs>
          </Box>
          ​{" "}
          <TabPanel value={value} index={0}>
            {" "}
            <AssetDetails />
          </TabPanel>
          ​{" "}
          <TabPanel value={value} index={1}>
            <AssetTransactionHistory />
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
}

export default AssetDetailsTransaction;
