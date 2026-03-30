"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TeacherSlider({data}) {
   
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", borderRadius: "100%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",borderRadius: "100%" }}
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
      nextArrow: <SampleNextArrow className="rounded-full" />,
      prevArrow: <SamplePrevArrow />
      ,responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    }
  
 
  return (
    <Slider {...settings}>
      {data.map((d, index) => (
        <div key={index} className="bg-white   my-3 text-black rounded-xl">
          <div className="  shadow-md rounded-xl flex flex-col justify-center items-center mr-3">
            <Image
              src={d.src}
              alt={d.name}
              className="rounded-xl"
              width={300}
              height={200}
            />
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-bold">{d.name}</p>
              <p className="items-center">{d.intro}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
