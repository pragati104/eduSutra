"use client";
import SearchResultsCard from "@/components/watchPage/SearchResultsCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const QuestionAnswerPage = () => {
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
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastWord = parts[parts.length - 1];
 
  return (
    <div className="w-full">
      <div className="overflow-y-auto no-scrollbar w-full mx-auto">
        <div className="flex flex-col gap-2 mx-auto h-[700px] md:w-[70%] w-[95%]">
          {resultsData.map((data, index) => {
            return (
              <div className="my-2" key={index}>
                <Link href={`/${index}/what-is-blockchain`}>
                  <SearchResultsCard />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswerPage;
