export const addItemToCart = (cartItems, cartItemToAdd) => {
  const idx = cartItems.findIndex(it => it.id === cartItemToAdd.id);
  if (idx === -1) {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
  return [
    ...cartItems.slice(0, idx),
    { ...cartItemToAdd, quantity: cartItems[idx].quantity + 1 },
    ...cartItems.slice(idx + 1)
  ];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
  cartItems
    .map(cartItem => ({
      ...cartItem,
      quantity:
        cartItem.quantity - (cartItem.id === cartItemToRemove.id ? 1 : 0)
    }))
    .filter(cartItem => cartItem.quantity > 0);

export const addItemToCart_ = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(it => it.id === cartItemToAdd.id);
  if (existingItem) {
    return cartItems.map(cartItem =>
      cartItem === existingItem
        ? { ...cartItem, quantity: cartItem.count + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart_ = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(it => it.id === cartItemToRemove.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1
        }
      : cartItem
  );
};
