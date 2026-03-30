"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "./IconBtn";
import Calendar from "../common/Calender";

const genders = ["Male", "Female", "Other"];
const courses = ["JEE Main", "JEE Advanced","NEET" ,"Class 12", "Class 11", "Class 10" , "Class 9","Class 8", "Class 7" ]

const UpdatePersonalDetails = () => {
  //   const token = useSelector((state) => state.auth.token);
  //   // console.log(token);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    
  });
  const { name, course, dateOfBirth, gender, phoneNumber, about } =
    formData;

  // console.log(formData);

    const handleOnChange = (e) => {
      const updateValue = {
        ...formData,
        [e.target.name]: e.target.value,
      };
      setFormData(updateValue);
    };

  //   const handleOnSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(updatePersonalDetails(token, formData));
  //   };

  return (
    <div>
      <form
      //   onSubmit={handleOnSubmit}
      >
        <div className="flex flex-col shadow-md  mt-8 mb-4 rounded-md border-[1px] md:p-8 p-2 md:px-12 px-5 text-black">
          <p className="text-lg font-semibold pb-6">
            Profile Information
          </p>

          <div className="flex flex-col gap-5 lg:flex-row my-4">
            <div className="w-full">
              <p>
                 Full Name <sup className="text-[#EF476F]">*</sup>
              </p>
              <input
                required
                type="text"
                placeholder="Enter Full Name"
                name="name"
                value={name}
                onChange={handleOnChange}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] border p-[12px] pr-10 "
              />
            </div>

            <div className="w-full">
              <p>
                Course <sup className="text-[#EF476F]">*</sup>
              </p>
              <select
                name="course" // Add the name attribute
                value={course} // Assuming you have a state variable 'selectedGender'
                className="w-full rounded-[0.5rem]  border p-[12px] pr-10 bg-white "
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                onChange={handleOnChange}
              >
                {/* Add a default option with an empty value */}
                <option value="" disabled>
                  Select Course
                </option>s

                {/* Map through the genders array and create option elements */}
                {courses.map((ele, index) => (
                  <option key={index} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row my-4">
            <div className="w-full">
              <p>
                Date of Birth <sup className="text-[#EF476F]">*</sup>
              </p>
              {/* <Calendar/> */}
              <input
                type="date"
                required
                placeholder="Enter Date of Birth"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={handleOnChange}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] border  p-[12px] pr-10 cursor-pointer text-black bg-white"
              />
            </div>
            <div className="w-full">
              <p>
                Gender <sup className="text-[#EF476F]">*</sup>
              </p>
              <select
                name="gender" // Add the name attribute
                value={gender} // Assuming you have a state variable 'selectedGender'
                className="w-full rounded-[0.5rem] border  p-[12px] pr-10 bg-white "
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                onChange={handleOnChange}
              >
                {/* Add a default option with an empty value */}
                <option value="" disabled>
                  Select Gender
                </option>

                {/* Map through the genders array and create option elements */}
                {genders.map((ele, index) => (
                  <option key={index} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row my-4">
            <div className="w-[49%]">
              <p>
                Phone Number <sup className="text-pink-200">*</sup>
              </p>
              <input
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleOnChange}
                type="text"
                required
                placeholder="Enter phone number"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] border  p-[12px] pr-10  "
              />
            </div>
            
          </div>
        </div>
        <div className="flex justify-end gap-2 mb-6">
          <button
            // onClick={() => {
            //   navigate("/dashboard/my-profile");
            // }}
            className="cursor-pointer rounded-md bg-[#2C333F] text-white py-2 px-5 font-semibold  "
          >
            Cancel
          </button>
          <IconBtn type="submit" text="Update" />
        </div>
      </form>
    </div>
  );
};

export default UpdatePersonalDetails;
