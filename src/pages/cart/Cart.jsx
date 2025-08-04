import React, { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CartComponent() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  // 🧲 Load cart from localStorage and add new product from API if any
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("myCart")) || [];

    if (id) {
      axios.get("https://fakestoreapi.in/api/products")
        .then((res) => {
          const allProducts = res.data.products;
          const product = allProducts.find((item) => item.id === Number(id));

          if (product) {
            const alreadyInCart = savedCart.find(item => item.id === product.id);
            const newCart = alreadyInCart
              ? savedCart.map(item =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
              : [...savedCart, { ...product, quantity: 1 }];

            setCart(newCart);
          } else {
            console.warn("Product not found with id:", id);
            setCart(savedCart); // Just use saved cart
          }
        })
        .catch((error) => {
          console.log(error);
          setCart(savedCart); // If error, use saved cart
        });
    } else {
      setCart(savedCart);
    }
  }, [id]);

  // 💾 Save cart to localStorage on every cart update
  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);

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
    alert("Thank you for purchasing!");
    setCart([]);
    localStorage.removeItem("myCart");
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-heading">
        <h2>V-Mart 🛒 Cart</h2>
      </div>

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
        <p>Loading Cart ..... or product not found</p>
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
