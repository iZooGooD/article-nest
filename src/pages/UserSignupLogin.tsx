import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "src/components/common/Layout/Layout";
import { signInSchema, SignInForm } from "src/utils/validations/signin";
import { signUpSchema, SignUpForm } from "src/utils/validations/signup";
import { useAuth } from "src/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoaderButton from "src/components/common/_ux/LoaderButton/LoaderButton";
import { API } from "src/services/api";

const UserSignupLogin: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  // SignIn form setup
  const {
    register: registerSignIn,
    handleSubmit: handleSignInSubmit,
    formState: { errors: signInErrors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
  });

  // SignUp form setup
  const {
    register: registerSignUp,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpErrors },
    reset: resetSignUp,
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  const onSignInSubmit = async (data: SignInForm) => {
    setIsLoading(true);
    login(data.email, data.password)
      .then(() => navigate("/me/profile"))
      .catch((e) => toast.error(e))
      .finally(() => setIsLoading(false));
  };

  const onSignUpSubmit = async (data: SignUpForm) => {
    setIsLoading(true);
    const response = await API.registerUser(data);
    if (response) {
      toast.success("Account created successfully!");
      resetSignUp();
      setIsSignUp(false);
    } else {
      toast.error("Failed to create account!");
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-[70vh] px-4">
        <div className="user-auth max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUp ? (
            <form onSubmit={handleSignUpSubmit(onSignUpSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  {...registerSignUp("firstName")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {signUpErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {signUpErrors.firstName.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  {...registerSignUp("lastName")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {signUpErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {signUpErrors.lastName.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...registerSignUp("email")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {signUpErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {signUpErrors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Confirm Email
                </label>
                <input
                  type="email"
                  {...registerSignUp("confirmEmail")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {signUpErrors.confirmEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {signUpErrors.confirmEmail.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  {...registerSignUp("password")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {signUpErrors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {signUpErrors.password.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  {...registerSignUp("confirmPassword")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {signUpErrors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {signUpErrors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <LoaderButton
                  text="Sign up"
                  type="primary"
                  size="full"
                  isLoading={isLoading}
                />
              </div>

              <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
                Already have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign in
                </span>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignInSubmit(onSignInSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...registerSignIn("email")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {signInErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {signInErrors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  {...registerSignIn("password")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {signInErrors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {signInErrors.password.message}
                  </p>
                )}
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  {...registerSignIn("rememberMe")}
                  className="mr-2 focus:ring-indigo-500"
                />
                <label className="text-gray-700 dark:text-gray-300">
                  Remember Me
                </label>
              </div>

              <div className="w-full">
                <LoaderButton
                  text={"Sign in"}
                  type="primary"
                  size="full"
                  isLoading={isLoading}
                />
              </div>

              <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
                Don't have an account?{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign up
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UserSignupLogin;
