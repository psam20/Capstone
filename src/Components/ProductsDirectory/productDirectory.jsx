import React from 'react';
import {connect} from 'react-redux'
import  {fetchProducts} from '../../actions/productActions';
import {useEffect} from 'react';
import Product from '../Product/products';
import './product-d.scss';
const ProductDirectory = ({dispatch,filteredProducts}) =>{

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    

  
    return (
        <div className="containerDiv">
         
           <div className="productsDiv">
              
                 {
                     
                     filteredProducts.map( ({id,...otherProps})=>(
                         <Product key={id} id={id} {...otherProps}/>
                     ))
                 }
           </div>
        </div>
    )
}
const MapStateToProps = (state => ({
    products: state.products.products,
    loading:state.products.loading,
    hasErrors:state.products.hasErrors,
    filteredProducts:state.products.filteredProducts,
}))

export default connect(MapStateToProps,null)(ProductDirectory);