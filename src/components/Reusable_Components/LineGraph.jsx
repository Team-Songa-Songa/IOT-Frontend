import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const voltageL1Data = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const voltageL2Data = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const voltageL3Data = [3000, 2000, 2780, 1890, 2390, 3490, 4000];


const xLabels = [
  '9 Aug',
  '10 Aug',
  '11 Aug',
  '12 Aug',
  '13 Aug',
  '14 Aug',
  '15 Aug',
];


export default function LineGraph() {
  return (
    <div className='bg-[#fafafa] rounded-lg m-2 border-2 border-blue-300'>
      <h6 className='font-bold ps-5 mt-3'>Parameters vs Time</h6>
      <LineChart
        // width={500}
        colors={['yellow', 'blue', 'green']}
        disableLineItemHighlight={true}
        height={400}
        series={[
          { 
            data: voltageL1Data, 
            label: 'voltageL1',
            curve: 'linear'
          }, //remove curve linear if you want smooth curves
          { data: voltageL2Data,
            label: 'voltageL2',
            curve: 'linear'
          }, //remove curve linear if you want smooth curves
          { data: voltageL3Data,
            label: 'voltageL3',
            curve: 'linear'
          }, //remove curve linear if you want smooth curves
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        //adjust the width of the tooltip

      />
    </div>
  );
}
