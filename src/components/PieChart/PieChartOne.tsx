import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PiechartOne() {
    const { assets,totalAssetCount,totalSurplusAssetCount  } = useSelector((state: RootStore) => state.admin);
    
    const names:string[] = assets.map((el) => {
        return el.category
    })
    console.log({names})
    const countedNames = names?.reduce((allNames:any, name) => {
        const currCount = allNames[name] ?? 0;
        return {
          ...allNames,
          [name]: currCount + 1,
        };
      }, {});

      console.log(Object.values(countedNames))

      const data = {
        labels: ["lapt"],
       datasets: [
         {
           label: 'Count of category',
           data: Object.values(countedNames),
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
  <Pie data={data} />
  </>
)}
