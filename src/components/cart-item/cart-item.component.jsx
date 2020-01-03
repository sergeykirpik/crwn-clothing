import React from 'react';

// import './cart-item.styles.scss';
import { CartItemContainer } from './cart-item.styles';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </CartItemContainer>
);

export default CartItem;
