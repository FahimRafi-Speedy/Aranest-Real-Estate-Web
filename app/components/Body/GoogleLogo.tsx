"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PiLineVerticalBold } from "react-icons/pi";
import CrossButton from "./CrossButton";
import SearchInput from "./SearchInput";
import "./body.css";

const GoogleLogo: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <div className="flex flex-col items-center justify-center pt-8 pr-4 mt-2">
      {/* Google Logo */}
      <Image src="/aranest.png" alt="Aranest Logo" height={200} width={200} />

      <div className="flex border mt-7 px-5 py-1 border-gray-300 rounded-full items-center hover:shadow-md hover:scale-102 focus-within:shadow-lg focus-within:outline-none transition-transform duration-200 ease-in-out w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        <Image
          src="/search.png"
          alt="Search"
          width={25}
          height={25}
          className="text-3xl"
        />

        {/* Search Input */}
        <SearchInput value={searchText} onChange={handleChange} />

        <CrossButton onClick={handleClear} isVisible={searchText.length > 0} />

        {searchText.length > 0 && (
          <PiLineVerticalBold className="mr-2 text-slate-400 text-3xl" />
        )}

        <Image
          src="/target.png"
          alt="Target"
          width={25}
          height={25}
          className="mr-4 text-xl"
        />
        <Image
          src="/location.png"
          alt="Location"
          width={25}
          height={25}
          className="text-xl"
        />
      </div>
    </div>
  );
};

export default GoogleLogo;
