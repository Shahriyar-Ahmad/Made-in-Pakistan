import React from "react";

import Stylo from "../images/stylo.png";
import Gourmet from "../images/goumet foods.png";
import HBL from "../images/hbl bank.png";
import Khaadi from "../images/khaadi.png";
import National from "../images/national foods.png";
import PEL from "../images/martin dow.jpg";
import System from "../images/system ltd.jpg";

const Banner = () => {
  return (
    <div className="banner text-left flex justify-between gap-4 bg-green-100 p-16 mb-2">
      <div className="banner-text">
        <p className="font-bold text-green-600 text-2xl">Lets Promise</p>
        <h2 className="text-4xl leading-normal font-bold font-sans">
          We <b className="text-green-600 underline underline-offset-1">Make</b>{" "}
          Products
        </h2>
        <h2 className="text-4xl leading-normal font-bold font-sans">
          We <b className="text-green-600 underline underline-offset-1">Eat</b>{" "}
          Products
        </h2>
        <h2 className="text-4xl leading-normal font-bold font-sans">
          We <b className="text-green-600 underline underline-offset-1">Use</b>{" "}
          Products
        </h2>
        <h2 className="text-4xl leading-normal font-bold font-sans">
          Which <b className="text-green-600 ">Made in Pakistan.</b>
        </h2>
      </div>
      <div className="grid grid-cols-3">
        <div className="my-10 w-32 justify-center items-center">
          <div className="cursor-pointer h-20 bg-white m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={Gourmet} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
          <div className="cursor-pointer h-20 bg-white m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={National} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
        </div>
        <div className="w-32 justify-center items-center">
          <div className="cursor-pointer h-20 bg-white m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={HBL} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
          <div className="cursor-pointer h-20 bg-white m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={Khaadi} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
          <div className="cursor-pointer h-20 bg-white m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={PEL} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
        </div>
        <div className="my-10 w-32 items-center justify-center">
          <div className="cursor-pointer h-20 bg-white m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={System} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
          <div className="cursor-pointer h-20 bg-white m-2 border-2  rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={Stylo} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
