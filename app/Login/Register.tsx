"use client";

import {useState} from "react";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import "./styles.css"; // Link to local styles.css

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [role, setRole] = useState("Normal User");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Password match status
    const passwordsMatch =
        password && confirmPassword && password === confirmPassword;

    return (
        // <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden min-h-screen">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden min-h-screen md:w-1/2">
            {/* Left Image Section */}
            <div className="hidden md:block md:w-96 relative">
                <Image
                    src="/Banner.jpg"
                    alt="Banner"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover rounded-tl-xl rounded-bl-xl"
                />

                {/* Top Image Section for Mobile */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-transparent flex items-start p-4">
                    <Image
                        src="/aranest-cut.png"
                        alt="Aranest Logo"
                        height={200}
                        width={200}
                        className="mb-8 mt-4"
                    />
                </div>

                {/* Gradient and Text at the Bottom */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)] flex items-end p-4 rounded-bl-xl rounded-tl-xl">
                    <p className="text-white text-lg font-semibold">
                        Register Today and Unlock Exclusive Listings
                        <br/>
                        <span className="text-m font-normal">
              Get early access to new properties and personalized alerts.
            </span>
                    </p>
                </div>
            </div>

            {/* Right Register Form Section */}
            <div className="w-full md:w-[30rem] flex flex-col justify-center p-6 md:p-10">
                <div className="md:hidden flex justify-center">
                    <Image
                        src="/aranest-cut.png"
                        alt="Aranest Logo"
                        height={200}
                        width={200}
                        className="mb-8 mt-4"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                {/* Role Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Role
                    </label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="Normal User">Normal User</option>
                        <option value="Agent">Agent</option>
                        <option value="Organization">Organization</option>
                    </select>
                </div>

                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email Field */}
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

                {/* Phone Number Field */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your phone number"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4 relative">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                        className="absolute right-3 mt-[10px] cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
            {showPassword ? (
                <AiFillEye size={20}/>
            ) : (
                <AiFillEyeInvisible size={20}/>
            )}
          </span>
                </div>

                {/* Confirm Password Field */}
                <div className="mb-4 relative">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Confirm Password
                    </label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span
                        className="absolute right-3 mt-[10px] cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
            {showConfirmPassword ? (
                <AiFillEye size={20}/>
            ) : (
                <AiFillEyeInvisible size={20}/>
            )}
          </span>
                </div>

                {/* Real-time password match message */}
                <div className="mb-4">
                    {confirmPassword && (
                        <p
                            className={`text-sm font-semibold ${
                                passwordsMatch ? "text-green-500" : "text-red-500"
                            }`}
                        >
                            {passwordsMatch ? "Passwords Match!" : "Passwords do not match."}
                        </p>
                    )}
                </div>

                {/* Register Button */}
                <button
                    className="button relative w-full py-3 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700">
                    Signup
                </button>

                {/* Login Link */}
                <p className="mt-6 text-center text-sm">
                    Already Have an Account?{" "}
                    <Link href="/Login" className="text-blue-500">
                        Login Here
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}
