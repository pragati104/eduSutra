"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdBlock } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import BlockedUserCard from "./BlockedUserCard";
import { showBlocked } from "@/GlobalRedux/Features/settings";

const DeleteAccount = () => {
  const isBlocked = useSelector((store) => store.settings.isBlocked);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center  border-[#691432] bg-[#340019] my-4 rounded-lg px-8 py-4  ">
      <div
        onClick={() => dispatch(showBlocked())}
        className="flex items-center justify-between  gap-x-5  w-full"
      >
        <div className="flex gap-2 items-center w-full">
          <div className=" flex  aspect-square h-12 w-12 items-center justify-center rounded-full bg-[#691432]">
            <MdBlock className="text-2xl text-[#EF476F]" />
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-gray-200">Blocked User</h2>
          </div>
        </div>
        <IoIosArrowForward
          className={`text-white  ${isBlocked && "rotate-90"}`}
          size={30}
        />
      </div>

      {isBlocked && (
        <div className="w-[90%] mx-auto my-2 flex justify-between flex-wrap gap-3 fade-in active">
          <BlockedUserCard />
          <BlockedUserCard />
          <BlockedUserCard />
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
