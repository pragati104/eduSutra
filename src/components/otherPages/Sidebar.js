"use client";
import { setSelected } from "@/GlobalRedux/Features/askQuestionData";
import { allNull } from "@/GlobalRedux/Features/dropDown";
import { showSidebar } from "@/GlobalRedux/Features/toogleSidebarSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiOutlineMenuFold } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { GiAngelWings, GiLaurelsTrophy } from "react-icons/gi";
import { GrAnnounce, GrContact } from "react-icons/gr";
import { HiUserAdd } from "react-icons/hi";
import { IoVideocamOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import {
  MdAddCard,
  MdOutlineLiveTv,
  MdOutlineQuiz,
  MdOutlineSettingsSuggest,
  MdSubscriptions,
} from "react-icons/md";
import { RxPencil2 } from "react-icons/rx";
import { VscFeedback } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Live Class",
    href: "/live-class",
    icon: MdOutlineLiveTv,
    desc: "Learn concepts with expert faculties in live classes from basic to advance level.",
  },
  {
    name: "Video Classes",
    href: "/video-class",
    icon: IoVideocamOutline,
    desc: "Learn concepts with expert faculties in video classes from basic to advance level.",
  },
  {
    name: "Test",
    href: "/tests",
    icon: RxPencil2,
    desc: "Practise make human perfect, give test be perfect",
  },
  {
    name: "Study Notes",
    href: "/notes",
    icon: FaRegNoteSticky,
    desc: "Easily Revise with Study Notes",
  },
  {
    name: "Play Quiz",
    href: "/quiz",
    icon: MdOutlineQuiz,
    desc: "Daily Practice with Quiz",
  },
  {
    name: "Ask Doubts",
    href: "/ask-doubts",
    icon: LuMessagesSquare,
    desc: "Ask Any doubts you have related to your Subject",
  },
  {
    name: "My Course",
    href: "/my-course",
    icon: MdSubscriptions,
    desc: "you don't have any subscription, buy from below",
  },

  {
    name: "Scholarship",
    href: "/scholarship",
    icon: FaUserGraduate,
    desc: "give exams and take scholarship",
  },
  {
    name: "Olympiad",
    href: "/olympiad",
    icon: GiLaurelsTrophy,
    desc: "Subhams conducts olympiad every year give olympaid and win prises",
  },
  {
    name: "Redeem Coupon",
    href: "/redeem-coupon",
    icon: MdAddCard,
    desc: "Redeem Your Coupon here",
  },
  {
    name: "Wall of Success",
    href: "/wall-of-success",
    icon: GiAngelWings,
    desc: "Get latest news from Subhams",
  },
  {
    name: "Latest News",
    href: "/latest-news",
    icon: GrAnnounce,
    desc: "Get latest news from Subhams",
  },
  {
    name: "Refer & Earn",
    href: "/refer-&-earn",
    icon: HiUserAdd,
    desc: "Refer your friend and get discount on purchase",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    icon: GrContact,
    desc: "Contact Us any time",
  },
  {
    name: "Testimonial",
    href: "/testimonial",
    icon: VscFeedback,
    desc: "Give your honest feedback",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: MdOutlineSettingsSuggest,
    desc: "Change Your Profile details",
  },
];

const Sidebar = () => {
  const show = useSelector((store) => store.toggleSidebar.show);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const handleHeading = () => {
    dispatch(allNull());
    dispatch(setSelected(null));
    dispatch(showSidebar());
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full z-50 lg:w-[15%] ${
        !show ? "w-[0%]" : "w-[80%]"
      } duration-300 lg:-translate-x-0 bg-secondary`}
    >
      <aside
        className={`h-full bg-secondary px-4 py-2 border-gray-300 border-r ${
          !show ? "-translate-x-56" : "-translate-x-0"
        } lg:-translate-x-0`}
      >
        <div className="w-full h-fit flex justify-between items-center mb-4 fixed top-0 left-0 px-4 pt-2 border-gray-300 border-b rounded-md bg-secondary z-10">
          <div className="w-[200px] h-[50px] flex justify-between items-center">
            <Image
              alt="logo"
              src="/assests/Pragatis.png"
              width={100}
              height={50}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <AiOutlineMenuFold
            onClick={() => dispatch(showSidebar())}
            className="md:hidden block "
            size={30}
          />
        </div>

        <div className="mt-[60px] overflow-y-auto h-full no-scrollbar pt-2 pb-20">
          <ul className="list-none bg-secondary">
            {sidebarItems.map(({ name, href, icon: Icon, desc }) => {
              return (
                <li
                  onClick={() => handleHeading()}
                  className={
                    "rounded-xl text-black " +
                    (pathname === href
                      ? "bg-primaryLight text-secondary"
                      : "text-gray-500 hover:shadow hover:shadow-primaryLight transition-all duration-300")
                  }
                  key={name}
                >
                  <Link
                    href={href}
                    className="relative text-base no-underline p-4 flex items-center mb-1 rounded-lg"
                  >
                    {name === "Live Class" && (
                      <span className="absolute md:right-14 right-32 top-4 flex items-center justify-center h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA141F]"></span>
                        <span className="relative inline-flex rounded-full h-1 w-1 bg-[#EA141F]"></span>
                      </span>
                    )}
                    <span className="inline-block text-lg">
                      <Icon size={27} />
                    </span>
                    <span className="ml-2 text-base">{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
