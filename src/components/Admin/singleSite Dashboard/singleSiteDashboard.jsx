import React from "react";
import "./singleSite.css";
// import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import MapView from "../../Reusable_Components/MapView";

function SingleSiteDashboard() {
  const latitude = -1.373910; // Example latitude
  const longitude = 36.721500; // Example longitude
  
  const chartOptions1 = {
    chart: {
      type: "pie",
      innerSize: "50%",
      backgroundColor: "transparent",
      // width: 350,
      // height: 400,
    },
    title: {
      text: "",
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          style: {
            color: "black",
          },
        },
      },
    },
    series: [
      {
        name: "Share",
        data: [
          { name: "Automatic Restarts", y: 58.8, color: "#6e44ff" },
          { name: "Starts Counter", y: 41.2, color: "#00aaff" },
        ],
      },
    ],
  };

  const chartOptions2 = {
    chart: {
      type: "pie",
      innerSize: "50%",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          style: {
            color: "black",
          },
        },
      },
    },
    series: [
      {
        name: "Share",
        data: [
          { name: "Power On Time", y: 44.2, color: "#6e44ff" },
          { name: "Operating Time", y: 55.8, color: "#00aaff" },
        ],
      },
    ],
  };

  return (
    <>
      <section className="single-site">
        <div className="single-site-inner">
          

          <div className="main-dashboard">
            <div className="upper-stats">
              <p className="upper-stats-hours">1103 Hours</p>
              <p className="upper-stats-text">Operating Time Hours</p>
            </div>

            <div className="upper-stats">
              <p className="upper-stats-hours">1103 kWh</p>
              <p className="upper-stats-text">Energy Consumption</p>
            </div>

            <div className="upper-stats">
              <p className="upper-stats-hours">1103 L</p>
              <p className="upper-stats-text">Water Produced (* 1000 L)</p>
            </div>

            <div className="upper-stats">
              <p className="upper-stats-hours">1103 PF</p>
              <p className="upper-stats-text">Power Factor</p>
            </div>

            {/* <div className="upper-stats charts">
              <h2>
                Number of Automatic Restarts After Trips vs Number of Starts
                Counter
              </h2>
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions1}
              />
            </div>

            <div className="upper-stats charts">
              <h2>Power On Time Counter vs Operating Time Counter</h2>
              <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions2}
              />
            </div> */}


          </div>
        </div>
      </section>
    </>
  );
}

export default SingleSiteDashboard;
