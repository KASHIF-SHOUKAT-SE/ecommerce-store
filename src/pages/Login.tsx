import { useForm } from "react-hook-form";
import sideImage from "../assets/Images/login/Side Image.svg";
import Button from "../component/common/Button";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { loginStart, loginSuccess, loginFailure } from "../redux/slices/authSlice";

type LoginFormData = {
  emailOrPhone: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    dispatch(loginStart());

    try {
      // TODO: Yahan API call aayegi — abhi demo ke liye direct success
      const mockUser = { email: data.emailOrPhone };
      const mockToken = "demo-token-" + Date.now();

      dispatch(loginSuccess({ user: mockUser, token: mockToken }));
      console.log("Login Success — Redux state updated!", data);
    } catch (err) {
      dispatch(loginFailure("Login failed. Please try again."));
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="w-full bg-white flex items-center justify-center py-10 lg:py-20">
      <div className="w-full max-w-[980px] min-h-[520px] flex bg-white">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-[57%] flex items-center justify-center px-6 py-8">
          <img
            src={sideImage}
            alt="Shopping illustration"
            className="w-full max-w-[550px] h-auto"
          />
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-[43%] flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-[255px]">

            {/* Heading */}
            <h1 className="text-[25px] leading-[1.2] font-medium text-black">
              Log in to Exclusive
            </h1>

            {/* Subtitle */}
            <p className="mt-3 mb-8 text-[11px] text-[#222]">
              Enter your details below
            </p>

            {/* Redux Auth Error */}
            {error && (
              <p className="mb-4 text-[10px] text-red-500 bg-red-50 p-2 rounded">
                {error}
              </p>
            )}

            {/* ================= FORM ================= */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full"
            >

              {/* EMAIL / PHONE */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  {...register("emailOrPhone", {
                    required: "Email or phone number is required",
                  })}
                  className="w-full h-8
                  border-0 border-b border-[#bdbdbd]
                  bg-transparent
                  p-0
                  text-[11px]
                  text-black
                  placeholder:text-[#9d9d9d]
                  outline-none
                  focus:border-[#555]"
                />

                {errors.emailOrPhone && (
                  <p className="mt-1.5 text-[10px] text-red-500">
                    {errors.emailOrPhone.message}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full h-8
                  border-0 border-b border-[#bdbdbd]
                  bg-transparent
                  p-0
                  text-[11px]
                  text-black
                  placeholder:text-[#9d9d9d]
                  outline-none
                  focus:border-[#555]"
                />

                {errors.password && (
                  <p className="mt-1.5 text-[10px] text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* ================= LOGIN + FORGOT ================= */}
              <div className="flex items-center justify-between mt-5">

                <Button
                  type="submit"
                  variant="primary"
                  className="min-w-[76px] px-5 text-[10px]"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log In"}
                </Button>

                <a
                  href="/forgot-password"
                  className="text-[10px]
                  text-[#e64747]
                  no-underline
                  hover:underline"
                >
                  Forget Password?
                </a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
