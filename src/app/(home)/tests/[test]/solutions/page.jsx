"use client";
import Arrow from "@/components/common/Arrow";
import FlagQuestionModal from "@/components/testPage/testDetails/FlagQuestionModal";
import Tabs from "@/components/testPage/testDetails/Tabs";
import mcq from "@/Data/mcq.json";
import { setShowFlag } from "@/GlobalRedux/Features/testSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegFlag } from "react-icons/fa6";
import { LiaNewspaperSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
// import { FaFlag } from "react-icons/fa6";

const TestSolutionPage = () => {
  const tabs = [
    { title: "Physics", icon: LiaNewspaperSolid },
    { title: "Chemistry", icon: LiaNewspaperSolid },
    { title: "Mathematics", icon: LiaNewspaperSolid },
  ];
  const { selected, showFlag } = useSelector((store) => store.test);
  const selectedSubject = selected !== null ? selected : "Physics";
  const questions = mcq[selectedSubject.toLowerCase()] || [];
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSolution = (questionNo) => {
    if (isOpen === questionNo) {
      setIsOpen(null);
    } else {
      setIsOpen(questionNo);
    }
  };
  return (
    <div className="md:w-[80%] w-[95%] mx-auto  mt-2  gap-3 ">
      <div className="flex flex-row md:justify-center justify-between md:gap-14  items-center md:w-[70%] w-full mx-auto mb-4">
        <Arrow type="back" click={() => router.push("/tests/1/result")} />
        <div className="flex flex-row justify-center items-start">
          {tabs.map((tab) => (
            <Tabs
              text={tab.title}
              selected={selectedSubject === tab.title}
              icon={tab.icon}
              key={tab.title}
            />
          ))}
        </div>
      </div>
      <div className=" ">
        {questions?.map((sub, i) => {
          return (
            <div
              key={i}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -2px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset",
              }}
              className="my-2 shadow-md p-4 rounded-md bg-white cursor-pointer"
            >
              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-wrap gap-2 justify-between w-full md:text-sm text-xs lg:px-4">
                  <div className="flex flex-wrap  gap-2">
                    <div className="bg-green-700 text-white rounded-md px-2 py-0.5 h-fit">
                      <span className="font-bold">Marks Obtained :</span>{" "}
                      <span className="font-bold">
                        {sub.answer === sub.userAnswer ? 4 : -1}
                      </span>
                    </div>
                    <div className="border-green-400 border text-black rounded-md md:px-2 md:py-0.5 px-1 h-fit flex items-center gap-2">
                      <Image
                        alt="coin"
                        src="/assests/coin.png"
                        width={20}
                        height={20}
                      />
                      <span className="font-bold">
                        {sub.answer === sub.userAnswer ? ": 4" : ": 0"}
                      </span>
                    </div>
                    <div className="bg-red-50 text-red-500 rounded-md px-2 py-0.5 h-fit">
                      <span className="font-bold">Hard</span>{" "}
                    </div>
                    <div className="bg-yellow-300 text-black rounded-md px-2 py-0.5 h-fit">
                      <span className="font-bold">Skipped</span>{" "}
                    </div>
                    <div className="bg-fuchsia-800 text-white rounded-md px-2 py-0.5 h-fit capitalize">
                      <span className="font-bold">{sub.type} Choice Type</span>{" "}
                    </div>
                    <div className="border-fuchsia-800 border text-black rounded-md px-2 py-0.5 h-fit">
                      <span className="font-bold">Time Taken :</span>{" "}
                      <span>03:20</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" flex items-center gap-2  w-fit  rounded-md shadow-sm px-2 py-0.5 h-fit">
                      <p className=" shadow-md rounded-md  bg-green-600 text-white w-8 font-semibold items-center flex justify-center">
                        +4
                      </p>

                      <p className="md:text-sm text-xs shadow-md rounded-md  bg-red-600 text-white w-8 font-semibold items-center flex justify-center">
                        -1
                      </p>
                    </div>
                    <div
                      onClick={() => dispatch(setShowFlag(true))}
                      className="shadow-md rounded-md p-2 py-1 bg-white active:scale-90"
                    >
                      {/* Todo : this is flag outline when question flaged then make it fill red */}
                      <FaRegFlag className="text-primaryDark" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:text-base text-sm my-2">
                  <div
                    className={`cursor-pointer relative md:w-8 md:h-8 w-6 h-6 shadow-md active:scale-90 rounded-full items-center flex justify-center font-semibold md:text-base text-sm ${"bg-white"}`}
                  >
                    {i + 1}
                  </div>
                  <div className="md:text-base text-base w-[90%]">
                    {sub.question}
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col gap-6 md:ml-10 ml-6 mr-4">
                    {sub.options.map((option, ind) => {
                      return (
                        <div
                          key={ind}
                          className={`flex items-center gap-3 md:text-base text-sm shadow-md rounded-md p-2 relative ${
                            sub.answer === option
                              ? "border-green-500 border-2 text-black"
                              : sub.userAnswer === option
                              ? "border-red-500 border-2 text-black"
                              : ""
                          }`}
                        >
                          <div className="flex gap-2 font-bold  w-full">
                            <span> ({String.fromCharCode(65 + ind)})</span>{" "}
                            <p>{option}</p>
                            <p className="text-xs text-white absolute right-7 -top-2">
                              {sub.answer === option ? (
                                <span className="border-green-400 border-2 z-10 bg-white text-green-500 rounded-lg shadow-md p-2">
                                  Correct answer
                                </span>
                              ) : sub.userAnswer === option ? (
                                <span className="border-red-400 border-2 z-10 bg-white rounded-lg text-red-500 shadow-md p-2">
                                  Your answer
                                </span>
                              ) : (
                                ""
                              )}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className={`md:p-4 relative md:mt-4 mt-6 md:mb-0  ${
                      isOpen !== i && "mb-8"
                    } w-full`}
                  >
                    <h2
                      onClick={() => toggleSolution(i)}
                      className="font-bold my-2 bg-gray-700 text-white w-fit rounded-md px-2 absolute md:-top-1 -top-5 md:left-6 left-2 cursor-pointer transition duration-500 ease-in-out"
                    >
                      Detailed Solution :
                    </h2>
                    <div
                      className={`shadow-md rounded-md border-gray-200 border p-2 md:pt-5 pt-6 md:text-base text-sm ${
                        isOpen === i ? "opacity-100" : "opacity-0 hidden"
                      } transition duration-500 ease-in-out`}
                    >
                      The ampere (often abbreviated as amp) is the base unit of
                      electric current in the International System of Units
                      (SI). Named after André-Marie Ampère, one of the main
                      discoverers of electromagnetism, it is a fundamental unit
                      in electrical measurements. Here a detailed explanation:
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <FlagQuestionModal isOpen={showFlag} />
    </div>
  );
};

export default TestSolutionPage;
