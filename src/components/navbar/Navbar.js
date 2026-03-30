"use client";
import {
  setAlertLogout,
  setAnimationTrigger,
  setCourseName,
  setDir,
  setHeadingData,
  setIsOpen,
  setSelected,
  setUser,
} from "@/GlobalRedux/Features/navbar";
import { showNotification } from "@/GlobalRedux/Features/notifications";
import { showSidebar } from "@/GlobalRedux/Features/toogleSidebarSlice";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../common/AlertModal";
import Coin from "./Coin";
import Notification from "./Notification";

const Navbar = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    const parts = pathname.split("/");
    const lastWord = parts.pop();
    const secondLastWord = parts.pop();

    const capitalizedLastWord =
      lastWord.charAt(0).toUpperCase() + lastWord.slice(1);
    const replacedTopic = capitalizedLastWord.includes("-")
      ? capitalizedLastWord.replace(/-/g, " ")
      : capitalizedLastWord;

    const headingData = isNaN(replacedTopic)
      ? replacedTopic
      : secondLastWord && secondLastWord === "v"
      ? "Video"
      : "Dashboard";

    dispatch(setHeadingData(headingData));
  }, [pathname, dispatch]);

  const animationTrigger = useSelector(
    (store) => store.navbar.animationTrigger
  );
  const headingData = useSelector((store) => store.navbar?.headingData);
  useEffect(() => {
    if (headingData) {
      dispatch(setAnimationTrigger(true));
      const timeout = setTimeout(() => {
        dispatch(setAnimationTrigger(false));
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [headingData, dispatch]);

  const isNotification = useSelector(
    (store) => store.notifications.isNotification
  );
  return (
    <>
      <div className="border-b border-gray-300 lg:w-[85%] w-full rounded h-auto px-2 py-2 md:pl-6  bg-white fixed top-0 right-0 flex flex-row justify-between items-center cursor-pointer z-40">
        <div
          className={`flex items-center justify-stretch gap-x-4 h-fit lg:min-w-[50%] w-full ${
            animationTrigger && "animate-slide-down"
          }`}
        >
          {
            <div className="md:hidden visible w-6 h-6">
              {" "}
              <AiOutlineMenuUnfold
                size={25}
                className=" "
                onClick={() => dispatch(showSidebar())}
              />
            </div>
          }
          <div className="flex items-end justify-stretch gap-x-4">
            <p className="big lg:text-2xl md:text-xl text-sm md:pt-[2px] pt-[10px] font-bold overflow-hidden h-10">
              {headingData ? headingData : ""}
            </p>
          </div>
        </div>
        <div className="lg:w-[35%] w-full">
          <ShiftingDropDown className="z-50" />
        </div>
      </div>
      {isNotification && <Notification />}
    </>
  );
};
export default Navbar;

export const ShiftingDropDown = () => {
  const { isNotification, markRead } = useSelector(
    (store) => store.notifications
  );
  const isAlertLogout = useSelector((store) => store.navbar.isAlertLogout);
  const data = useSelector((store) => store.notifications.notificationsData);
  const dispatch = useDispatch();
  return (
    <div className="flex h-fit w-full justify-evenly items-center text-neutral-200 ">
      <Coin />
      <AlertModal
        AlertModal
        message="Are You sure you want to logout?"
        button1="No"
        button2="YES"
        isAlert={isAlertLogout}
        setAlert={() => dispatch(setAlertLogout())}
      />
      <div
        className="relative cursor-pointer"
        onClick={() => dispatch(showNotification())}
      >
        <IoNotificationsOutline size={28} className="text-black" />
        {!isNotification && !markRead && (
          <span className="absolute rounded-full w-4 h-4 pl-1 shadow bg-[#EA141F] top-0 right-0 text-xs font-semibold text-white">
            {data.length}
          </span>
        )}
      </div>
      <Tabs setIsOpen={setIsOpen} />
    </div>
  );
};

const Tabs = () => {
  const { courseName, selected, dir, user } = useSelector(
    (store) => store.navbar
  );
  const TABS = [
    {
      title: <div className="flex items-center gap-1">{courseName}</div>,
    },
    {
      title: <FaRegCircleUser size={30} />,
    },
  ];

  const dispatch = useDispatch();
  const handleSetSelected = (val) => {
    if (val === selected) {
      // If the clicked tab is already selected
      dispatch(setSelected(null)); // Close the tab
      return; // Exit the function early
    }
    if (typeof selected === "number" && typeof val === "number") {
      dispatch(setDir(selected > val ? "r" : "l"));
    } else if (val === null) {
      dispatch(setDir(null));
    }
    dispatch(setSelected(val));
  };

  useEffect(() => {
    // Close the tab if courseName changes
    handleSetSelected(null);

    // Event listener to close tab when clicked outside
    const handleClickOutside = (event) => {
      if (!event.target.closest(".tab-container")) {
        handleSetSelected(null);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [courseName, user]);

  return (
    <div className="relative flex h-fit md:gap-8 gap-0 tab-container">
      {TABS.map((t, ind) => {
        return (
          <Tab
            key={ind + 1}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={ind + 1}
          >
            {t.title}
          </Tab>
        );
      })}
      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full md:px-3 px-1  py-1 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-neutral-900 font-semibold"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  const [left, setLeft] = useState(0);
  useEffect(() => {
    const moveNub = () => {
      if (selected) {
        const hoveredTab = document.getElementById(`shift-tab-${selected}`);
        const overlayContent = document.getElementById("overlay-content");

        if (!hoveredTab || !overlayContent) return;

        const tabRect = hoveredTab.getBoundingClientRect();
        const { left: contentLeft } = overlayContent.getBoundingClientRect();

        const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

        setLeft(tabCenter);
      }
    };
    moveNub();
  }, [selected]);

  const TABS = [
    {
      Component: Courses,
    },
    {
      Component: User,
    },
  ];

  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute right-0 top-[calc(100%_+_15px)] w-[17rem] rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
    >
      <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
      <motion.span
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
        }}
        animate={{ left }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute left-[90%] top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-primaryDark"
      />

      {TABS.map((t, ind) => {
        return (
          <div className="overflow-hidden" key={ind + 1}>
            {selected === ind + 1 && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Courses = () => {
  const dispatch = useDispatch();
  const courses = [
    "JEE Main",
    "JEE Advanced",
    "Neet",
    "Class 12",
    "Class 11",
    "Class 10",
    "Class 9",
    "Class 8",
    "Class 7",
  ];
  const handleCourseName = (data) => {
    dispatch(setCourseName(data));
    // dispatch(setDir(null))
  };
  return (
    <div>
      <div className=" grid grid-cols-2 gap-2">
        {courses.map((data, index) => (
          <p
            onClick={() => handleCourseName(data)}
            key={index}
            className="text-sm text-center text-black p-2 bg-white rounded-lg font-semibold"
          >
            {data}
          </p>
        ))}
      </div>
    </div>
  );
};

const User = () => {
  const dispatch = useDispatch();
  const handleProfile = () => {
    dispatch(setUser());
  };
  const handleWallet = () => {
    dispatch(setIsOpen());
    dispatch(setUser());
  };

  const handleLogout = () => {
    dispatch(setAlertLogout());
    dispatch(setUser());
  };
  return (
    <div className="flex flex-row   w-full   divide-x divide-neutral-700">
      <Link
        href="/my-profile"
        onClick={() => handleProfile()}
        className="flex w-[25%] mx-auto flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <CgProfile className="mb-2 text-xl text-fuchsia-400" />
        <span className="text-xs">Profile</span>
      </Link>
      <div
        onClick={() => handleWallet()}
        className="flex w-[45%] mx-auto flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <BsWallet2 className="mb-2 text-xl text-center text-fuchsia-300" />
        <span className="text-xs">Wallet</span>
      </div>
      <div
        onClick={() => handleLogout()}
        className="flex w-[30%] mx-auto flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <IoIosLogOut className="mb-2 text-xl text-fuchsia-300" />
        <span className="text-xs">Logout</span>
      </div>
    </div>
  );
};
