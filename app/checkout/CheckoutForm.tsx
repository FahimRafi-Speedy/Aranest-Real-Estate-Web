"use client";

import React, {useState} from "react";
import {FaCreditCard, FaLock} from "react-icons/fa";

const CheckoutForm = ({onCheckout}: { onCheckout: () => void }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Payment Successful!");
        onCheckout();
    };

    return (
        <div className="border border-white/20 rounded-xl shadow-xl backdrop-blur-lg bg-white/30 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Billing Details */}
                <div>
                    <h2 className="text-2xl text-gray-950 font-semibold mb-4">Billing Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" name="fullName" placeholder="Full Name" required
                               className="w-full p-3 rounded-lg bg-white/40 border border-gray-500/20 text-gray-900"
                               onChange={handleChange}/>
                        <input type="email" name="email" placeholder="Email Address" required
                               className="w-full p-3 rounded-lg bg-white/40 border border-gray-500/20 text-gray-900"
                               onChange={handleChange}/>
                    </div>
                    <input type="text" name="address" placeholder="Address" required
                           className="w-full p-3 mt-4 rounded-lg bg-white/40 border border-gray-500/20 text-gray-900"
                           onChange={handleChange}/>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <input type="text" name="city" placeholder="City" required
                               className="w-full p-3 rounded-lg bg-white/40 border border-gray-500/20 text-gray-900"
                               onChange={handleChange}/>
                        <input type="text" name="zip" placeholder="ZIP Code" required
                               className="w-full p-3 rounded-lg bg-white/40 border border-gray-500/20 text-gray-900"
                               onChange={handleChange}/>
                    </div>
                </div>

                {/* Payment Details */}
                <div>
                    <h2 className="text-2xl text-gray-950 font-semibold mb-4">Payment Details</h2>
                    <div className="flex items-center bg-white/40 border border-gray-500/20 p-3 rounded-lg">
                        <FaCreditCard className="text-gray-600 mr-3 text-lg"/>
                        <input type="text" name="cardNumber" placeholder="Card Number" required
                               className="w-full bg-transparent outline-none text-gray-900"
                               onChange={handleChange}/>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <input type="text" name="expiryDate" placeholder="MM/YY" required
                               className="w-full p-3 rounded-lg bg-white/40 border border-gray-500/20 text-gray-900"
                               onChange={handleChange}/>
                        <input type="text" name="cvv" placeholder="CVV" required
                               className="w-full p-3 rounded-lg bg-white/40 border border-gray-500/20 text-gray-900"
                               onChange={handleChange}/>
                    </div>
                </div>

                {/* Secure Checkout Button */}
                <button type="submit"
                        className="w-full flex items-center justify-center gap-3 bg-[linear-gradient(to_right,_#000000,_#434343)] text-white py-3 rounded-3xl hover:bg-[linear-gradient(to_right,_#2BA5FF,_#53E6F1)] hover:transform hover:scale-[1.05] hover:shadow-[0_4px_8px_rgba(0,_0,_0,_0.2)] transition duration-200 text-lg font-semibold">
                    <FaLock/> Secure Checkout
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
