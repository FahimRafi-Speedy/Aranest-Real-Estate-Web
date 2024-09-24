import React, { useState, useEffect, useRef } from 'react';
import { FiFilter, FiX } from 'react-icons/fi';
import './FilterButton.css'; // Ensure you have custom styles here

const FilterButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // State to manage button position
  const modalRef = useRef<HTMLDivElement>(null); // Ref to detect clicks outside modal

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close modal when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) { // Adjust this value based on the height of your header
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Filter Button */}
      <button
        onClick={toggleModal}
        className={`fixed right-4 bg-gradient-to-r from-black to-gray-700 text-white py-2 px-4 rounded shadow-lg flex items-center transition-all duration-150 ease-in-out transform z-[9999] ${
          isAtTop ? 'top-20' : 'top-4'
        }`}
      >
        <FiFilter className="mr-2" />
        Filter
      </button>

      {/* Background shadow overlay when modal is open */}
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-[9998]"
          ></div>

          {/* Close icon beside the modal */}
          <button
            onClick={toggleModal}
            className="fixed top-6 text-slate-200 text-3xl z-[9999]"
            style={{ right: '275px' }}
            // Adjusted the right position
          >
            <FiX />
          </button>
        </>
      )}

      {/* Side Modal */}
      <div
        ref={modalRef}
        className={`fixed inset-y-0 right-0 w-64 bg-white p-4 transform transition-transform duration-300 ease-in-out shadow-lg z-[9999] overflow-y-auto ${
          isModalOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2>This is Side Modal</h2>
        <p>Content Goes Here</p>

      </div>
    </div>
  );
};

export default FilterButton;
