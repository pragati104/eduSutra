"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaAngleRight, FaTags } from "react-icons/fa6";

const PaymentPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [coupon, setCoupon] = useState(false);
  const [price, setPrice] = useState({
    Price: "19990",
    Discount: "9995",
    "Coupon for you": "1799",
    Wallet: "1",
    "GST (18%)": "1475",
    "Total Amount": "9670",
  });
  const aboutCourse = [
    " Mode of the Course LIVE + Recordings",
    "No. Of Lectures 740+ LIVE lectures + Recordings",
    " className Recording Provided Yes [HD Quality]",
    "Daily Doubt Sessions",
    "Course Validity 2 Years",
    "Language Used: Hinglish",
    "className starts on 21st August, 2023",
    "className Timings 9pm - 11pm",
  ];
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="w-full">
      <div className="md:w-[90%] w-full mx-auto mt-4">
        <div className="flex md:flex-row flex-col md:gap-6 mx-auto mt-2">
          {/* course details */}
          <div className="flex flex-col md:w-[60%] w-[90%] md:mx-0 mx-auto">
            <div
              className="  bg-white px-3 md:py-2 items-center rounded-md flex shadow-md transform hover:scale-105 transition duration-500 h-fit"
              id="card"
            >
              <div className="w-[50%]">
                <Image
                  className="rounded-md"
                  src="/assests/pay.png"
                  alt="Colors"
                  width={315}
                  height={179}
                />
              </div>
              <div className="my-2.5 ml-2 w-[60%] flex flex-col justify-between items-center">
                <h1 className="text-gray-800 md:text-2xl text-base font-bold cursor-pointer text-center">
                  JEE MAIN 2024 CRASH COURSE
                </h1>
                <div className="flex space-x-1 items-center m-2">
                  <div className="flex md:text-2xl text-lg gap-x-3 font-bold flex-wrap items-center">
                    <span className="text-[#62299C] md:text-xl text-lg">
                      ₹4491
                    </span>
                    <span className="text-gray-700 line-through font-normal md:text-base text-sm decoration-red-600 decoration-2">
                      ₹9980
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full mx-auto">
              <h3 className="font-bold mt-2">Course Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-2">
                {aboutCourse.map((data, ind) => (
                  <div
                    key={ind}
                    className="flex flex-row gap-x-3 items-center shadow-md p-2 rounded-md w-full hover:shadow-green-500/50"
                  >
                    <div className="flex p-4 justify-center items-center rounded-full border border-neutral-8 bg-neutral-9">
                      <Image
                        alt="icon2"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        className="object- min-w-[24px] min-h-[24px]"
                        src="/assests/video_c.svg"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <p className="md:text-base text-sm font-normal">{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* order summary */}
          <div className="md:w-[40%] w-full flex flex-col justify-between items-end">
            <div className="bg-white items-center rounded-md w-[100%] mb-2">
              <div className="bg-white flex flex-col items-center justify-between rounded-md">
                <div className="flex justify-between items-start mx-4 w-full">
                  <div className="w-[90%] mx-auto md:pt-[14px]">
                    <div className="w-full flex my-3 rounded-md shadow-md p-2 md:text-base text-sm bg-white">
                      <input
                        type="text"
                        id="couponInput"
                        placeholder="Enter Coupon code"
                        className="w-[65%] border border-r-0 border-dashed border-sky-500 px-2 py-3 bg-sky-50 rounded-md rounded-r-none font-semibold"
                      />
                      <button className="w-[35%] border border-l-0 border-dashed border-sky-500 bg-sky-50  py-2 pr-1 rounded-md rounded-l-none text-black  font-bold">
                        Apply Coupon
                      </button>
                    </div>
                    <div className="shadow-md rounded-md p-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 my-1 md:text-base text-sm">
                          <div className="flex justify-center items-center pt-2">
                            <label className="container flex justify-start gap-2 items-center md:text-lg text-base font-semibold">
                              <input
                                value="#Hello"
                                name="couponCode"
                                className="peer cursor-pointer hidden after:opacity-100"
                                id="couponCode"
                                type="checkbox"
                              />
                              <span className="inline-block w-5 h-5 border-2 border-black  rounded-full relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:bg-green-600 after:rounded-full after:opacity-0 peer-checked:after:opacity-100"></span>
                              Use Wallet Balance
                            </label>
                          </div>
                        </div>
                        <div className="flex font-bold gap-1">
                          <Image
                            src="/assests/coin.png"
                            alt="coin"
                            width={20}
                            height={20}
                          />
                          <p>3 = ₹ 1</p>
                        </div>
                      </div>
                      <div className="md:text-sm text-xs">
                        You can use maximum ₹ 100 from your wallet for this
                        purchase.
                      </div>
                    </div>
                    <div
                      onClick={() => setCoupon(!coupon)}
                      className="flex items-center justify-between w-full mt-2 mb-2 cursor-pointer shadow-md rounded-md p-2"
                    >
                      <div className="flex items-center gap-2">
                        <FaTags size={20} />

                        <p className="md:text-lg text-base font-semibold">
                          Apply Coupon
                        </p>
                      </div>
                      <FaAngleRight
                        className={`mr-2 duration-300 transition-all ${
                          coupon && "rotate-90"
                        }`}
                      />
                    </div>
                    {coupon && (
                      <div
                        id="coupon"
                        className="w-full flex items-center gap-4 my-4 pl-2 duration-300 transition-all"
                      >
                        <div className="flex justify-center items-center pt-2">
                          <label className="container">
                            <input
                              value="#Hello"
                              name="couponCode"
                              className="peer cursor-pointer hidden after:opacity-100"
                              id="couponCode"
                              type="checkbox"
                            />
                            <span className="inline-block w-5 h-5 border-2 border-black  rounded-full relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:bg-green-600 after:rounded-full after:opacity-0 peer-checked:after:opacity-100"></span>
                          </label>
                        </div>
                        <p className="text-green-600 rounded-md shadow-md px-2 font-semibold border border-dashed border-green-600">
                          #Hello
                        </p>
                        <p>GET 18% Discount</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-x-auto  my-3 w-[90%] mx-auto shadow-md rounded-md p-2">
                {Object.entries(price).map(([key, value], index) => (
                  <div
                    key={index}
                    className={`flex flex-row justify-between items-center py-2 w-full ${
                      key === "Total Amount" &&
                      "border-t border-black border-double"
                    }`}
                  >
                    <p className="text-base  text-black w-[70%]">{key}</p>
                    <p
                      className={`text-base font-bold w-[30%] flex items-center justify-end ${
                        (key === "Discount" ||
                          key === "Coupon for you" ||
                          key === "Wallet") &&
                        "text-green-500  " // Align text to the end conditionally
                      }`}
                    >
                      {key === "Discount" ||
                      key === "Coupon for you" ||
                      key === "Wallet"
                        ? "- "
                        : null}
                      {"₹ "}
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/p/payment-success"
              className="md:w-[90%] w-[90%] mb-3 mx-auto bg-black rounded-md text-white p-2 flex items-center justify-between font-bold"
            >
              Proceed to Pay{" "}
              <FaArrowCircleRight className="text-white" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
