import React from "react";

// Icons Import
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-ceter px-16 py-5 text-center">
      <div className="social-icons flex gap-4 justify-center items-center">
        <div className="w-[50px] h-[50px] rounded-full bg-white border-2">
          <FaXTwitter className="justify-center text-green-600 hover:text-green-700 items-center mt-3 w-full h-[20px] hover:cursor-pointer" />
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-white border-2">
          <FaLinkedinIn className="justify-center text-green-600 hover:text-green-700 items-center mt-3 w-full h-[20px] hover:cursor-pointer" />
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-white border-2">
          <FaInstagram className="justify-center text-green-600 hover:text-green-700 items-center mt-3 w-full h-[20px] hover:cursor-pointer"/>
        </div>
        <div className="w-[50px] h-[50px] rounded-full bg-white border-2">
          <FaGithub className="justify-center text-green-600 hover:text-green-700 items-center mt-3 w-full h-[20px] hover:cursor-pointer" />
          </div>
      </div>
      <div className="links flex gap-4 text-center justify-center items-center mt-2">
        <p className="font-semibold text-lg ease-in hover:text-green-600 hover:cursor-pointer">
          <Link to={"/"}>Home</Link>
        </p>
        <p className="font-semibold text-lg ease-in hover:text-green-600 hover:cursor-pointer">
        <Link to={"/brands"}>Brands</Link>
        </p>
        <p className="font-semibold text-lg ease-in hover:text-green-600 hover:cursor-pointer">
        <Link to={"/about"}>About</Link>
        </p>
      </div>
      <div className="bg-black min-[200px]:w-[60%] w-[30%] m-auto mt-2 opacity-10 h-[0.8px]"></div>
      <p className="font-semibold mt-2 text-lg text-green-600 hover:cursor-pointer">
        Made With Love By Shahriyar Ahmad.
      </p>
    </div>
  );
};

export default Footer;
