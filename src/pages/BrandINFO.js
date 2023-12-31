import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const BrandINFO = () => {
  const param = useParams();
  const brands = useSelector((state) => state.companiesdata.brands);
  const brandData = brands.filter((brand) => brand.id === param.id);
  return (
    <>
      {brandData.map((brandinfo, i) => (
        <div key={i} className='text-center container justify-center items-center m-auto flex flex-col p-16'>
          <img
            src={brandinfo.brand_logo}
            alt="logo"
            className="w-[100px] h-[100px] rounded-full m-auto border-2 border-green-600"
          />
          <h1 className='my-2 text-center font-sans font-extrabold text-green-600 min-[200px]:text-2xl sm:text-3xl'>{brandinfo.name}</h1>
          <div className='flex min-[200px]:flex-col md:flex-row justify-center items-center my-2 sm:gap-2 md:gap-4'>
            <div className='mx-4'>
              <b>Category : </b>
              <b className='text-green-600 font-sans'>{brandinfo.category}</b>
            </div>
            <div className='mx-4'>
              <b>Founder : </b>
              <b className='text-green-600 font-bold font-sans'>{brandinfo.founder}</b>
            </div>
            <div className='mx-4'>
              <b>Website : </b>
              <b  className='text-green-600 text-extrabold font-sans'>{brandinfo.website_url}</b>
            </div>
          </div>
          <div className="bg-black w-full m-auto my-2 opacity-10 h-[0.6px]"></div>
          <h2 className='min-[200px]:text-lg sm:text-2xl md:text-3xl mt-4 font-bold min-[200px]:w-60 md:w-96 m-auto shadow-lg px-1 py-3 rounded-md bg-green-600 text-white stroke-green-600'>
            About Company
          </h2>
          <p className="my-2 mt-5 text-md font-mono text-left">{brandinfo.description}</p>
          <div className="bg-black w-full m-auto my-2 opacity-10 h-[0.6px]"></div>
          <h2 className='min-[200px]:text-lg sm:text-2xl md:text-3xl font-bold min-[200px]:w-60 md:w-96 m-auto shadow-lg px-1 py-3 mt-4 rounded-md bg-green-600 text-white stroke-green-600'>
            Popular Products
          </h2>
          <div className='flex justify-center items-center gap-4 flex-wrap mt-8'>
            {
              brandinfo.products.map((product, i) => (
                <div key={i} className="card w-52 h-[230px] flex flex-col justify-center items-center bg-white border-2 p-4 rounded-md hover:shadow-md hover:cursor-pointer">
                  <img
                    src={product.p_img}
                    alt="logo"
                    className="w-[100px] h-[100px] rounded-full"
                  />
                  <h3 className="text-green-600 font-bold text-xl mt-1">{product.p_name}</h3>
                  <b>{product.p_category}</b>
                </div>
              ))
            }
          </div>
        </div>
      ))
      }
    </>
  )
}

export default BrandINFO;
