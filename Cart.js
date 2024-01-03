// Cart.js
import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item._id}>
            {item.Name} - {item.SKU}{' '}
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
