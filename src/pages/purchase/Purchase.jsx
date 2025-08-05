import React from "react";
import { useState , useEffect } from "react";
import useCartContext from "../cart/CartLogics";
import { useParams,useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export default function PurchaseProduct(){
    const {id} = useParams();
    const [purchase,setPurchase] = useCartContext(id);
    const [show,setShow] = useState(false);
    const [hide,setHide] = useState(true);
    const navigate = useNavigate();
    
    const total = purchase.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  useEffect(()=>{
    const timer = setTimeout(()=>{
        setShow(true)
    },3000);
    const timer2 = setTimeout(()=>{
        setHide(false)
    })
    return ()=> clearTimeout(timer2)
  },[id])

  
  const notify = ()=>{
    if(purchase.length === 0) alert("your cart is empty");
   else{ toast('Thank You for Purchasing ')
    setPurchase([])
    localStorage.removeItem("myCart");}
  }

  const handleShop = ()=>{
    navigate("/products")
  }
    const removeProduct = (id) => {
    const updatedCart = purchase.filter(product => product.id !== id);
    setPurchase(updatedCart);
  };
    return(
        <div className="cart-container">
      <div className="cart-heading">
        <h2> 💸  V-Mart  🏦 </h2>
      </div>
        {purchase.length > 0?
        purchase.map((product)=>{
            return (<div className="cart-card">
                <h3 style={{width:"100px"}}>Id :{product.id}</h3>
                <img src={product.image} alt={product.title} className="cart-image"  />
                <div className="cart-info">
              <h3 style={{marginLeft:"150px"}}>{product.brand}</h3>
              <h3 style={{marginLeft:"300px",fontSize:"25px"}}>$ {product.price.toFixed(2)}</h3>
              </div>
              <div>
                <i className="bi bi-trash3" id="remove"
                  onClick={() => removeProduct(product.id)}> Remove
                </i>
              </div>
               </div>)
        })
         :<div> {hide && <p>Loading ...</p>}<br /><br />{show && <h2>Select The Product Before Buying</h2>}<br />{show && <button onClick={handleShop} className="shop"> Shop Now</button>}</div>
        }
        {purchase.length > 0 && (
        <div className="cart-summary" style={{textAlign:"center",marginTop:"30px"}}>
          <h3 style={{alignItems:"center",fontSize:"25px"}}>Total: ${total.toFixed(2)}</h3>
          <br />
          {/* <button>buy</button> */}
          <i className="bi bi-currency-dollar " id="buy" onClick={notify}>  Buy Now 💰 </i> 
        </div>
      )}
    </div>)
}