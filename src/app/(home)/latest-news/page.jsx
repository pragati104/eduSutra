import LatestNewsCard from "@/components/common/LatestNewsCard";
import React from "react";

const LatestNewsPage = () => {
  const newsData = [
    {
      image: "https://example.com/image1.jpg",
      title: "EdTech Company XYZ Launches AI-Powered Learning Platform",
      timing: "April 24, 2024",
      article:
        "XYZ, a leading EdTech company, has unveiled its latest innovation in the education technology space with the launch of a groundbreaking.",
    },
    {
      image: "https://example.com/image2.jpg",
      title:
        "EdTech Startup XYZ Partners with Major Universities to Expand Online Course Offerings",
      timing: "April 22, 2024",
      article:
        "In a strategic move to broaden its reach and enhance its course catalog, EdTech startup XYZ has announced partnerships with several major universities to offer a range of online courses. Through these collaborations.",
    },
    {
      image: "https://example.com/image3.jpg",
      title:
        "XYZ Launches Scholarship Program to Support Underprivileged Students",
      timing: "April 20, 2024",
      article:
        "Recognizing the importance of equal access to education, XYZ has launched a new scholarship program aimed at supporting underprivileged students. The program will provide financial assistance to deserving students from disadvantaged backgrounds, enabling them to pursue their educational goals and unlock their full potential.",
    },
    {
      image: "https://example.com/image4.jpg",
      title: "EdTech Company XYZ Acquires Language Learning App ABC",
      timing: "April 18, 2024",
      article:
        "In a strategic move to expand its product offerings and strengthen its position in the language learning market, EdTech company XYZ has acquired language learning app ABC. With millions of users worldwide, ABC's app offers a range of interactive language courses designed to help users master new languages quickly and effectively. By integrating ABC's app into its platform, XYZ aims to provide learners with a comprehensive language learning experience that combines cutting-edge technology with engaging content.",
    },
    {
      image: "https://example.com/image5.jpg",
      title: "XYZ Launches Virtual Reality Field Trips for K-12 Students",
      timing: "April 16, 2024",
      article:
        "XYZ has announced the launch of a new virtual reality (VR) field trip program designed to bring immersive learning experiences to K-12 students. Through partnerships with museums, national parks, and other educational institutions.",
    },
    {
      image: "https://example.com/image6.jpg",
      title:
        "EdTech Company XYZ Named Finalist in Prestigious Education Innovation Awards",
      timing: "April 14, 2024",
      article:
        "XYZ has been recognized for its innovation and excellence in education technology, earning a spot as a finalist in the prestigious Education Innovation Awards. The awards, which celebrate groundbreaking advancements in the field of education, honor companies and organizations that are leading the way in transforming teaching and learning. As a finalist, XYZ joins a select group of innovators who are shaping the future of education and making a positive impact on learners worldwide.",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
        {newsData.map((data, index) => {
          return (
            <div key={index}>
              <LatestNewsCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestNewsPage;
