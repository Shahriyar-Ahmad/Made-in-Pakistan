import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Search = () => {
    const brands = useSelector((state) => state.companiesdata.brands);
    const [searchQuerry, setSearchQuerry] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const filterBySearch = (e) => {
        const inputValue = e.target.value.toLowerCase();
        const searchBrand = brands.filter(brand => brand.name.toLowerCase().includes(inputValue)) || brands.filter(brand => brand.category.toLowerCase().includes(inputValue));
        setSearchResult(searchBrand);
        setSearchQuerry(inputValue);
    }
    return (
        <div className='py-10 px-16 mb-2 w-full justify-center items-center'>
            <div className=' p-5 justify-center items-center md:w-[50%] m-auto'>
                <input className='px-2 border-green-600 border-2 outline-green-700 outline-2 md:w-[300px] justify-center items-center' onChange={filterBySearch} placeholder='Serach by Company name or Category'/>
                <button className='py-1 px-2 min-[200px]:m-1 min-[200px]:text-md text-white font-semibold rounded-md font-sans cursor-pointer bg-green-600'>
                    Search
                </button>
            </div>
            <h1 className='font-bold text-2xl text-left'>Search Reasult for "{searchQuerry}"</h1>
            <div className='flex justify-center items-center gap-4 flex-wrap mt-8'>
            {
                searchResult.map((brand) => (
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
                ))
            }
        </div>
    </div >
  )
}
// hg
export default Search
