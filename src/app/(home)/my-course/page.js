import courseData from "@/Data/courseData.json";
import CourseCard from "@/components/common/CourseCard";

const Page = () => {
  return (
    <div className="w-full flex justify-center">
      <div className=" -left-5 header header-1 mb-8">
        <h2 className="md:text-2xl text-xs font-bold ribbon ">
          No purchases made yet. Explore courses?
        </h2>
      </div>
      <div className="md:px-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mt-[2%] mx-auto">
        {courseData.map((course, index) => {
          return <CourseCard data={course} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Page;
