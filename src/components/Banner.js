import React from "react";

import Stylo from "../all images/Else Pics/stylo.png";
import Gourmet from "../all images/Gourmet Foods/Logo.png";
import HBL from "../all images/Else Pics/hbl bank.png";
import Khaadi from "../all images/Khaadi/Logo.png";
import National from "../all images/National Foods/Logo.jpg";
import PEL from "../all images/Pak Elektron Limited (PEL)/Logo.png";
import System from "../all images/Else Pics/system ltd.jpg";

const Banner = () => {
  return (
    <div className="banner text-left flex min-[200px]:flex-col md:flex-row justify-between gap-4 bg-green-200 p-16 mb-2">
      <div className="banner-text min-[200px]:order-2 md:order-1">
        <p className="font-bold text-green-600 min-[200px]:text-lg md:text-2xl">Lets Promise</p>
        <h2 className="min-[200px]:text-2xl md:text-4xl leading-normal font-bold font-sans">
          We <b className="text-green-600 underline underline-offset-1">Make</b>{" "}
          Products
        </h2>
        <h2 className="min-[200px]:text-2xl md:text-4xl leading-normal font-bold font-sans">
          We <b className="text-green-600 underline underline-offset-1">Eat</b>{" "}
          Products
        </h2>
        <h2 className="min-[200px]:text-2xl md:text-4xl leading-normal font-bold font-sans">
          We <b className="text-green-600 underline underline-offset-1">Use</b>{" "}
          Products
        </h2>
        <h2 className="min-[200px]:text-2xl md:text-4xl leading-normal font-bold font-sans">
          Which <b className="text-green-600 ">Made in Pakistan.</b>
        </h2>
      </div>
      <div className="grid grid-cols-3 min-[200px]:gap-2 min-[200px]:order-1 md:order-2">
        <div className="my-10 md:w-32 justify-center items-center">
          <div className="cursor-pointer h-20 bg-white md:m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={Gourmet} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
          <div className="cursor-pointer h-20 bg-white md:m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={National} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
        </div>
        <div className="md:w-32 justify-center items-center">
          <div className="cursor-pointer h-20 bg-white md:m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={HBL} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
          <div className="cursor-pointer h-20 bg-white md:m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={Khaadi} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
          <div className="cursor-pointer h-20 bg-white md:m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={PEL} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
        </div>
        <div className="my-10 md:w-32 items-center justify-center">
          <div className="cursor-pointer h-20 bg-white md:m-2 border-2 rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={System} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
          <div className="cursor-pointer h-20 bg-white md:m-2 border-2  rounded-lg opacity-90 hover:scale-110  hover:opacity-100 hover:shadow-md">
            <img src={Stylo} alt="stylo" className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
