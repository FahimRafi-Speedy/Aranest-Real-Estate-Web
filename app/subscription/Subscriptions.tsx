"use client";

import {useState} from "react";
import {FaCheckCircle} from "react-icons/fa";
import "@/app/contact/style.css";

type Plan = {
    id: number;
    name: string;
    price: string;
    features: string[];
    ribbon: string | null;
    bgColor: string;
    textColor: string;
};

const Subscriptions = () => {
    const packages = [
        {
            id: 1,
            name: "Basic",
            price: "$9.99/month",
            features: ["5 Property Searches", "Basic Support", "No Ads"],
            ribbon: "New",
            bgColor: "bg-white/30",
            textColor: "text-gray-800",
        },
        {
            id: 2,
            name: "Premium",
            price: "$19.99/month",
            features: ["Unlimited Searches", "Priority Support", "No Ads", "Exclusive Listings"],
            ribbon: "Popular",
            bgColor: "bg-white/30",
            textColor: "text-blue-900",
        },
        {
            id: 3,
            name: "Elite",
            price: "$29.99/month",
            features: ["Unlimited Searches", "Dedicated Support", "No Ads", "Exclusive Listings", "Early Access to New Properties"],
            ribbon: null,
            bgColor: "bg-white/30",
            textColor: "text-yellow-900",
        },
    ];

    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

    const handlePurchase = (plan: Plan) => {
        setSelectedPlan(plan);
        alert(`You have selected the ${plan.name} package OR ${selectedPlan ? selectedPlan.name : 'no plan selected'}!`);
    };

    return (
        <div className="max-w-6xl mx-auto p-8 relative">
            <h1 className="text-4xl font-bold text-center text-black mb-8">Choose Your Plan</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {packages.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative border border-white/20 rounded-xl shadow-xl backdrop-blur-lg ${plan.bgColor} hover:shadow-2xl transition-transform duration-300 hover:scale-105 flex flex-col overflow-hidden`}
                    >
                        {plan.ribbon && (
                            <div
                                className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                {plan.ribbon}
                            </div>
                        )}
                        <div className="p-6 flex-grow">
                            <h2 className={`text-2xl font-bold ${plan.textColor} text-center`}>{plan.name}</h2>
                            <p className="text-center text-xl font-semibold text-blue-300 mt-2">{plan.price}</p>
                            <div className="mt-4 space-y-2">
                                {plan.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center p-3 rounded-lg bg-white/40 shadow-sm border border-white/20"
                                    >
                                        <FaCheckCircle className="text-green-400 mr-3 text-lg"/>
                                        <span className="text-gray-800 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 border-t border-white/20 mt-auto">
                            <button className="button" onClick={() => handlePurchase(plan)}>
                                Purchase
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subscriptions;
