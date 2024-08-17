import React from "react";
import LineGraph from "../../components/Reusable_Components/LineGraph";
import BarGraph from "../../components/Reusable_Components/BarGraph"
import { Grid } from '@mui/material';


function SingleSiteDashboardPage() {
  // Example data for the graphs
//   const lineChartData = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: [65, 59, 80, 81, 56, 55],
//         borderColor: "yellow",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         width: 20,


//       },
//       {
//         label: "Dataset 2",
//         data: [28, 48, 40, 19, 86, 27],
//         borderColor: "rgb(54, 162, 235)",
//         backgroundColor: "rgba(54, 162, 235, 0.5)",
//       },
//     ],
//   };

//   const barChartData = {
//     labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: [65, 59, 80, 81],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.5)",
//           "rgba(54, 162, 235, 0.5)",
//           "rgba(255, 206, 86, 0.5)",
//           "rgba(75, 192, 192, 0.5)",
//         ],
//       },
//     ],
//   };

  return (
    <div>
        <Grid container spacing={3}>

            <Grid item xs={12}>
            <LineGraph data={lineChartData} />
            </Grid>


            <Grid item xs={12}>
            <BarGraph data={barChartData} />
            </Grid>

        </Grid>
    </div>
   
  );
}

export default SingleSiteDashboardPage;
