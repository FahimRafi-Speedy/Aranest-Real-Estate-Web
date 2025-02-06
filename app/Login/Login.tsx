"use client";

import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import "./styles.css"; // Link to local styles.css

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden max-h-[35rem]">
      {/* Left Image Section */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/Banner.jpg"
          alt="Banner"
          width={400}
          height={400}
          className="h-full w-full object-cover rounded-tl-xl rounded-bl-xl"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-transparent flex items-start p-4">
          <Image
              src="/aranest-cut.png"
              alt="Aranest Logo"
              height={200}
              width={200}
              className="mb-8 mt-4"
          />
        </div>

        {/* Gradient and Text at the Bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)] flex items-end p-4 rounded-bl-xl rounded-tl-xl">
          <p className="text-white text-lg font-semibold">
            Welcome Back to Property Finder<br />
            <span className="text-sm font-normal">
              Sign in to explore the latest listings and start your search.
            </span>
          </p>
        </div>
      </div>

      {/* Right Login Form Section */}
      <div className="w-full md:w-2/4 flex flex-col justify-center p-6 md:p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Enter your password"
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiFillEye size={22} />
            ) : (
              <AiFillEyeInvisible size={22} />
            )}
          </span>
        </div>

        {/* Forgot Password Link */}
        <div className="text-right mb-2">
          <Link href="/Login?forgot" className="text-blue-500 text-sm">
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <button className="button relative w-full py-3 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700">
          LOGIN
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm">
          Don't Have an Account?{" "}
          <Link href="/Login?register" className="text-blue-500">
            Register Here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
