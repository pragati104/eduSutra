import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { HiReceiptPercent } from "react-icons/hi2";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";


const BuyNowCard = () => {
  const buyNowCardData = {
    src: "https://dk7h1f5gq849l.cloudfront.net/subscription_photos/1677324742.JEECC01.png",
    price: " ₹9980",
    discount_price: "₹4491",
    benefits: [
      "600+ hours On-Demand Video",
      "500+ Tests",
      "Lectures by top Faculties",
      "Revision Notes",
      "24x7 Doubt Assistance",
    ],
    href: "/payment",
    validity: [
      { time: "12", price: "2995" },
      { time: "6", price: "1500" },
      { time: "3", price: "750" },
    ],
  };
  return (
    <div
      id="sidebar"
      className="lg:w-[30%] md:fixed md:top-[13%] top-48 md:right-[1.5rem]"
    >
      <div className="md:mb-[70px] rounded-2xl p-4 sm:p-4 min-h-[400px] max-w-[423px] mx-auto lg:translate-y-0 translate-y-10 flex flex-col gap-4 bg-white/30 border-gray-300 border shadow-md hover:shadow-green-500/50 backdrop-blur-md">
        <Image
          alt="course image"
          loading="lazy"
          width="400"
          height="180"
          className="rounded-2xl overflow-hidden object-cover bg-transparent"
          src={buyNowCardData.src}
        />
        <div className="flex flex-col gap-y-4 mt-4">
          <div className="flex justify-between  gap-x-3 font-semibold flex-wrap items-center">
            <div className="flex gap-x-3 items-center">
              <span className="text-[#0A8549] lg:text-2xl md:text-xl text-xl">
                {buyNowCardData.discount_price}
              </span>
              <span className="text-red-600 line-through lg:text-xl md:text-lg text-sm decoration-black">
                {buyNowCardData.price}
              </span>
            </div>
            <p className="md:text-base text-sm rounded-md shadow-md hover:shadow-xl p-1 bg-gray-200/10">
              Valid till : 31 May 2025
            </p>
          </div>
          <div className="text-black">
            <div className="flex flex-col gap-3">
              <div class="flex flex-col space-y-4 ">
                {buyNowCardData.validity.map((each, id) => (
                  <label
                    key={id}
                    class="relative flex   items-center cursor-pointer rounded-md shadow-md p-2"
                  >
                    <input
                      class="sr-only peer"
                      name="futuristic-radio"
                      type="radio"
                    />
                    <div class="w-6 h-6 bg-transparent border-2 border-black rounded-full peer-checked:bg-green-500 peer-checked:border-green-500    peer-checked:shadow-lg   transition duration-300 ease-in-out flex items-center justify-center"><IoIosCheckmark className="text-white w-6 h-6" />
</div>
                    <div className="w-[80%] flex justify-between items-center">
                      <span class="ml-2 text-black font-bold">{each.time} months</span>
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-green-500 font-medium">₹{each.price}</p>
                        <p className="md:text-sm text-xs">₹{Math.floor(each.price / each.time)}/month</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 self-stretch flex-row sm:items-start">
            <Link
              className="w-full flex items-center text-center px-2 py-3 rounded-lg text-white md:text-base text-sm h-auto bg-violet-600 hover:bg-violet-700 font-medium"
              href="/redeem-coupon"
            >
              <HiReceiptPercent size={20} />
              Redeem Coupon
            </Link>
            <Link
              className="w-full flex items-center justify-center gap-1 text-center px-2 py-3 rounded-lg text-white md:text-base text-sm h-auto bg-[#0A8549] hover:bg-green-700 font-medium"
              href="/order-summary"
            >
              Buy Now <FaArrowCircleRight className="text-white" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowCard;
