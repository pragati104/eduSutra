import React from "react";
import ImageAsk from "./ImageAsk";
import { useSelector } from "react-redux";
import SearchResultsCard from "@/components/watchPage/SearchResultsCard";

const ScanAsk = () => {
  const { isResults, resultsData, searchText } = useSelector(
    (store) => store.searchResults
  );
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col justify-center items-center w-full mx-auto gap-4">
        <div className=" w-full">
          <ImageAsk />
        </div>
      </div>
      {(isResults || searchText) && (
        <div className="overflow-y-auto no-scrollbar w-full mx-auto">
          <div className="flex flex-col gap-2 mx-auto h-[500px] ">
            {resultsData.map((data, index) => {
              return (
                <div className="my-2" key={index}>
                  <SearchResultsCard />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanAsk;
