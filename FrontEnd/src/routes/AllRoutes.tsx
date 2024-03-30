import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import Property from "../pages/Property";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<Property/>} />

    </Routes>
  );
};
