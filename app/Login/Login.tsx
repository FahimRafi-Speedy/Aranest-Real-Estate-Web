"use client";

import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import "./styles.css"; // Link to local styles.css

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your password"
        />
        <span
          className="absolute right-3 mt-[10px] cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiFillEye size={22} />
          ) : (
            <AiFillEyeInvisible size={22} />
          )}
        </span>
      </div>

      <div className="text-right mb-2">
        <Link href="/Login?forgot" className="text-blue-500 text-sm">
          Forgot password?
        </Link>
      </div>

      <button className="button relative">LOGIN</button>

      <p className="mt-8 text-center text-sm">
        Don't Have an Account?{" "}
        <Link href="/Login?register" className="text-blue-500">
          Register Here
        </Link>
        .
      </p>
    </div>
  );
}
