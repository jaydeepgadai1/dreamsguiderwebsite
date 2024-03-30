import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomNavBar.css";

const BottomNavBar = () => {
  return (
    <section className="bottom-nav-bar">
      <div className="fonts_home">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">Our Products</NavLink>
          </li>
          <li>
            <NavLink to="/service">Our Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">AboutUs</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default BottomNavBar;
