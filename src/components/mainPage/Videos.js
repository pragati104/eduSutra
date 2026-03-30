"use client";
import useScroll from "@/customHooks/useScroll";
import Arrow from "../common/Arrow";
import VideoCard from "../common/VideoCard";

const Videos = () => {
  const { handleScrollLeft, handleScrollRight, scrollContainerRef } =
    useScroll();
  const videoData = [
    { chapter_name: "Some Basic Concepts of Chemistry", src: "", href: "" },
    { chapter_name: "Vector Multiplication Lecture 01", src: "", href: "" },
    { chapter_name: "Some Basic Concepts of Chemistry", src: "", href: "" },
    { chapter_name: "Vector Multiplication Lecture 01", src: "", href: "" },
    { chapter_name: "Some Basic Concepts of Chemistry", src: "", href: "" },
    { chapter_name: "Vector Multiplication Lecture 01", src: "", href: "" },
    { chapter_name: "Surface Chemistry Lecture 01", src: "", href: "" },
    { chapter_name: "Surface Chemistry Lecture 02", src: "", href: "" },
  ];
  return (
    <div className="relative w-full ">
      <Arrow
        style="absolute -top-12 right-8 z-10"
        type="back"
        click={handleScrollLeft}
      />
      <div
        className="flex overflow-x-auto no-scrollbar"
        ref={scrollContainerRef}
      >
        <div className="flex gap-4  pb-1">
          {videoData.map((data, index) => {
            return <VideoCard key={index} data={data} time="56:00" />;
          })}
        </div>
      </div>
      <Arrow
        type="forward"
        style="absolute -top-12 right-0 z-10"
        click={handleScrollRight}
      />
    </div>
  );
};

export default Videos;
