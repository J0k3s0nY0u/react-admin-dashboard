import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="Logo" />
        <span>React Admin</span>
      </div>
      <div className="icons">
        <i className="fa-solid fa-magnifying-glass icon"></i>
        <i className="fa-solid fa-sliders icon"></i>
        <i className="fa-solid fa-maximize icon"></i>
        <div className="notification">
          <i className="fa-regular fa-envelope"></i>
          <span>1</span>
        </div>
        <div className="user">
          <img src="./logo512.png" alt="" />
          <span>J0k3s0nY0u</span>
        </div>
        <i className="fa-solid fa-gears icon"></i>
      </div>
    </div>
  );
};

export default Navbar;
