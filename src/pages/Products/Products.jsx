
import { useState, useEffect } from "react";
import "./Products.css";
import { getProducts } from "../../Services/service";
import Product from "../Product/Product";

function Products({ title }) {
  const [state, setState] = useState([]);



  return (
    <div className="products">
      <div className="brandContainer">
        <div className="shadow">
          <h1>{title} Information</h1>
          <p style={{ color: "white", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et
            optio laboriosam nostrum blanditiis aut error, cupiditate doloremque
            ipsa? Laboriosam totam fuga eligendi eveniet quam distinctio maxime
            ducimus quaerat libero, exercitationem culpa perspiciatis tempore
            velit reiciendis dignissimos similique! Quaerat, quisquam ut
            asperiores repudiandae nesciunt iure, saepe id quis et natus quam
            nihil fuga aspernatur aliquid facere atque officia, vel voluptates?
          </p>
        </div>
      </div>
<button id="getbtn" onClick={()=>{getProducts(setState)}}>Get Products</button>
      <div className="product">
        {state.length > 0 &&
          state
            .map((product) => {
              return (
                <Product
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
      </div>
    </div>
  );
}

export default Products;

//   useEffect(() => {
//     getProducts(setState);
//   }, []); --> 9 - 11

// .filter((product) => {
            //   return product.category === title;
            // })  --> 32