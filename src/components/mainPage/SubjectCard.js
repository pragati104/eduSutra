import Lottie from "lottie-react";

const SubjectCard = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center md:w-[18rem] w-[20rem] mx-auto ">
      <div className="bg-pink-100 h-48 w-[95%] rounded-lg shadow-md items-center mx-auto">
        <Lottie animationData={data.ani} className="w-full mx-auto h-40" />
      </div>
      <div className="w-[16rem] md:w-[15rem] bg-white -mt-6 shadow-lg rounded-lg overflow-hidden">
        <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
          {data.title}
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
