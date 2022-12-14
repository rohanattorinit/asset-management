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
    const chartRef =  useRef();
    // const [dataSet, setDataSet] = useState<Array<any>>([])
    const navigate= useNavigate()
    console.log("pie rendered")
    
    
    const handlePieChartClick = (event:any) => {
      // @ts-ignore
      localStorage.setItem('pieChartItem',JSON.stringify({category:totalAssetCount[getElementAtEvent(chartRef?.current, event)?.[0]?.index].category,surplus:false}))
      navigate('/admin/assets')
    }    

      const data = {
        labels: totalAssetCount?.map(({category}) => category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()),
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
  { totalAssetCount?.length ? ( <Pie data={data} 
  // @ts-ignore
    onClick={(event) => handlePieChartClick(event)}
    ref={chartRef}
    
/>): null}
  </>
)}


