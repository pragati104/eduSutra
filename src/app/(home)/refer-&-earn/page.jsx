"use client";
import ReferModal from "@/components/referEarn/ReferModal";
import piggy from "@/Data/piggy.json";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import useMeasure from "react-use-measure";

const ReferEarnPage = () => {
  const [isRefer, setIsRefer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  };

  const handleReferModal = () => {
    setIsRefer(!isRefer);
    setIsCopied(false);
  };

  return (
    <div
      className="w-full mx-auto h-[690px] rounded-md"
      style={{
        backgroundImage: "url(/assests/redeemback.png)",
      }}
    >
      <div className="md:w-[500px] md:h-[690px] h-full  mx-auto bg-white rounded-lg shadow-lg">
        <div
          className="md:w-[500px] md:h-[275px] h-full bg-no-repeat	"
          style={{
            backgroundImage: "url(/assests/redeemback2.png)",
          }}
        >
          <div className="flex flex-col justify-center items-center pt-8">
            <Lottie animationData={piggy} className="w-[25%] float-end" />
            <p className="pt-3 text-[#7D7878]">Refer a friend</p>
            <p className="text-3xl text-[#EE3572] font-bold pt-2">
              Referral Code
            </p>
            <div className=" cursor-pointer border   border-dashed border-black rounded-lg border-spacing-3 w-[250px] h-14 mt-3 flex flex-row justify-between items-center px-8 ">
              <p
                className={`text-black text-xl p-1 font-bold ${
                  isCopied && "text-white bg-black rounded-lg"
                }`}
              >
                SUBHA3998
              </p>
              <MdContentCopy
                size={26}
                onClick={() => handleCopy("SUBHA3998")}
              />
            </div>
            <div className="flex justify-between items-center gap-2 mt-2 bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1] p-2 rounded-lg font-semibold">
              <p>1 Referral = 100 </p>{" "}
              <Image
                src="/assests/coin.png"
                alt="coin"
                width={20}
                height={20}
              />
            </div>
            <div className="flex gap-5 mt-2">
              <div className=" bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1] py-1 w-40 h-14 text-center rounded-lg font-semibold">
                <p>You Earn</p>{" "}
                <span className="flex justify-center items-center gap-2">
                  100
                  <Image
                    src="/assests/coin.png"
                    alt="coin"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
              <div className="  bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1] py-1 w-40 h-14 text-center rounded-lg font-semibold">
                <p>Friends Earn </p>
                <span className="flex justify-center items-center gap-2">
                  100
                  <Image
                    src="/assests/coin.png"
                    alt="coin"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-evenly   mt-4 w-full">
              <div className="flex flex-col justify-center items-center w-[30%]">
                <div className="relative h-16 w-16 rounded-full  ">
                  <Image
                    src="/assests/1.png"
                    alt="share"
                    fill
                    className="bg-white rounded-full border-[#EE3572] border  "
                  />
                  <p className="absolute rounded-full w-4 h-4 pl-1 shadow bg-red-600 top-0 left-0 text-xs font-semibold text-white">
                    1
                  </p>
                </div>
                <p className="w-full mt-4 text-center">
                  Invite your friends to join
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[30%]">
                <div className="relative h-16 w-16 rounded-full  ">
                  <Image
                    src="/assests/2.png"
                    alt="share"
                    layout="fill"
                    className="bg-white rounded-full border-[#EE3572] border "
                  />
                  <p className="absolute rounded-full w-4 h-4 pl-1 shadow bg-red-600 top-0 left-0 text-xs font-semibold text-white">
                    2
                  </p>
                </div>
                <p className="w-full mt-4 text-center">Your friends sign up </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[30%]">
                <div className="relative h-16 w-16 rounded-full">
                  <Image
                    src="/assests/3.png"
                    alt="share"
                    layout="fill"
                    className="bg-white rounded-full border-[#EE3572] border  "
                  />
                  <p className="absolute rounded-full w-4 h-4 pl-1 shadow bg-red-600 top-0 left-0 text-xs font-semibold text-white">
                    3
                  </p>
                </div>
                <p className="w-full mt-4  text-center">
                  You and your friend get rewarded
                </p>
              </div>
            </div>
            <p
              onClick={() => setIsOpen(true)}
              className="text-black font-base font-medium mt-3 cursor-pointer border-dashed border-b border-black"
            >
              How does it work?
            </p>
            <SpringModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              open={open}
              setOpen={setOpen}
            />
            <ReferModal
              isRefer={isRefer}
              handleReferModal={handleReferModal}
              handleCopy={handleCopy}
              isCopied={isCopied}
            />
            <button
              onClick={handleReferModal}
              className="px-32 py-4 text-lg font-semibold bg-pink-400 text-white rounded-lg mt-6"
            >
              REFER NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferEarnPage;

const SpringModal = ({ isOpen, setIsOpen, open, setOpen }) => {
  const handleModal = () => {
    setIsOpen(false);
    setOpen(false);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => handleModal()}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1] text-black p-6 rounded-lg w-full max-w-lg md:h-[70%] h-[80%] shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <RxCross2
                size={25}
                onClick={() => handleModal()}
                className="absolute -right-4 -top-4 cursor-pointer"
              />
              <h3 className="md:text-3xl text-xl font-bold text-center mb-2">
                How does it work?
              </h3>
              <div className="md:text-base text-sm my-2">
                <p className="flex gap-2 mb-1">
                  ➥{" "}
                  <p>
                    Invite your friends to join Subhams and get{" "}
                    <strong>100 coins</strong> for each friend that joins using
                    your referral code.
                  </p>
                </p>
                <p className="flex gap-2 mb-1">
                  ➥{" "}
                  <p>
                    Your friend will also get <strong>100 coins</strong> after
                    joining successfully.
                  </p>
                </p>
                <p className="flex gap-2 mb-1">
                  ➥ <p>Coins can be used for buying subscriptions</p>
                </p>
              </div>
              <div className="flex gap-2">
                <p
                  className="text-xs text-black font-semibold cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  Terms & Conditions
                </p>

                <DragCloseDrawer open={open} setOpen={setOpen}>
                  <div className="mx-4 my-4     text-neutral-400">
                    <h2 className="text-sm pt-8 text-center my-2 text-neutral-200">
                      Terms & conditions
                    </h2>
                    <div className="flex md:flex-row flex-col gap-3 text-start">
                      <div>
                        <p className="font-semibold px-1 md:text-base text-sm">
                          Earn Coins by:
                        </p>
                        <ol className="text-xs list-disc	px-2">
                          <li>Invite Your Friends and Earn Coins</li>
                          <li>Attempt Test and Earn Coins</li>
                          <li>Become Topper in Test and get Bonus Cash</li>
                          <li>Register and Earn Coins</li>
                          <li>More to come... Stay Tuned</li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-semibold px-1 md:text-base text-sm">
                          Use Coins for:
                        </p>
                        <ol className="text-xs list-disc px-2">
                          <li>Redeem Coins while purchasing subscriptions</li>
                          <li>Participate in Scholarship using Coins</li>
                          <li>Participate in Subhams Olympiad using Coins</li>
                          <li>More to come... Stay Tuned</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </DragCloseDrawer>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

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

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed w-full md:top-2 -top-20 z-50 bg-neutral-950/70"
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
            className="absolute w-fit rounded-lg right-12  bg-neutral-900"
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
            <div className="absolute w-full rounded-lg z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 w-fit ">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
