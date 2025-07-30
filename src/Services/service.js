import axios from "axios";
import { useState } from "react";

export const getProducts = () => {

  
  
 return axios.get('https://fakestoreapi.in/api/products')
      .then(response => {
        return response
      })
      .catch(error => {
        
        console.error('Error fetching products:', error);
      });
};