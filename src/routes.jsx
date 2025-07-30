import { Route , Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/sign-up/Signup";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CartComponent from "./Nav-Component/Carts/Carts";
import UserProfile from "./Nav-Component/Profile-Page/UserProfile";
import Products from "./pages/Products/Products";
import Navbar from "./Nav-Component/Navbar/Navbar";


export default function RoutingPage(){
    return <div>
        <BrowserRouter>
           <Routes>
             <Route path="/" element={<Navbar/>} />
             <Route path="/Login" element={<Login/>}/>
             <Route path="/sign-up" element={<Signup/>}/>
             <Route path="/Cart" element={<CartComponent/>}/>
             <Route path="/UserProfile" element={<UserProfile/>}/>
             <Route path="*" element={<PageNotFound/>}/>
           </Routes>
        </BrowserRouter>
    </div>
}
