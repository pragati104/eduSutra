"use client";

import {
  setChapterName,
  setChaptersData,
  setSubjectName,
} from "@/GlobalRedux/Features/dropDown";
import { topicHandler } from "@/utils/SubjectDropHandler";
import { useDispatch, useSelector } from "react-redux";
import SubjectDropDown from "./SubjectDropDown";

const AllDropDown = ({ showSubject, showChapters }) => {
  const subjects = [
    { label: "Physics", value: 1 },
    { label: "Chemistry", value: 2 },
    { label: "Maths", value: 3 },
  ];
  const { subjectName, chaptersData, chapterName, dropDownType } = useSelector(
    (store) => store.dropDown
  );

  const dispatch = useDispatch();

  const handleDropDownData = (data, name) => {
    if (name === "subject") {
      if (subjectName !== null) {
        dispatch(setSubjectName(data));
        const setChaptersInfo = topicHandler(data);
        dispatch(setChaptersData(setChaptersInfo));
        dispatch(setChapterName(null));
      } else {
        dispatch(setSubjectName(data));
        const setChaptersInfo = topicHandler(data);
        dispatch(setChaptersData(setChaptersInfo));
      }
    } else if (name === "chapters") {
      dispatch(setChapterName(data));
    }
  };
  return (
    <div className=" flex md:flex-row flex-col md:w-full w-[90%] gap-2 mx-auto rounded-lg z-20">
      {showSubject && (
        <SubjectDropDown
          name="subject"
          allData={subjects}
          currentName={subjectName}
          handleDropDownData={handleDropDownData}
        />
      )}
      {showChapters && chaptersData && (
        <SubjectDropDown
          name="chapters"
          allData={chaptersData}
          currentName={chapterName}
          handleDropDownData={handleDropDownData}
        />
      )}
    </div>
  );
};

export default AllDropDown;
