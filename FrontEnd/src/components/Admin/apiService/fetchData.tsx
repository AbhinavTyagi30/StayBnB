import axios from "axios";

import Data from "../../../utils/AdminDataInterface";

const fetchData = async (page:number): Promise<Data[]> => {
  try {
    const response = await axios.get<Data[]>(
      `https://staybnb-server.onrender.com/property?_limit=10&_page=${page}`
    );
    // console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export default fetchData;