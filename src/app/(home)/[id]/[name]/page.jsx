"use client";
import TipTap from "@/components/askDoubtPage/TipTap";
import Carousal from "@/components/common/Carousal";
import Answer from "@/components/QuestionPage/Answer";
import Question from "@/components/QuestionPage/Question";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const QuestionResultPage = () => {
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { bestAnswer } = useSelector((store) => store.searchResults);

  const slides = [
    "/assests/m1.png",
    "/assests/m2.png",
    "/assests/m3.png",
    "/assests/m4.png",
    "/assests/m5.png",
  ];

  const question = {
    title:
      "Which among the following is an allied service provided by a bank? Locker facility, Warehousing facility,  Underwriting services, More than one of the above",
    question:
      "Which among the following is an allied service provided by a bank?",
    options: [
      "Locker facility",
      "Warehousing facility",
      "Underwriting services",
      "More than one of the above",
      "None of the above ",
    ],
    answer: "Correct option is (D) More than one of the above",
  };
  const handleContentChange = (reason) => {
    setContent(reason);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full md:py-3 py-0 pb-3">
      <div className="md:w-[70%] w-[95%] mx-auto">
        <div className="duration-300 cursor-pointer">
          {/* Carousal */}
          <div className="flex justify-center items-center  bg-black">
            <div className="w-full">
              <Carousal autoSlide={true}>
                {[
                  ...slides.map((s, ind) => (
                    <Image
                      key={ind}
                      src={s}
                      alt="img"
                      width={2000}
                      height={150}
                    />
                  )),
                ]}
              </Carousal>
            </div>
          </div>
        </div>
        <Question question={question} />
        <Answer question={question} />
        {/* Add Answer */}
        {!bestAnswer && (
          <div className="duration-300">
            <div className=" header header-1 md:w-[70%] w-[95%] md:mx-0 mx-auto my-8">
              <h2 className="md:text-2xl text-sm font-bold ribbon">
                Add Your Answer
              </h2>
            </div>
            <p className="md:text-sm text-xs text-gray-500 ">
              Please remember, its important not to use content you dont own. We
              are here to offer unique answers that respect copyright
              guidelines!
            </p>
            <TipTap
              content={content}
              onChange={(newContent) => handleContentChange(newContent)}
            />
            {content && (
              <button
                type="submit"
                className="px-4 w-full my-2 bg-sky-700 text-white py-2 rounded-md"
              >
                Add Answer
              </button>
            )}
            <div className="flex items-center gap-2 my-1 md:text-base text-xs">
              <input
                type="checkbox"
                id="notificationCheckbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="notificationCheckbox">
                Email me (9386407478aaa@gmail.com) if my answer is selected or
                commented on
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionResultPage;
