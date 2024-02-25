import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <div className="shadow-md justify-center items-center sticky top-0">
      <h1 className="text-center mt-3 font-extrabold sm:text-2xl md:text-4xl text-green-600 justify-center ">
        Made in Pakistan
      </h1>
      <p className="font-semibold text-center font-sans min-[200px]:text-[.7rem] md:text-lg">
        Pakistani Companies Listing Site.
      </p>
      <div className="nav-links flex gap-4 p-5 justify-center items-center list-none ">
        <li className={`py-1 px-2 text-white min-[200px]:text-[.8rem] md:text-lg font-semibold rounded-md font-sans md:leading-6 cursor-pointer ease-in hover:bg-green-700 ${activeLink === 'home' ? 'bg-green-700' : 'bg-green-600'}`}>
          <Link to={"/"} onClick={()=> setActiveLink("home")} >Home</Link>
        </li>
        <li className={`py-1 px-2 text-white min-[200px]:text-[.8rem] md:text-lg font-semibold rounded-md font-sans md:leading-6  cursor-pointer ease-in hover:bg-green-700 ${activeLink === 'brands' ? 'bg-green-700' : 'bg-green-600'}`}>
          <Link to={"brands"} onClick={()=> setActiveLink("brands")} >Brands</Link>
        </li>
        <li className={`py-1 px-2 text-white min-[200px]:text-[.8rem] md:text-lg font-semibold rounded-md lead md:leading-6 font-sans cursor-pointer ease-in hover:bg-green-700 ${activeLink === 'about' ? 'bg-green-700' : 'bg-green-600'}`}>
        <Link to={"about"} onClick={()=> setActiveLink("about")}>About</Link>
        </li>
      </div>
    </div>
    // "hg
  );
};

export default Navbar;
