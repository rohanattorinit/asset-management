import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PiechartOne() {
    const { assets,totalAssetCount,totalSurplusAssetCount  } = useSelector((state: RootStore) => state.admin);

    console.log('totalAssetCount',Object.values(totalAssetCount))
    

      const data = {
        labels: totalAssetCount?.map(({category}) => category),
       datasets: [
         {
           label:totalAssetCount?.map(({category}) => category) ,
           data: totalAssetCount?.map(({count}) => count),
           backgroundColor: [
            "#fbbf24",
            "#dc2626",
            "#22c55e",
            "#a21caf",
            "#14b8a6",
            "#a78bfa",
            "#3f6212",
            //  'rgba(255, 162, 132, 0.2)',
            //  'rgba(54, 162, 235, 0.2)',
            //  'rgba(255, 206, 86, 0.2)',
            //  'rgba(75, 192, 192, 0.2)',
            //  'rgba(153, 102, 255, 0.2)',
            //  'rgba(255, 159, 64, 0.2)',
           ],
           borderColor: [
             '#f5f5f4',
             '#f5f5f4',
             '#f5f5f4',
             '#f5f5f4',
             '#f5f5f4',
             '#f5f5f4',
             '#f5f5f4',
           ],
            borderWidth: 3,
          },
         ],
     };
  return (
    <>
    <Typography
    sx={{ fontSize: "18px" }}
   variant="h5"
   color="primary"
 >
   Total Assets
  </Typography>
  {/* @ts-ignore */}
  <Pie data={data} />
  </>
)}
