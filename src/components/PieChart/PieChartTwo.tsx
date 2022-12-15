import React, { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, getElementAtEvent } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PiechartTwo() {
  const { totalSurplusAssetCount } = useSelector(
    (state: RootStore) => state.admin
  );
  const chartRef = useRef();
  const navigate = useNavigate();

  const newData = totalSurplusAssetCount?.map(
    (category) =>
      ["laptop", "monitor", "headset", "mobile", "keyboard", "mouse"].includes(
        category?.category
      ) && category
  );
  const moreNewData = newData?.filter((category) => category !== false);
  const handlePieChartClick = (event: any) => {
    localStorage.setItem(
      "pieChartItem",
      JSON.stringify({
        category:
        // @ts-ignore
        moreNewData[getElementAtEvent(chartRef?.current, event)?.[0]?.index]?.category,
        surplus: true,
      })
    );
    navigate("/admin/assets");
  };

  const data = {
    labels: moreNewData?.map(
      // @ts-ignore
      ({ category }) =>
        category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    ),
    datasets: [
      {
        // @ts-ignore
        label: moreNewData?.map(({ category }) => category),
        // @ts-ignore
        data: moreNewData?.map(({ count }) => count),
        backgroundColor: [
          "#22c55e",
          "#fbbf24",
          "#dc2626",
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
        Preferred Surplus Assets
      </Typography>
       {totalSurplusAssetCount?.length ? (
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
