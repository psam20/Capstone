import c from './constants';
import Axios from 'axios';

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

export const addProducts=(pro)=>({
    type:c.ADD_PRODUCT,
    payload:pro
})

export const EditProducts=(pro)=>{
    console.log(pro);
    return({
    type:c.EDIT_PRODUCT,
    payload:pro
})}

export const deleteProducts=(id)=>({
    type:c.DELETE_PRODUCT,
    payload:id
})

export const incrementCount=(id,count)=>({
    type:c.INCREMENT_VIEWED_PRODUCT_COUNT,
    payload:{
        id:id,
        count:count
    }
})
export const selectProducts=(id)=>({   
     type:c.SELECT_PRODUCT,
    payload:id,
})


export const deleteSelected=()=>({
    type:c.SELECTED_PRODUCT_DELETE,
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

export  function addProductsAxios(pro){
  
    return async dispatch => { 
        
      try{
          await Axios.post("http://localhost:3201/products",pro)
          dispatch(addProducts(pro));
          dispatch(fetchProducts());
              
      }
      catch(error){
          console.log(error)
  
  }
  }}

  export function updateProductsAxios(product){
      console.log(product);
    
      return async dispatch =>{
          try{
             await Axios.put(`http://localhost:3201/products/${product.id}`,product)
             .then(res => console.log(res));
             dispatch(EditProducts(product));
             dispatch(fetchProducts());
          }
          catch(err){
              console.log(err);
          }
      }

  }

  export function deleteProductsAxios(id) { 
      return  async dispatch=>{
    try{
  
     await Axios.delete(`http://localhost:3201/products/${id}`)
             dispatch(deleteProducts(id))
             dispatch(fetchProducts());
    }
    catch(err){
        console.log(err);
    }
  }


}

export function deleteSelectProductsAxios(id) { 
    return  async dispatch=>{
  try{
 for(let i=0;i<id.length;i++){
   await Axios.delete(`http://localhost:3201/products/${id[i]}`)
           dispatch(deleteProducts(id[i]))
  }
}
  catch(err){
      console.log(err);
  }
}


}