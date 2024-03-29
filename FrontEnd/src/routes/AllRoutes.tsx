import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Property from "../pages/Property";
import Admin from "../pages/Admin";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property" element={<Property/>} />
      <Route path="/admin" element={<Admin/>} />

    </Routes>
  );
};
