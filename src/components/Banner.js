import React from "react";

const Banner = () => {
  return (
    <div className="banner text-left flex justify-between gap-4 bg-green-100 p-16 mb-2">
      <div className="banner-text">
        <p className="font-extrabold text-green-600 text-2xl">Lets Promise</p>
        <h2 className="text-5xl leading-normal font-bold font-sans">
          We <b className="text-green-600 underline underline-offset-1">Make</b>{" "}
          Products
        </h2>
        <h2 className="text-5xl leading-normal font-bold font-sans">
          We <b className="text-green-600 underline underline-offset-1">Eat</b>{" "}
          Products
        </h2>
        <h2 className="text-5xl leading-normal font-bold font-sans">
          We <b className="text-green-600 underline underline-offset-1">Use</b>{" "}
          Products
        </h2>
        <h2 className="text-5xl leading-normal font-bold font-sans">
          Which <b className="text-green-600 ">Made in Pakistan.</b>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="my-10 w-32 justify-center items-center">
          <div className="cursor-pointer h-24 bg-white m-2 border-2 border-green-600 rounded-lg opacity-75 hover:scale-105  hover:opacity-100 hover:shadow-md">
            1
          </div>
          <div className="cursor-pointer h-24 bg-white m-2 border-2 border-green-600 rounded-lg opacity-75 hover:scale-105  hover:opacity-100 hover:shadow-md">
            2
          </div>
        </div>
        <div className="w-32 justify-center items-center">
          <div className="cursor-pointer h-24 bg-white m-2 border-2 border-green-600 rounded-lg opacity-75 hover:scale-105  hover:opacity-100 hover:shadow-md">
            3
          </div>
          <div className="cursor-pointer h-24 bg-white m-2 border-2 border-green-600 rounded-lg opacity-75 hover:scale-105  hover:opacity-100 hover:shadow-md">
            4
          </div>
          <div className="cursor-pointer h-24 bg-white m-2 border-2 border-green-600 rounded-lg opacity-75 hover:scale-105  hover:opacity-100 hover:shadow-md">
            5
          </div>
        </div>
        <div className="my-10 w-32 items-center justify-center">
          <div className="cursor-pointer h-24 bg-white m-2 border-2 border-green-600 rounded-lg opacity-75 hover:scale-105  hover:opacity-100 hover:shadow-md">
            6
          </div>
          <div className="cursor-pointer h-24 bg-white m-2 border-2 border-green-600 rounded-lg opacity-75 hover:scale-105  hover:opacity-100 hover:shadow-md">
            7
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
