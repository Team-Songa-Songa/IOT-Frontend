import React, { useState, useEffect } from "react";
import "./sites.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Header/Navbar";

function Sites() {
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://167.71.232.217:3006/users/230/sites');
        setSites(response.data);
        // setSites(limitedData);
        console.log(response.data);
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
    <>
    <div>
      <Navbar />

      <section className="sites-section px-4 pt-3 bg-[#fafafa]">
        <p className="sites-section-p">Your Sites</p>

        {sites.map((site) => (
          <div key={site.site_id} className="sites-individual p-5 bg-white">

{/* <div className="bg-blue-500 rounded-md flex flex-col justify-center items-center h-full"> */}
            <div className="site-individual-sites flex flex-col text-center">
              <p className="pump-name">{site.site_name}</p>

              <span className="uppercase">{site.site_description}</span>
            </div>

            <div className="sites-buttons flex justify-around items-center w-full">

              <div className="w-auto min-w-[100px] text-center shadow-lg p-2 bg-[#3B82F6] font-semibold text-white text-[13px] rounded-full">
                <Link className="flex justify-center items-center" to={`/dashboard/${site.site_id}`}>
                  <button className="flex gap-2 text-center justify-center items-center">
                    Edit
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                  </button>
                </Link>


              </div>


              <div className="w-auto min-w-[100px] text-center shadow-lg p-2 rounded-full bg-[#3B82F6] font-semibold text-white text-[13px]">
                <Link className="flex justify-center items-center" to={`/dashboard/${site.site_id}`}>
                  <button className="flex gap-1 text-center justify-center items-center">
                    View
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>

  
                  </button>
                </Link>
              </div>


            </div>

{/* </div> */}

          </div>
        ))}
      </section>

    </div>
    </>
  );
}

export default Sites;
