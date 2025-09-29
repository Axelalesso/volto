import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./Pages/Home";
import Catalogo from "./Pages/Catalogo";
import Contacto from "./Pages/Contacto";
import ProductDetailScreen from "./Pages/ProductDetailScreen/ProductDetailScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path='/product/:product_id'
          element={<ProductDetailScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}
