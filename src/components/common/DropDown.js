import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import React from "react";
import { showDropDown } from "@/GlobalRedux/Features/dropDown";

const DropDown = ({ allData, currentName, name, handleDropDownData }) => {
  const { dropDownType, drop } = useSelector((store) => store.dropDown);
  const dispatch = useDispatch();

  return (
    <div className=" ">
      <button
        className="  text-center text-Black shadow font-semibold border-2 border-emerald-100  bg-white rounded-lg text-base px-10 py-2.5 gap-2  inline-flex items-center  "
        type="button"
        onClick={() => dispatch(showDropDown(name))}
      >
        {currentName ? currentName : name}
        {dropDownType === name && drop ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      <div
        className={`z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow min-w-44 my-1 dark:bg-gray-700 ${
          dropDownType === name && drop ? "block" : "hidden"
        }`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {allData?.map((data, index) => (
            <li key={index} onClick={() => handleDropDownData(data)}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {data}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
