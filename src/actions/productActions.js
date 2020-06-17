import c from './constants';

export const fetchProductsBegin = ()=> ({
    type: c.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess =  (pro) => ({
    type:c.FETCH_PRODUCTS_SUCCESS,
    payload:pro,
})

export const fetchProductsFailure =( error) => ({
    type:c.FETCH_PRODUCTS_FAILURE,
    payload:error,
})

export const searchProducts= (products,value)=>(dispatch) =>{
    const val=value.searchInput;
    console.log(products.map(p=>p.name));
   return dispatch({
       type:c.SEARCH_PRODUCT,
       payload:{
           input:val,
           filteredItems:(val==='')?products:products.filter(p=>p.name.toString().toLowerCase().includes(val.toString().toLowerCase()))
       }
   })
}
export function fetchProducts() {
  return async dispatch => {
      dispatch(fetchProductsBegin())

      try{
          const response = await fetch("http://localhost:3201/products");
          const data = await response.json();
        
          dispatch(fetchProductsSuccess(data))
      }
      catch(error){
          dispatch(fetchProductsFailure(error))
      }
  }

}

