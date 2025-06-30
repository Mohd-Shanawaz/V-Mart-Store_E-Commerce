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
        <Link to="/Map">Map</Link>
        <Link to="/Mens">Men's</Link>
        <Link to="/Womens">Women's</Link>
        <Link to="/Kids">Kid's</Link>
      </div>
      <div id="opt">
        <i className="bi bi-cart4"></i>
        <i className="bi bi-person-circle"></i>
        <button>Log Out</button>
      </div>
    </div>
  );
}
export default Navbar;
//  import {useState} from "react"
// var Styles={
//     textAlign:"center",
//     marginTop:"100px"
// }
 

//  function Statedemo() {
//     const x =useState("To Update Click Button ");

//     function Updatestate(){
//         x[1](100);       
//     }
//   return (
//     <div style={Styles}>
//       <h1>{x[0]}</h1>
//       <button onClick={Updatestate}>Update UI</button>
//     </div>
//   );
// }
// export default Statedemo;

// import {useState} from "react"
// var Styles={
//     textAlign:"center",
//     marginTop:"100px"
// }
//  function Statedemo() {
//     const [state,setstate]=useState("Welcome to React");
//     function Updatestate(){
//         setstate("Hello Developer")
//     }
   
//   return (
//     <div style={Styles}>
//       <h1>{state}</h1>
//       <button onClick={Updatestate}>Update UI</button>
//     </div>
//   );
// }
// export default Statedemo;

