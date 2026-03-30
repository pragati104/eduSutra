import React from "react";
import CourseCard from "../common/CourseCard";

const RecommdedCourses = () => {
  const courseData = [
    {
      title: "JEE MAIN 2025 FOUNDATION COURSE",
      videoLectures: 784,
      tests: 560,
      studyNotes: 90,
      doubtSupport: "24x7",
      specialPrice: {
        original: "9980",
        discounted: "₹ 4491",
      },
      validity: "May 31, 2025",
      imageUrl: "/assests/c1.png",
    },
    {
      title: "JEE MAIN 2025 CRASH COURSE",
      videoLectures: 784,
      tests: 560,
      studyNotes: 90,
      doubtSupport: "24x7",
      specialPrice: {
        original: "9980",
        discounted: "₹ 4491",
      },
      validity: "May 31, 2025",
      imageUrl: "/assests/c3.png",
    },
    {
      title: "JEE MAIN 2025 TEST SERIES",
      videoLectures: 784,
      tests: 560,
      studyNotes: 90,
      doubtSupport: "24x7",
      specialPrice: {
        original: "9980",
        discounted: "₹ 4491",
      },
      validity: "May 31, 2025",
      imageUrl: "/assests/c4.png",
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className="md:px-4 md:grid md:grid-cols-3  gap-5 space-y-4 md:space-y-0 mt-[1%] mx-auto">
        {courseData.map((course, index) => {
          return <CourseCard data={course} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RecommdedCourses;
