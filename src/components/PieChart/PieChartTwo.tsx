import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';


ChartJS.register(ArcElement, Tooltip, Legend);

export function PiechartTwo() {
    const { totalSurplusAssetCount  } = useSelector((state: RootStore) => state.admin);

    //console.log('totalAssetCount',Object.values(totalAssetCount))
    const newData = totalSurplusAssetCount?.map((category) => ['laptop','monitor','headset','mobile'].includes(category?.category) && category )    
    const moreNewData = newData?.filter((category) => category !== false)
    //console.log('moreNewData',moreNewData)

    const data = {
      // @ts-ignore
        labels: moreNewData?.map(({category}) => category),
       datasets: [
         {
          // @ts-ignore
           label:moreNewData?.map(({category}) => category) ,
          // @ts-ignore
           data: moreNewData?.map(({count}) => count),
           backgroundColor: [
            "#dc2626",
            "#fbbf24",
            "#22c55e",
            "#a21caf",
            "#14b8a6",
            "#a78bfa",
            "#3f6212",
           
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
   Surplus Assets
  </Typography>
  {/* @ts-ignore */}
  <Pie data={data} />
  </>
)}
