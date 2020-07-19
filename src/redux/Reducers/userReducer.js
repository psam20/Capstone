import c from '../actions/constants';
const INITIAL_STATE={
    currentUser:null,
    authBool:false

}

const userReducer=(state=INITIAL_STATE,action)=>{
     
    switch(action.type){
        case c.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.payload,
                authBool:true
            }
        case c.LOGOUT_USER:
            return{
                ...state,
                currentUser:null,
                authBool:false
            }    


       default:
           return state

    }
}

export default userReducer;