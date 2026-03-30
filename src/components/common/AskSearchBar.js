import { setSelected } from "@/GlobalRedux/Features/askQuestionData";
import { showResults } from "@/GlobalRedux/Features/searchResults";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { LuCamera } from "react-icons/lu";
import { useDispatch } from "react-redux";

const AskSearchBar = () => {
  const resultsData = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Lyon", "Marseille"],
      likes: 102,
      views: 503,
      subject: "Geography",
    },
    {
      question: "Who wrote 'Hamlet'?",
      answers: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
      likes: 231,
      views: 732,
      subject: "Literature",
    },
    {
      question: "What is the powerhouse of the cell?",
      answers: ["Mitochondria", "Nucleus", "Endoplasmic reticulum"],
      likes: 180,
      views: 601,
      subject: "Biology",
    },
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Lyon", "Marseille"],
      likes: 102,
      views: 503,
      subject: "Geography",
    },
    {
      question: "Who wrote 'Hamlet'?",
      answers: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
      likes: 231,
      views: 732,
      subject: "Literature",
    },
    {
      question: "What is the powerhouse of the cell?",
      answers: ["Mitochondria", "Nucleus", "Endoplasmic reticulum"],
      likes: 180,
      views: 601,
      subject: "Biology",
    },
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Lyon", "Marseille"],
      likes: 102,
      views: 503,
      subject: "Geography",
    },
    {
      question: "Who wrote 'Hamlet'?",
      answers: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
      likes: 231,
      views: 732,
      subject: "Literature",
    },
    {
      question: "What is the powerhouse of the cell?",
      answers: ["Mitochondria", "Nucleus", "Endoplasmic reticulum"],
      likes: 180,
      views: 601,
      subject: "Biology",
    },
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Lyon", "Marseille"],
      likes: 102,
      views: 503,
      subject: "Geography",
    },
    {
      question: "Who wrote 'Hamlet'?",
      answers: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
      likes: 231,
      views: 732,
      subject: "Literature",
    },
    {
      question: "What is the powerhouse of the cell?",
      answers: ["Mitochondria", "Nucleus", "Endoplasmic reticulum"],
      likes: 180,
      views: 601,
      subject: "Biology",
    },
  ];

  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(showResults({ searchText, resultsData }));
  };

  const handle = (data) => {
    dispatch(setSelected(data));
    dispatch(showResults({ searchText: "", resultsData: null }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto rounded-lg overflow-hidden w-full bg-gradient-to-r from-primaryLight to-primaryDark"
    >
      <div className="md:flex">
        <div className="w-full p-0.5">
          <div className="relative">
            <AiOutlineSearch
              onClick={handleSubmit}
              className="text-gray-400 top-5 left-4 absolute font-bold cursor-pointer"
              size={20}
            />
            <input
              type="text"
              className="bg-white h-14 w-full pl-12 pr-24 rounded-lg focus:outline-none hover:cursor-pointer"
              name=""
              placeholder="type your question here..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <span className="absolute top-4 right-5 border-l pl-4">
              <HiOutlineMicrophone
                className="text-gray-500 hover:text-green-500 hover:cursor-pointer"
                size={20}
                onClick={() => handle("Voice")}
              />
            </span>
            <span className="absolute top-4 right-12 border-l pl-4">
              <LuCamera
                className="text-gray-500 hover:text-green-500 hover:cursor-pointer"
                size={20}
                onClick={() => handle("Scan")}
              />
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AskSearchBar;
