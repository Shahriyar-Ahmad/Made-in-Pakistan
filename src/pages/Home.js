import React from 'react'

// import Component
import Banner from "../components/Banner";
import PopularBrand from "../components/PopularBrand";
import PopularProducts from "../components/PopularProducts";
import Table from '../components/Table';

const Home = () => {
    return (
        <main>
            <Banner />
            <PopularProducts />
            <PopularBrand />
            <Table />
        </main>
    )
}

export default Home
