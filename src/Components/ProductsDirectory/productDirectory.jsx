import React from 'react';
import {connect} from 'react-redux'
import  {fetchProducts} from '../../actions/productActions';
import {useEffect} from 'react';
import ProductService from '../../Api/ProductApi';
import Product from '../Product/products';
import './product-d.scss';
import {Button} from '@material-ui/core';

const ProductDirectory = ({dispatch,filteredProducts},props) =>{

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    
    return (
        <div className="containerDiv">
             <div className="deletebtn">
                {props.isActive ? <Button id="delbtn" color="danger">Delete</Button> : null }
            </div> 
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

// const MapDispatchToProps=(dispatch)=>({
//     deleteSelectProducts=(va)
// })

export default connect(MapStateToProps,null)(ProductDirectory);