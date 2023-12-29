import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-lg justify-center items-center ">
      <h1 className="text-center mt-3 font-extrabold text-4xl text-green-600 justify-center ">
        Made in Pakistan
      </h1>
      <p className="font-semibold font-sans">
        Pakistani Companies Listing Site.
      </p>
      <div className="nav-links flex gap-4 p-5 justify-center items-center list-none ">
        <li className="p-1 px-2 text-white font-semibold bg-green-600 rounded-md font-sans cursor-pointer ease-in hover:bg-green-700">
          Brands
        </li>
        <li className="p-1 px-2 text-white font-semibold bg-green-600 rounded-md font-sans cursor-pointer ease-in hover:bg-green-700">
          Products
        </li>
        <li className="p-1 px-2 text-white font-semibold bg-green-600 rounded-md font-sans cursor-pointer ease-in hover:bg-green-700">
          About"gh
        </li>
      </div>
    </div>
  );
};

export default Navbar;
