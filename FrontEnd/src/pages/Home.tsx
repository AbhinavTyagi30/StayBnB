import { FC } from "react";

import { Navbar } from "../components/Header/Navbar";
import { CardContainer } from "../components/Body/CardContainer";
import { FilterBar } from "../components/Header/FilterBar";

export const Home: FC = () => {
  return (
    <>
      <Navbar />
      <FilterBar />
      <CardContainer />
    </>
  );
};
