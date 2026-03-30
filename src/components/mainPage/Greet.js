import Activity from "./Activity";

const Greet = () => {
  return (
    <div className="w-full bg-primaryDark   rounded-xl shadow-md lg:px-8 px-2 flex md:flex-row flex-col justify-between items-center ">
      <div className="lg:w-[20%] w-[90%] py-4 mx-auto ">
        <p
          className="text-gray-300 text-lg font-semibold relative w-[max-content] font-mono 
before:absolute before:inset-0 before:animate-typewriter before:bg-primaryDark 
after:absolute after:inset-0 after:w-[0.05em] after:animate-caret after:bg-white mb-1 pl-1 big "
        >
          Welcome Back...
        </p>
        <p className="text-white font-semibold text-xl">Pragati Kumari</p>
      </div>
      <div className="lg:w-[80%] w-full text-white">
        <Activity />
      </div>
    </div>
  );
};

export default Greet;
