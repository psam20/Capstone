import React from 'react';
import { incrementCount, selectProducts } from '../redux/actions/productActions';
import { addItem } from '../redux/actions/cartActions'
import {connect} from 'react-redux';
import Product from '../Components/Product/products';
const ProductsContainer = ({ item, addItem, increment, select, auth ,loginUsers})=>{

    return (
        <div>
         <Product item={item} addItem={addItem} increment={increment} selectPro={select} auth={auth} loginUsers={loginUsers} />
        </div>
    )
}
const MapStateToProps = (state) => ({
    productsCount: state.products.products.length,
    loginUsers:state.user.currentUser,
    auth: state.user.authBool,

})
const MapDispatchToProps = (dispatch) => ({

    increment: (a, b) => dispatch(incrementCount(a, b)),
    select: (value) => dispatch(selectProducts(value)),
    addItem: (item) => dispatch(addItem(item))
})


export default   connect(MapStateToProps,MapDispatchToProps) (ProductsContainer);