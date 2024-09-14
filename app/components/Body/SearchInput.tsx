// components/SearchInput.tsx
import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="outline-none w-full ml-4 focus:ring-0 focus:outline-none p-2 bg-transparent"
    />
  );
};

export default SearchInput;
