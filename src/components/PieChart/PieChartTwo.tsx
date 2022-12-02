import React, { useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie,getElementAtEvent } from 'react-chartjs-2';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { useNavigate } from 'react-router-dom';


ChartJS.register(ArcElement, Tooltip, Legend);

export function PiechartTwo() {
    const { totalSurplusAssetCount  } = useSelector((state: RootStore) => state.admin);
   


    const newData = totalSurplusAssetCount?.map((category) => ['laptop','monitor','headset','mobile','keyboard','mouse'].includes(category?.category) && category )    
    const moreNewData = newData?.filter((category) => category !== false)

   
   
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
            "#22c55e",
            "#fbbf24",
            "#dc2626",
            "#a21caf",
            "#14b8a6",
            "#a78bfa",
            "#3f6212",
            "#404040",
            "#831843",
            "#7f1d1d"
           
           ],
           borderColor: [
             '#f5f5f4',
             '#f5f5f4',
             '#f5f5f4',
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
   Preffered Surplus Assets
  </Typography>
  {/* @ts-ignore */}
  { data ? (<Pie data={data} />) : <></>}
  </>
)}
