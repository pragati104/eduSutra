"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";


const Review = ({ data }) => {
    const starsArray = Array.from({ length: 5 });
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "green",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
  };
  return (
    <Slider {...settings}>
      {data.map((d, index) => (
        <div key={index} className="bg-white my-3 text-black rounded-xl">
          <div className=" p-4 shadow-md rounded-xl flex flex-col justify-center items-center mr-3">
            <div className="">
            <div className="flex gap-1 items-center">
                    <p className="text-black font-bold md:text-base text-sm">
                      4.9
                    </p>
                    {starsArray.map((_, index) => (
                      <FaStar size={20} key={index} className="text-yellow-500" />
                    ))}
                  </div>
              <p className="  font-bold text-[#62299C] lg:text-2xl md:text-xl text-base">
                {d.feedback}
              </p>

              <p className="mt-4 leading-relaxed text-gray-700">{d.desc}</p>
            </div>
            <div className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 flex justify-start gap-4 w-full items-center">
              <Image
                src={d.src}
                alt={d.name}
                className="rounded-full"
                width={44}
                height={44}
              />
              <div>
                <p>{d.name}</p>
                <span className="text-[10px]">{d.rank}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Review;
