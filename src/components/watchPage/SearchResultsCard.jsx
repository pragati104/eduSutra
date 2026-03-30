import { usePathname } from "next/navigation";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const SearchResultsCard = () => {
  return (
    <div className="duration-300 cursor-pointer">
      <div className="flex-col shadow  rounded-lg py-2 gap-2 w-full hover:shadow-xl">
        <div className="flex flex-row justify-between">
          <h3 className="md:text-lg text-base font-bold md:mx-4 mx-2">
            What is blockchain Technology?
          </h3>
          <p className="  bg-gray-300 md:text-sm text-xs font-semibold w-fit p-1 md:mx-4 mx-2 ml-auto rounded-lg">
            Computer
          </p>
        </div>
        <div className="flex items-center gap-2 justify-between md:mx-4 mx-2 my-2">
          <div className="flex justify-start items-center gap-2 md:text-sm text-[10px] font-semibold">
            <p className="bg-gray-200 text-black p-1 rounded-md">bpsc</p>
            <p className="bg-gray-200 text-black p-1 rounded-md">bpsc</p>
          </div>
          <div className="flex items-center gap-2 text-gray-600 md:text-sm text-xs">
            <p>asked </p>
            <FaRegUserCircle size={20} />
            Subham Kumar <span>36 seconds ago</span>
          </div>
        </div>
        <div className="flex justify-between md:mx-4 mx-2 my-2">
          <p className="text-base font-semibold">1 Answer</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2">
              <AiFillLike size={22} /> <span>0</span>
            </p>
            <p className="flex  items-center gap-2">
              <FaEye size={20} /> <span>91</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
