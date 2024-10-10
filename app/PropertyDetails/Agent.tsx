// app/properties/Agent.tsx
import { FaPhoneAlt } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const Agent = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold">Agent Information</h3>
      <p>Name: Maria Barlow</p>
      <p>Email: agent@info.com</p>
      <p>Phone: 0282882828</p>

      {/* Contact Buttons */}
      <div className="flex space-x-2 mt-4">
        <button className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
          <FaPhoneAlt />
        </button>
        <button className="flex items-center justify-center bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-md">
          Chat
        </button>
        <button className="flex items-center justify-center bg-green-500 text-white w-10 h-10 rounded-md">
          <SiWhatsapp className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Agent;
