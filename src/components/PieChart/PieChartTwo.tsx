import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { ElementFlags } from 'typescript';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PiechartTwo() {
    const { assets } = useSelector((state: RootStore) => state.admin);

    const surplusAssets = assets?.filter((el) => el?.status === "surplus")
    const names = surplusAssets?.map((asset) => {
        return asset?.category
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
        labels: Object.keys(countedNames),
       datasets: [
         {
           label: '# of Votes',
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
   Surplus Assets
  </Typography>
  <Pie data={data} />
  </>
)}
