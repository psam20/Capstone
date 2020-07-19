import React from 'react';
import './cart-item.scss';

const CartItem = ({ item: { href, name, price ,qty} }) => {
    console.log(qty)

    return (
        <div className="cart-item">
            <img src={href} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                   {qty} x {price}
                    </span>

            </div>

        </div>
    )

}
export default CartItem;