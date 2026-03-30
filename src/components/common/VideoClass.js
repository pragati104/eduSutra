"use client";
import { getChapterData } from "@/utils/SubjectDropHandler";
import { useState } from "react";
import { useSelector } from "react-redux";
import AllDropDown from "./AllDropDown";
import VideoCard from "./VideoCard";

const VideoClass = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const videoData = [
    { chapter_name: "Some Basic Concepts of Chemistry", src: "", href: "" },
    { chapter_name: "Vector Multiplication Lecture 01", src: "", href: "" },
    { chapter_name: "Surface Chemistry Lecture 01", src: "", href: "" },
    { chapter_name: "Some Basic Concepts of Chemistry", src: "", href: "" },
    { chapter_name: "Vector Multiplication Lecture 01", src: "", href: "" },
    { chapter_name: "Surface Chemistry Lecture 01", src: "", href: "" },
    { chapter_name: "Some Basic Concepts of Chemistry", src: "", href: "" },
    { chapter_name: "Vector Multiplication Lecture 01", src: "", href: "" },
    { chapter_name: "Surface Chemistry Lecture 01", src: "", href: "" },
    { chapter_name: "Some Basic Concepts of Chemistry", src: "", href: "" },
    { chapter_name: "Vector Multiplication Lecture 01", src: "", href: "" },
  ];

  const { subjectName, subTopicName, chapterName } = useSelector(
    (store) => store.dropDown
  );

  const result = getChapterData(subjectName, subTopicName, chapterName);

  return (
    <div className=" flex flex-col w-full rounded-lg  ">
      <div className="flex items-center md:w-[70%] w-full px-4  mb-4">
        <AllDropDown showSubject={true} showChapters={true} />
      </div>
      <div className="grid  lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-4  ">
        {result.length > 0
          ? result.map((data, index) => {
              return (
                <div key={index} className="mb-4">
                  <VideoCard key={index} data={data} time={"58:00"} />{" "}
                </div>
              );
            })
          : videoData.map((data, index) => {
              return (
                <div key={index} className="mb-4">
                  <VideoCard key={index} data={data} time={"58:00"} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default VideoClass;
