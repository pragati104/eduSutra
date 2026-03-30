"use client";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import UpcomingClassCard from "./UpcomingClassCard";

const UpComingSlider = ({ data, number }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(number);
    }
  }, [number]);

  //   function SampleNextArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{
  //           ...style,
  //           display: "block",
  //           background: "green",
  //           borderRadius: "100%",
  //         }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  //   function SamplePrevArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{
  //           ...style,
  //           display: "block",
  //           background: "red",
  //           borderRadius: "100%",
  //         }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {[...Array(7)].map((_, slideIndex) => (
          <div key={slideIndex} className="w-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-4">
              {data.map((data, index) => (
                <div key={index}>
                  <UpcomingClassCard data={data} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UpComingSlider;
