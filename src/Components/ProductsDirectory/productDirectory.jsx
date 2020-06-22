import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts,deleteProductsAxios } from '../../actions/productActions';
import { useEffect } from 'react';
import Product from '../Product/products';
import Button from '@material-ui/core/Button';
import './product-d.scss';
const ProductDirectory = ({fetchProducts,auth,filteredProducts,selectIds,deleteMultiple}) => {
    useEffect(() => {
        fetchProducts()
    },[fetchProducts])
  
  
  const  deleteProducts=(e)=>{
        for(let i=0;i<selectIds.length;i++){
            const id=selectIds[i];
             deleteMultiple(id)
        }
        window.location.reload(false);
 


    }

    return (
        <div className="containerDiv">
        
           {auth? <Button variant="contained"
                color="primary" onClick={(e)=>deleteProducts(e)}>Delete</Button>:""}
            <div className="productsDiv">

                {

                    filteredProducts.map(({ id, ...otherProps }) => (
                        <Product key={id} id={id} {...otherProps} />
                    ))
                }
            </div>
        </div>
    )
}
const MapStateToProps = (state => ({
    products: state.products.products,
    loading: state.products.loading,
    hasErrors: state.products.hasErrors,
    filteredProducts: state.products.filteredProducts,
    auth:state.user.authBool,
    selectIds:state.selectedProduct.selected,
}))
const MapDispatchToProps=(dispatch)=>{
 return{  
      deleteMultiple:(value)=>dispatch(deleteProductsAxios(value)),
      fetchProducts:()=>dispatch(fetchProducts()),
}
}

export default connect(MapStateToProps,MapDispatchToProps)(ProductDirectory);