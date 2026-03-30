import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Dropdown = () => {
  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Wrong Question");
  const options = ["Wrong Question", "Option Error", "Solution Error", "Other"];

  const toggleOptions = () => {
    setIsOptionsExpanded(!isOptionsExpanded);
  };

  const setOption = (option) => {
    setSelectedOption(option);
    setIsOptionsExpanded(false);
  };

  return (
    <div className="relative lg:text-base text-sm shadow-md rounded-md w-full   h-fit">
      <button
        className="flex items-center justify-between px-3 lg:py-2 py-4 bg-gray-800 text-white font-bold w-full border border-gray-500 rounded-lg"
        onClick={toggleOptions}
        onBlur={() => setIsOptionsExpanded(false)}
      >
        <span>{selectedOption}</span>
        <RiArrowRightSLine
          className={`h-4 w-4 transform transition-transform duration-200 ease-in-out ${
            isOptionsExpanded ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>
      {isOptionsExpanded && (
        <ul className="absolute z-30 left-0 right-0 mb-4 bg-white text-black rounded-lg shadow-lg overflow-hidden  ">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-gray-200 shadow-md transform transition-transform duration-200 ease-in-out"
              onMouseDown={(e) => {
                e.preventDefault();
                setOption(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
