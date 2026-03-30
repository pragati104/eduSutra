import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBackspace } from "react-icons/fa";

const KeyPad = ({ setInputText }) => {
  const { type } = useSelector((store) => store.test);
  const numericalData = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "3",
    "2",
    "1",
    "0",
    ".",
    "=",
    "DEL",
    "CE",
  ];
  const digitData = ["7", "8", "9", "4", "5", "6", "3", "2", "1", "0","DEL",
  "CE",];

 

  const handleClick = (each) => {
    if(each === "DEL") {
      setInputText((prev) => prev.slice(0, -1));
    } else if (each === "CE") {
      setInputText("");
    } else {
      setInputText((prev) => prev + each);
    }
  }
  
  return (
    <div className="bg-gray-100 w-fit grid grid-cols-4 p-2 rounded-md">
      {type === "numerical value" ? (
        <>
          {numericalData.map((each, i) => {
            return (
              <div
              onClick={ () => handleClick(each)}
                className="bg-white hover:bg-gray-100 active:scale-90 cursor-pointer p-4 shadow-md rounded-md m-1 text-xl"
                key={i}
              >
                {each}
              </div>
            );
          })}
        </>
      ) : (
        digitData.map((each, i) => {
          return (
            <div
              onClick={ () => handleClick(each)}
              className="bg-white hover:bg-gray-100 active:scale-90 cursor-pointer p-4 shadow-md rounded-md m-1 text-xl"
              key={i}
            >
              {each}
            </div>
          );
        })
      )}
    </div>
  );
};

export default KeyPad
