"use client";

import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import './styles.css'; // Link to local styles.css

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState('Normal User');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Password match status
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-[28rem]">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
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

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your name" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your email" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your phone number" />
      </div>

      {/* Password field */}
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="absolute right-3 mt-[10px] cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
        </span>
      </div>

      {/* Confirm Password field */}
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <span
          className="absolute right-3 mt-[10px] cursor-pointer"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
        </span>
      </div>

      {/* Real-time password match message */}
      <div className="mb-4">
        {confirmPassword && (
          <p className={`text-sm font-semibold ${passwordsMatch ? 'text-green-500' : 'text-red-500'}`}>
            {passwordsMatch ? 'Passwords Match!' : 'Passwords do not match.'}
          </p>
        )}
      </div>

      <button className="button relative">Signup</button>

      <p className="mt-8 text-center text-sm">
        Already Have an Account?{' '}
        <Link href="/Login" className="text-blue-500">Login Here</Link>.
      </p>
    </div>
  );
}
