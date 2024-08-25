import React from "react";
import "./sites.css";
function Sites() {
  return (
    <>
      <section className="sites-section">
        <p className="sites-section-p">Your Sites</p>

        <div className="sites-individual">
          <div className="site-individual-sites">
            <p>Nawasco Soil Pump station</p>
          </div>

          <div className="sites-buttons">
            <div className="site-buttons-left">
              <button>View Site</button>
            </div>
            <div className="site-buttons-right">Edit</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sites;
