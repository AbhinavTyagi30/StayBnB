import { FC, useState } from "react";

import { Navbar } from "../components/Header/Navbar";
import { Footer } from "../components/Footer/Footer";
import { CardContainer } from "../components/Body/CardContainer";
import { FilterBar } from "../components/Header/FilterBar";

/* https://staybnb-server.onrender.com/property?
q=london
&accommodates_gte=3
&bedrooms_gte=3
&bathrooms_gte=3
&price_lte=10000&price_gte=10
&_page=1&_limit=12
&guestFavorite=true */

export interface FilterInterface {
  q?: string;
  accommodates_gte: string;
  bedrooms_gte: string;
  bathrooms_gte: string;
  price_gte: string;
  price_lte: string;
  _page: string;
  _limit: string;
  guestFavorite?: string;
}

export const Home: FC = () => {
  const initFilters: FilterInterface = {
    accommodates_gte: "1",
    bedrooms_gte: "1",
    bathrooms_gte: "1",
    price_gte: "1",
    price_lte: "10000",
    _page: "1",
    _limit: "12",
  };

  const [filters, setFilters] = useState<FilterInterface>(initFilters);

  return (
    <div>
      <Navbar setFilters={setFilters} />
      <FilterBar setFilters={setFilters} />
      <CardContainer filters={filters} setFilters={setFilters} />
      <Footer />
    </div>
  );
};
