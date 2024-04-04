import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Property from "../pages/Property";
import Admin from "../pages/Admin";
import { LoginSignUp } from "../pages/LoginSignUp";

import { Checkout } from "../components/Checkout/Checkout";

import { Wishlist } from "../pages/Wishlist";
import { Payment } from "../components/Checkout/Payment";
import PrivateRoute from "./PrivateRoute";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<Property />} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path='/payment' element={<Payment/>}/>
      <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>} />
      <Route path="/login-signup" element={<LoginSignUp />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};
 