import {useRef} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie ,getElementAtEvent} from 'react-chartjs-2';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PiechartOne() {
    const { totalAssetCount } = useSelector((state: RootStore) => state.admin);
   

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
   Total Assets
  </Typography>
  {/* @ts-ignore */}
  
  { data ? (<Pie data={data} />) : <></>}
  </>
)}


