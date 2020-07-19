export const addItemToCart= (cartItems,cartItemToAdd)=>{
    const existingCartItem= cartItems.find(c => c.id === cartItemToAdd.id);
    if(existingCartItem){
  return  cartItems.map(cartItem => 
            cartItem.id===cartItemToAdd.id ?
            {...cartItem,qty:cartItem.qty+1}:
            cartItem
    )

}

return [...cartItems,{...cartItemToAdd,qty:1}]
}

export const removeItemFromCart =(cartItems,cartItemToRemove)=>{
  const existingCartItem= cartItems.find(c => c.id === cartItemToRemove.id);
    

  if(existingCartItem.qty === 1){
    return cartItems.filter(c => c.id !== cartItemToRemove.id)
  }
  return  cartItems.map(cartItem => 
    cartItem.id===cartItemToRemove.id ?
    {...cartItem,qty:cartItem.qty-1}:
    cartItem
)
}