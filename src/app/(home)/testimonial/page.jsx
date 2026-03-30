"use client";
import { showProfileImage } from "@/GlobalRedux/Features/settings";
import ImageUploadModal from "@/components/common/ImageUploadModal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiMedal, CiUser } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoCameraOutline } from "react-icons/io5";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const TestimonialPage = () => {
  const dispatch = useDispatch();
  const [course, setCourse] = useState("");
  const isProfileImage = useSelector((store) => store.settings.isProfileImage);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
      // setLoading(true);
      const response = "hello";
      //  await apiConnector(
      //   "POST",
      //   contactUsEndPoint.CONTACT_US_API,
      //   data
      // );

      // setLoading(false);
    } catch (error) {
      // console.log("Error: ", error.message);
      // setLoading(false);
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        fullName: "",
        course: "",
        board: "",
        schoolName: "",
        schoolRoll: "",
        totalMarks: "",
        marksObtained: "",
        comment: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <div className="min-w-screen  flex items-center justify-center px-5">
      <div className="  text-gray-500 rounded-3xl  w-full overflow-hidden">
        <div className="md:flex w-full">
          <div className="w-full md:w-1/2 py-5 px-5 md:px-10 mx-auto">
            <form onSubmit={handleSubmit(submitContactForm)}>
              <div className="w-fit mx-auto mb-3">
                <div className="flex flex-col">
                  <div className="flex rounded-md relative justify-center items-center">
                    <div
                      onClick={() => dispatch(showProfileImage())}
                      className="absolute w-fit"
                    >
                      <IoCameraOutline className="w-14 h-14 opacity-40 text-white" />
                    </div>
                    <Image
                      alt="user_img"
                      src="/assests/chandvi.jpg"
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </div>
                  {isProfileImage && (
                    <ImageUploadModal
                      text="Upload"
                      closeModal={() => dispatch(showProfileImage())}
                    />
                  )}

                  {errors.fullName && (
                    <span className="  text-[12px] text-red-500">
                      Please Enter Your FullName
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full mb-3">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <CiUser size={20} />
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Enter Full Name"
                      nam="fullName"
                      id="fullName"
                      {...register("fullName", { required: true })}
                    />
                  </div>
                  {errors.fullName && (
                    <span className="  text-[12px] text-red-500">
                      Please Enter Your FullName
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full  mb-3">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <MdAlternateEmail size={20} />
                    </div>
                    <input
                      type="email"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Smith@gmail.com"
                      name="email"
                      id="email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  {errors.email && (
                    <span className="  text-[12px] text-red-500">
                      Please Enter your email address
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full  mb-3">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <LuGraduationCap size={22} />
                    </div>
                    <select
                      className="w-full -ml-10 pl-9 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      name="course"
                      id="course"
                      {...register("course", {
                        required: true,
                        onChange: (e) => {
                          setCourse(e.target.value);
                        },
                      })}
                    >
                      <option value="">Select Course</option>
                      <option value="JEE ADVANCED">JEE ADVANCED</option>
                      <option value="JEE MAIN">JEE MAIN</option>
                      <option value="NEET">NEET</option>
                      <option value="Class 12">Class 12</option>
                      <option value="Class 11">Class 11</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 7">Class 7</option>
                    </select>
                  </div>
                  {errors.course && (
                    <span className="  text-[12px] text-red-500">
                      Select One option
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full mb-3">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <LuGraduationCap size={22} />
                    </div>
                    <select
                      className="w-full -ml-10 pl-9 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      name="course"
                      id="course"
                      {...register("board", { required: true })}
                    >
                      <option value="">Select Board</option>
                      <option value="2">
                        Central Board of Secondary Education (CBSE)
                      </option>
                      <option value="3">
                        Indian Certificate of Secondary Education (ICSE)
                      </option>
                      <option value="4">
                        Bihar Board of Secondary Education (BSEB.)
                      </option>
                      <option value="5">
                        Council for the Indian School Certificate Examination
                        (CISCE)
                      </option>
                      <option value="6">
                        National Institute of Open Schooling (NIOS)
                      </option>
                      <option value="7">
                        Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP)
                      </option>
                      <option value="8">
                        Andhra Pradesh Board of Education (APBSE)
                      </option>
                      <option value="9">
                        Gujarat Secondary Education Board (GSEB)
                      </option>
                      <option value="10">
                        Delhi Board of School Education (DBSE)
                      </option>
                    </select>
                  </div>
                  {errors.board && (
                    <span className=" text-[12px] text-red-500">
                      Please Enter your board details
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full mb-3">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <LuSchool size={20} />
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="School Name"
                      name="schoolName"
                      id="schoolName"
                      {...register("schoolName", { required: true })}
                    />{" "}
                  </div>
                  {errors.schoolName && (
                    <span className="  text-[12px] text-red-500">
                      Please Enter your School Name
                    </span>
                  )}
                </div>
              </div>
              {(course.includes("JEE") || course.includes("NEET")) && (
                <div className="w-full mb-3">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <LuSchool size={20} />
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="All India Rank"
                        name="allIndiaRank"
                        id="allIndiaRank"
                        {...register("allIndiaRank", { required: true })}
                      />{" "}
                    </div>
                    {errors.allIndiaRank && (
                      <span className="  text-[12px] text-red-500">
                        Please Enter your Rank
                      </span>
                    )}
                  </div>
                </div>
              )}
              <div className="w-full mb-3">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <HiOutlinePencilAlt size={20} />
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Enter School Roll No"
                      name="schoolRoll"
                      id="schoolRoll"
                      {...register("schoolRoll", {
                        required: true,
                        pattern: /\d+/,
                      })}
                    />
                  </div>
                  {errors.schoolRoll && (
                    <span className=" text-[12px] text-red-500">
                      Please Enter your School Roll No
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full mb-3">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <CiMedal size={25} />
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Enter Total Marks"
                      name="totalMarks"
                      id="totalMarks"
                      {...register("totalMarks", {
                        required: true,
                        pattern: /\d+/,
                      })}
                    />{" "}
                  </div>
                  {errors.totalMarks && (
                    <span className="  text-[12px] text-red-500">
                      Please Enter Total Marks
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full mb-3">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <FaPencilAlt size={20} />
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Marks Obtained"
                      name="marksObtained"
                      id="marksObtained"
                      {...register("marksObtained", {
                        required: true,
                        pattern: /\d+/,
                      })}
                    />
                  </div>
                  {errors.marksObtained && (
                    <span className=" text-[12px] text-red-500">
                      Please Enter Marks Obtained
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full mb-3">
                <div className="flex flex-col">
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <FaPencilAlt size={20} />
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Your Comment"
                      name="comment"
                      id="comment"
                      {...register("comment", {
                        required: true,
                      })}
                    />
                  </div>
                  {errors.comment && (
                    <span className="  text-[12px] text-red-500">
                      Please Enter Comment
                    </span>
                  )}
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    type="submit"
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
