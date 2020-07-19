import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import {searchProducts} from '../../redux/actions/productActions';
import {connect} from 'react-redux';
import './search.scss';
import { useFormik } from 'formik';

const Search = ({searchProducts,products}) => {
   
    const formik = useFormik({
        initialValues: {
            searchInput: '',
        },
        onSubmit: values => {
            searchProducts(products,values)
           
        },
    });

    return (

           <div style={{textAlign:"center"}}>
        <div className="search-bar" align="center" >
           
            <form onSubmit={formik.handleSubmit}>
               
                <input
                     className="search-input"
                    id="searchInput"
                    name="searchInput"
                    type="name"
                    onChange={formik.handleChange}
                    value={formik.values.searchInput}
                    placeholder="Search for Products,brands and More..."
                />
                <button type="submit">
               
                <SearchIcon  className="search-icon"  fontSize="large"/>
            
                </button>
            </form>
        </div>
        </div>
    )
}
const MapStateToProps=(state)=>({
    products:state.products.products,
    searchInput:state.products.searchInput,
})
const MapDispatchToProps = (dispatch) =>({
  searchProducts: (products,values)=>dispatch(searchProducts(products,values))
})
export default connect(MapStateToProps,MapDispatchToProps)(Search);