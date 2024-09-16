"use client";

import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  width?: string; // Optional prop for width
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onOptionSelect,
  width = 'w-full'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between px-4 py-2 ${width} bg-gray-200 text-gray-700 rounded-md focus:outline-none hover:bg-gray-300`}
      >
        {selectedOption}
        <FaChevronDown className="ml-2" />
      </button>

      {isOpen && (
        <div className={`absolute right-0 ${width} mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg z-10`}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
