import React from "react";
import "./Product.css";

 export default function Product({image,title,price}){
  return   <div className="card">
                  <img src={image} alt=""  width={270} height={230}/>
                  <h4>{title}</h4>
                  <p>${price}</p>
                  <div>
                     <button id="details">Product Details</button>
                     <button id="addtocart">Add to Cart</button>
                  </div>
               </div>
 }

