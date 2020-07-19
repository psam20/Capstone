import {createSelector} from 'reselect';

const selectCart= state => state.cart;

export const selectCartItems= createSelector(
    [selectCart],
    (cart)=>cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
   cartItems => cartItems.reduce((totalCount,cartItem)=> totalCount+cartItem.qty,0)
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalCount,cartItem)=> totalCount+cartItem.qty *cartItem.price,0)

)