import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginAlumni() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login/alumni",
        {
          email: inputs.email,
          password: inputs.password,
        }
      );

      // Handle successful login
      console.log("Login successful", response.data);

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      // Redirect to a different page upon successful login
      navigate("/home");
      window.location.reload();
    } catch (error) {
      console.error("Login failed", error.response?.data);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl min-h-[100vh] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Login to Your Alumni Account
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Please enter your email and password to sign in.
        </p>

        <form
          action="#"
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 bg-gray-800 text-white p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter email"
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 bg-gray-800 text-white p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter password"
                required
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className=" grid grid-cols-3 gap-3">
            <button
              type="submit"
              className="block w-full rounded-lg col-span-2 bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
            <Link
              to={"/"}
              className="block w-full rounded-lg text-center bg-indigo-300  px-5 py-3 text-sm font-medium text-balck hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500d"
            >
              Home
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500">
            No account?{" "}
            <Link
              className="text-indigo-600 underline hover:text-indigo-700"
              to="/registeralumni"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
