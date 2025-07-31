import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams(); // get 'id' from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.in/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Product Details</h1>
      <img src={product.image} alt={product.title} width="150" />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
