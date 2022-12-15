import { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, getElementAtEvent } from "react-chartjs-2";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
//import { useNavigate } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PiechartOne() {
  const { totalAssetCount } = useSelector((state: RootStore) => state.admin);
  const chartRef = useRef();
  // const [dataSet, setDataSet] = useState<Array<any>>([])
  const navigate = useNavigate();

  const handlePieChartClick = (event: any) => {
    localStorage.setItem(
      "pieChartItem",
      JSON.stringify({
        category:
          totalAssetCount[
            // @ts-ignore
            getElementAtEvent(chartRef?.current, event)?.[0]?.index
          ].category,
        surplus: false,
      })
    );
    navigate("/admin/assets");
  };

  const data = {
    labels: totalAssetCount?.map(
      ({ category }) =>
        category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    ),
    datasets: [
      {
        label: totalAssetCount?.map(({ category }) => category),
        data: totalAssetCount?.map(({ count }) => count),
        backgroundColor: [
          "#fbbf24",
          "#dc2626",
          "#22c55e",
          "#a21caf",
          "#14b8a6",
          "#a78bfa",
          "#3f6212",
          "#404040",
          "#831843",
          "#7f1d1d",
        ],
        borderColor: [
          "#f5f5f4",
          "#f5f5f4",
          "#f5f5f4",
          "#f5f5f4",
          "#f5f5f4",
          "#f5f5f4",
          "#f5f5f4",
          "#f5f5f4",
          "#f5f5f4",
          "#f5f5f4",
        ],
        borderWidth: 3,
      },
    ],
  };
  return (
    <>
      <Typography
        sx={{ fontSize: "18px", textAlign: "center" }}
        variant="h5"
        color="primary"
      >
        Total Assets
      </Typography>
      {totalAssetCount?.length ? (
        <Pie
          // @ts-ignore
          data={data}
          // @ts-ignore
          onClick={(event) => handlePieChartClick(event)}
          ref={chartRef}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "default",
          }}
        >
          <Typography sx={{ fontSize: "16px", color: "grey" }}>
            No Data Found!
          </Typography>
        </Box>
      )}
    </>
  );
}
