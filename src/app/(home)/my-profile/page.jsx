"use client";
import { RiEditBoxLine } from "react-icons/ri";
import { formattedDate } from "@/utils/dateFormatter";
import IconBtn from "@/components/settingPage/IconBtn";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { MdBlock } from "react-icons/md";
import { showBlocked } from "@/GlobalRedux/Features/settings";
import { RiLockPasswordLine } from "react-icons/ri";

export default function MyProfile() {
  const router = useRouter();
  //   const { user } = useSelector((state) => state.profile);
  const [user, setUser] = useState({
    image: "/assests/pragati's-avatar.png",
    Name: "Pragati Kumari",
    email: "pragatikumari306@gmail.com",
    phone: "6205526522",
    gender: "Female",
    course: "JEE Main",
    dob: "05-02-2002",
  });
  const isBlocked = useSelector((store) => store.settings.isBlocked);
  const dispatch = useDispatch();

  return (
    <div className=" mx-6 pt-4 bg-[#fff]">
      <div className="flex items-center justify-between rounded-md shadow-md border  py-4  px-12   ">
        <div className="flex items-center gap-x-4">
          <Image
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            width={78}
            height={78}
            className="aspect-square rounded-full object-cover"
          />
          <div className="flex flex-col  items-start justify-start">
            <p className="md:text-lg text-base font-semibold">{user?.Name}</p>
            <div className="flex items-center gap-2 rounded-md shadow-md px-2 py-1">
              <Image
                src="/assests/coin.png"
                alt={`profile-${user?.firstName}`}
                width={30}
                height={30}
                className="aspect-square rounded-full object-cover"
              />
              <p className="font-medium md:text-lg text-base">3</p>
            </div>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            router.push("/settings");
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>
      <div className="my-10 flex flex-col gap-y-4 rounded-md border shadow-md py-4 px-12  ">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold  ">Details</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              router.push("/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-4 ">
          <div className="flex gap-2 items-center ">
            <p className="md:text-base text-sm  ">Email:</p>
            <p className="md:text-base text-sm font-medium  ">{user?.email}</p>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="md:text-base text-sm  ">Phone no:</p>
            <p className="md:text-base text-sm font-medium  ">{user?.phone}</p>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="md:text-base text-sm  ">Course:</p>
            <p className="md:text-base text-sm font-medium  ">{user?.course}</p>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="md:text-base text-sm  ">Gender:</p>
            <p className="md:text-base text-sm font-medium  ">{user?.gender}</p>
          </div>
          <div className="flex gap-2 items-center ">
            <p className="md:text-base text-sm">Date of birth:</p>
            <p className="md:text-base text-sm font-medium  ">{user?.dob}</p>
          </div>
        </div>
      </div>
      <div className="my-10 flex flex-col gap-y-4 rounded-md border shadow-md py-4 px-12  ">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2  items-center">
            {" "}
            <div className=" flex  aspect-square h-12 w-12 items-center justify-center rounded-full bg-[#691432]">
              <RiLockPasswordLine className="text-2xl text-[#EF476F]" />
            </div>
            <p className="text-lg font-semibold  ">Change Password</p>
          </div>
          <IconBtn
            text="Edit"
            onclick={() => {
              router.push("/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
      </div>
      <div className="my-10 flex flex-col gap-y-4 rounded-md border shadow-md py-4 px-12  ">
        <div
          onClick={() => dispatch(showBlocked())}
          className="flex items-center justify-between  gap-x-5  w-full"
        >
          <div className="flex gap-2 items-center w-full">
            <div className=" flex  aspect-square h-12 w-12 items-center justify-center rounded-full bg-[#691432]">
              <MdBlock className="text-2xl text-[#EF476F]" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-black">Blocked User</h2>
            </div>
          </div>
          <IconBtn
            text="Edit"
            onclick={() => {
              router.push("/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
      </div>
    </div>
  );
}
