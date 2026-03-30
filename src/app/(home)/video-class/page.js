"use client";
import SearchBar from "@/components/common/SearchBar";
import VideoClass from "@/components/common/VideoClass";

const videoClassPage = () => {
  return (
    <div className="w-full   ">
      <div className="md:w-[25%] w-[90%] mx-auto  rounded-lg px-2 md:absolute right-0 z-0">
        <SearchBar />
      </div>
      <div className="w-full mx-auto ">
        <VideoClass />
      </div>
    </div>
  );
};

export default videoClassPage;
