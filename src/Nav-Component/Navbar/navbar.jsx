import "./Navbar.css";
import { Link } from "react-router-dom";
import HomePage from "../../pages/Home/Home"
export default function Navbar() {
  return (
    <div>
    <div className="head">
      <div className="logo">
        <h1>V - Mart</h1>
      </div>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/About">About Us</Link>
      </div>
      <div id="opt">
        <Link to ="/Cart"><i className="bi bi-cart4" id="CartLogo"></i></Link>
        <Link to="/UserProfile"><i className="bi bi-person-circle"></i></Link>
        <button>Log Out</button>
      </div>
    </div>
    <HomePage/>
    </div>
  );
}
 

