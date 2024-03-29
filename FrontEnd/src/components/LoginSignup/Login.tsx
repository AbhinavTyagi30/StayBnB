import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginStateInterface } from "../../utils/LoginStateInterface";
import { useDispatch, useSelector } from "react-redux";

import { AuthReducerType } from "../../utils/authReducerType";
import { RootStateType } from "../../utils/RootStateType";
import { loginError, loginLoading, loginSuccess } from "../../redux/action";
import { Action, Dispatch } from "redux";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const schema: ZodType<LoginStateInterface> = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(15),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginStateInterface>({
    resolver: zodResolver(schema),
  });

  const dispatch: Dispatch<Action<string>> = useDispatch();

  const toast = useToast();

  const handleSignin = (data: LoginStateInterface) => {
    // dispatch(login(data));

    const SignInPromise = new Promise((resolve, reject) => {
      dispatch(loginLoading());

      axios
        .post(`https://staybnb-server.onrender.com/login`, data)
        .then((response) => {
          const responseData = response.data;

          console.log(responseData);

          dispatch(loginSuccess(responseData.user));

          resolve("success");
        })
        .catch((error) => {
          console.log(error);
          dispatch(loginError());
          reject();
        });
    });

    toast.promise(SignInPromise, {
      success: { title: "Promise resolved", description: "Looks great" },
      error: { title: "Promise rejected", description: "Something wrong" },
      loading: { title: "Promise pending", description: "Please wait" },
    });
  };

  const store: AuthReducerType = useSelector<RootStateType, AuthReducerType>(
    (store) => store.auth
  );

  console.log(store);

  return (
    <div className="signin-form">
      <h2 className="form-title">Sign in</h2>
      <form
        className="register-form"
        id="login-form"
        onSubmit={handleSubmit(handleSignin)}
      >
        <div className="form-group">
          <label htmlFor="your_email">
            <i className="zmdi zmdi-account material-icons-name"></i>
          </label>
          <input
            type="text"
            id="your_email"
            placeholder="Your Email"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <label className="label-has-error error">
            {errors.email.message}
          </label>
        )}
        <div className="form-group">
          <label htmlFor="your_pass">
            <i className="zmdi zmdi-lock"></i>
          </label>
          <input
            type="password"
            id="your_pass"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        {errors.password && (
          <label className="label-has-error error">
            {errors.password.message}
          </label>
        )}
        <div className="form-group">
          <input
            type="checkbox"
            name="remember-me"
            id="remember-me"
            className="agree_term"
          />
          <label htmlFor="remember-me" className="label-agree_term">
            <span>
              <span></span>
            </span>
            Remember me
          </label>
        </div>
        <div className="form-group form-button">
          <input
            type="submit"
            name="signin"
            id="signin"
            className="form-submit"
            value="Log in"
          />
        </div>
      </form>
      <div className="social-login">
        <span className="social-label">Or login with</span>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="display-flex-center zmdi zmdi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="display-flex-center zmdi zmdi-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="display-flex-center zmdi zmdi-google"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Login };
