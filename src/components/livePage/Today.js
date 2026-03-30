import React from "react";
import Lottie from "lottie-react";
import searching from "@/Data/searching.json";
import LiveClassCard from "./LiveClassCard";

const Today = () => {
  const TodayData = [
    {
      topic: "P block Elements Lec - 7",
      subject: "P block Elements",
      batch: "Lec - 7",
      starttime: "5:00 PM",
      teacher: "Subham Kumar",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link1",
    },
    {
      topic: "Modern Physics Elements Lec - 7",
      subject: "Modern Physics",
      batch: "Lec - 7",
      starttime: "3:00 PM",
      teacher: "Prem bhai",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link2",
    },
    {
      topic: "Trigonometry Lec - 7",
      subject: "Trigonometry",
      batch: "Lec - 7",
      starttime: "4:00 PM",
      teacher: "Pragati",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link3",
    },
    {
      topic: "P block Elements Lec - 7",
      subject: "P block Elements",
      batch: "Lec - 7",
      starttime: "5:00 PM",
      teacher: "Subham Kumar",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link1",
    },
    {
      topic: "Modern Physics Elements Lec - 7",
      subject: "Modern Physics",
      batch: "Lec - 7",
      starttime: "3:00 PM",
      teacher: "Prem bhai",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link2",
    },
    {
      topic: "Trigonometry Lec - 7",
      subject: "Trigonometry",
      batch: "Lec - 7",
      starttime: "4:00 PM",
      teacher: "Pragati",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link3",
    },
  ];

  return (
    <div className="my-4 md:w-full w-[90%] mx-auto">
      {TodayData.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-4">
          {TodayData.map((data, index) => (
            <div key={index}>
              <LiveClassCard data={data} />
            </div>
          ))}
        </div>
      ) : (
        <div className=" flex flex-col justify-center items-center py-2">
          <div className="text-3xl text-red-600 font-bold my-2">
            No Class Today
          </div>
          <Lottie animationData={searching} className="w-[30%]" />
        </div>
      )}
    </div>
  );
};

export default Today;
