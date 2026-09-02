import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import sideImage from "../assets/Images/login/Side Image.svg";
import googleIcon from "../assets/Icons/LoginIcons/Icon-Google.svg";
import Button from "../component/common/Button";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { signupStart, signupSuccess, signupFailure } from "../redux/slices/authSlice";

type SignupFormData = {
  name: string;
  emailOrPhone: string;
  password: string;
};

const Signup = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onSubmit = (data: SignupFormData) => {
    dispatch(signupStart());

    try {
      // TODO: Yahan API call aayegi — abhi demo ke liye direct success
      const mockUser = { name: data.name, email: data.emailOrPhone };
      const mockToken = "demo-token-" + Date.now();

      dispatch(signupSuccess({ user: mockUser, token: mockToken }));
      console.log("Signup Success — Redux state updated!", data);
    } catch (err) {
      dispatch(signupFailure("Signup failed. Please try again."));
      console.error("Signup Error:", err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="w-full max-w-[980px] min-h-[620px] flex bg-white">

        {/* LEFT SIDE */}
        <div className="w-[57%] flex items-center justify-center px-6 py-8">
          <img
            src={sideImage}
            alt="Shopping illustration"
            className="w-full max-w-[550px] h-auto"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[43%] flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-[255px]">

            {/* Heading */}
            <h1 className="text-[27px] leading-[1.2] font-medium text-black">
              Create an account
            </h1>

            <p className="mt-3 mb-8 text-[12px] text-[#222]">
              Enter your details below
            </p>

            {/* Redux Auth Error */}
            {error && (
              <p className="mb-4 text-[10px] text-red-500 bg-red-50 p-2 rounded">
                {error}
              </p>
            )}

            {/* FORM */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full"
            >

              {/* NAME */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full h-8 border-0 border-b border-[#bdbdbd]
                  bg-transparent p-0 text-[12px] text-black
                  placeholder:text-[#9d9d9d]
                  outline-none
                  focus:border-[#555]"
                />

                {errors.name && (
                  <p className="mt-1.5 text-[10px] text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* EMAIL / PHONE */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  {...register("emailOrPhone", {
                    required: "Email or phone number is required",
                  })}
                  className="w-full h-8 border-0 border-b border-[#bdbdbd]
                  bg-transparent p-0 text-[12px] text-black
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
              <div className="mb-6">
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
                  className="w-full h-8 border-0 border-b border-[#bdbdbd]
                  bg-transparent p-0 text-[12px] text-black
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

              {/* CREATE ACCOUNT */}
              <Button type="submit" variant="primary" fullWidth disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </Button>

              {/* GOOGLE */}
              <Button
                type="button"
                variant="outline"
                fullWidth
                className="mt-3"
                icon={
                  <img
                    src={googleIcon}
                    alt="Google"
                    className="w-[17px] h-[17px] object-contain"
                  />
                }
              >
                Sign up with Google
              </Button>
            </form>

            {/* LOGIN */}
            <div className="mt-7 flex items-center justify-center gap-3 text-[11px] whitespace-nowrap">
              <span className="text-[#555]">
                Already have an account?
              </span>

            <Link
            to="/login"
            className="text-[#444] border-b border-[#bcbcbc] pb-0.5
            hover:text-black hover:border-black transition"
            >
            Log in
            </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
