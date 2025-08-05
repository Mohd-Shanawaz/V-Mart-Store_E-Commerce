import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
  axios.get(`https://fakestoreapi.in/api/products/${id}`)
    .then(res => { 
      console.log(res.data.product)
      setProduct(res.data.product);
    })
    .catch(error => console.error("Error fetching product:", error));
}, [id]);

 if (!product) {
  return <h2>Loading product...</h2>;
}

function handleRouting(){
  navigate(`/cart/${id}`)
}
const handleBuy =()=> {navigate(`/buyproduct/${id}`)}
  return (
    <div>
      <h1>Product Details</h1>
       <div className="productinfo">

            <div className="section1">
               <div className="productimage">
                  <img src={product.image} className="productimg"/> <br />
               </div>
                <div className="buttons">
                  <button className="cartbtn" onClick={handleRouting}>Add To Cart</button><button className="buybtn" onClick={handleBuy}>Buy Now</button>
                </div>
             </div>

         <div className="productdetails">
            <h2><span>Product:</span> {product.title}</h2><br/>
            <h3><span>Price:</span> $ {product.price}</h3><br/>
            {/* <h3><span>Descriotion:</span> {product.description}</h3><br/> */}
            <h3><span>Brand:</span> {product.brand}</h3><br/>
            <h3><span>model:</span> {product.model}</h3><br/>
            <h3><span>color:</span> {product.color===undefined?" - ":product.color}</h3><br/>
            <h3><span>category:</span> {product.category}</h3><br/>
            <h3><span>discount:</span> {product.discount===undefined?0:product.discount}%</h3><br/>
          </div> 
       </div>
    </div>
  );
}
