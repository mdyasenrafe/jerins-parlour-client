import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto p-4">
      <nav className="grid grid-cols-2 lg:flex justify-between items-center">
        <div>
          <img
            width="150px"
            height="50px"
            src="https://i.ibb.co/DKKZpRH/logo.png"
            alt=""
          />
        </div>
        <div className="show text-right">
          <i
            onClick={() => setOpen(!open)}
            className="fas fa-bars cursor-pointor text-base"
          ></i>
        </div>
        <ul className={open ? "main-navbar" : "nav"}>
          <li className="my-4 lg:my-0 lg:inline-block px-3">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className=" my-4 lg:my-0 lg:inline-block  px-3">
            <Link to="/services">Our Services</Link>
          </li>
          <li className="my-4 lg:my-0 lg:inline-block  px-3">
            <Link to="/home">Contact Us</Link>
          </li>
          <li className="my-4 lg:my-0 lg:inline-block  px-3">
            <Link to="/home">
              <button className="btn">Log in</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
