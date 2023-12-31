import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Brands = () => {
  const brands = useSelector((state) => state.companiesdata.brands);
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter brands based on the category
  const filteredBrands = activeCategory === 'all'
    ? brands
    : brands.filter((brand) => brand.category === activeCategory).sort((a, b) => a.name.localeCompare(b.name));

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className='popular-brand-product py-10 px-16 mb-2 min-[200px]:justify-self-start md:justify-center items-center'>
      <div className="nav-links flex-wrap gap-4  md:p-5 my-5 md:justify-center items-center m-auto text-center">
        <button
          onClick={() => handleCategoryClick('all')}
          className={`py-1 px-2 min-[200px]:m-1 min-[200px]:text-md text-white font-semibold rounded-md font-sans cursor-pointer ease-in ${activeCategory === 'all' ? 'bg-green-700' : 'bg-green-600'}`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryClick('Groceries')}
          className={`py-1 px-2 min-[200px]:m-1 min-[200px]:text-md text-white font-semibold rounded-md font-sans cursor-pointer ease-in ${activeCategory === 'Groceries' ? 'bg-green-700' : 'bg-green-600'}`}
        >
          Groceries
        </button>
        <button
          onClick={() => handleCategoryClick('Food & Beverage')}
          className={`py-1 px-2 min-[200px]:m-1 min-[200px]:text-md text-white font-semibold rounded-md font-sans cursor-pointer ease-in ${activeCategory === 'Food & Beverage' ? 'bg-green-700' : 'bg-green-600'}`}
        >
          Food & Beverage
        </button>
        <button
          onClick={() => handleCategoryClick('Personal Care')}
          className={`py-1 px-2 min-[200px]:m-1 min-[200px]:text-md text-white font-semibold rounded-md font-sans cursor-pointer ease-in ${activeCategory === 'Personal Care' ? 'bg-green-700' : 'bg-green-600'}`}
        >
          Personal Care
        </button>
        <button
          onClick={() => handleCategoryClick('Electronics & Home appliances')}
          className={`py-1 px-2 min-[200px]:m-1 min-[200px]:text-md text-white font-semibold rounded-md font-sans cursor-pointer ease-in ${activeCategory === 'Electronics & Home appliances' ? 'bg-green-700' : 'bg-green-600'}`}
        >
          Electronics
        </button>
        <button
          onClick={() => handleCategoryClick('Clothing and Apparel')}
          className={`py-1 px-2 min-[200px]:m-1 min-[200px]:text-md text-white font-semibold rounded-md font-sans cursor-pointer ease-in ${activeCategory === 'Clothing and Apparel' ? 'bg-green-700' : 'bg-green-600'}`}
        >
          Clothing and Apparel
        </button>
        <button
          onClick={() => handleCategoryClick('Medications and Health Products')}
          className={`py-1 px-2 min-[200px]:m-1 min-[200px]:text-md text-white font-semibold rounded-md font-sans cursor-pointer ease-in ${activeCategory === 'Medications and Health Products' ? 'bg-green-700' : 'bg-green-600'}`}
        >
         Health Products
        </button>
      </div>
      <div className='flex justify-center items-center gap-4 flex-wrap mt-8'>
        {filteredBrands.map((brand) => (
          <div key={brand.id} className="card w-64 h-[270px] flex flex-col justify-center items-center bg-white border-2 p-4 rounded-md hover:shadow-md hover:cursor-pointer">
            <img
              src={brand.brand_logo}
              alt="logo"
              className="w-[100px] h-[100px] rounded-full"
            />
            <h3 className="text-green-600 font-bold text-xl mt-1 text-center">{brand.name}</h3>
            <b className='text-center'>{brand.category}</b>
            <p className="py-1 px-4 mt-2 text-white font-semibold bg-green-500 rounded-md font-sans cursor-pointer ease-in hover:bg-green-600">
              <Link to={`/brand/${brand.id}`}> View </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
