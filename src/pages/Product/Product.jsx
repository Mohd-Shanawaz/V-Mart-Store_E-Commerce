import React from "react";
import "./Product.css";
import ProductDetails from "../ProductDetails/Productdetails";

function Product({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} alt="" width={270} height={230} />
      <h4>{title}</h4>
      <p>${price}</p>
      <div>
        <button className="detailbtn" onClick={ProductDetails}>Product Details</button>
        <button className="cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;