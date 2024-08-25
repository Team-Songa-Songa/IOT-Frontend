import React from "react";
import "./sites.css";
import { Link } from "react-router-dom";

function Sites() {
  const id = 123; // Replace this with the actual ID or pass it as a prop

  return (
    <>
      <section className="sites-section">
        <p className="sites-section-p">Your Sites</p>

        <div className="sites-individual">
          <div className="site-individual-sites">
            <p className="pump-name">Nawasco Soil Pump station</p>
          </div>

          <div className="sites-buttons">
            <div className="site-buttons-left">
              <Link to={`/dashboard/${id}`}>
                <button>View Site</button>
              </Link>
            </div>
            <div className="site-buttons-right">
              {" "}
              <Link to={`/dashboard/${id}`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="sites-individual">
          <div className="site-individual-sites">
            <p className="pump-name">Nawasco Soil Pump station</p>
          </div>

          <div className="sites-buttons">
            <div className="site-buttons-left">
              <Link to={`/dashboard/${id}`}>
                <button>View Site</button>
              </Link>
            </div>
            <div className="site-buttons-right">
              {" "}
              <Link to={`/dashboard/${id}`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="sites-individual">
          <div className="site-individual-sites">
            <p className="pump-name">Nawasco Soil Pump station</p>
          </div>

          <div className="sites-buttons">
            <div className="site-buttons-left">
              <Link to={`/dashboard/${id}`}>
                <button>View Site</button>
              </Link>
            </div>
            <div className="site-buttons-right">
              {" "}
              <Link to={`/dashboard/${id}`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sites;
