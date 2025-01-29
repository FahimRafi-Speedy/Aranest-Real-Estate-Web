"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Form from "./Form";

export default function AddListingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1Y0JpqJE6v4vuRpsmpZCoL5ZmTfrHmI&loading=async&libraries=places`}
      />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow px-4 py-8 ">
        <Form />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
