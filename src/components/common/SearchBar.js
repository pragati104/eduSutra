"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  // const searchValue = (value) => {
  //   console.log(value);
  // };

  return (
    <>
      <div className="w-full">
        <input
          className="w-[85%]  pt-[10px] p-2 px-3 pb-[7x] border border-solid border-gray-300 rounded-l-3xl"
          placeholder="search"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />

        <button className="w-[15%] cursor-pointer border border-gray-300 px-5 py-3 pb-[14px] bg-gray-100 rounded-r-3xl">
          <a href={`/results?search_query=${searchQuery}`}>
            <IoIosSearch />
          </a>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
