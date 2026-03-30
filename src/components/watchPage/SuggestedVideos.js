import React from "react";
import useHomeVideo from "@/customHooks/useHomeVideo";
import SuggestedVideosCard from "./SuggestedVideosCard";
import Link from "next/link";

const SuggestedVideos = () => {
  const suggestedVideos = useHomeVideo();

  return (
    <div className="w-full mx-auto  ">
      {suggestedVideos.map((video) => {
        return (
          <Link key={video.id} href={`/watch?v=${video.id}`}>
            <div className="mb-3">
              <SuggestedVideosCard info={video} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SuggestedVideos;
