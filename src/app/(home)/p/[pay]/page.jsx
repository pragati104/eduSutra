"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import payment2 from "@/Data/payment2.json";
import paymentFail from "@/Data/paymentFail.json";

const PaymentSuccessOrFailPage = () => {
  const [type, setType] = useState(false);
  return (
    <>
      {type ? (
        <div className=" min-h-full flex justify-center items-center">
          <div className="bg-white mx-auto flex flex-col justify-center items-center p-8">
            <Lottie animationData={payment2} className="w-1/4" />

            <div className="text-center ">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold">
                Payment Done!
              </h3>
              <p className="font-semibold my-2">
                Transaction ID - efjefbefjkbefjbefjefbj
              </p>
              <p className="text-gray-600 my-2">
                Thank you for completing your secure online payment.
              </p>
              <p>Have a great day!</p>
              <div className="py-10 text-center">
                <a
                  href="/payment.html"
                  className="px-12 bg-[#0A8549] hover:bg-green-500 text-white font-semibold py-3 rounded-md"
                >
                  BACK TO MAIN PAGE
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" min-h-full flex justify-center items-center">
          <div className="bg-white mx-auto flex flex-col justify-center items-center p-8">
            <Lottie animationData={paymentFail} className="w-1/4" />

            <div className="text-center ">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold">
                Payment Failed!
              </h3>
              <p className="font-semibold my-2">
                Transaction ID - efjefbefjkbefjbefjefbj
              </p>
              <p className="text-gray-600 my-2">
                If money is deducted it will come soon or contact bank.
              </p>
              <p>Retry Payment!</p>
              <div className="py-10 text-center">
                <a
                  href="/payment.html"
                  className="px-12 bg-[#0A8549] hover:bg-green-500 text-white font-semibold py-3 rounded-md"
                >
                  {type? "BACK TO MAIN PAGE" :"Retry Payment"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentSuccessOrFailPage;
