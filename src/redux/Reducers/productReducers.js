import  constants  from '../actions/constants';

export const initialState={
    products:[],
    loading:false,
    hasErrors:false,
    searchInput:"",
    filteredProducts:[],

    count:0,


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
            return {
                ...state,
                searchInput:action.payload.input,
                filteredProducts:action.payload.filteredItems
            }
        case constants.ADD_PRODUCT:
            return {
                ...state,
                products:[...state.products,action.payload],
                filteredProducts:[...state.filteredProducts,action.payload],
            
            }    
    
        case constants.DELETE_PRODUCT:
            return {
                ...state,
                products:[state.products.filter(p=> p.id !== action.payload.id)],
            
            }
         case constants.EDIT_PRODUCT:
             return {
                 ...state,products:[state.products.map(p => {
                     
                     if(p.id === action.payload._id){
                         return action.payload.pro
                     }
                     return p
                 })]
             } 
          case constants.INCREMENT_VIEWED_PRODUCT_COUNT:
              return {
                  ...state,
                  count:action.payload.count+1,

                 }
              
                  
        default:
            return state
    }

}
