import React from 'react';
import './Kids.css'; // Import external CSS

export default function Kids() {
  const products = [
    {
      id: 1,
      name: 'Cartoon T-Shirt',
      price: '$20',
      img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/e/c/s/9-10-years-mrv-hfs-160-3-marvel-by-miss-chief-original-imah6dfvkngzzxah.jpeg?q=70',
    },
    {
      id: 2,
      name: 'Kids Denim Jacket',
      price: '$35',
      img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/m/5/x/7-8-years-no-002-fashion-breeze-original-imagxhjyh5xdn3tb.jpeg?q=70',
    },
    {
      id: 3,
      name: 'Light-up Shoes',
      price: '$30',
      img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-shoe/k/p/n/13c-wave001-santhanakid-original-imahbws5yzdhgkvq.jpeg?q=70',
    },
  ];

  return (
    <div className="kids-container">
      <header className="kids-header">
        <h1>Kids' Collection</h1>
        <p>Fun, comfy, and colorful styles for kids</p>
      </header>
      <div className="kids-products">
        {products.map((product) => (
          <div key={product.id} className="kids-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
      <br />
      <a href="/" className="back">Go Back Home</a>
      <br />
      <span>
        <p>&copy; {new Date().getFullYear()} Kids Wear. All rights reserved.</p>
      </span>
    </div>
  );
}
