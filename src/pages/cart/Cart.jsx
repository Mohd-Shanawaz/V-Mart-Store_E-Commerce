import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CartComponent() {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const navigate = useNavigate("")
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   const savedCart = JSON.parse(localStorage.getItem("myCart")) || [];

  //   if (id) {
  //       axios.get("https://fakestoreapi.in/api/products")
  //       .then((response) => {
  //         const allProducts = response.data.products;
  //         const product =  allProducts.find((product) => product.id === Number(id));

  //         if (product) {
  //           const alreadyInCart = savedCart.find(item => item.id === product.id);
  //           const newCart = alreadyInCart
  //             ? savedCart.map(item =>
  //                 item.id === product.id
  //                   ? { ...item, quantity: item.quantity + 1 }
  //                   : item
  //               )
  //             : [...savedCart, { ...product, quantity: 1 }];

  //           setCart(newCart);
  //         } else {
  //           console.warn("Product not found with id:", id);
  //           setCart(savedCart); 
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setCart(savedCart); 
  //       });
  //   } else {
  //     setCart(savedCart);
  //   }
  // }, [id]);

  useEffect(() => {
  const savedCart = JSON.parse(localStorage.getItem("myCart")) || [];

  if (id) {
    axios.get("https://fakestoreapi.in/api/products")
      .then((response) => {
        const allProducts = response.data.products;
        const product = allProducts.find((product) => product.id === Number(id));

        if (product) {
          const alreadyInCart = savedCart.find(item => item.id === product.id);

          if (!alreadyInCart) {
            savedCart.push({ ...product, quantity: 1 });
            localStorage.setItem("myCart", JSON.stringify(savedCart));
            setCart(savedCart);
          } else {
            // If already in cart, just load it
            setCart(savedCart);
          }
        }
      });
  }
}, [id]);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);


  useEffect(()=>{
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);

    const timer2 = setTimeout(()=>{
      setHide(false);
    },3000)

    return () => clearTimeout(timer2);
  },[])

  const incrementQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrementQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const handleBuy = () => {
    if (cart.length === 0) return alert("Cart is empty.");
    navigate(`/buyproduct/${id}`)
    // setCart([]);
    // localStorage.removeItem("myCart");
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleShop = ()=>{
    navigate("/products")
  }

  return (
    
    <div className="cart-container">
      <div className="cart-heading">
        <h2>V-Mart 🛒 Cart 🛍️ </h2>
      </div>
      {console.log(cart)}
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="cart-card" key={item.id}>
            <h3>Id: {item.id}</h3>
            <img src={item.image} alt={item.title} className="cart-image" />
            <div className="cart-info">
              <h3>{item.brand}</h3>
              <h3>$ {item.price.toFixed(2)}</h3>
              <div className="cart-quantity">
                <button onClick={() => decrementQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQty(item.id)}>+</button>
              </div>
              <div>
                <i className="bi bi-trash3" id="remove"
                  onClick={() => removeProduct(item.id)}> Remove
                </i>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
           {hide && <h4>Loading Cart ..... <br/><br /> or <br/><br />product not found</h4>}
           <br /><br />
           {show && 
           <div>
            <h2 style={{color:"green"}}>Your cart is Empty </h2><br />
            <button onClick={handleShop} className="shop">Shop Now</button>
          </div>}
        </div>
       
      )}

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${total.toFixed(2)}</h3>
          <br />
          <i className="bi bi-currency-rupee" id="buy" onClick={handleBuy}> Buy Now </i>
        </div>
      )}
    </div>
  );
}
