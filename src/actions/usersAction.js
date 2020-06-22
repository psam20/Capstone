import c from './constants';

export const setCurrentUser= user =>{
    console.log(user);
    return({
        type:c.SET_CURRENT_USER,
        payload:user
    })
}

export const signOutUser=()=>{
    return({
        type:c.LOGOUT_USER
    })
}