import c from './constants';

export const toggleCartHidden = ()=>({
    type:c.TOGGLE_CART,
})


export const addItem=(item)=>({
    type:c.ADD_ITEM,
    payload:item

})

export const clearItemFromCart=(item)=>({
    type:c.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItem=(item)=>({
    type:c.REMOVE_ITEM,
    payload:item
})
