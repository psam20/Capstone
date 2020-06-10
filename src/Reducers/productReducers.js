import  constants  from '../actions/constants';

export const initialState={
    products:[],
    loading:false,
    hasErrors:false,
    searchInput:"",
    filteredProducts:[],
}

export default function productsReducer(state=initialState,action) {

    switch (action.type) {
        case constants.FETCH_PRODUCTS_BEGIN:
            return {...state,loading:true}
        case constants.FETCH_PRODUCTS_SUCCESS:
            return {...state,filteredProducts:action.payload,products:action.payload,loading:false,hasErrors:false}
        case constants.FETCH_PRODUCTS_FAILURE:
            return {...state,loading:false,hasErrors:true}   
            
        case constants.SEARCH_PRODUCT:
            return {...state,searchInput:action.payload.input,filteredProducts:action.payload.filteredItems}
    
     
            
        default:
            return state
    }

}
