import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="head">
      <div className="logo">
        <h1>V - Mart</h1>
      </div>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/Electronics">Electronics</Link>
        <Link to="/Mens">Men's</Link>
        <Link to="/Womens">Women's</Link>
        <Link to="/Jwellery">Jwellery</Link>
        <Link to="/Kids">Kid's</Link>
        
      </div>
      <div id="opt">
        <Link to ="/Cart"><i className="bi bi-cart4"></i></Link>
        <Link to="/UserProfile"><i className="bi bi-person-circle"></i></Link>
        <button>Log Out</button>
      </div>
    </div>
  );
}
export default Navbar;

