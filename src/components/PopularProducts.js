import React from 'react';
import PopularProuctsInfo from '../data/PopularProductsInfo';

const PopularProducts = () => {
  const PopularProducts = PopularProuctsInfo.map((brand, i) => (
    <div key={i} className="card w-64 h-64 flex flex-col justify-center items-center bg-white border-2 py-4 rounded-md hover:shadow-md hover:cursor-pointer">
      <img
        src={brand.img_src}
        alt="logo"
        className="w-[100px] h-[100px] rounded-full"
      />
      <h3 className="text-green-600 font-bold text-xl mt-1">{brand.name}</h3>
      <b>{brand.categery}</b>
      <button className="py-1 px-3 mt-2 text-white font-semibold bg-green-500 rounded-md font-sans cursor-pointer ease-in hover:bg-green-600">
        View
      </button>
    </div>
  ))
  return (
    <div className='popular-brand-product p-16 mb-4 justify-center items-center'>
      <h2 className='text-3xl font-bold w-96 m-auto border-2 px-1 py-2 rounded-md bg-green-600 text-white stroke-green-600'>Some Popular Products</h2>
      {/* <div className='h-1.5 w-52 m-auto mt-4 bg-green-500 rounded-md text-center'></div> */}
      <div className='flex justify-center items-center gap-4 flex-wrap mt-8'>
        {PopularProducts}
      </div>
      <button className="py-2 px-4 mt-10 text-white font-semibold bg-green-500 rounded-md font-sans cursor-pointer ease-in hover:bg-green-600">
        View More
      </button>
    </div>
  );
}

export default PopularProducts;
