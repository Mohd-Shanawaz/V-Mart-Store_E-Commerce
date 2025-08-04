import { useState, useEffect } from "react";
import "./Products.css";
import Product from "../Product/Product";
import {getProducts} from "../../services/service"

export default function Products() {
  const [state, setState] = useState([]);

useEffect(()=>{
 fetchProducts()
},[])

const fetchProducts = async()=>{
const res = await getProducts()
console.log(res)
if(res.status===200){
  setState(res.data.products)
}else{
  setState([])
}
}

  return (
    <div className="products">
      <div className="product">
        
        {state.length > 0 &&
          state
            .map((product) => {
              return (
                <Product
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                />
              );
            })}
      </div>
    </div>
  );
}