"use client";
import Chip from "@/components/common/Chip";
import TestCard from "@/components/common/TestCard";
import NotesCard from "@/components/notesPage/NotesCard";
import Comments from "@/components/watchPage/Comments";
import LiveChat from "@/components/watchPage/LiveChat";
import SuggestedVideos from "@/components/watchPage/SuggestedVideos";
import Video from "@/components/watchPage/Video";
import { setSelected } from "@/GlobalRedux/Features/askQuestionData";
import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { MdOutlineQuiz } from "react-icons/md";
import { PiNotePencilBold, PiVideoFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

const VideoWatchPage = () => {
  const tabs = [
    { title: "Doubts", icon: FaRegCommentDots },
    { title: "Test", icon: PiNotePencilBold },
    { title: "Quiz", icon: MdOutlineQuiz },
    { title: "Notes", icon: FaRegNoteSticky },
    { title: "Related Videos", icon: PiVideoFill },
  ];

  const videoData = {
    title: "P - block ELements lecture - 5",
    type: "live",
    user: "free",
    tests: [
      {
        name: "JEE Main 2024 Test - 1",
        price: "Free",
        benefits: ["90 Questions", "180 minutes", "300 marks"],
      },
      {
        name: "JEE Main 2024 Test - 2",
        price: "Premium",
        benefits: ["90 Questions", "180 minutes", "300 marks"],
      },
      {
        name: "JEE Main 2024 Test - 3",
        price: "Premium",
        benefits: ["90 Questions", "180 minutes", "300 marks"],
      },
      {
        name: "JEE Main 2024 Test - 4",
        price: "Premium",
        benefits: ["90 Questions", "180 minutes", "300 marks"],
      },
    ],
    notes: {
      chapter_name: "P - block ELements lecture - 5",
      price: "Free",
      notes: "22 pages",
    },
  };

  const select = useSelector((store) => store.askQuestion.selected);
  const selected = select !== null ? select : "Doubts";

  const dispatch = useDispatch();

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    playbackRates: [0.5, 1, 1.5, 2],
    responsive: true,
    fluid: true,
    preload: true,
    poster: "/assests/c1.png",
    sources: [
      {
        src: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
      },
    ],
    controlBar: {
      skipButtons: {
        forward: 10,
        backward: 10,
      },
    },
  };

  const handleTab = (data) => {
    dispatch(setSelected(data));
  };
  return (
    <div className="flex lg:flex-row flex-col w-full ">
      <div className="md:w-[62%] w-[95%] mx-auto">
        <Video options={videoJsOptions} />

        <div className="py-3 px-1">
          <h2 className="text-lg font-bold   ">{videoData.title}</h2>
          <div className="flex md:flex-row flex-col gap-2">
            <p>04 Apr 2023 , 12:45 PM</p> |
            <p className="font-medium">P-block Elements, Chemistry</p>
          </div>
        </div>

        <div className="md:w-[70%]  flex flex-wrap md:justify-between justify-evenly gap-4 rounded-xl bg-gray-50 w-[100%]">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className={`${
                tab.title === "Related Videos" && "md:hidden visible"
              }`}
            >
              <Chip
                icon={tab.icon}
                text={tab.title}
                selected={selected === tab.title}
                updateTab={handleTab}
              />
            </div>
          ))}
        </div>

        <div className="w-full">
          {selected === "Doubts" &&
            (videoData.type === "video" ? <Comments /> : <LiveChat />)}
          {selected === "Test" && (
            <div className="md:my-5 my-2 py-2 grid md:grid-cols-3 grid-cols-1 gap-6">
              {videoData.tests.map((data, index) => {
                return (
                  <div className="w-full  " key={index}>
                    <TestCard data={data} width="w-[23rem]" />
                  </div>
                );
              })}
            </div>
          )}

          {selected === "Quiz" && (
            <div className="md:my-5 my-2 py-2">Nothing add Animation</div>
          )}
          {selected === "Notes" && (
            <div className="md:my-5 my-2 py-2">
              <NotesCard data={videoData.notes} />
            </div>
          )}
          {selected === "Related Videos" && (
            <div className="md:my-5 my-2 py-2">
              <SuggestedVideos />
            </div>
          )}
        </div>
      </div>
      <div className="lg:w-[35%] w-full md:h-[147vh] h-[100vh] overflow-auto no-scrollbar md:block hidden">
        <h2 className="font-semibold md:text-lg text-base py-2">
          Related Videos
        </h2>
        <SuggestedVideos />
      </div>
    </div>
  );
};

export default VideoWatchPage;
