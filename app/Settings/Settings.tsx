"use client";

import { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [currentName, setCurrentName] = useState("John Doe");
  const [newName, setNewName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setNewName("");
  };

  const openPassModal = () => setIsPassModalOpen(true);
  const closePassModal = () => {
    setIsPassModalOpen(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewName(e.target.value);

  const handleUpdateName = () => {
    setCurrentName(newName || currentName);
    closeModal();
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      closePassModal();
    }
  };

  return (
    <div className="py-8 max-w-4xl mx-auto px-4">
      <h1 className="text-2xl font-semibold border-b-2 pb-2 mb-6">
        Profile Settings
      </h1>

      {/* Name Section */}
      <div className="flex items-center gap-8 mb-4">
        <h2 className="text-lg font-semibold">
          Name: <span className="text-gray-600">{currentName}</span>
        </h2>
        <button className="btn btn-gradient" onClick={openModal}>
          Edit
        </button>
        {isModalOpen && (
          <dialog open className="modal">
            <div className="modal-box">
              <button
                className="btn btn-circle absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
              <h3>Edit Name</h3>
              <input
                type="text"
                value={newName}
                onChange={handleNameChange}
                placeholder="Enter new name"
                className="form-input"
              />
              <button className="btn btn-gradient mt-4" onClick={handleUpdateName}>
                Update Name
              </button>
            </div>
          </dialog>
        )}
      </div>

      {/* Password Section */}
      <div className="flex items-center gap-8">
        <h2 className="text-lg font-semibold">Password: ******</h2>
        <button className="btn btn-gradient" onClick={openPassModal}>
          Change
        </button>
        {isPassModalOpen && (
          <dialog open className="modal">
            <div className="modal-box">
              <button
                className="btn btn-circle absolute right-2 top-2"
                onClick={closePassModal}
              >
                ✕
              </button>
              <h3>Change Password</h3>
              <input
                type="password"
                placeholder="Current Password"
                className="form-input"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                className="form-input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="form-input"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
              <button className="btn btn-gradient mt-4" onClick={handlePasswordChange}>
                Update Password
              </button>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default Settings;
