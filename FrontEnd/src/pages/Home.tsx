import { FC } from "react";

import { Navbar } from "../components/Header/Navbar";
import { Footer } from "../components/Footer/Footer";

export const Home: FC = () => {
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
};
