import Image from "next/image";
import React from "react";

const SuggestedVideosCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="px-1 pb-1 md:h-32 h-32 w-full shadow grid grid-cols-2 gap-2 rounded-lg">
      <div className="relative h-28 my-auto">
        <Image
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails.medium.url}
          fill={true}
        />
      </div>

      <ul>
        <li className="font-bold text-xs py-2">{title}</li>
        <li className="md:text-sm text-[10px]">{channelTitle}</li>
        <li className="md:text-sm text-[10px]">59:00</li>

      </ul>
    </div>
  );
};

export default SuggestedVideosCard;
