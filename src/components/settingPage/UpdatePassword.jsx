"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import IconBtn from "./IconBtn";

const UpdatePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const { oldPassword, newPassword } = formData;
    const handleOnChange = (e) => {
      const updatedData = {
        ...formData,
        [e.target.name]: e.target.value,
      };
      setFormData(updatedData);
    };
  //   const handleOnSubmit = async (e) => {
  //     e.preventDefault();
  //     if (!oldPassword && !newPassword) {
  //       toast.error("All Fields are required");
  //     }
  //     try {
  //       changePassword(token, formData);
  //     } catch (error) {
  //       console.log("ERROR MESSAGE - ", error.message);
  //     }
  //   };
  return (
    <div>
      <form
      //   onSubmit={handleOnSubmit}
      >
        <div className="border  bg-white flex flex-col rounded-md   p-8 md:px-12 px-3 text-black">
          <div className="  ">
            <p className="md:text-lg text-base font-semibold   pb-6">
              Change Password
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="relative w-full">
              <p>
                Current Password<sup className="text-[#EF476F]">*</sup>
              </p>
              <input
                required
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter old Password"
                name="oldPassword"
                value={oldPassword}
                onChange={handleOnChange}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] border p-[12px] pr-10 "
              />
              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showOldPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
            <div className="relative w-full">
              <p>
                New Password<sup className="text-[#EF476F]">*</sup>
              </p>
              <input
                required
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter new Password"
                name="newPassword"
                value={newPassword}
                onChange={handleOnChange}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem]  border p-[12px] pr-10  "
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 my-3">
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

export default UpdatePassword;
