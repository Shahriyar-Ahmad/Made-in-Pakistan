import React from 'react'
import Card from './Card';

const PopularBrand = () => {
  return (
    <div className='popular-brand-product p-16 mb-4 justify-center items-center'>
    <div className='top-info justify-center items-center text-center'>
       <h2 className='text-5xl font-bold font-sans text-green-600'>Some Popular Brands</h2>
       <div className='h-1.5 w-52 m-auto mt-4 bg-green-500 rounded-md text-center'></div>
    </div>
       <div className='flex justify-center items-center gap-4 flex-wrap mt-10'>
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
       </div>
    </div>
  )
}

export default PopularBrand;
