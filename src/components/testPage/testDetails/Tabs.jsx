import { setSelected } from "@/GlobalRedux/Features/testSlice";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
const Tabs = ({ text, selected, css, icon: Icon }) => {
  const dispatch = useDispatch();
  const handleChip = (data) => {
    dispatch(setSelected(data));
  };
  return (
    <button
      onClick={() => handleChip(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-900 hover:text-slate-200 hover:bg-slate-700"
      } text-xs transition-colors  px-3 py-0.5 rounded-xl relative flex md:justify-center justify-start w-full`}
    >
      <span className="relative z-10 md:text-base text-xs py-1 flex gap-2 items-center">
        {Icon && <Icon className={`w-4 h-4 md:w-6 md:h-6  `} />}

        {text}
      </span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 rounded-xl"
        ></motion.span>
      )}
    </button>
  );
};
export default Tabs;
