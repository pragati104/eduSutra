"use client";
import useScroll from "@/customHooks/useScroll";
import bio from "@/Data/biology.json";
import botany from "@/Data/botany.json";
import business from "@/Data/business.json";
import chemistryLottie from "@/Data/chemistry.json";
import mathsLottie from "@/Data/maths.json";
import phy from "@/Data/phy.json";
import zoology from "@/Data/zoology.json";
import Link from "next/link";
import Arrow from "../common/Arrow";
import SubjectCard from "./SubjectCard";

const Subject = () => {
  const { handleScrollLeft, handleScrollRight, scrollContainerRef } =
    useScroll();
  const subjectData = [
    { title: "physics", ani: phy },
    { title: "chemistry", ani: chemistryLottie },
    { title: "maths", ani: mathsLottie },
    { title: "biology", ani: bio },
    { title: "botany", ani: botany },
    { title: "zoology", ani: zoology },
    { title: "Business Studies", ani: business },
  ];
  return (
    <div className="relative w-full ">
      <Arrow
        style="absolute -top-12 right-8 z-10"
        type="back"
        click={handleScrollLeft}
      />
      <div
        className="flex justify-evenly overflow-x-auto no-scrollbar py-1"
        ref={scrollContainerRef}
      >
        {subjectData.map((data, index) => (
          <Link key={index} href={`/s/${data.title}`}>
            <SubjectCard data={data} />
          </Link>
        ))}
      </div>

      <Arrow
        type="forward"
        style="absolute -top-12 right-0 z-10"
        click={handleScrollRight}
      />
    </div>
  );
};

export default Subject;
