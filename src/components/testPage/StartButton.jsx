"use client";
import { setNext } from "@/GlobalRedux/Features/testSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const StartButton = () => {
  const router = useRouter();
  const next = useSelector((store) => store.test.next);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleButton = () => {
    if (next) {
      router.push("/test/1");
    } else {
      dispatch(setNext());
    }
  };

  return (
    <div className="text-center text-black justify-center items-center md:text-base text-xs flex flex-col">
      {next && (
        <div className="flex items-center gap-2 my-1 md:text-base text-xs">
          <label
            className="relative flex items-center p-0.5 rounded-full cursor-pointer"
            htmlFor="check"
          >
            <input
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
              id="check"
              onChange={handleCheckbox}
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <FaCheck />
            </span>
          </label>
          I have read and understood the instructions
        </div>
      )}
      <button
        onClick={handleButton}
        className={`md:w-[20%] w-[70%] bg-gradient-to-r flex items-center gap-4 justify-center from-blue-500 to-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg ${
          next && !isChecked
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }`}
        disabled={next && !isChecked}
      >
        {next ? "Start Test" : "Next"} <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default StartButton;
