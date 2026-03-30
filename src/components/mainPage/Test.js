"use client";
import useScroll from "@/customHooks/useScroll";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import Arrow from "../common/Arrow";
import TestCard from "../common/TestCard";

const Test = ({ href }) => {
  const { handleScrollLeft, handleScrollRight, scrollContainerRef } =
    useScroll();

  const test_DATA = [
    {
      name: "JEE Main 2024",
      price: "Free",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "Full Mock Test - 1",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Advanced 2024",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "Unit & Dimension Test",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "Unit & Dimension Test",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "Unit & Dimension Test",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "Unit & Dimension Test",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "Unit & Dimension Test",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "Unit & Dimension Test",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "Unit & Dimension Test",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
  ];

  return (
    <div className="relative w-full  ">
      <Link
        href={href}
        className="absolute -top-3 right-16 z-10 bg-primaryDark text-white rounded-md px-1 py-0.5"
      >
        <FaEye />
      </Link>
      <Arrow
        style="absolute -top-3.5 right-8 z-10"
        type="back"
        click={handleScrollLeft}
      />
      <div
        className="flex overflow-x-auto no-scrollbar w-full"
        ref={scrollContainerRef}
      >
        <div className="flex gap-4 pt-8 pb-1">
          {test_DATA.map((data, index) => (
            <TestCard data={data} key={index} width={"w-[18rem]"} />
          ))}
        </div>
      </div>
      <Arrow
        type="forward"
        style="absolute -top-3.5 right-0 z-10"
        click={handleScrollRight}
      />
    </div>
  );
};

export default Test;
