import React from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
import {selectCartItems} from '../../redux/actions/cart.selectors';
import {toggleCartHidden} from '../../redux/actions/cartActions';

import './cart-dropdown.scss';
const Cart = ({cartItems,dispatch})=>(
    <div className="cart-dropdown">
            <div className="cart-items">
                 {
                     cartItems.length?(
                     cartItems.map(c => (
                         <CartItem key={c.id} item={c}/>
                     ))):<span style={{fontSize:"20px",margin:"50px auto"}}>Your Cart is Empty</span>
                 }
            </div>
           <Link to="/checkout"><Button className="button" onClick={()=>dispatch(toggleCartHidden())} variant="outlined">Go to checkout</Button>
           </Link>
    </div>
)

const MapStateToProps = (state)=>({
    cartItems : selectCartItems(state)
})

export default connect(MapStateToProps,null)(Cart);