"use client";
import Image from "next/image";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LiaCommentDots } from "react-icons/lia";

const Comment = ({ type }) => {
  const commentsData = [
    {
      src: "/assests/chandvi.jpg",
      name: "Michael Gough",
      commentedOn: "Feb. 8, 2022",
      desc: "Very straight-to-point article. Really worth time reading. Thankyou! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    },
    {
      src: "/assests/chandvi.jpg",
      name: "Michael Gough",
      commentedOn: "Feb. 8, 2022",
      desc: "Very straight-to-point article. Really worth time reading. Thankyou! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    },
    {
      src: "/assests/chandvi.jpg",
      name: "Michael Gough",
      commentedOn: "Feb. 8, 2022",
      desc: "Very straight-to-point article. Really worth time reading. Thankyou! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    },
    {
      src: "/assests/chandvi.jpg",
      name: "Michael Gough",
      commentedOn: "Feb. 8, 2022",
      desc: "Very straight-to-point article. Really worth time reading. Thankyou! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    },
    {
      src: "/assests/chandvi.jpg",
      name: "Michael Gough",
      commentedOn: "Feb. 8, 2022",
      desc: "Very straight-to-point article. Really worth time reading. Thankyou! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    },
    {
      src: "/assests/chandvi.jpg",
      name: "Michael Gough",
      commentedOn: "Feb. 8, 2022",
      desc: "Very straight-to-point article. Really worth time reading. Thankyou! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    },
    {
      src: "/assests/chandvi.jpg",
      name: "Michael Gough",
      commentedOn: "Feb. 8, 2022",
      desc: "Very straight-to-point article. Really worth time reading. Thankyou! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    },
    {
      src: "/assests/chandvi.jpg",
      name: "Michael Gough",
      commentedOn: "Feb. 8, 2022",
      desc: "Very straight-to-point article. Really worth time reading. Thankyou! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    },
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className="bg-primaryDark  antialiased h-[600px] overflow-auto duration-200 "
    >
      <div className="max-w-2xl mx-auto px-4 py-2">
        <form className="mb-6 text-white">
          Your comment on the question
          <div className="py-2 px-4 mb-4  rounded-lg rounded-t-lg border border-gray-200 ">
            <textarea
              id="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white bg-primaryDark"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div className="flex items-center gap-2 my-1 md:text-base text-xs">
            <input
              type="checkbox"
              id="notificationCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="notificationCheckbox"
              className="md:text-sm text-xs"
            >
              Email me (9386407478aaa@gmail.com) if my answer is selected or
              commented on
            </label>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg   hover:bg-blue-800"
          >
            Post comment
          </button>
        </form>

        {commentsData.map((comment, index) => (
          <article
            key={index}
            className="p-3 my-1 text-base bg-primaryLight rounded-lg relative"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <Image
                    className="mr-2   rounded-full"
                    src={comment.src}
                    alt="Michael Gough"
                    width={24}
                    height={24}
                  />
                  {comment.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {comment.commentedOn}
                </p>
              </div>
              <div className=" ">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  bg-primaryDark rounded-lg hover:bg-gray-300"
                  type="button"
                >
                  <BsThreeDotsVertical size={18} />
                </button>
                {/* <!-- Dropdown menu --> */}
                {openDropdownIndex === index && (
                  <div className="absolute z-10 w-fit bg-gray-200 mt-2 right-0 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li
                        onClick={() => setOpenDropdownIndex(null)}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </li>
                      <li
                        onClick={() => setOpenDropdownIndex(null)}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Hide
                      </li>
                      <li
                        onClick={() => setOpenDropdownIndex(null)}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">{comment.desc}</p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center gap-1  text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <LiaCommentDots size={18} />
                Reply
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Comment;
