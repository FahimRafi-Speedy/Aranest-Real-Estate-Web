// /app/contact/page.tsx
"use client";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "./ContactForm";
import Map from "./Map";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow flex flex-col items-center justify-center m-3">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        {/* Contact Form */}
        <div className="w-full max-w-lg mb-12">
          <ContactForm />
        </div>

        {/* Map */}
        <div className="w-full max-w-lg rounded-md">
          <Map />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
