import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { AllProducts } from "./Pages/CategoryFilterPages/AllProducts";
import { ProductDetails } from "./Pages/ProductDetails";
import { GuestLayout } from "./Pages/GuestLayout";
import { Cart } from "./Pages/Cart";
import { SmartPhones } from "./Pages/CategoryFilterPages/SmartPhones";
import { Fragrances } from "./Pages/CategoryFilterPages/Fragrances";
import { Laptops } from "./Pages/CategoryFilterPages/Laptops";
import { useDispatch } from "react-redux";
import { fetchCartAsync } from "./Redux/Cart/CartSlice";
import { Skincare } from "./Pages/CategoryFilterPages/Skincare";
import { Footer } from "./Components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartAsync());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes path="/" element={<GuestLayout />}>
        <Route path="/smartPhones" element={<SmartPhones />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
