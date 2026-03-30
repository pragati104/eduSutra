"use client";
import { showDropDown } from "@/GlobalRedux/Features/dropDown";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import AllDropDown from "../common/AllDropDown";
import TipTap from "./TipTap";

const AskQuestion = () => {
  const dispatch = useDispatch();
  const allData = [
    "JEE",
    "NEET",
    "Science",
    "Mathematics",
    "Statics",
    "Environmental Science",
    "Biotechnology",
    "Social Science",
    "Commerce",
    "Electronics",
  ];
  const [content, setContent] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleContentChange = (reason) => {
    setContent(reason);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      content: content,
    };

    const existingDataString = localStorage.getItem("myData");
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];
    const updatedData = [...existingData, data];
    localStorage.setItem("myData", JSON.stringify(updatedData));
    setContent("");
  };
  const handleDropDownData = (data) => {
    setCurrentName(data);
    dispatch(showDropDown());
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col justify-start items-start w-full gap-4">
        <div className="w-full ">
          <div>
            <h2 className="w-full text-start text-lg font-medium mb-2">
              Question Title:
            </h2>
            <input
              placeholder="What is my name?"
              className=" bg-white py-3 w-full mx-auto  border px-4 rounded-lg focus:outline-none hover:cursor-pointer"
              id="question"
              name="question"
            />
          </div>

          <div className="w-full   ">
            <h3 className="w-full text-start text-lg font-medium mt-2">
              Category:
            </h3>
            <AllDropDown showSubject={true} showChapters={true} />
          </div>
        </div>
        <div className=" w-full mx-auto">
          <label className="font-medium text-lg ">
            Add Question in detail:
          </label>
          <form onSubmit={handleSubmit}>
            <TipTap
              content={content}
              onChange={(newContent) => handleContentChange(newContent)}
            />

            <div>
              <h2 className="w-full text-start text-lg font-medium mb-2">
                Topics - use comma (,) as a separator
              </h2>
              <input
                placeholder=""
                className=" bg-white py-3 w-full mx-auto  border px-4 rounded-lg focus:outline-none hover:cursor-pointer"
              />
            </div>
          </form>

          <div className="flex flex-row gap-2 items-center my-1">
            <input
              type="checkbox"
              id="notificationCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
            <label htmlFor="notificationCheckbox">
              Notify me if my question i answered or commented
            </label>
          </div>
          {content && (
            <button
              type="submit"
              className="px-4 w-full my-2 bg-sky-700 text-white py-2 rounded-md"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
