"use client";
import { useState } from "react";
import "./styles.css"; // Custom CSS import

const ProfileSetting = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    number: "",
    email: "",
    skype: "",
    website: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    pinterest: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Profile Updated:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <form
      className="formContainer p-6 space-y-8 rounded-lg shadow-lg mx-4 ml-2 mr-2"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold mb-4 text-center">Profile Settings</h1>

      {/* Personal Details */}
      <div>
        <label className="formHeading">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="formInput"
          placeholder="Enter your name"
        />
        <label className="formHeading mt-4">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="formInput"
          placeholder="Enter your title"
        />
      </div>

      {/* Contact Details */}
      <div>
        <h2 className="formHeading">Contact Information</h2>
        <div className="formGrid md:grid-cols-2 gap-4">
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            className="formInput"
            placeholder="Phone number"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="formInput"
            placeholder="Email"
          />
          <input
            type="text"
            name="skype"
            value={formData.skype}
            onChange={handleInputChange}
            className="formInput"
            placeholder="Skype Link"
          />
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="formHeading">Social Media Links</h2>
        <div className="formGrid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="facebook"
            value={formData.facebook}
            onChange={handleInputChange}
            className="formInput"
            placeholder="Facebook Link"
          />
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleInputChange}
            className="formInput"
            placeholder="Twitter Link"
          />
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            className="formInput"
            placeholder="LinkedIn Link"
          />
          <input
            type="text"
            name="pinterest"
            value={formData.pinterest}
            onChange={handleInputChange}
            className="formInput"
            placeholder="Pinterest Link"
          />
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="formInput"
            placeholder="Website"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="formHeading">About Me</h2>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="formInput"
          rows={5}
          placeholder="Enter your description"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="submitButton">
        Update Profile
      </button>
    </form>
  );
};

export default ProfileSetting;
