import React from "react";
import Header from "../components/Header/Header";  // Import the Header component
import Footer from "../components/Footer/Footer";  // Import the Footer component
import ProfileSetting from "./ProfileSetting";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Main Profile Settings Section */}
      <main className="flex-grow m-3">
        <ProfileSetting />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ProfilePage;
