import React from 'react';
import {signOutUser} from '../redux/actions/usersAction'
import {toggleCartHidden} from '../redux/actions/cartActions';
import {selectCartItemsCount} from '../redux/actions/cart.selectors';
import {connect} from 'react-redux';
import Header from '../Components/nav-bar/NavBar';
const NavBarContainer = ({loginUsers,auth,logOut,toggleCart,hidden,itemCount})=>{

    return (
        <div>
          <Header toggleCart={toggleCart} itemCount={itemCount} loginUsers={loginUsers} auth={auth} logOut={logOut} hiddenCart={hidden} />
        </div>
    )
}

const MapStateToProps=(state)=>({
    loginUsers:state.user.currentUser,
    auth:state.user.authBool,
    hidden:state.cart.hidden,
    itemCount:selectCartItemsCount(state)
 
  })
const MapDispatchToProps=(dispatch)=>({
  logOut:()=>dispatch(signOutUser()),
  toggleCart:()=>dispatch(toggleCartHidden())
})

export default   connect(MapStateToProps,MapDispatchToProps) (NavBarContainer);