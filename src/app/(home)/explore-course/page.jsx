"use client";
import AboutCourse from "@/components/exploreCourse/AboutCourse";
import BuyNowCard from "@/components/exploreCourse/BuyNowCard";
import Review from "@/components/exploreCourse/Review";
import TeacherSlider from "@/components/exploreCourse/teacherSlider";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const ExploreCoursePage = () => {
  const starsArray = Array.from({ length: 5 });
  const reviewData = [
    {
      name: "Sachi Kumari",
      src: "/assests/chandvi.jpg",
      rank: "99% CBSE XII",
      feedback: "Best Neet Course",
      desc: "The LIVE Interactive classNamees with visual explanations helped me learn and retain all the topics better.",
      rating: "",
    },
    {
      name: "Sachi Kumari",
      src: "/assests/chandvi.jpg",
      rank: "99% CBSE XII",
      feedback: "Best Neet Course",
      desc: "The LIVE Interactive classNamees with visual explanations helped me learn and retain all the topics better.",
      rating: "",
    },
    {
      name: "Sachi Kumari",
      src: "/assests/chandvi.jpg",
      rank: "99% CBSE XII",
      feedback: "Best Neet Course",
      desc: "The LIVE Interactive classNamees with visual explanations helped me learn and retain all the topics better.",
      rating: "",
    },
    {
      name: "Sachi Kumari",
      src: "/assests/chandvi.jpg",
      rank: "99% CBSE XII",
      feedback: "Best Neet Course",
      desc: "The LIVE Interactive classNamees with visual explanations helped me learn and retain all the topics better.",
      rating: "",
    },
    {
      name: "Sachi Kumari",
      src: "/assests/chandvi.jpg",
      rank: "99% CBSE XII",
      feedback: "Best Neet Course",
      desc: "The LIVE Interactive classNamees with visual explanations helped me learn and retain all the topics better.",
      rating: "",
    },
    {
      name: "Sachi Kumari",
      src: "/assests/chandvi.jpg",
      rank: "99% CBSE XII",
      feedback: "Best Neet Course",
      desc: "The LIVE Interactive classNamees with visual explanations helped me learn and retain all the topics better.",
      rating: "",
    },
  ];
  const teacherData = [
    {
      name: "Pragati Kumari",
      src: "/assests/teacher.webp",
      intro: "Physics Expert - Founder - Resonance",
      desc: "Pragati is a <strong>Software Engineer</strong> and a Youtuber, primarily known for his Coding and Software Engineering skills.",
    },
    {
      name: "Subham Kumar",
      src: "/assests/teacher.webp",
      intro: "Physics Expert - Founder - Resonance",
      desc: "Pragati is a <strong>Software Engineer</strong> and a Youtuber, primarily known for his Coding and Software Engineering skills.",
    },
    {
      name: "Abhi Kumar",
      src: "/assests/teacher.webp",
      intro: "Physics Expert - Founder - Resonance",
      desc: "Pragati is a <strong>Software Engineer</strong> and a Youtuber, primarily known for his Coding and Software Engineering skills.",
    },
    {
      name: "Kabhi Kumar",
      src: "/assests/teacher.webp",
      intro: "Physics Expert - Founder - Resonance",
      desc: "Pragati is a <strong>Software Engineer</strong> and a Youtuber, primarily known for his Coding and Software Engineering skills.",
    },
    {
      name: "Abhi Kumar",
      src: "/assests/teacher.webp",
      intro: "Physics Expert - Founder - Resonance",
      desc: "Pragati is a <strong>Software Engineer</strong> and a Youtuber, primarily known for his Coding and Software Engineering skills.",
    },
    {
      name: "Kabhi Kumar",
      src: "/assests/teacher.webp",
      intro: "Physics Expert - Founder - Resonance",
      desc: "Pragati is a <strong>Software Engineer</strong> and a Youtuber, primarily known for his Coding and Software Engineering skills.",
    },
  ];

  const courseSyllabus = [
    {
      title: "Physics",
      src: "/assests/p.png",
      benefits: [
        { title: " 150+ Lectures", src: "/assests/coach-live-icon.svg" },
        { title: "Chapter notes", src: "/assests/coach-note-icon.svg" },
        { title: "100+ Tests", src: "/assests/coach-live-icon.svg" },
      ],
    },
    {
      title: "Chemistry",
      src: "/assests/che.png",
      benefits: [
        { title: " 150+ Lectures", src: "/assests/coach-live-icon.svg" },
        { title: "Chapter notes", src: "/assests/coach-note-icon.svg" },
        { title: "100+ Tests", src: "/assests/coach-live-icon.svg" },
      ],
    },
    {
      title: "Maths",
      src: "/assests/m.png",
      benefits: [
        { title: " 150+ Lectures", src: "/assests/coach-live-icon.svg" },
        { title: "Chapter notes", src: "/assests/coach-note-icon.svg" },
        { title: "100+ Tests", src: "/assests/coach-live-icon.svg" },
      ],
    },
  ];

  const faqData = [
    {
      question: "What subjects do you offer courses in?",
      answer:
        "We offer courses in a wide range of subjects including mathematics, science, languages, history, and more. You can explore our course catalog to see the full list.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "To enroll in a course, simply browse our catalog, select the course you're interested in, and click on the 'Enroll' button. Follow the prompts to complete the enrollment process.",
    },
    {
      question: "Are your courses self-paced?",
      answer:
        "Yes, most of our courses are self-paced, allowing you to study at your own convenience. However, some courses may have specific start and end dates, so be sure to check the course details before enrolling.",
    },
    {
      question: "Do you offer certificates upon course completion?",
      answer:
        "Yes, we provide certificates of completion for many of our courses. Once you successfully finish a course, you'll be able to download your certificate from your account dashboard.",
    },
    {
      question: "Can I access course materials offline?",
      answer:
        "Currently, our platform primarily operates online, and you'll need an internet connection to access course materials. However, you can often download lecture notes, slides, and other resources for offline viewing.",
    },
  ];
  const [isOpen, setIsOpen] = useState(Array(faqData.length).fill(false));

  const toggleOpen = (index) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
  };

  const [subjectOpen, setSubjectOpen] = useState(
    Array(courseSyllabus.length).fill(false)
  );

  const handleSubject = (index) => {
    const updatedOpenSubject = [...subjectOpen];
    updatedOpenSubject[index] = !updatedOpenSubject[index];
    setSubjectOpen(updatedOpenSubject);
  };

  return (
    <div className="md:pl-7 md:w-[100%] w-[90%] md:mx-0 mx-auto">
      <div className=" ">
        <div className="w-full pb-4 pt-2">
          <div className="w-[100%] mx-auto flex flex-col lg:flex-row">
            {/* <!-- section 1 --> */}
            <div className="md:w-[100%] w-full md:mx-0 mx-auto  ">
              <h1 className="lg:text-3xl text-2xl  md:mb-4 mb-2 font-bold">
                Neet 2024 Crash Course
              </h1>
              <div className="flex md:flex-row flex-col gap-2 md:mt-6 mt-2">
                <div className="flex  justify-start  gap-2  ">
                  <div className="flex items-center  gap-2">
                    <Image
                      src="/assests/video_icon.png"
                      className=""
                      alt="video_icon"
                      width={24}
                      height={24}
                    />
                    <p className="text-black font-bold md:text-base text-sm">
                      740+ lectures
                    </p>
                    <div className="h-3 w-[1px] bg-gray-400"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assests/language.png"
                      className=""
                      width={24}
                      height={24}
                      alt="language"
                    />
                    <p className="text-black font-bold md:text-base text-sm">
                      Hinglish
                    </p>
                    <div className="h-3 hidden lg:block w-[1px] bg-gray-400"></div>
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-start  ">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assests/test_icon.png"
                      className=""
                      alt="test_icon"
                      width={24}
                      height={24}
                    />
                    <p className="text-black font-bold md:text-base text-sm">
                      500+ Tests
                    </p>
                    <div className="h-3 w-[1px] bg-gray-400"></div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="text-black font-bold md:text-base text-sm">
                      4.9
                    </p>
                    {starsArray.map((_, index) => (
                      <FaStar
                        size={20}
                        key={index}
                        className="text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- buy now card --> */}
            <BuyNowCard />
          </div>
        </div>
        {/* <!-- section 2 --> */}
        <AboutCourse />
        <div className="w-[100%] bg-white pt-4 pb-6">
          {/* <!-- section 3 --> */}
          <div className="lg:w-[100%] w-full mx-auto">
            <div className="lg:w-[60%] w-full mb-4">
              <h2 className="lg:text-2xl md:text-lg text-base font-bold mb-4 text-start ">
                This Course Includes
              </h2>
              <p className="text-start   w-full md:text-base text-sm">
                Explore the comprehensive learning experience awaiting you on
                this course detail page. From fundamental concepts to advanced
                techniques, discover what you will learn and how it will propel
                your skills to new heights.
              </p>
            </div>
            {courseSyllabus.map((data, i) => (
              <div
                key={i}
                className="md:w-[60%] mt-3 px-1 py-2 bg-white rounded-lg gap-x-4 gap-y-3 flex flex-col justify-between items-center shadow-md hover:shadow-green-500/50"
              >
                <div
                  id={`shadow${data.title}`}
                  className="w-full flex cursor-pointer justify-between items-center rounded-md hover:shadow-green-500/50"
                  onClick={() => handleSubject(i)}
                >
                  <div className="flex items-center mx-4">
                    <Image
                      id={`${data.title}Image`}
                      src={data.src}
                      className=" mx-2"
                      alt="p"
                      width={48}
                      height={48}
                    />
                    <p
                      className="font-bold md:text-xl text-base subject"
                      id={`${data.title}Text`}
                    >
                      {data.title}
                    </p>
                  </div>
                  <FaAngleRight
                    id={`${data.title}Icon`}
                    className={`mr-6  ${
                      subjectOpen[i] ? "rotate-90" : "rotate-0"
                    } transition-transform duration-300 text-2xl`}
                  />
                </div>
                <div
                  id={data.title}
                  className={`${
                    subjectOpen[i] ? "block" : "hidden"
                  } w-full relative transition-transform duration-300 p-3 grid-cols-1 place-content-start place-items-start border-[rgba(255,255,255,0.10)] border rounded-lg gap-x-4 gap-y-8 sm:place-content-center`}
                >
                  <div className="flex flex-col gap-2 md:flex-row justify-between my-1 w-full   p-2 font-semibold">
                    {data.benefits.map((d, id) => (
                      <p
                        className="md:text-lg text-base flex items-center"
                        key={id}
                      >
                        <Image
                          src={d.src}
                          className="mx-1"
                          alt="note_icon"
                          width={30}
                          height={30}
                        />{" "}
                        {d.title}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- review --> */}
      <div className="md:w-[60%]  w-full  md:mx-0 mx-auto my-5">
        <h2 className="lg:text-2xl md:text-lg text-base font-bold mb-4 text-start ">
          What Students Says About Course ?
        </h2>
        <div className="md:w-full md:mx-0 mx-auto w-[95%]">
          <Review data={reviewData} />
        </div>
      </div>
      <div className="md:w-[60%] w-full md:mx-0 mx-auto my-5 md:mt-0 mt-8">
        <h2 className="lg:text-2xl md:text-lg text-base font-bold mb-4 text-start ">
          Course Instructor
        </h2>
        <p>
          Discover brilliance in JEE Main with our expert instructors.
          Passionate mentors dedicated to fueling your career journey at
          Subhams.
        </p>
        <div className="md:w-full md:mx-0 mx-auto w-[95%]">
          <TeacherSlider data={teacherData} />
        </div>
      </div>
      {/* <!-- teacher --> */}

      {/* <!-- faq --> */}
      <div className=" w-full bg-white pt-2 pb-6 md:mx-0 mx-auto">
        <div className="lg:w-[80%] w-full md:mx-0 mx-auto">
          <div className="mb-3">
            <h2 className="lg:text-2xl md:text-lg text-base font-bold mb-4 text-start ">
              Frequently Asked Questions
            </h2>
            <p className="  w-full mx-auto md:text-base text-sm">
              Answered all frequently asked questions, Still confused? feel free
              to contact us.
            </p>
          </div>
          <section className="bg-white rounded-lg flex justify-between flex-row">
            <div className="md:w-3/4">
              {faqData.map((data, index) => (
                <details
                  key={index}
                  className="border border-slate-200 rounded pt-2 pb-3 px-3 relative  mb-1 bg-none duration-300"
                  onClick={() => toggleOpen(index)}
                >
                  <summary className="list-none font-semibold relative md:text-lg text-base cursor-pointer pr-7">
                    {data.question}
                    <div className="absolute top-0 right-0 rounded-full px-1 py-0.5 cursor-pointer">
                      {isOpen[index] ? (
                        <FiMinusCircle size={25} />
                      ) : (
                        <FiPlusCircle size={25} />
                      )}
                    </div>
                  </summary>
                  <p
                    className={`md:text-base text-sm pt-3 ${
                      isOpen[index] ? "block" : "hidden"
                    }`}
                  >
                    {data.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExploreCoursePage;
