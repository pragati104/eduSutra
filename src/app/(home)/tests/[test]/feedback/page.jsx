"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FeedbackPanel = () => {
  const [selectedRating, setSelectedRating] = useState("");

  const handleRatingClick = (title) => {
    if (title) {
      setSelectedRating(title);
    }
  };

  console.log(`Sending review: ${selectedRating}`);

  const handleSendReview = () => {
    // Replace with your desired functionality (e.g., sending data to a server)
  };

  const feedbackData = [
    { title: "Angry", src: "/assests/angry.svg" },
    { title: "Sad", src: "/assests/sad.svg" },
    { title: "Neutral", src: "/assests/neutral.svg" },
    { title: "Satisfied", src: "/assests/smile.svg" },
    { title: "Awesome", src: "/assests/awesome.svg" },
  ];
  const whatYouLike = [
    "Overall Experience",
    "Test Experience",
    "Analysis and Reports",
    "Competition and Leaderboards",
    "Graphical representations",
    "Personalized study recommendations",
  ];

  return (
    <div className="  bg-white shadow-xl rounded-lg text-center font-sans text-sm p-6 pt-0 md:w-[60%] w-full m-auto">
      <strong className="block mb-3 text-3xl">Rate your experience ?</strong>
      <div className="flex flex-row flex-wrap gap-4 mb-2 items-center justify-center">
        {feedbackData.map((data, i) => {
          return (
            <div key={i} className="flex flex-col items-center">
              <div className="rating cursor-pointer p-2 rounded-xl hover:shadow-md w-24 h-24 flex items-center justify-center">
                <Image
                  onClick={() => handleRatingClick(data.title)}
                  src={data.src}
                  alt={data.title}
                  width={90} // setting a fixed width
                  height={90} // setting a fixed height
                  className={`object-cover rounded-2xl p-2 shadow-md   ${
                    selectedRating === data.title
                      ? "shadow-green-500 bg-green-200"
                      : "shadow-blue-200"
                  }`} // ensuring the image covers the given size
                />
              </div>
              <small className="mt-2 text-center">{data.title}</small>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="p-1 text-start font-bold text-lg">
          What did you like ?
        </h2>
        {whatYouLike.map((like, index) => {
          return (
            <div
              className="p-2 rounded-md flex justify-between border-b text-gray-600"
              key={index}
            >
              <div>{like}</div>
              <div>
                <label
                  class="relative flex items-center p-0.5 rounded-full cursor-pointer"
                  htmlFor="check"
                >
                  <input
                    type="checkbox"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="check"
                  />
                  <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="p-1 text-start my-1 font-bold">
        Your Comments (optional)
      </h2>
      <textarea
        id="message"
        rows="4"
        class=" px-2.5 py-1 w-[100%] mx-auto mb-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   "
        placeholder="Describe your experience here..."
      ></textarea>

      <Link
        href={"/tests/1/result"}
        className="btn bg-gray-900 text-white rounded-lg py-2 px-6 w-[70%] mx-auto focus:outline-none"
        onClick={handleSendReview}
      >
        Submit Review
      </Link>
    </div>
  );
};

export default FeedbackPanel;
