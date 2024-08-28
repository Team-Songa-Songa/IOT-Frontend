import React, { useState, useEffect } from "react";
import LineGraph from "../../components/Reusable_Components/LineGraph";
import BarGraph from "../../components/Reusable_Components/BarGraph";
import Datacard from "../../components/Reusable_Components/Datacard";
import ToggleSwitch from "../../components/Reusable_Components/ToggleSwitch";
import Navbar from "../../components/Header/Navbar";
import MapView from "../../components/Reusable_Components/MapView";
import { Grid } from "@mui/material";
import axios from 'axios';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SingleSiteDashboard from "../../components/Admin/singleSite Dashboard/singleSiteDashboard";


function SingleSiteDashboardPage() {
  // Example data for the graphs
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "yellow",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        width: 20,
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const barChartData = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
      },
    ],
  };

  const latitude = -1.373910; // Example latitude
  const longitude = 36.721500; // Example longitude

  const [siteData, setSiteData] = useState([]);
  const [siteParameters, setSiteParameters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //get the id from the url
  const id = window.location.pathname.split("/").pop();
  // console.log(id);
  

  useEffect(() => {
    const fetchSites = async () => {
      try {
        setLoading(true);
        const singleSite = await axios.get('http://167.71.232.217:3006/sites/' + id );
        const singleSiteParameters = await axios.get('http://167.71.232.217:3006/sites/' + id + '/parameters');

        setSiteData(singleSite.data);
        setSiteParameters(singleSiteParameters.data);
        // setSiteData(limitedData);
        // console.log(response.data);
      } catch (err) {
        console.log(err);
        setError("An error occurred while fetching the sites.");
      } finally {
        setLoading(false);
      }
    };

    fetchSites();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <AiOutlineLoading3Quarters size={50} className="loading-icon" />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }
  

  return (
    <div className="bg-[#fafafa]">

      <Navbar />
        
      
      {/* Ryan */}
      {/* <SingleSiteDashboard /> */}
      {/* Ryan */}

      {/* Myles */}
      <div className="mt-3 p-4 md:p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Datacard title="Latest Digital Data">
            <ToggleSwitch label="Local Control Mode" initialState={true} />
            <ToggleSwitch label="Remote Control Mode" initialState={false} />
            <ToggleSwitch label="Pump Status" initialState={true} />
            <ToggleSwitch label="Pump Trip" initialState={false} />
          </Datacard>

          <Datacard title="Latest Digital Data">
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Local Control Mode</span>
            <span className="font-medium text-gray-800">Green-On, Yellow-Off</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Remote Control Mode</span>
            <span className="font-medium text-gray-800">Green-On, Yellow-Off</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Pump Status</span>
            <span className="font-medium text-gray-800">Green-On, Yellow-Off</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Pump Trip</span>
            <span className="font-medium text-gray-800">Red-Trip, Yellow-Normal</span>
          </div>
        </Datacard>

        <Datacard title="Latest Analog Data">
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">System Pressure</span>
            <span className="font-medium text-gray-800">0.00 Bar</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">System Flow Rate</span>
            <span className="font-medium text-gray-800">0.00 m3/hr</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Motor Temperature</span>
            <span className="font-medium text-gray-800">65.54 °C</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Voltage (L1)</span>
            <span className="font-medium text-gray-800">242.80 Vac</span>
          </div>
        </Datacard>

        <Datacard title="Latest Derived Data">
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Energy Consumption</span>
            <span className="font-medium text-gray-800">37.0 kW</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Energy Consumption (kWh)</span>
            <span className="font-medium text-gray-800">91075 kWh</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Operating Time Counter</span>
            <span className="font-medium text-gray-800">11103 Hrs</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Power On Time Counter</span>
            <span className="font-medium text-gray-800">14032 Hrs</span>
          </div>
        </Datacard>

        <Datacard title="Latest Multi Switch Data">
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">MP-204 Alarm Status</span>
            <span className="font-medium text-gray-800">No Alarm</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">Operating Mode</span>
            <span className="font-medium text-gray-800">Motor Protection Trip</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <span className="text-sm text-gray-500">System Mode</span>
            <span className="font-medium text-gray-800">Operating</span>
          </div>
        </Datacard>

        <Datacard title="Latest Notifications">
          <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded-md">
            Pump Stop for parameter PUMP STATUS: 5/26/2024, 10:25:31 PM
          </div>
          <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded-md">
            Many Restarts Alarm for parameter MP-204 ALARM STATUS: 5/26/2024, 9:46:12 AM
          </div>
          <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded-md">
            Many Restarts Alarm for parameter MP-204 ALARM STATUS: 5/26/2024, 4:27:00 AM
          </div>
        </Datacard>

          {/* Map Component can be added here */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Map Location</h2>
            <MapView latitude={latitude} longitude={longitude} />
          </div>
        </div>
      </div>
      {/* Myles */}

      {/* Andrew  */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LineGraph data={lineChartData} />
        </Grid>

        <Grid item xs={12}>
          <BarGraph data={barChartData} />
        </Grid>
      </Grid>
      {/* Andrew */}
    </div>
  );
}

export default SingleSiteDashboardPage;
