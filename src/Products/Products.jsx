import "./Products.css";
import { useState } from "react";
import { getProducts } from "../Services/Products";
import Product from "../Product/Product";
function ProductsComponent(){
         const [state ,setState] = useState([])

    return <div className="products">
       <div className="brandcontainer">
         <div className="shadow">
            <h1>Product Details</h1>
            <p style={{color:"white",textAlign:"center",width:"800px",margin:"5px auto"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum veritatis maxime quae nam et fugiat obcaecati? Eius delectus similique saepe qui culpa, minima quod, quo laboriosam facere voluptatum, accusantium magni vitae cumque. Iste nihil, accusamus nisi dolores deserunt quisquam, possimus non earum voluptatibus magnam laboriosam repudiandae quae maxime? Magni, sint?</p>
         </div>
       </div>
      <div style={{textAlign:"center",marginTop:"30px",fontSize:"20px"}}>
         <button onClick={()=>{
            getProducts(setState)
         }}> Get Products</button>
      </div>
      <div className="product">
         { state.length > 0 && state.map((product)=>{
               return (
                  <Product image={product.image}title={product.title}price={product.price} />
               )
            })
         }
      </div>
    </div>
}
export default ProductsComponent;