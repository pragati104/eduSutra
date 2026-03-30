import React from "react";
import TestCard from "../common/TestCard";

const FullTest = () => {
  
  const test_DATA = [
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
    {
      name: "JEE Main 2024 Test - 5",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 6",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 1",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 1",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 1",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 1",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
  ];
  return (
    <div className="grid  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2  grid-cols-1   gap-4 pt-6 mx-auto">
      {test_DATA.map((data, index) => {
        return <TestCard key={index} data={data} width="w-[21rem]" />;
      })}
    </div>
  );
};

export default FullTest;
