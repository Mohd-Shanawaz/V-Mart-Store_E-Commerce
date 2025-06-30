import React from 'react';
import './Womens.css'; // External stylesheet

export default function Womens() {
  const products = [
    { id: 1, name: 'Floral Dress', price: '$45', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/8/j/t/m-sfs-2001-zwerlon-original-imagycngpzucmdcg.jpeg?q=70' },
    { id: 2, name: 'Summer Top', price: '$30', img: 'https://rukminim2.flixcart.com/image/612/612/l572ufk0/top/k/0/i/m-zm03-zamaisha-original-imagfx8tpmjgbymf.jpeg?q=70' },
    { id: 3, name: 'Elegant Heels', price: '$70', img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/w/r/8/5-w104-weary-white-original-imagjucfmajw45z4.jpeg?q=70' },
  ];

  return (
    <div className="womens-container">
      <header className="womens-header">
        <h1>Women's Collection</h1>
        <p>Discover the latest fashion trends for women</p>
      </header>

      <div className="womens-products">
        {products.map(product => (
          <div key={product.id} className="womens-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="buy-btn">Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
