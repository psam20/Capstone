import React from 'react';
import './homepage.css';
import Search from '../Components/Search-bar/Search-bar'
import ProductDirectoryContainer from '../Containers/productDirectoryContainer';
const HomePage = ()=> {
    return (
        <div className="homepage">
          <Search />
          <ProductDirectoryContainer /> 
        </div>
    )
}

export default HomePage;