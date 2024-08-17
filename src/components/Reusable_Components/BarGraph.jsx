import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

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

export default function BarGraph() {
  return (
    <div className='bg-[#fafafa] rounded-lg m-2 border-2 border-blue-300'>
      <h6 className='font-bold ps-5 mt-3'>Parameters vs Time</h6>
    <BarChart
      // width={500}
      height={400}
      series={[
        {
          data: voltageL1Data,
          label: 'voltageL1',
          id: 'voltageL1Id',
          yAxisId: 'leftAxisId',
        },
        {
          data: voltageL2Data,
          label: 'voltageL2',
          id: 'voltageL2Id',
          yAxisId: 'leftAxisId',
        },
        {
          data: voltageL3Data,
          label: 'voltageL3',
          id: 'voltageL3Id',
          yAxisId: 'leftAxisId',
        },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      yAxis={[{ id: 'leftAxisId' }]}
      leftAxis="leftAxisId"
    />
    </div>
  );
}