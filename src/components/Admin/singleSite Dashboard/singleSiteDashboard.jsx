import React from "react";
import "./singleSite.css";
import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function SingleSiteDashboard() {
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
          {/* <h1 className="single-site-h1">
            Wanjie's Greenhouse Cabbage Control
          </h1>

          <div className="minor-navs">
            <Link to="" className="minor-navs-inner-p">
              <div className="minor-navs-inner">
                <p>Dashboard</p>
              </div>
            </Link>
            <Link to="" className="minor-navs-inner-p">
              <div className="minor-navs-inner">
                <p>Notifications</p>
              </div>
            </Link>
            <Link to="" className="minor-navs-inner-p">
              <div className="minor-navs-inner">
                <p>Management</p>
              </div>
            </Link>
          </div> */}

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

            <div className="upper-stats charts">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleSiteDashboard;
