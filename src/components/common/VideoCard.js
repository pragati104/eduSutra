import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ data, time }) => {
  const { chapter_name } = data;
  return (
    <Link href="/v/586">
      <div className="relative flex flex-col justify-center items-center md:w-[18rem] w-[20rem] mx-auto cursor-pointer">
        <div
          style={{
            backgroundImage:
              "url(https://dk7h1f5gq849l.cloudfront.net/videos/thumbnails/1680596665-um06.png)",
          }}
          className="bg-gray-300 h-48 w-full rounded-lg shadow-md bg-contain bg-center"
        >
          <p className="text-gray-50 float-right p-1 px-2 ml-1 bg-gray-950 rounded-y-lg rounded-b-lg rounded-r-lg  text-sm  ">
            {time}
          </p>
        </div>
        <Image
          alt="play"
          src="/assests/play.png"
          width={70}
          height={70}
          // layout="responsive"
          className="absolute mb-16 opacity-45"
        />
        <div className="w-[17rem] md:w-[16rem] bg-white md:-mt-8 -mt-6 shadow-lg rounded-md overflow-hidden ">
          <div className="py-2 text-center font-bold  text-black md:text-base text-sm">
            {chapter_name}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
