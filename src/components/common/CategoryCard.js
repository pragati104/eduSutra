import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ data }) => {
  const { title, src, href } = data;
  return (
    <Link href={href}>
      <div className="relative h-28 md:w-40 w-28  rounded-xl flex flex-col justify-center duration-300">
       {title === "Live Class" && <span className="absolute md:left-28 left-24 top-2 flex items-center justify-center h-2 w-2  ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-800 "></span>
          <span className="relative inline-flex rounded-full h-1 w-1 bg-red-700"></span>
        </span>}
        <Image
          src={src}
          alt={title}
          width={70}
          height={20}
          className="mx-auto bg-white shadow p-2 border rounded-xl mt-1 hover:shadow-xl"
        />
        <span className="mt-2 text-sm leading-5 font-semibold text-center">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
