import React from "react";
import AskSearchBar from "../common/AskSearchBar";
import { useSelector } from "react-redux";
import SearchResultsCard from "@/components/watchPage/SearchResultsCard";
import Link from "next/link";

const TextAsk = () => {
  const { isResults, resultsData, searchText } = useSelector(
    (store) => store.searchResults
  );

  return (
    <div className="grid grid-cols-1 mx-auto">
      <div className="flex flex-col justify-center items-center w-full gap-4 ">
        <div className="w-full">
          <AskSearchBar />
        </div>
      </div>
      {(isResults || searchText) && (
        <div className="overflow-y-auto no-scrollbar w-full mx-auto">
          <div className="flex flex-col gap-2 mx-auto h-[500px] ">
            {resultsData.map((data, index) => {
              return (
                <div className="my-2" key={index}>
                <Link href={`/${index}/what-is-blockchain`}>
                  <SearchResultsCard />
                </Link>
              </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextAsk;
