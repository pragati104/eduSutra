import { setShowFlag } from "@/GlobalRedux/Features/testSlice";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import Dropdown from "./DropDown";

const FlagQuestionModal = ({ isOpen }) => {
  const dispatch = useDispatch();
  const setIsOpen = (value) => {
    dispatch(setShowFlag(value));
  };
  const handleTestSubmit = () => {
    setIsOpen(false);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-primaryLight to-primaryDark text-white p-6 rounded-lg w-full md:w-[50%] h-fit shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10 h-full">
              <h3 className="text-2xl font-semibold text-center mb-2">
                Report this question
              </h3>
              <div className="h-[70%] w-full">
                <Dropdown />
                <h2 className="p-2 text-start my-1 font-semibold">
                  Your Comments (optional)
                </h2>
                <textarea
                  id="message"
                  rows="4"
                  class=" px-2.5 py-1 w-[100%] mx-auto mb-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   "
                  placeholder="Describe your experience here..."
                ></textarea>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white/30 hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  No
                </button>
                <button
                  onClick={handleTestSubmit}
                  className="bg-white hover:opacity-90 transition-opacity text-primaryDark font-semibold w-full py-2 rounded"
                >
                  Yes
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default FlagQuestionModal;
