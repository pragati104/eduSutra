"use client";
import { getChapterData } from "@/utils/SubjectDropHandler";
import { useState } from "react";
import { useSelector } from "react-redux";
import AllDropDown from "../common/AllDropDown";
import Calender from "../common/Calender";
import VideoCard from "../common/VideoCard";

const PreviousClass = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const videoData = [
    {
      chapter_id: 1,
      chapter_name: "Some Basic Concepts of Chemistry",
      src: "",
      href: "",
    },
    {
      chapter_id: 2,
      chapter_name: "Vector Multiplication Lecture 01",
      src: "",
      href: "",
    },
    {
      chapter_id: 3,
      chapter_name: "Surface Chemistry Lecture 01",
      src: "",
      href: "",
    },
    {
      chapter_id: 4,
      chapter_name: "Some Basic Concepts of Chemistry",
      src: "",
      href: "",
    },
    {
      chapter_id: 5,
      chapter_name: "Vector Multiplication Lecture 01",
      src: "",
      href: "",
    },
    {
      chapter_id: 6,
      chapter_name: "Surface Chemistry Lecture 01",
      src: "",
      href: "",
    },
    {
      chapter_id: 7,
      chapter_name: "Some Basic Concepts of Chemistry",
      src: "",
      href: "",
    },
    {
      chapter_id: 8,
      chapter_name: "Vector Multiplication Lecture 01",
      src: "",
      href: "",
    },
    {
      chapter_id: 9,
      chapter_name: "Surface Chemistry Lecture 01",
      src: "",
      href: "",
    },
    {
      chapter_id: 10,
      chapter_name: "Some Basic Concepts of Chemistry",
      src: "",
      href: "",
    },
    {
      chapter_id: 11,
      chapter_name: "Vector Multiplication Lecture 01",
      src: "",
      href: "",
    },
  ];

  const { subjectName, subTopicName, chapterName } = useSelector(
    (store) => store.dropDown
  );

  const result = getChapterData(subjectName, subTopicName, chapterName);

  return (
    <div className=" flex flex-col w-full rounded-lg">
      <div className="flex lg:flex-row flex-col-reverse items-center w-full mx-auto md:px-4 p-2 ">
        <AllDropDown showSubject={true} showChapters={true} /> <Calender />
      </div>
      <div className="grid  lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-4  ">
        {result.length > 0
          ? result.map((data, index) => {
              return (
                <div key={index} className="mb-4">
                  <VideoCard data={data} />
                </div>
              );
            })
          : videoData.map((data, index) => {
              return (
                <div key={index} className="mb-4">
                  <VideoCard
                    key={index}
                    data={data}
                    time={"11.01.2024 | 5:00 PM"}
                  />{" "}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default PreviousClass;
