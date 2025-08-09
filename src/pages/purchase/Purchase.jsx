import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function PurchaseProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const [purchase, setPurchase] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
  if (id) {
    axios.get("https://fakestoreapi.in/api/products")
      .then((res) => {
        const product = res.data.products.find(p => p.id === Number(id));
        if (product) {
          setPurchase([{ ...product, quantity: 1 }]); 
        } else {
          toast.error("Product not found");
        }
      })
      .catch(() => toast.error("Failed to load product"));
  } else {
    const savedCart = JSON.parse(localStorage.getItem("myCart")) || [];
    setPurchase(savedCart);
  }
}, [id]);


  // Calculate total safely
  const total =
    purchase && purchase.length > 0
      ? purchase.reduce((sum, product) => sum + product.price * product.quantity, 0)
      : 0;

  const notify = () => {
    if (!purchase.length) {
      toast.error("Your cart is empty");
    } else {
      // toast.success("Thank You for Purchasing");
      toast.success('Thank You for Purchasing', {
  style: {
    padding: '16px',
    color: '#3ffd05ff',
    fontWeight:'bold',
    fontFamily:'cursive',
    backgroundColor:"black",
    border:'1px solid white'
  },
  iconTheme: {
    primary: '#40fd01ff',
    secondary: '#000000ff',
  },
});
      localStorage.removeItem("myCart");
      setPurchase([]);
    }
  };

  const handleShop = () => navigate("/products");

  const removeProduct = (id) => {
    const updatedCart = purchase.filter((product) => product.id !== id);
    setPurchase(updatedCart);
    localStorage.setItem("myCart", JSON.stringify(updatedCart));
  };

  const handleBuy = () => {
    notify();
    setShowModal(false);
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart-heading">
          <h2> 💸 V-Mart 🏦 </h2>
        </div>

        {purchase && purchase.length > 0 ? (
          purchase.map((product) => (
            <div className="cart-card" key={product.id}>
              <h3 style={{ width: "100px" }}>Id : {product.id}</h3>
              <img src={product.image} alt={product.title} className="cart-image" />
              <div className="cart-info">
                <h3 style={{ marginLeft: "150px" }}>{product.brand}</h3>
                <h3 style={{ marginLeft: "300px", fontSize: "25px" }}>
                  $ {product.price.toFixed(2)}
                </h3>
              </div>
              <div>
                <i className="bi bi-trash3" id="remove" onClick={() => removeProduct(product.id)}> Remove </i>
              </div>
            </div>
          ))
        ) : (
          <div>
            {hide && <p>Loading ...</p>}
            <br />
            <br />
            {show && <h2>Select The Product Before Buying</h2>}
            <br />
            {show && (
              <button onClick={handleShop} className="shop"> Shop Now </button>
            )}
          </div>
        )}

        {purchase && purchase.length > 0 && (
          <div className="cart-summary" style={{ textAlign: "center", marginTop: "30px" }}>
            <h3 style={{ fontSize: "25px" }}>Total: ${total.toFixed(2)}</h3>
            <br />
            <i className="bi bi-currency-dollar" id="buy" onClick={handleBuy}> Buy Now 💰 </i>
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
}
