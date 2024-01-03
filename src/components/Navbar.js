import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <div className="shadow-md justify-center items-center">
      <h1 className="text-center mt-3 font-extrabold text-4xl text-green-600 justify-center ">
        Made in Pakistan
      </h1>
      <p className="font-semibold font-sans">
        Pakistani Companies Listing Site.
      </p>
      <div className="nav-links flex gap-4 p-5 justify-center items-center list-none ">
        <li className={`py-1 px-2 text-white font-semibold rounded-md font-sans cursor-pointer ease-in hover:bg-green-700 ${activeLink === 'home' ? 'bg-green-700' : 'bg-green-600'}`}>
          <Link to={"/"} onClick={()=> setActiveLink("home")} >Home</Link>
        </li>
        <li className={`py-1 px-2 text-white font-semibold rounded-md font-sans cursor-pointer ease-in hover:bg-green-700 ${activeLink === 'brands' ? 'bg-green-700' : 'bg-green-600'}`}>
          <Link to={"brands"} onClick={()=> setActiveLink("brands")} >Brands</Link>
        </li>
        <li className={`py-1 px-2 text-white font-semibold rounded-md font-sans cursor-pointer ease-in hover:bg-green-700 ${activeLink === 'about' ? 'bg-green-700' : 'bg-green-600'}`}>
        <Link to={"about"} onClick={()=> setActiveLink("about")} >About</Link>
        </li>
      </div>
    </div>
    // "hg
  );
};

export default Navbar;
