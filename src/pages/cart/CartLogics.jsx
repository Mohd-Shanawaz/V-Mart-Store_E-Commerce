import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function useCartContext(){ // useCartContext is my custom Hook
     const { id } = useParams();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("myCart")) || [];

    if (id) {
      axios.get("https://fakestoreapi.in/api/products")
        .then((response) => {
          const allProducts = response.data.products;
          const product = allProducts.find((product) => product.id === Number(id));

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
            setCart(savedCart); 
          }
        })
        .catch((error) => {
          console.log(error);
          setCart(savedCart); 
        });
    } else {
      setCart(savedCart);
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);

  return (
    [cart,setCart]
  )

}