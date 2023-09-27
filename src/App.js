import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { AllProducts } from "./Pages/AllProducts";
import { ProductDetails } from "./Pages/ProductDetails";
import { GuestLayout } from "./Pages/GuestLayout";
import { Cart } from "./Pages/Cart";
import { useDispatch } from "react-redux";
import { fetchCartAsync } from "./Redux/Cart/CartSlice";
import { Footer } from "./Components/Footer";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartAsync());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes path="/" element={<GuestLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/allProducts" element={<AllProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
