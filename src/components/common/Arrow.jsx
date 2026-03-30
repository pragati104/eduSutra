import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Arrow = ({ type, click, style = "" }) => {
  return (
    <div
      onClick={() => click()}
      className={`border border-gray-200 h-6 w-6 rounded-lg flex items-center cursor-pointer justify-center bg-primaryDark hover:bg-slate-500 active:scale-90 text-white ${style}`}
    >
      <div className="h-5 w-5 flex items-center justify-center rounded-lg shadow-md">
        {type === "forward" ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </div>
    </div>
  );
};

export default Arrow;
