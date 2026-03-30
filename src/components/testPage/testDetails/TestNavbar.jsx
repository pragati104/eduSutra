"use client";
import { setLanguage } from "@/GlobalRedux/Features/testSlice";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import Select from "react-select";
import TimeLeft from "./TimeLeft";

const TestNavbar = () => {
  const languages = [
    { label: "हिंदी", value: "Hindi" },
    { label: "English", value: "English" },
  ];

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10800);
  const dispatch = useDispatch();
  const path = usePathname();

  // Check if the URL contains "instructions"
  const isInstructionsPage = path.includes("instructions");

  return (
    <div className="bg-gray-100 flex flex-row md:justify-evenly justify-between items-center h-16 md:px-6 lg:py-3 py-1">
      <div className="md:block hidden h-full w-[15%]">
        <Image src="/assests/Subhams.png" alt="logo" width={150} height={50} />
      </div>
      <div className="md:text-2xl text-lg font-bold md:w-[70%] w-[50%] text-center">
        Unit & Dimension
      </div>
      <div className="md:w-[20%] w-[50%] mx-auto md:text-base text-sm">
        {isInstructionsPage ? (
          <Select
            className="w-full md:py-2 py-1 px-1 rounded-lg"
            name="language"
            id="language"
            defaultValue={languages[1]}
            onChange={(e) => dispatch(setLanguage(e.value))}
            options={languages}
            placeholder="Choose Language"
          />
        ) : (
          <TimeLeft expiryTimestamp={time} />
        )}
      </div>
    </div>
  );
};

export default TestNavbar;
