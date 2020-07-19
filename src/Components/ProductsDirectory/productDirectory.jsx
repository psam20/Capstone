import React from 'react';

import { useSortData } from './sortConfig';
import Dropdown from 'react-bootstrap/Dropdown'
import { useEffect } from 'react';
import ProductsContainer from '../../Containers/productsContainer';

import './product-d.scss';

const ProductDirectory = ({ fetchProducts, filteredProducts }) => {

    const { items, requestSort } = useSortData(filteredProducts);
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])
    console.log(filteredProducts);
    //  console.log(sortedProducts);


    return (
        <div className="containerDiv">
          <Dropdown style={{width:"20%"}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Sort Products
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={() => requestSort('count')}>Sort Products By Popularity</Dropdown.Item>
    <Dropdown.Item onClick={() => requestSort('name')}>Sort Products By Name</Dropdown.Item>
    <Dropdown.Item onClick={() => requestSort('price')}>Sort Products By Price</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            {/* <button onClick={() => requestSort('name')}>Sort Products By Name</button> */}
            <div className="productsDiv">

                {

                    items.map((item,id) => (
                        <ProductsContainer key={id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}



export default ProductDirectory;

