import Navbar from "./Navbar/navbar";
import { Route , Routes} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Mens from "./pages/Mens/Mens";
import Womens from "./pages/Womens/Womens";
import Electronics from "./pages/Electronics/Electronics";
import JewelryPage from "./pages/Jwellery/Jwellery";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CartComponent from "./Navbar/Carts/Carts";
import UserProfile from "./Navbar/Profile-Page/UserProfile";

export default function App(){
    return <div>
        <Navbar/>
        <Routes>
            <Route path="/Cart" element={<CartComponent/>}/>
            <Route path="/UserProfile" element={<UserProfile/>}/>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Electronics" element={<Electronics/>} />
            <Route path="/Mens" element={<Mens/>} />
            <Route path="/Womens" element={<Womens/>} />
            <Route path="/jwellery" element={<JewelryPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        
    </div>
}
