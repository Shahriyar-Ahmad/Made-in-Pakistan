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
    </div>
  ))
  return (
    <div className='popular-brand-product p-16 justify-center items-center'>
      <h2 className='min-[200px]:text-lg sm:text-2xl md:text-3xl text-center font-bold min-[200px]:w-60 md:w-96 m-auto shadow-lg px-1 py-3 rounded-md bg-green-600 text-white stroke-green-600'>Some Popular Products</h2>
      {/* <div className='h-1.5 w-52 m-auto mt-4 bg-green-500 rounded-md text-center'></div> */}
      <div className='flex justify-center items-center gap-4 flex-wrap mt-8'>
        {PopularProducts}
      </div>
    </div>
  );
}

export default PopularProducts;
