import Navbar from "./Navbar/navbar";
import { Route , Routes} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Mens from "./pages/Mens/Mens";
import Womens from "./pages/Womens/Womens";
import Electronics from "./pages/Electronics/Electronics";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Map from "./pages/Map/Map";
import ProductsComponent from "./Products/Products";
// import Updatehead from "./state/state";
// import ImageState from "./state/imagestate";
// import SwitchModes from "./pages/Home/darkmode Component/imageState";

function App(){
    return <div>
        <Navbar/>
        <ProductsComponent/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Electronics" element={<Electronics/>} />
            <Route path="/Mens" element={<Mens/>} />
            <Route path="/Womens" element={<Womens/>} />
            <Route path="/Map" element={<Map/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        
    </div>
}
export default App;