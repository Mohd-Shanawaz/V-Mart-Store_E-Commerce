import React from 'react';
import './Mens.css'; // Import external CSS

export default function Mens() {
  const products = [
    { id: 1, name: 'Classic T-Shirt', price: '$25', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/e/7/2/xl-2pc-polo-neck-blissbell-original-imahf8ftuhacuyrf.jpeg?q=70' },
    { id: 2, name: 'Denim Jacket', price: '$80', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/h/x/3/m-no-920-denim-bj-10-mevan-original-imah7efyhfuv3jbd.jpeg?q=70' },
    { id: 3, name: 'Casual Sneakers', price: '$60', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/z/v/9-brd-1240-9-birde-green-white-original-imahbwdcdqcsxu3k.jpeg?q=70' },
  ];

  return (
    <div className="mens-container">
      <header className="mens-header">
        <h1>Men's Collection</h1>
        <p>Explore our latest styles for men</p>
      </header>

      <div className="mens-products">
        {products.map(product => (
          <div key={product.id} className="mens-card">
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
