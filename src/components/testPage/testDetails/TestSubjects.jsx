"use client";
import {
  setQuestionDetails,
  setShowQuestionListSidebar,
} from "@/GlobalRedux/Features/testSlice";
import { useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri"; // Corrected icon import
import { useDispatch, useSelector } from "react-redux";
import Timer from "./Timer";

const TestSubjects = () => {
  const [showStats, setShowStats] = useState(false);
  const [position, setPosition] = useState("");
  const [no, setNo] = useState(null);
  const dispatch = useDispatch();
  const { subject, selectedOption } = useSelector((store) => store.test);

  const handleMouseEnter = (index) => {
    setShowStats(true);
    setNo(index);
    if (index === 0) setPosition("left-0 top-10");
    if (index === 1) setPosition("left-16 right-0 top-10");
    if (index === 2) setPosition("right-0 top-10");
  };

  const handleMouseLeave = () => {
    setShowStats(false);
    setNo(null);
  };

  return (
    <div className="lg:flex grid grid-cols-1 gap-2 justify-between items-center w-full  pt-2">
      <div className="relative flex gap-3 md:text-sm text-sm">
        <div className="flex justify-between items-center gap-3 w-full">
          {selectedOption?.subject?.map((sub, i) => {
            return (
              <div
                className="bg-white p-0.5 rounded-md shadow-md"
                key={sub.subject_id}
              >
                <div
                  onClick={() =>
                    dispatch(
                      setQuestionDetails({ no: 0, sub: sub.subject_name })
                    )
                  }
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                  className={` font-semibold rounded-md shadow-md h-fit p-1 cursor-pointer active:scale-90 capitalize ${
                    subject === sub.subject_name && "bg-black text-white"
                  }`}
                >
                  {sub.subject_name}
                </div>
              </div>
            );
          })}
          <div className="lg:hidden block">
            <RiMenuFoldLine
              onClick={() => dispatch(setShowQuestionListSidebar())}
              size={25}
            />
          </div>
        </div>
        {showStats && no !== null && selectedOption?.subject[no] && (
          <div
            className={`absolute backdrop-blur-md shadow-md bg-white p-1 rounded-md capitalize ${position} w-fit z-50 `}
          >
            <div className="bg-gray-100 p-2 rounded-md">
              <div className="mb-2 pb-2 border-b font-bold">
                {selectedOption.subject[no].subject_name}
              </div>
              <div>
                <p className="mb-2">
                  Answered: {selectedOption.subject[no].answered}
                </p>
                <p className="mb-2">
                  Not Answered: {selectedOption.subject[no].notAnswered}
                </p>
                <p className="mb-2">
                  Marked: {selectedOption.subject[no].marked}
                </p>
                <p className="mb-2">
                  Answered & Marked:{" "}
                  {selectedOption.subject[no].markedAndAnswered}
                </p>
                <p className="mb-2">
                  Not Visited: {selectedOption.subject[no].notVisited}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 font-bold rounded-md">
        <div className=" flex items-center gap-0.5 text-base w-fit">
          <p>Marks :</p>
          <p className="md:text-sm text-xs shadow-md rounded-md p-1 bg-green-600 text-white w-8 font-semibold items-center flex justify-center">
            +4
          </p>

          <p className="md:text-sm text-xs shadow-md rounded-md p-1 bg-red-600 text-white w-8 font-semibold items-center flex justify-center">
            -1
          </p>
        </div>
        <Timer />
      </div>
    </div>
  );
};

export default TestSubjects;
