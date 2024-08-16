import React from "react";
import "./singleSite.css";
import { Link } from "react-router-dom";
function SingleSiteDashboard() {
  return (
    <>
      <section className="single-site">
        <div className="single-site-inner">

          

            <h1 className="single-site-h1">
              Wanjie's Greenhouse Cabbage Control
            </h1>

            <div className="minor-navs">
              <Link to='' className="minor-navs-inner-p">
              <div className="minor-navs-inner">
                <p >Dashboard</p>
              </div>
              </Link>
              <Link to='' className="minor-navs-inner-p">

              <div className="minor-navs-inner">
                <p >Notifications</p>
              </div>
              </Link>
              <Link to=''className="minor-navs-inner-p" >

              <div className="minor-navs-inner">
                <p >Management</p>
              </div>
              </Link>

            </div>

            <div className="main-dashboard">

              <div className="upper-stats">

                <p className="upper-stats-hours">1103 Hours</p>
                <p className="upper-stats-text">Operating Time Hours</p>

              </div>

              <div className="upper-stats">

                <p>1103 Hours</p>
                <p>Operating Time Hours</p>

              </div>

              <div className="upper-stats">

                <p>1103 Hours</p>
                <p>Operating Time Hours</p>

              </div>



            </div>

          





        </div>
      </section>
    </>
  );
}

export default SingleSiteDashboard;
