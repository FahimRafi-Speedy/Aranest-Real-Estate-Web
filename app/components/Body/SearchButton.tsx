import "./Body.css";
import { FaSearch } from 'react-icons/fa';

const SearchButton: React.FC = () => {
  return (
    <div className="flex justify-center mt-4">
      <button
        type="submit" // Update to trigger form submission
        className="flex items-center justify-center px-4 py-2 sm:w-36 md:w-44 lg:w-48 rounded-md 
                   focus:outline-none transition-colors duration-200 searchButton text-white font-bold"
      >
        Search
        <FaSearch className="ml-2" />
      </button>
    </div>
  );
};

export default SearchButton;
