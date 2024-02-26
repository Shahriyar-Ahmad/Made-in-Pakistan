import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

const Brands = () => {
  const brands = useSelector((state) => state.companiesdata.brands);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastIndex = itemsPerPage * currentPage;
  const firstIndex = lastIndex - itemsPerPage;

  const paginate = (index) => {
    setCurrentPage(index + 1)
  }

  const moveToPrev = () => {
    if (currentPage === 1) {
        setCurrentPage(totalPages)
    }
    else {
        setCurrentPage(currentPage - 1)
    }
}
const moveToNext = () => {

    if (currentPage === totalPages) {
        setCurrentPage(1)
    }
    else {
        setCurrentPage(currentPage + 1)
    }

}
  // Filter brands based on the category
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredBrands = activeCategory === 'all'
    ? brands
    : brands.filter((brand) => brand.category === activeCategory).sort((a, b) => a.name.localeCompare(b.name));


  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };
  const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);
  const currentPageProduct = filteredBrands.slice(firstIndex, lastIndex);

  return (
    <div className='py-10 px-16 mb-2 min-[200px]:justify-self-start md:justify-center items-center'>
      <div className="flex flex-wrap gap-1 md:p-5 my-5 md:justify-center items-center m-auto text-center">
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
        <div className='opacity-50'>|</div>
        <div>
          <span title='Search Company'>
             <Link to={"/search"}><IoIosSearch className='text-xl text-green-600 font-bold' /></Link>
          </span>
       </div>
      </div>
      <div className='flex justify-center items-center gap-4 flex-wrap mt-8'>
        {currentPageProduct.map((brand) => (
          <div key={brand.id} className="card w-64 h-[270px] flex flex-col justify-center items-center bg-white border-2 p-4 rounded-md hover:shadow-md hover:cursor-pointer">
            <img
              src={brand.brand_logo}
              alt="logo"
              className="w-[100px] h-[100px] rounded-full"
              autofocus
            />
            <h3 className="text-green-600 font-bold text-xl mt-1 text-center">{brand.name}</h3>
            <b className='text-center'>{brand.category}</b>
            <p className="py-1 px-4 mt-2 text-white font-semibold bg-green-500 rounded-md font-sans cursor-pointer ease-in hover:bg-green-600">
              <Link to={`/brand/${brand.id}`}> View </Link>
            </p>
          </div>
        ))}
      </div>
      <div className="nav-links flex-wrap gap-4  md:p-5 my-5 md:justify-center items-center m-auto text-center">
        <button
          onClick={moveToPrev}
          className={`py-1 px-2 min-[200px]:m-1 min-[200px]:text-sm text-white font-semibold rounded-md font-sans cursor-pointer bg-green-600`}
        >
        Prev
        </button>
        {
            Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => paginate(index)}
                    className={`py-1 px-2 min-[200px]:m-[1px] min-[200px]:text-sm text-white font-semibold rounded-lg font-sans cursor-pointer ${currentPage === index + 1 ? 'bg-green-700' : 'bg-green-600'}`}
                >
                    {index + 1}
                </button>
            ))
        }
        <button
          onClick={moveToNext}
          className={`py-1 px-2 min-[200px]:m-1  min-[200px]:text-sm text-white font-semibold rounded-md font-sans cursor-pointer ease-in bg-green-600`}
        >
        Next
        </button>
      </div>
    </div>
  );
}

export default Brands;
