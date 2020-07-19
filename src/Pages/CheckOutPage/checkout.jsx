import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import CheckoutItem from '../../Components/checkout-item/checkoutItem';
import { selectCartItems, selectCartTotal } from '../../redux/actions/cart.selectors';
import { clearItemFromCart,addItem,removeItem } from '../../redux/actions/cartActions'
import './checkout.scss';
import { useState } from 'react';
const Checkout = ({ cartItems, total, clearItem ,addItem,removeItem}) => {
    const [shipping] = useState(40);
    return (<div className='container'>
        <div className='row'>
            <div className="col-sm-12 col-md-8 col-md-offset-1">
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>  Product  </th>
                            <th> Quantity   </th>
                            <th>  Price  </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cartItems.map((c) => (
                                <tr key={c.id}>
                                    <td className="col-sm-4 col-md-6">
                                        <div className="media">
                                            <img className="media-object" src={c.href} style={{ width: "72px", height: "72px" }} />
                                            <div className="media-body">
                                                <h4 className="media-heading">{c.name}</h4>
                                                <h5 className="media-heading"> by {c.manufacturer}</h5>
                                                <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                                            </div>

                                        </div>
                                    </td>
                                    <td className="col-sm-1 col-md-1" style={{ textAlign: "center",display:"flex" }}>
                                        <div className='arrow' onClick={()=>removeItem(c)}>&#10094;</div>
                                       <span className='value'> {c.qty}</span>
                                        <div className="arrow" onClick={()=>addItem(c)}>&#10095;</div>

                                    </td>
                                    <td className="col-sm-1 col-md-1 text-center"><strong>{c.price}</strong></td>
                                    <td className="col-sm-1 col-md-1">
                                        <button type="button" className="btn btn-danger" onClick={() => clearItem(c)}>
                                            <span className="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td></td>
                            <td></td>

                            <td className='col-sm-1 col-md-2'><h5>Subtotal:</h5></td>
                            <td><h5><strong>{"Rs." + total}</strong></h5></td>
                        </tr>
                        <tr>
                            <td>.</td>

                            <td>.</td>
                            <td className='col-sm-1 col-md-2'><h5>Shipping:</h5></td>
                            <td ><h5><strong>{"Rs." + shipping}</strong></h5></td>
                        </tr>
                        <tr>
                            <td>.</td>

                            <td>.</td>
                            <td className='col-sm-1 col-md-2'><h5>Total:</h5></td>
                            <td><h5><strong>{"Rs." + (shipping + total)}</strong></h5></td>
                        </tr>


                    </tbody>

                </table>
            </div>

        </div>

    </div>
    )
}

const MapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
const MapDispatchToProps = (dispatch) => ({
    clearItem: (value) => dispatch(clearItemFromCart(value)),
    addItem:(value)=> dispatch(addItem(value)),
    removeItem:(value)=>dispatch(removeItem(value))
})
export default connect(MapStateToProps, MapDispatchToProps)(Checkout);