import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

function Product({ image, title, price, id, discount }) {
  // const [inCart, setInCart] = useState(true)

  const navigate = useNavigate();
    const handleProduct = ()=>{
        navigate(`/productdetails/${id}`)
    }
    function handleCart (){
      navigate(`/cart/${id}`)
    }

    const handleCartToggle = () => {
    setInCart(prev => !prev);
    };

    const handleBuy = ()=>{
      navigate(`/buyproduct/${id}`)
    }
  return (
    <div className="card" >
      <div onClick={handleProduct}>
      <img src={image} alt="" width={270} height={230}  className="imageclass"/><br />
      <h4  className="imageclass" id="title">{title}</h4><br />
      <h3 
       className="imageclass" > Price : <span id="price">$ {price}</span></h3><br />
      <h3  className="imageclass">Discount : <span >{discount} %</span></h3><br />
      </div>
      <div>
        
        <button className="cart" onClick={handleCart}>Add To Cart</button>
        <button className="detailbtn" onClick={handleBuy}>Buy Now</button>
      </div>
    </div>
  );
}

export default Product;