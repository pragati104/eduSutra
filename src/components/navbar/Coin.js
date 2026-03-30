"use client";
import {
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue,
  useAnimate,
} from "framer-motion";
import useMeasure from "react-use-measure";
import { FiAlertCircle } from "react-icons/fi";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen, setOpen } from "@/GlobalRedux/Features/navbar";
import { RxCross2 } from "react-icons/rx";

const Coin = () => {
  const dispatch = useDispatch();
  const { isOpen, open } = useSelector((store) => store.navbar);
  const coinSummary = [
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
    {
      coins: "+3",
      details: "Polynomials Test1",
      date: "1 Apr, 2024",
    },
  ];
  const howDoesWork = {
    earn: [
      "Invite Your Friends and Earn Coins",
      "Attempt Test and Earn Coins",
      "Become Topper in Test and get Bonus Cash",
      "Register and Earn Coins",
      "More to come... Stay Tuned",
    ],
    useCoin: [
      "Redeem Coins while purchasing subscriptions",
      "Participate in Scholarship using Coins",
      "Participate in Subhams Olympiad using Coins",
      "More to come... Stay Tuned",
    ],
  };
  // console.log(isOpen,open)
  const handleModal = () => {
    dispatch(setIsOpen());
    dispatch(setOpen());
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => handleModal()}
          className="bg-slate-900/20 backdrop-blur p-8 px-4 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg md:h-[70%] h-[90%] shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <RxCross2
                size={25}
                onClick={() => handleModal()}
                className="absolute right-0 cursor-pointer"
              />

              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <Image
                  src="/assests/wallet.png"
                  alt="wallet"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Total Balance
              </h3>
              <div className="flex gap-1 justify-center items-center my-2">
                <Image
                  src="/assests/coin.png"
                  alt="wallet"
                  width={30}
                  height={30}
                />{" "}
                <span className="text-xl">0 = ₹ 0</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(setOpen())}
                  className="  hover:opacity-90 transition-opacity text-white text-center px-2 py-1 mx-auto font-semibold  shadow-md rounded-md bg-black/10 w-fit "
                >
                  How does it work?
                </button>
                <DragCloseDrawer>
                  <div className="mx-4 p-2 text-white">
                    <RxCross2
                      size={20}
                      onClick={() => dispatch(setOpen())}
                      className="absolute right-2 cursor-pointer"
                    />
                    <h2 className="md:text-lg text-sm md:pt-4 pt-0 text-center mb-3 text-white">
                      How does it work?
                    </h2>
                    <div className="flex md:flex-row flex-col gap-3 text-start">
                      <div>
                        <p className=" ">Earn Coins by:</p>
                        <ol className="text-xs ">
                          {howDoesWork.earn.map((each, i) => (
                            <li
                              className="mb-0.5 flex gap-1 items-start"
                              key={i}
                            >
                              {" "}
                              <p className="text-[#EA141F]">➥</p>
                              {each}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <p className="   ">Use Coins for:</p>
                        <ol className=" text-xs  ">
                          {howDoesWork.useCoin.map((each, i) => (
                            <li
                              className="mb-0.5 flex gap-1 items-start"
                              key={i}
                            >
                              {" "}
                              <p className="text-[#EA141F]">➥</p>
                              {each}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </DragCloseDrawer>
              </div>
              <div className="overflow-auto no-scrollbar md:h-60 h-80 rounded-md my-2 mt-6">
                {" "}
                {/* Adjust height as needed */}
                <table className="w-full bg-[#8051ED] p-2 rounded-md h-full">
                  <thead>
                    <tr>
                      <th className="underline font-bold text-center">
                        Coin Summary
                      </th>
                    </tr>
                  </thead>
                  <tbody className="  ">
                    <tr className="flex justify-between gap-6 text-center rounded-md shadow-md bg-white text-black p-2 my-2 w-[90%] mx-auto md:text-base text-sm">
                      <td className="w-1/4">Coins</td>
                      <td className="w-1/2">Details</td>
                      <td className="w-1/4">Date</td>
                    </tr>
                    {coinSummary.map((each, index) => (
                      <tr
                        key={index}
                        className="flex justify-between gap-6 text-center rounded-md shadow-md bg-white text-black p-2 my-2  w-[90%] mx-auto md:text-base text-sm"
                      >
                        <td className="text-green-600 w-1/4">{each.coins}</td>
                        <td className="w-1/2">{each.details}</td>
                        <td className="w-1/4">{each.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DragCloseDrawer = ({ children }) => {
  const { open } = useSelector((store) => store.navbar);
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();
  const dispatch = useDispatch();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    dispatch(setOpen());
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed w-full md:-top-2 -top-20 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "0%" }}
            animate={{ y: "100%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute w-fit rounded-lg right-12 md:h-60  bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="relative z-0 w-fit ">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Coin;
