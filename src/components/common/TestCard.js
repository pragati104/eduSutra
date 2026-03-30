import Link from "next/link";
import { FaRegCheckCircle, FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";

const TestCard = ({ data, width, liveTest }) => {
  const benefitData = [
    { Icon: FaRegQuestionCircle, size: 20 },
    { Icon: MdOutlineWatchLater, size: 20 },
    { Icon: FaRegCheckCircle, size: 20 },
  ];
  const replaceSpace = data.name.replace(/ /g, "-");
  return (
    <div
      className={`relative overflow-hidden md:w-[15rem]  ${width}  mx-auto shadow-lg p-3 pt-2 bg-white group h-full rounded-2xl lg:hover:-translate-y-3 ease-in duration-300 border   border-gray-200`}
    >
      <div className="flex justify-between items-center mb-1">
        {liveTest && (
          <div className=" flex items-center justify-center gap-1 px-2 py-[1px] bg-[#f44a59] text-white text-xs lg:text-sm rounded-md">
            {liveTest ? (
              <>
                <span className="relative flex items-center justify-center h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1 w-1 bg-white"></span>
                </span>
                <p>Live</p>
              </>
            ) : (
              <>
                <p>Live</p>
                <span>
                  <HiOutlineStatusOnline />
                </span>{" "}
              </>
            )}
          </div>
        )}
        <div
          className={`${
            data.price === "Free"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-600"
          } place-self-end transform text-center text-sm font-semibold   px-1 py-0.5 tracking-wide  rounded-lg   `}
        >
          {data.price === "Free" ? "Free" : "Prime"}
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <span className=" text-lg font-bold">{data.name}</span>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div>
          {data.benefits.map((benefit, index) => {
            const { Icon, size } = benefitData[index] || {};
            return (
              <div
                key={index}
                className="flex flex-row gap-2.5  items-start mt-2 text-left text-sm"
              >
                <div className="shrink-0">
                  {Icon && <Icon size={size} />}{" "}
                  {/* Check if Icon exists before rendering */}
                </div>
                <span>{benefit}</span>
              </div>
            );
          })}
        </div>

        <div className="h-fit">
          <Link
            href={`/test/instructions`}
            className={`w-full md:px-2 px-4 md:py-1 py-2  ${
              data.price === "Free"
                ? "text-green-700 group-hover:text-white group-hover:bg-green-500 bg-green-100"
                : "text-[#EA141F] group-hover:text-white group-hover:bg-red-600 bg-red-50"
            }   rounded-xl mt-3 font-semibold md:text-base text-sm`}
          >
            {data.price === "Free" ? "Start Test" : "Buy Now"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
