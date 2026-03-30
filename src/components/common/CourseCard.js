import Image from "next/image";
import { MdOndemandVideo } from "react-icons/md";

import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { FaRegNoteSticky } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { RxPencil2 } from "react-icons/rx";

const CourseCard = ({ data }) => {
  const {
    title,
    imageUrl,
    videoLectures,
    tests,
    studyNotes,
    doubtSupport,
    specialPrice,
    validity,
  } = data;
  const { original, discounted } = specialPrice;
  return (
    <div className="  bg-white px-6 pt-6 pb-4 rounded-xl shadow-lg " id="card">
      <h3 className="mb-2 md:text-lg text-base font-bold text-indigo-600">
        Special offer
      </h3>
      <div className="relative">
        <Image
          src={imageUrl}
          width={336}
          height={80}
          alt="img"
          className="w-full rounded-lg"
        />
        <p className="absolute top-0 right-0 text-white  discount-ribbon">
          60% off
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 md:text-xl text-base font-bold cursor-pointer md:h-14">
        {title}
      </h1>
      <div className="mt-2">
        <div className="flex space-x-1 items-center my-1.5 pr-3 rounded-full font-medium text-gray-800 w-fit">
          <span>
            <MdOndemandVideo className="text-indigo-600 w-5  h-5" />
          </span>
          <p className="font-semibold md:text-base text-sm pb-1">
            {videoLectures}+{" "}
            <span className="md:text-base text-sm">Video Lectures</span>
          </p>
        </div>
        <div className="flex space-x-1 items-center mb-1.5">
          <span>
            <RxPencil2 className="text-indigo-600  w-5  h-5 " />
          </span>
          <p className="font-semibold md:text-base text-sm pb-1">
            360+ <span className=">md:text-base text-sm">Tests</span>
          </p>
        </div>
        <div className="flex space-x-1 items-center mb-1.5">
          <span>
            <FaRegNoteSticky className="text-indigo-600 w-5  h-5" />
          </span>
          <p className="font-semibold md:text-base text-sm pb-1">
            90+ <span className="md:text-base text-sm">Study Notes</span>
          </p>
        </div>
        <div className="flex space-x-1 items-center mb-1.5">
          <span>
            <BiSupport className="text-indigo-600 w-5  h-5" />
          </span>
          <p className="font-semibold md:text-base text-sm pb-1">
            24x7 <span className="md:text-base text-sm">Doubt Support</span>
          </p>
        </div>
        <div className="flex space-x-1 items-center mb-1.5">
          <span>
            <MdCurrencyRupee className="text-indigo-600 w-6  h-6" />
          </span>
          <div className="flex md:text-base text-sm gap-x-3   font-semibold flex-wrap items-center">
            <span className="text-[#62299C] md:text-lg text-base">4491</span>
            <span className="text-[#81868F] line-through md:text-sm text-xs decoration-red-600">
              ₹9980
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            className="mt-4 w-[50%] md:text-base text-sm text-white bg-primaryLight py-2 rounded-xl text-center shadow-lg font-medium"
            href="/explore-course"
          >
            Explore
          </Link>
          <Link
            href="/order-summary"
            className="mt-4 w-[50%] md:text-base text-sm text-white font-semibold bg-green-500 py-2 rounded-xl text-center shadow-lg"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
