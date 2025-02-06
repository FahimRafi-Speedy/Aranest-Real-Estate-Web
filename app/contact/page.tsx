// /app/contact/page.tsx
"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactForm from "./ContactForm";
import Map from "./Map";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>

            <div className="flex-grow flex flex-col items-center justify-center m-3">
                <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

                {/*<div className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row w-full max-w-4xl h-full">*/}

                <div
                    className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row items-center justify-center w-full max-w-4xl h-full sm:w-3/4 xs:w-3/4">
                    {/* Map */}
                    <div className="w-full md:w-1/2 h-full mb-12 md:mb-0 md:mx-4 hidden md:block">
                        <Map/>
                    </div>

                    {/*Need a Vertical Line Here*/}
                    <div className="hidden md:block border-r border-gray-500 h-80"/>

                    {/* Contact Form */}
                    <div className="w-full md:w-1/2 h-full">
                        <ContactForm/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}
