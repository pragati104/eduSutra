"use client";
import Chip from "@/components/common/Chip";
import TestCard from "@/components/common/TestCard";
import VideoCard from "@/components/common/VideoCard";
import NotesCard from "@/components/notesPage/NotesCard";
import { setSelected } from "@/GlobalRedux/Features/askQuestionData";
import { usePathname } from "next/navigation";
import { FaVideo } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { HiPencilSquare } from "react-icons/hi2";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineQuiz } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const ChapterPage = () => {
  const tabs = [
    { title: "Video", icon: FaVideo },
    { title: "Test", icon: HiPencilSquare },
    { title: "Quiz", icon: MdOutlineQuiz },
    { title: "Notes", icon: FaRegNoteSticky },
    { title: "Doubts", icon: LuMessagesSquare },
  ];
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
  const test_DATA = [
    {
      name: "Physics Test - 1",
      price: "Free",
      benefits: [
        "Available Till: 31 July 2025 ",
        "90 Questions",
        "180 minutes",
        "300 marks",
      ],
    },
    {
      name: "Physics Test - 2",
      price: "Premium",
      benefits: [
        "Available Till: 31 July 2025 ",
        "90 Questions",
        "180 minutes",
        "300 marks",
      ],
    },
    {
      name: "Physics Test - 3",
      price: "Premium",
      benefits: [
        "Available Till: 31 July 2025 ",
        "90 Questions",
        "180 minutes",
        "300 marks",
      ],
    },
    {
      name: "Chemistry Test - 1",
      price: "Premium",
      benefits: [
        "Available Till: 31 July 2025 ",
        "90 Questions",
        "180 minutes",
        "300 marks",
      ],
    },
    {
      name: "Chemistry Test - 2",
      price: "Premium",
      benefits: [
        "Available Till: 31 July 2025 ",
        "90 Questions",
        "180 minutes",
        "300 marks",
      ],
    },
    {
      name: "Chemistry Test - 3",
      price: "Premium",
      benefits: [
        "Available Till: 31 July 2025 ",
        "90 Questions",
        "180 minutes",
        "300 marks",
      ],
    },
    {
      name: "Math Test - 1",
      price: "Premium",
      benefits: [
        "Available Till: 31 July 2025 ",
        "90 Questions",
        "180 minutes",
        "300 marks",
      ],
    },
    {
      name: "Math Test - 2",
      price: "Premium",
      benefits: [
        "Available Till: 31 July 2025 ",
        "90 Questions",
        "180 minutes",
        "300 marks",
      ],
    },
    {
      name: "Math Test - 2",
      price: "Premium",
      benefits: [
        "Available Till: 31 July 2025 ",
        "90 Questions",
        "180 minutes",
        "300 marks",
      ],
    },
    {
      name: "Math Test - 3",
      price: "Premium",
      benefits: [
        "Available Till: 31 July 2025 ",
        "90 Questions",
        "180 minutes",
        "300 marks",
      ],
    },
  ];
  const notes_DATA = {
    chapter_name: "P Block ELements",
    price: "Free",
    notes: "22 pages",
  };

  const dispatch = useDispatch();

  const handleTab = (data) => {
    dispatch(setSelected(data));
  };

  const select = useSelector((store) => store.askQuestion.selected);
  const selected = select !== null ? select : "Video";
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastWord = parts[parts.length - 1].replace(/-/g, " ");
  return (
    <div className="w-full  ">
      <div className="md:w-[70%] w-[95%] mx-auto flex justify-between rounded-xl bg-gray-50 p-2">
        {tabs.map((tab) => (
          <Chip
            text={tab.title}
            selected={selected === tab.title}
            icon={tab.icon}
            key={tab.title}
            updateTab={handleTab}
          />
        ))}
      </div>
      <div className="w-full md:mx-0 mx-auto mt-4">
        {selected === "Video" && (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
            {videoData.map((data, index) => {
              return (
                <div key={index} className=" ">
                  <VideoCard key={index} data={data} time={"58:00"} />
                </div>
              );
            })}
          </div>
        )}
        {selected === "Test" && (
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-2 w-[95%] mx-auto">
            {test_DATA.map((data, index) => {
              return <TestCard key={index} data={data} />;
            })}
          </div>
        )}
        {selected === "Notes" && (
          <div className="w-[95%] md:mx-0 mx-auto">
            <NotesCard data={notes_DATA} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterPage;
