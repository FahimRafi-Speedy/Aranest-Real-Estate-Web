"use client";

import React, {useState} from "react";
import Link from "next/link";
import "./styles.css";
import Image from "next/image"; // Link to local styles.css

export default function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [notification, setNotification] = useState<string | null>(null);
    const [isCooldown, setIsCooldown] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(0);

    const handlePasswordReset = (e: React.FormEvent) => {
        e.preventDefault();

        if (isCooldown) {
            setNotification("You must wait before sending another request.");
            return;
        }

        // Logic to send the reset password email
        console.log("Password reset email sent to:", email);

        // Show success notification
        setNotification("Password reset email sent successfully. Please check your inbox.");
        setIsCooldown(true);
        setSecondsLeft(120); // Set cooldown to 120 seconds

        // Start countdown
        const interval = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsCooldown(false);
                    setNotification(null); // Clear notification after cooldown ends
                }
                return prev - 1;
            });
        }, 1000); // Update every second
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-8 w-[28rem]">
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/aranest-cut.png"
                    alt="Aranest Logo"
                    height={200}
                    width={200}
                    className="mb-8 mt-4"
                />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>

            {/* Display Notification */}
            {notification && (
                <div
                    className={`mb-4 text-center p-3 rounded ${
                        isCooldown ? "bg-green-200 text-green-700" : "bg-green-100 text-green-600"
                    }`}
                >
                    {notification}
                    {isCooldown && (
                        <div className="text-sm mt-1">
                            You can resend in <strong>{secondsLeft}s</strong>.
                        </div>
                    )}
                </div>
            )}

            <form onSubmit={handlePasswordReset}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`button relative w-40 ${
                        isCooldown ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isCooldown} // Disable button during cooldown
                    style={{width: "175px"}}
                >
                    Reset Password
                </button>
            </form>

            <p className="mt-8 text-center text-sm">
                Remembered your password?{" "}
                <Link href="/Login" className="text-blue-500">
                    Login Here
                </Link>
                .
            </p>
        </div>
    );
}
