import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import '../App.css'; // Asegúrate de que el archivo CSS esté importado

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.items.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
                <div>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Items: {cart.totalQuantity}</p>
            <p>Total Cost: ${cart.totalAmount.toFixed(2)}</p>
            <button>Checkout (Coming Soon)</button>
            <Link to="/products">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
