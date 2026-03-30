import Test from "../mainPage/Test";

const MyTest = () => {
  return (
    <div className=" ">
      <div className="header header-1 lg:w-[35%] w-[50%] mt-8">
        <h2 className="md:text-2xl text-base font-bold ribbon">Attempted</h2>
      </div>
      <Test href={"/tests/attempted"} />
      <div className="header header-1 lg:w-[35%] w-[50%] mt-8">
        <h2 className="md:text-2xl text-base font-bold ribbon">Completed</h2>
      </div>
      <Test href={"/tests/completed"} />
    </div>
  );
};

export default MyTest;
