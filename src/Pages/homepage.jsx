import React from 'react';
import './homepage.css';
import Search from '../Components/Search-bar/Search-bar'
import ProductDirectory from '../Components/ProductsDirectory/productDirectory';
const HomePage = ()=> {
    return (
        <div className="homepage">
          <Search />
          <ProductDirectory /> 
        </div>
    )
}

export default HomePage;