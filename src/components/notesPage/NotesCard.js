import { showPdf } from "@/GlobalRedux/Features/notifications";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const NotesCard = ({ data }) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const { chapter_name, price } = data;

  const handleClick = () => {
    if (data.price === "Free") {
      dispatch(showPdf());
    } else {
      // Navigate to another page
      router.push("/myCourses");
    }
  };
  return (
    <div className="relative overflow-hidden md:w-80 w-[100%] md:mx-0 mx-auto shadow-md py-3 px-2 bg-white group rounded-2xl lg:hover:shadow-xl ease-in duration-300  border border-gray-200">
      <div
        className={`${
          price === "Free" ? "bg-green-500" : "bg-red-600"
        } absolute transform text-center text-sm font-normal text-white -right-3 -top-1 w-24 pt-[6px] pb-0.5 pr-2 tracking-wide rounded-lg`}
      >
        {price === "Free" ? "Free" : "Prime"}
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center gap-2 mt-4">
          {/* <GrDocumentPdf size={30} className="w-8 h-8 text-red-500" /> */}
          <Image src="/assests/pdf.png" alt="pdf" width={50} height={50} />
          <p className="text-base font-semibold  text-balance">
            {chapter_name}
          </p>
        </div>

        <div className="h-fit  w-fit mr-0 mx-auto mt-3 shadow-md rounded-md">
          <button
            onClick={handleClick}
            className="w-full px-3  py-0.5 bg-green-200 text-black    rounded-md  md:text-base text-sm "
          >
            {data.price === "Free" ? "Read Now" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
