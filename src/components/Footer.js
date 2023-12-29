import React from "react";

const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-ceter p-16 text-center">
      <div className="social-icons flex gap-4 justify-center items-center">
        <div className="w-[50px] h-[50px] rounded-full bg-green-400"></div>
        <div className="w-[50px] h-[50px] rounded-full bg-green-400"></div>
        <div className="w-[50px] h-[50px] rounded-full bg-green-400"></div>
        <div className="w-[50px] h-[50px] rounded-full bg-green-400"></div>
      </div>
      <div className="links flex gap-4 text-center justify-center items-center mt-2">
        <p className="font-semibold text-lg ease-in hover:text-green-600 hover:cursor-pointer">
          Brands
        </p>
        <p className="font-semibold text-lg ease-in hover:text-green-600 hover:cursor-pointer">
          Products
        </p>
        <p className="font-semibold text-lg ease-in hover:text-green-600 hover:cursor-pointer">
          About
        </p>
      </div>
      <div className="bg-black w-96 m-auto mt-2 opacity-5 h-1"></div>
      <p className="font-semibold mt-2 text-lg text-green-600 hover:cursor-pointer">
        Made With Love By Shahriyar Ahmad.
      </p>
    </div>
  );
};

export default Footer;
