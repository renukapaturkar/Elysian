import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route} from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { NavigationBar } from "./components/NavigationBar";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path=":id" element={<ProductDetails/>}/>
      </Routes>
      <ToastContainer/> 
    </div>
  );
}

export default App;
