import React from 'react';
import './Electronics.css'; // External stylesheet

export default function Electronics() {
  const products = [
    { id: 1, name: 'Smartphone', price: '$699', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70' },
    { id: 2, name: 'Laptop', price: '$1,099', img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/g/m/-original-imah3xrqttkdbss4.jpeg?q=70' },
    { id: 3, name: 'Wireless Headphones', price: '$199', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/o/o/p/wireless-gaming-sports-headphones-stereo-with-sd-card-5-6h-original-imah2d8gfdgxunwe.jpeg?q=70' },
    { id: 4, name: 'Smart Watch', price: '$149', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=70' },
  ];

  return (
    <div className="electronics-container">
      <header className="electronics-header">
        <h1>Electronics</h1>
        <p>Explore the latest in tech and gadgets</p>
      </header>

      <div className="electronics-products">
        {products.map(product => (
          <div key={product.id} className="electronics-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
