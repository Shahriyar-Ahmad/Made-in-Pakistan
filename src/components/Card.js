import React from "react";

const Card = () => {
  return (
    <div className="card w-64 h-64 flex flex-col justify-center items-center bg-white border-2 p-4 rounded-md hover:shadow-md hover:cursor-pointer">
      <div className=" w-[100px] h-[100px] rounded-full bg-green-400"></div>
      <h3 className="text-green-600 font-bold text-xl mt-1">National Foods</h3>
      <b>Grosery</b>
      <button className="py-2 px-4 mt-2 text-white font-semibold bg-green-500 rounded-md font-sans cursor-pointer ease-in hover:bg-green-600">
        View
      </button>
    </div>
  );
};

export default Card;
