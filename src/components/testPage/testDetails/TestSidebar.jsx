"use client";
import {
  setLanguage,
  setQuestionDetails,
  setShowQuestionListSidebar,
  setShowQuestionPaper,
  setShowSubmitModal,
} from "@/GlobalRedux/Features/testSlice";
import { FaCheck, FaCheckDouble, FaPause } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

const TestSidebar = () => {
  const dispatch = useDispatch();
  const { subject, selectedOption, showQuestionListSidebar } = useSelector(
    (store) => store.test
  );
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10800);
  const subjectData = selectedOption.subject.find(
    (sub) => sub.subject_name === subject
  );

  const data = [
    {
      title: "answered",
      style: "bg-green-600 text-white",
      value: subjectData?.answered,
    },
    {
      title: "not answered",
      style: "bg-red-600 text-white",
      value: subjectData?.notAnswered,
    },
    {
      title: "not visited",
      style: "bg-white text-black",
      value: subjectData?.notVisited,
    },
    {
      title: "marked",
      style: "bg-fuchsia-900 text-white",
      value: subjectData?.marked,
    },
    {
      title: "answered & marked for review",
      style: "bg-fuchsia-900 text-white",
      value: subjectData?.markedAndAnswered,
    },
  ];

  const languages = [
    { label: "हिंदी", value: "Hindi" },
    { label: "English", value: "English" },
  ];

  const buttonData = [
    {
      title: "question paper",
      icon: IoNewspaper,
      style: "bg-green-600 text-white",
      onClick: () => dispatch(setShowQuestionPaper()),
    },
    {
      title: "pause",
      icon: FaPause,
      style: "bg-red-600 text-white",
      onClick: () => console.log("Pause clicked"),
    },
    {
      title: "submit",
      icon: FaCheckDouble,
      style: "bg-fuchsia-900 text-white",
      onClick: () => {
        dispatch(setShowSubmitModal(true));
        dispatch(setShowQuestionListSidebar());
      },
    },
  ];

  const getAnsweredClass = (answered, marked) => {
    if (answered === false && marked === true)
      return "bg-fuchsia-900 text-white";
    if (answered === true && marked === true)
      return "bg-fuchsia-900 text-white";
    if (answered === true) return "bg-green-500 text-white";
    if (answered === false) return "bg-red-600 text-white";
    if (answered === null) return "bg-white text-black";
    return ""; // Default case, no additional class
  };

  const questions = selectedOption[subject] || [];

  return (
    <div
      className={`lg:w-[20%] w-[80%] bg-gray-100 px-4 fixed top-15 right-0 h-full duration-300 z-50 ${
        showQuestionListSidebar
          ? "lg:block translate-x-0"
          : " translate-x-80 lg:translate-x-0"
      }`}
    >
      <div className="mb-2">
        <RxCross2
          onClick={() => dispatch(setShowQuestionListSidebar())}
          size={25}
          className="lg:hidden float-right"
        />
        <p className="font-semibold mb-1 text-sm">
          Candidate:{" "}
          <span className="font-normal text-sm">{"Subham Kumar"}</span>
        </p>
        <div className="my-1 md:text-sm text-xs">
          <div className="md:w-[70%] w-[70%] md:text-base text-sm mr-6">
            <Select
              className="w-full   py-1 rounded-lg"
              name="language"
              id="language"
              defaultValue={languages[1]}
              onChange={(e) => dispatch(setLanguage(e.value))}
              options={languages}
              placeholder="Choose Language"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-sm">Question Overview</p>
        <div className="grid grid-cols-4 overflow-y-auto xl:h-[225px] md:h-[200px] lg:h-[200px] h-[300px] no-scrollbar my-2 pb-1">
          {questions?.map((m, i) => {
            const answeredClass = getAnsweredClass(m?.answered, m?.marked);
            return (
              <div key={i} className="flex items-center my-2 ml-2 gap-1">
                <div
                  onClick={() => {
                    dispatch(
                      setQuestionDetails({
                        no: i,
                        sub: subject.toLowerCase(),
                        type: questions[i]?.type,
                      })
                    );
                    dispatch(setShowQuestionListSidebar());
                  }}
                  className={`cursor-pointer relative md:w-9 md:h-9 w-7 h-7 mr-2 shadow-lg rounded-full items-center flex justify-center font-semibold text-base`}
                >
                  <div
                    className={`cursor-pointer relative md:w-8 md:h-8 w-6 h-6 shadow-md active:scale-90 rounded-full items-center flex justify-center font-semibold text-base ${
                      answeredClass ? answeredClass : "bg-white"
                    }`}
                  >
                    {questions[i]?.answered && questions[i]?.marked && (
                      <span className="rounded-full w-5 h-5 absolute bg-white lg:-top-1 -top-2 lg:left-5 left-3 right-0.5 text-center flex justify-center items-center">
                        <FaCheck className="bg-green-500 rounded-full text-white text-center w-4 h-4 p-0.5" />
                      </span>
                    )}
                    {i + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-3">
        <p className="font-semibold md:text-base text-sm">Legend</p>
        <div className="grid grid-cols-2 my-2 md:text-sm text-xs gap-3">
          {data.map((each, i) => (
            <div
              key={i}
              className={`flex items-center ${
                i === data.length - 1 ? "col-span-2" : ""
              }`}
            >
              <div className="md:w-9 md:h-9 w-7 h-7 mr-2 shadow-lg bg-white rounded-full items-center flex justify-center font-semibold md:text-sm text-xs">
                <div
                  className={`cursor-pointer relative md:w-8 md:h-8 w-6 h-6 shadow-md ${each.style} rounded-full items-center flex justify-center font-semibold md:text-sm text-xs`}
                >
                  {each.title === "answered & marked for review" && (
                    <span className="rounded-full w-5 h-5 absolute bg-white lg:-top-1 -top-2 lg:left-5 left-3 right-0.5 text-center flex justify-center items-center">
                      <FaCheck className="bg-green-500 rounded-full text-white text-center w-4 h-4 p-0.5" />
                    </span>
                  )}
                  {each.value}
                </div>
              </div>
              <p className="capitalize md:text-sm text-xs">{each.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        {buttonData.map((e, ind) => (
          <button
            key={ind}
            className={`w-full border-2 rounded-md shadow-md mb-2 p-1 flex gap-2 items-center justify-center capitalize md:text-sm text-xs  `}
            onClick={e.onClick}
          >
            {e.title} <e.icon size={15} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestSidebar;
