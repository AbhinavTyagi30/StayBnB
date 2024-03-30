import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { SignupStateInterface } from "../../utils/SignupStateInterface";

import { zodResolver } from "@hookform/resolvers/zod";

const Signup = () => {
  const schema: ZodType<SignupStateInterface> = z
    .object({
      name: z.string().min(3).max(50),
      email: z.string().email(),
      password: z.string().min(6).max(15),
      confirmPassword: z.string().min(6).max(15),
      agree_term: z.boolean(),
    })
    .refine((data) => data.agree_term === true, {
      message: "You must agree to the terms",
      path: ["agree_term"],
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupStateInterface>({
    resolver: zodResolver(schema),
  });

  const handleSignup = (data: SignupStateInterface) => {
    console.log(data);
  };

  return (
    <div className="signup-form">
      <h2 className="form-title">Sign up</h2>
      <form
        className="register-form"
        id="register-form"
        onSubmit={handleSubmit(handleSignup)}
      >
        <div className="form-group">
          <label htmlFor="name">
            <i className="zmdi zmdi-account material-icons-name"></i>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            {...register("name")}
          />
        </div>
        {errors.name && (
          <label className="label-has-error error">{errors.name.message}</label>
        )}
        <div className="form-group">
          <label htmlFor="email">
            <i className="zmdi zmdi-email"></i>
          </label>
          <input
            type="email"
            id="email"
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
          <label htmlFor="password">
            <i className="zmdi zmdi-lock"></i>
          </label>
          <input
            type="password"
            id="password"
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
          <label htmlFor="confirmPassword">
            <i className="zmdi zmdi-lock-outline"></i>
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Repeat your password"
            {...register("confirmPassword")}
          />
        </div>
        {errors.confirmPassword && (
          <label className="label-has-error error">
            {errors.confirmPassword.message}
          </label>
        )}
        <div className="form-group">
          <input
            type="checkbox"
            id="agree_term"
            className="agree_term"
            {...register("agree_term")}
          />

          <label htmlFor="agree_term" className="label-agree_term">
            <span>
              <span></span>
            </span>
            I agree all statements in{" "}
            <a href="" className="term-service">
              Terms of service
            </a>
          </label>
        </div>
        {errors.agree_term && (
          <label className="label-has-error error">
            {errors.agree_term.message}
          </label>
        )}
        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            value="Register"
          />
        </div>
      </form>
    </div>
  );
};

export { Signup };
