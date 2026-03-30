import { motion } from "framer-motion";
const Chip = ({ text, selected, css, icon: Icon, updateTab }) => {
  return (
    <button
      onClick={() => updateTab(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-900 hover:text-slate-200 hover:bg-slate-700"
      } text-xs transition-colors  px-3 py-0.5 rounded-xl relative flex md:justify-center justify-start w-fit`}
    >
      <span className="relative z-10 md:text-base text-xs py-1 flex gap-2 items-center">
        {Icon && <Icon className={`w-4 h-4 md:w-6 md:h-6  `} />}

        {text}
      </span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-xl"
        ></motion.span>
      )}
    </button>
  );
};
export default Chip;
