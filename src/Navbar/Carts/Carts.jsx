import React, { useState } from 'react';

export default function CartComponent() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Gold Necklace',
      price: 15999,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Diamond Ring',
      price: 25499,
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
    );
  };

  const handleRemove = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Inline styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#fdfdfd',
    minHeight: '100vh',
    color: '#333',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '1rem',
    margin: '1rem auto',
    maxWidth: '500px',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const nameStyle = { fontSize: '1.1rem', fontWeight: 'bold' };
  const quantityStyle = { display: 'flex', alignItems: 'center', gap: '0.5rem' };
  const buttonStyle = {
    padding: '5px 10px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#c2185b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '3rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={itemStyle}>
            <div>
              <div style={nameStyle}>{item.name}</div>
              <div>₹{item.price.toLocaleString()} each</div>
            </div>
            <div style={quantityStyle}>
              <button onClick={() => handleQuantityChange(item.id, -1)} style={buttonStyle}>
                −
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)} style={buttonStyle}>
                +
              </button>
            </div>
            <div>
              <button onClick={() => handleRemove(item.id)} style={{ ...buttonStyle, backgroundColor: '#777' }}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <div style={footerStyle}>Total: ₹{totalAmount.toLocaleString()}</div>
    </div>
  );
}
