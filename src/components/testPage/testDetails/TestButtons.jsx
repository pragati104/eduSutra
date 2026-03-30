"use client";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaEye } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";

const TestButtons = ({ clear, previous, saveNext, reviewNext }) => {
  const { questionNo, subject, timeTaken, selectedOption } = useSelector(
    (store) => store.test
  );
  const questionsType = selectedOption[subject][questionNo]?.type || [];
  return (
    <div className="grid md:grid-cols-4 md:text-base text-sm grid-cols-2 gap-3 md:mt-2 mt-3 md:px-2">
      <button
        onClick={() =>
          previous(subject.toLowerCase(), questionNo, questionsType)
        }
        className="w-full border-2 rounded-md shadow-md flex gap-2 items-center justify-center  p-1 bg-black text-white"
      >
        <FaAngleDoubleLeft /> Previous
      </button>
      <button
        onClick={() => clear(subject.toLowerCase(), questionNo, questionsType)}
        className="w-full border-2 rounded-md shadow-md flex gap-2 items-center justify-center  p-1 bg-[#DC2626] text-white"
      >
        Clear Selection <FaRegCircleXmark />
      </button>
      <button
        onClick={() =>
          reviewNext(
            subject.toLowerCase(),
            questionNo,
            questionsType,
            timeTaken
          )
        }
        className="w-full border-2 rounded-md shadow-md p-1 flex gap-2 items-center justify-center bg-fuchsia-900 text-white"
      >
        Mark for Review & Next <FaEye />
      </button>
      <button
        onClick={() =>
          saveNext(subject.toLowerCase(), questionNo, questionsType, timeTaken)
        }
        className="w-full border-2 rounded-md shadow-md flex gap-2 items-center justify-center p-1 bg-green-500 text-white"
      >
        Save & Next <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default TestButtons;
