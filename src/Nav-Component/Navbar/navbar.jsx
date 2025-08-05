import "./Navbar.css";
import { Link } from "react-router-dom";
import HomePage from "../../pages/Home/Home";

export default function Navbar() {
  return (
    <div className="container">
    <div className="head">
      <div className="logo">
        <h1 className="vmart">V - Mart</h1>
      </div>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About Me</Link>
      </div>
      <div id="opt">
        <Link to ="/cart/:id"><i className="bi bi-cart4" id="CartLogo"></i></Link>
        <Link to="/users"><i className="bi bi-person-circle"></i></Link>
        <button>Log Out</button>
      </div>
    </div>
    </div>
  );
}
 

