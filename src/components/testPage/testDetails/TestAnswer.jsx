import { optionChange } from "@/GlobalRedux/Features/testSlice";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import KeyPad from "./KeyPad";

const TestAnswer = () => {
  const matchData = [
    ["p", "q", "r", "s", "t", "u"],
    ["a", "b", "c", "d", "e"],
  ];
  const dispatch = useDispatch();
  const { questionNo, subject, selectedOption } = useSelector(
    (store) => store.test
  );
  const questionType = selectedOption[subject][questionNo]?.type || [];
  const [inputText, setInputText] = useState("");
  const [isKeyPadVisible, setIsKeyPadVisible] = useState(false);
  const [match, setMatch] = useState([]);

  const handleInputFocus = () => {
    setIsKeyPadVisible(true);
  };

  const handleInputBlur = () => {
    setIsKeyPadVisible(false);
    setInputText("");
  };

  const handleTestAnswer = (subject, questionNo, ans, type) => {
    if (type === "single" || "multiple") {
      const correctOption = String(ans);
      dispatch(optionChange({ subject, questionNo, correctOption, type }));
    } else if (type === "match the following") {
      const correctOption = String(ans);
      dispatch(optionChange({ subject, questionNo, correctOption, type }));
    } else {
      const correctOption = inputText;
      dispatch(optionChange({ subject, questionNo, correctOption, type }));
    }
  };

  const renderOptions = () => {
    return (
      <>
        {selectedOption[subject][questionNo].options.map((option, index) => (
          <div
            key={index}
            className="flex items-center gap-3 my-1 md:text-base text-sm"
          >
            <label className="flex justify-start gap-2 items-center md:text-lg text-base cursor-pointer">
              <input
                name={`question-${questionNo}-${index}`}
                id={`question-${questionNo}-${index}`}
                className="peer cursor-pointer hidden"
                type={questionType === "single" ? "radio" : "checkbox"}
                checked={
                  questionType === "single"
                    ? selectedOption[subject][questionNo].ans === String(index)
                    : selectedOption[subject][questionNo]?.ans?.includes(
                        String(index)
                      )
                }
                onChange={() =>
                  handleTestAnswer(
                    subject.toLowerCase(),
                    questionNo,
                    index,
                    questionType
                  )
                }
              />
              <span className="inline-block w-5 h-5 rounded-full border bg-black active:scale-90 shadow-md relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[12px] after:h-[12px] after:bg-[#62ff00] after:rounded-full after:opacity-0 peer-checked:after:opacity-100"></span>
              <p>
                ({String.fromCharCode(65 + index)}) {option}
              </p>
            </label>
          </div>
        ))}
      </>
    );
  };

  const renderInputBox = () => {
    return (
      <>
        <div className="form relative lg:w-[50%] w-full">
          <input
            className="input rounded-full w-full p-2 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="Enter Your Answer"
            required=""
            type="text"
            onFocus={handleInputFocus}
            readOnly
            value={inputText}
          />
          <div className="absolute flex items-center justify-center  right-3 -translate-y-1/2 top-1/2 w-8 h-8 rounded-full shadow-md bg-white">
            <button
              onClick={handleInputBlur}
              className="w-7 h-7 active:scale-90 rounded-full shadow-md flex items-center justify-center bg-white"
            >
              <RxCross2 size={20} />
            </button>
          </div>
        </div>
        <div className="mt-3">
          {isKeyPadVisible && <KeyPad setInputText={setInputText} />}
        </div>
      </>
    );
  };

  const OptionDesign = ({ value, active }) => {
    return (
      <div
        className={`cursor-pointer relative md:w-10 md:h-10 w-6 h-6 shadow-md active:scale-90 rounded-full items-center flex justify-center font-semibold text-base capitalize ${
          active ? "bg-green-600 text-white" : "bg-white"
        }`}
      >
        {value}
      </div>
    );
  };

  const handleMatch = (data) => {
    setMatch((prevData) => {
      if (prevData.includes(data)) {
        return prevData.filter((item) => item !== data);
      } else {
        return [...prevData, data];
      }
    });
    setActiveOptions((prev) => {
      if (prev.includes(data)) {
        return prev.filter((item) => item !== data);
      } else {
        return [...prev, data];
      }
    });
  };

  console.log(match);

  const [activeOptions, setActiveOptions] = useState([]);

  const renderMatch = () => {
    return (
      <div className="p-2">
        {matchData[1].map((each, i) => {
          return (
            <div
              className={`flex gap-2 py-2 w-fit ${
                i < matchData[1].length - 1 && "border-b-2"
              }`}
              key={`${each}`}
            >
              <div className="border-r-2 pr-2">
                <OptionDesign
                  value={each}
                  active={activeOptions.includes(each)}
                />
              </div>
              <div className="flex gap-2">
                {matchData[0].map((e, index) => {
                  const combinedValue = `${each}${e}`;
                  return (
                    <div
                      onClick={() => {
                        handleMatch(combinedValue);
                      }}
                      key={combinedValue}
                    >
                      <OptionDesign
                        value={e}
                        active={activeOptions.includes(combinedValue)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderQuestionContent = () => {
    switch (questionType) {
      case "single":
      case "multiple":
        return renderOptions();
      case "single digit":
      case "numerical value":
      case "integer value":
        return renderInputBox();
      case "match the following":
        return renderMatch();
      default:
        return <p>Unsupported question type: {questionType}</p>;
    }
  };

  return <div className="m-2">{renderQuestionContent()}</div>;
};

export default TestAnswer;
