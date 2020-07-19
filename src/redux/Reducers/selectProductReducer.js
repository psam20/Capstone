import  constants  from '../actions/constants';

export const initialState={
   
    deleteBool:false,
    selected:[],
}

export default function selectProductReducer(state=initialState,action){
    switch(action.type){

        case constants.SELECT_PRODUCT:
            return{
                ...state,
                deleteBool:true,
                selected:[...state.selected,action.payload]
            }

            default:
                return state

    }
}
