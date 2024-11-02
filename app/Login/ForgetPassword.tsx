"use client";

import { useState } from 'react';
import Link from 'next/link';
import './styles.css'; // Link to local styles.css

export default function ForgetPassword() {
  const [email, setEmail] = useState('');

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic for password reset here
    console.log("Password reset email sent to:", email);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-[28rem]">
      <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
      
      <form onSubmit={handlePasswordReset}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button relative w-40" style={{ width: '175px' }}>
          Reset Password
        </button>
      </form>

      <p className="mt-8 text-center text-sm">
        Remembered your password?{' '}
        <Link href="/Login" className="text-blue-500">Login Here</Link>.
      </p>
    </div>
  );
}
