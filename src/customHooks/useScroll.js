import React, { useRef } from "react";

const useScroll = () => {
  const scrollContainerRef = useRef(null);
  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -200, // Adjust as needed
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    // console.log("right");
    scrollContainerRef.current?.scrollBy({
      left: 200, // Adjust as needed
      behavior: "smooth",
    });
  };
  return { handleScrollLeft, handleScrollRight, scrollContainerRef };
};

export default useScroll;
