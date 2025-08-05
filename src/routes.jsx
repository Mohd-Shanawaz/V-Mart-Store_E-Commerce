import { Route , Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/sign-up/Signup";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CartComponent from "./pages/cart/Cart";
// import UserProfile from "./Nav-Component/Profile-Page/UserProfile";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Navbar from "./Nav-Component/Navbar/Navbar";
import AllUsers from "./pages/users/Users";
import PurchaseProduct from "./pages/purchase/Purchase";
import toast, { Toaster } from 'react-hot-toast';

export default function RoutingPage(){
  const notify = () => toast('Here is your toast.');
    return <div>
        <BrowserRouter>
        <Navbar/>
        <Toaster/>
           <Routes>
             <Route path="/" element={<HomePage/>} />
             <Route path="/login" element={<Login/>}/>
             <Route path="/sign-up" element={<Signup/>}/>
             <Route path="/cart/:id" element={<CartComponent/>}/>
             <Route path="/buyproduct/:id" element={<PurchaseProduct/>}/>
             <Route path="/products" element={<Products/>}/>
             <Route path="/productdetails/:id" element={<ProductDetails/>}/>
             <Route path="/users" element={<AllUsers/>}/>
             <Route path="*" element={<PageNotFound/>}/>
           </Routes>
        </BrowserRouter>
    </div>
}
