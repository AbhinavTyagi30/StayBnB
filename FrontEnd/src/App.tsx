import { ReactElement } from "react";
import { AllRoutes } from "./routes/AllRoutes";
import { Link } from "react-router-dom";

function App(): ReactElement {
  return (
    <>
      <AllRoutes />
      <Link to={`/property/${1582762}`}>View Property</Link>
    </>
  );
}

export default App;
