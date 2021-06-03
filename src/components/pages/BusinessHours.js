import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./BusinessHours.css";

export default function BusinessHours() {
  return (
    <>
      <div className="bcontainer">
        <nav className="bnav">
          <h1>Business Hours</h1>
        </nav>
        <div className="bcontent1">
          <h1>Week Schedule</h1>
          <table className = "center">
            <tr>
              <th>Sunday</th>
              <th>CLOSED</th>
            </tr>
            <tr>
              <th>Monday</th>
              <th>8 A.M. - 8 P.M.</th>
            </tr>
            <tr>
              <th>Tuesday</th>
              <th>8 A.M. - 8 P.M.</th>
            </tr>
            <tr>
              <th>Wednesday</th>
              <th>8 A.M. - 8 P.M.</th>
            </tr>
            <tr>
              <th>Thursday</th>
              <th>8 A.M. - 8 P.M.</th>
            </tr>
            <tr>
              <th>Friday</th>
              <th>8 A.M. - 8 P.M.</th>
            </tr>
            <tr>
              <th>Saturday</th>
              <th>8 A.M. - 5 P.M.</th>
            </tr>
          </table>
        </div>
        <div className="bcontent2">
          <h1>Closed On</h1>
          <ul className = "list">
            <li>New Years</li>
            <li>Memorial Day</li>
            <li>Independence Day</li>
            <li>Labor Day</li>
            <li>Thanksgiving</li>
            <li>Christmas</li>
          </ul>
        </div>
        <footer className="bfooter">
            <h1>Susceptible To Change</h1>
        </footer>
      </div>
      <Footer />
    </>
  );
}
