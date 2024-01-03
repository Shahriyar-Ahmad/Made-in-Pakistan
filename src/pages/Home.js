import React from 'react'

// import Component
import Banner from "../components/Banner";
import PopularBrand from "../components/PopularBrand";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
    return (
        <main>
            <Banner />
            <PopularBrand />
            <PopularProducts />
        </main>
    )
}

export default Home
