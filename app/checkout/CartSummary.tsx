"use client";

import React from 'react';

const CartSummary = ({cartItems}: { cartItems: { name: string; price: number; quantity: number; }[] }) => {
    return (
        <div className="border border-white/20 rounded-xl shadow-xl backdrop-blur-lg bg-white/30 p-6">
            <h2 className="text-2xl text-gray-950 font-semibold mb-4">Cart Summary</h2>
            {cartItems.length === 0 ? (
                <p className="text-white text-lg">Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {cartItems.map((item: { name: string; price: number; quantity: number; }, index: number) => (
                        <li key={index}
                            className="flex justify-between items-center bg-white/40 p-4 rounded-lg border border-gray-320/20">
                            <div>
                                <h3 className="text-gray-900 font-semibold">{item.name}</h3>
                                <p className="text-gray-700">{item.price}</p>
                            </div>
                            <span className="text-lg font-bold text-gray-900">{item.quantity}x</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartSummary;
