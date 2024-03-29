import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInterface } from "../../utils/LoginInterface";

const Login = () => {
  const schema: ZodType<LoginInterface> = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(15),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInterface>({
    resolver: zodResolver(schema),
  });

  const handleSignin = (data: LoginInterface) => {
    console.log(data);
  };

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