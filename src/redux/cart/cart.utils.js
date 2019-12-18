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

export const addItemToCart_ = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(it => it.id === cartItems);
  if (existingItem) {
    return cartItems.map(cartItem =>
      cartItem === existingItem
        ? { ...cartItem, quantity: cartItem.count + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
