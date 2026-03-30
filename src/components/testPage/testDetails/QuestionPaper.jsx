import Arrow from "@/components/common/Arrow";
import {
  setQuestionDetails,
  setShowQuestionPaper,
} from "@/GlobalRedux/Features/testSlice";
import { FaCheck } from "react-icons/fa";
import { LiaNewspaperSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "./Tabs";

const QuestionPaper = () => {
  const tabs = [
    { title: "Physics", icon: LiaNewspaperSolid },
    { title: "Chemistry", icon: LiaNewspaperSolid },
    { title: "Mathematics", icon: LiaNewspaperSolid },
  ];
  const { selected, selectedOption } = useSelector((store) => store.test);
  const selectedSubject = selected !== null ? selected : "Physics";
  const questions = selectedOption[selectedSubject.toLowerCase()] || [];
  const dispatch = useDispatch();

  const handleShowQuestionPaper = () => {
    dispatch(setShowQuestionPaper());
  };

  const goToQuestion = (subjectName, qNo) => {
    dispatch(setShowQuestionPaper());
    dispatch(
      setQuestionDetails({
        no: qNo,
        sub: subjectName.toLowerCase(),
        type: questions[qNo]?.type,
      })
    );
  };

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

  return (
    <div className="lg:w-[80%] w-[95%] mx-auto  mt-2  gap-3">
      <div className="flex flex-row justify-center lg:gap-14 gap-7 items-center lg:w-[70%] w-[80%] mx-auto">
        <div className="">
          {/* <TbSquareRoundedArrowLeft
            onClick={() => handleShowQuestionPaper()}
            className="w-5 h-5 cursor-pointer active:scale-95 shadow-md rounded-lg"
          /> */}
          <Arrow style="" type="back" click={handleShowQuestionPaper} />
        </div>
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
      <div className="">
        {questions?.map((sub, i) => {
          const answeredClass = getAnsweredClass(sub?.answered, sub?.marked);
          return (
            <div
              key={i}
              onClick={() => goToQuestion(selectedSubject, i)}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 1px 2px, rgba(0, 0, 0, 0.3) 0px 5px 10px -2px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset",
              }}
              className="my-2 p-4 rounded-md bg-white cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`cursor-pointer relative md:w-8 md:h-8 w-5 h-5 shadow-md active:scale-90 rounded-full items-center flex justify-center font-semibold md:text-base text-sm ${
                    answeredClass ? answeredClass : "bg-white"
                  }`}
                >
                  {questions[i]?.answered && questions[i]?.marked && (
                    <span className="rounded-full w-5 h-5 absolute bg-white lg:-top-1 -top-2 lg:left-5 left-3 right-0.5 text-center flex justify-center items-center">
                      <FaCheck className="bg-green-500 rounded-full text-white text-center w-4 h-4 p-0.5" />
                    </span>
                  )}
                  {i + 1}
                </div>{" "}
                <div className="w-[80%]">
                  <p>{sub.question}</p>
                  <div className="flex flex-wrap gap-2">
                    {sub.options.map((option, i) => {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-3 my-1 md:text-base text-sm"
                        >
                          <div className="flex gap-2">
                            <span> ({String.fromCharCode(97 + i)})</span>{" "}
                            <p>{option}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionPaper;
