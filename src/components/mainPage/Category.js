"use client";

import useScroll from "@/customHooks/useScroll";
import Arrow from "../common/Arrow";
import CategoryCard from "../common/CategoryCard";

const Category = () => {
  const { handleScrollLeft, handleScrollRight, scrollContainerRef } =
    useScroll();
  const categoryData = [
    { title: "Test", src: "/assests/et.png", href: "/tests" },
    { title: "Live Class", src: "/assests/la.png", href: "/live-class" },
    { title: "Video Lecture", src: "/assests/vc.png", href: "/video-class" },
    { title: "Notes", src: "/assests/nt.png", href: "/notes" },
    { title: "Play Quiz", src: "/assests/ql.png", href: "/quiz" },
    { title: "Ask Doubt", src: "/assests/rlq.png", href: "/ask-doubts" },
    {
      title: "Recent Questions",
      src: "/assests/qta.png",
      href: "qa/recent-questions",
    },
    {
      title: "Answer",
      src: "/assests/uab.png",
      href: "qa/unanswered",
    },
    { title: "Sample papers", src: "/assests/spb.png", href: "/sample-paper" },
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
        <div className="flex gap-2 ">
          {categoryData.map((category, index) => {
            return <CategoryCard data={category} key={index} />;
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

export default Category;
