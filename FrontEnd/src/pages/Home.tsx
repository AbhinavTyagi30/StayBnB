import { FC } from "react";

import { Navbar } from "../components/Header/Navbar";
import { Footer } from "../components/Footer/Footer";
import { CardContainer } from "../components/Body/CardContainer";
import { FilterBar } from "../components/Header/FilterBar";

export const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <FilterBar />
      <CardContainer />
      <Footer />
    </div>
  );
};
