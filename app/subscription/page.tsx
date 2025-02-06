import React from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Subscriptions from "@/app/subscription/Subscriptions";

const SubscriptionPage = () => {
    return (
        <div>
            <Header />

            <div className="flex flex-col items-center justify-center flex-grow mt-8 mb-8 m-2">

                <Subscriptions />
            </div>

            <Footer />
        </div>
    );
};

export default SubscriptionPage;