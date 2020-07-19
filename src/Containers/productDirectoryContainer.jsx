import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts, deleteProductsAxios } from '../redux/actions/productActions';
import ProductDirectory from '../Components/ProductsDirectory/productDirectory';
const ProductDirectoryContainer = ({ fetchProducts, auth, filteredProducts, selectIds, loginUsers, deleteMultiple }) => {

    return (
<ProductDirectory fetchProducts={fetchProducts} auth={auth} filteredProducts={filteredProducts} selectIds={selectIds} loginUsers={loginUsers} deleteMultiple={deleteMultiple} />
    )
}
const MapStateToProps = (state => ({
    products: state.products.products,
    loading: state.products.loading,
    hasErrors: state.products.hasErrors,
    filteredProducts: state.products.filteredProducts,
    auth: state.user.authBool,
    loginUsers: state.user.currentUser,
    selectIds: state.selectedProduct.selected,
}))
const MapDispatchToProps = (dispatch) => {
    return {
        deleteMultiple: (value) => dispatch(deleteProductsAxios(value)),
        fetchProducts: () => dispatch(fetchProducts()),
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ProductDirectoryContainer);