import React, { useState, useEffect } from "react";
import "./sites.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sites() {
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3005/api/sites');
        setSites(response.data);
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
      <section className="sites-section">
        <p className="sites-section-p">Your Sites</p>

        {sites.map((site) => (
          <div key={site.site_id} className="sites-individual">
            <div className="site-individual-sites">
              <p className="pump-name">{site.site_name}</p>
            </div>

            <div className="sites-buttons">
              <div className="site-buttons-left">
                <Link to={`/dashboard/${site.site_id}`}>
                  <button>View Site</button>
                </Link>
              </div>
              <div className="site-buttons-right">
                <Link to={`/dashboard/${site.site_id}`}>
                  <button>Edit</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Sites;
