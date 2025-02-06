"use client";

import React, {useState} from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CheckoutForm from "@/app/checkout/CheckoutForm";
import CartSummary from "@/app/checkout/CartSummary";

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState<{ name: string; price: number; quantity: number }[]>([
        {name: "Basic Plan", price: 9.99, quantity: 1},
        {name: "Premium Plan", price: 19.99, quantity: 1}
    ]);

    const handleCheckout = () => {
        setCartItems([]);
    };
    return (
        <div>
            <Header/>

            {/*<div className="flex flex-col items-center justify-center flex-grow mt-8 mb-8 m-2">*/}
            {/*    <h1 className="text-3xl font-bold mb-8">Checkout</h1>*/}
            <div className="max-w-6xl mx-auto p-8">
                <h1 className="text-4xl font-bold text-center text-gray-950 mb-8">Complete Your Purchase</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <CheckoutForm onCheckout={handleCheckout}/>

                    <CartSummary cartItems={cartItems}/>

                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default CheckoutPage;