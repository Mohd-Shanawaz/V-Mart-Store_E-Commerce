import { Route , Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/sign-up/Signup";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CartComponent from "./pages/cart/Cart";
import UserProfile from "./Nav-Component/Profile-Page/UserProfile";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Navbar from "./Nav-Component/Navbar/Navbar";


export default function RoutingPage(){
    return <div>
        <BrowserRouter>
        <Navbar/>
           <Routes>
             <Route path="/" element={<HomePage/>} />
             <Route path="/login" element={<Login/>}/>
             <Route path="/sign-up" element={<Signup/>}/>
             <Route path="/cart/:id" element={<CartComponent/>}/>
             <Route path="/products" element={<Products/>}/>
             <Route path="/productdetails/:id" element={<ProductDetails/>}/>
             <Route path="/userProfile" element={<UserProfile/>}/>
             <Route path="*" element={<PageNotFound/>}/>
           </Routes>
        </BrowserRouter>
    </div>
}
