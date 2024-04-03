import "../styles/LoginSignup/fonts/material-icon/css/material-design-iconic-font.min.css";
import "../styles/LoginSignup/css/style.css";

import signin_image from "../assets/signin-image.jpg";
import signup_image from "../assets/signup-image.jpg";
import { FC, useEffect, useRef } from "react";

import { Signup } from "../components/LoginSignup/Signup";
import { Login } from "../components/LoginSignup/Login";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const LoginSignUp: FC = () => {
  const signin = useRef<HTMLElement>(null);

  const signup = useRef<HTMLElement>(null);

  const toggleSignSignup = () => {
    signin.current?.classList.toggle("active");
    signup.current?.classList.toggle("active");
  };

  const store = useSelector((store: RootState) => store.auth);

  const navigate = useNavigate();

  const toast = useToast();

  useEffect(() => {
    if (store.isAuth && store.user.isAdmin) {
      navigate("/admin");
    } else if (store.isAuth && !store.user.isAdmin) {
      navigate("/");
    }

    if (store.isError) {
      toast({
        title: `Error`,
        position: "top-right",
        isClosable: true,
        description: "Something went wrong",
        status: "error",
        duration: 5000,
      });
    }

    if (store.isAuth) {
      toast({
        title: `Success`,
        position: "top-right",
        isClosable: true,
        // description: "Login success",
        status: "success",
        duration: 5000,
      });
    }
  }, [store.isAuth, store.isError]);

  return (
    <div className="login-signup-main">
      {/* <!-- Sign up form --> */}
      <section className="signup " ref={signup}>
        <div className="container">
          <div className="signup-content">
            <Signup />

            <div className="signup-image">
              <figure>
                <img src={signup_image} alt="sing up image" />
              </figure>
              <p className="signup-image-link" onClick={toggleSignSignup}>
                Already have an account? <span>Login</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Sing in  Form --> */}

      <section className="sign-in active" ref={signin}>
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signin_image} alt="sing up image" />
              </figure>
              <p className="signup-image-link" onClick={toggleSignSignup}>
                Don't have an account? <span>Signup</span>
              </p>
            </div>

            {/* Login Component */}

            <Login />
          </div>
        </div>
      </section>
    </div>
  );
};

export { LoginSignUp };
