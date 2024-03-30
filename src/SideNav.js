import React from 'react'
import { Link } from 'react-router-dom';


function SideNav() {
  return (
    <div>
     <ul>
        <li>
          <Link to="/">WebApplication</Link>
        </li>
        <li>
          <Link to="/about">WebDesign</Link>
        </li>
        <li>
          <Link to="/about">EComerce</Link>
        </li>
        <li>
          <Link to="/about">MobileApp</Link>
        </li>
        <li>
          <Link to="/about">DesktopApp</Link>
        </li>
        <li>
          <Link to="/about">SearchEngine</Link>
        </li>
        <li>
          <Link to="/about">SocialMedia</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
