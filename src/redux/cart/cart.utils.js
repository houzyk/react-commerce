export const addItemToCart = (items, add) => {
  const existing = items.find(i => i.id === add.id);

  if (existing) {
    return items.map(i =>
      i.id === add.id ?
      {...i, quantity: i.quantity + 1}
      : i
      )
  }

  return ([...items, {...add, quantity: 1}]);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existing = cartItems.find(i => i.id === cartItemToRemove.id);

  if (existing.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map( cartItem =>
    cartItem.id === cartItemToRemove.id ?
    {...cartItems, quantity: cartItem.quantity - 1}
    : cartItem
    )
}
