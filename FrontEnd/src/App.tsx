import { ReactElement } from "react";
import { AllRoutes } from "./routes/AllRoutes";
import { LoginSignUp } from "./pages/LoginSignUp";

function App(): ReactElement {
  return (
    <>
      <AllRoutes />
      <LoginSignUp />
    </>
  );
}

export default App;
