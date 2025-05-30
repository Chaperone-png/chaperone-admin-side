"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { executeApiCall } from "@/utils/APIResponseHandling";
import { loginUser } from "@/services/apis/authAPIs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

const AdminLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch()

  const [user, setUser] = useState(null); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("adminUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      router.push("/masterdata/plants"); 
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
executeApiCall(
      dispatch,
      () => loginUser({email, password}),
      (data) => {
        console.log({data})
      },
      "Successfully Logged In"
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--light-sky-blue)] px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--primarybgcolor)]">
          Chaperone Plants Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-sm text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primarybgcolor)]"
              placeholder="admin@chaperone.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-sm text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[var(--primarybgcolor)]"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[var(--primarybgcolor)] text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
