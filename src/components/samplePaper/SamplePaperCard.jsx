import { showPdf } from "@/GlobalRedux/Features/notifications";
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
const SamplePaperCard = ({ title }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative cursor-pointer overflow-hidden   md:mx-0 mx-auto shadow-md py-2 px-2 bg-white group rounded-2xl lg:hover:shadow-xl ease-in duration-300  border border-gray-200">
      <div
        onClick={() => dispatch(showPdf())}
        className="flex   justify-between items-center h-full"
      >
        <div className="flex items-center gap-2 ">
          {/* <GrDocumentPdf size={30} className="w-8 h-8 text-red-500" /> */}
          <Image src="/assests/pdf.png" alt="pdf" width={50} height={50} />
          <p className="md:text-base text-sm font-semibold  ">{title}</p>
        </div>

        <FaAngleRight size={20} />
      </div>
    </div>
  );
};

export default SamplePaperCard;
