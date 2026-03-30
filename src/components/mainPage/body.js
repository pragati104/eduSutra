import Category from "./Category";
import Greet from "./Greet";
import RecommdedCourses from "./RecommdedCourses";
import Subject from "./Subject";
import Test from "./Test";
import Videos from "./Videos";

const Body = () => {
  return (
    <div className="w-full mx-auto bg-white h-fit ">
      <div className=" w-[90%] mx-auto mb-8">
        <Greet />
      </div>
      <div className="w-[90%] mx-auto mb-8">
        <div className="header header-1 lg:w-[35%] w-[70%] mb-8">
          <h2 className="md:text-2xl text-base font-bold ribbon">Category</h2>
        </div>
        <Category />
      </div>
      <div className="w-[90%] mx-auto mb-8">
        <div className="header header-1 lg:w-[35%] w-[70%] mb-8">
          <h2 className="md:text-2xl text-base font-bold ribbon">Subject</h2>
        </div>
        <Subject />
      </div>
      <div className="w-[90%] mx-auto mb-8  ">
        <div className="header header-1 lg:w-[35%] w-[70%] mb-8">
          <h2 className="md:text-2xl text-base font-bold ribbon">
            Trending Videos
          </h2>
        </div>

        <Videos />
      </div>

      {/* {isAlertLogout && <AlertModal message="Are You sure you want to unblock this user?" button1="No" button2="YES" />} */}
      <div className="w-[90%] mx-auto mb-8">
        <div className="header header-1 lg:w-[35%] w-[70%]">
          <h2 className="md:text-2xl text-base font-bold ribbon">
            Test Papers
          </h2>
        </div>
        <Test href={"/tests"} />
      </div>
      {/* <div className="w-[90%] mx-auto mb-8">
        <div className="header header-1 lg:w-[35%] w-[60%]">
          <h2 className="text-2xl font-bold ribbon">Test Papers</h2>
        </div>
        <Test />
      </div>
      <div className="w-[90%] mx-auto mb-8">
        <div className="header header-1 lg:w-[35%] w-[60%]">
          <h2 className="text-2xl font-bold ribbon">Test Papers</h2>
        </div>
        <Test />
      </div> */}
      <div className="w-[90%] mx-auto mb-8">
        <div className="w-full flex items-center">
          <div className="header header-1 lg:w-[35%] w-[70%] h-0">
            <h2 className="md:text-2xl text-base font-bold ribbon">
              Recommded Courses
            </h2>
          </div>
          {/* <div className="w-[65%] ">
            <Timer />
          </div> */}
        </div>

        <RecommdedCourses />
      </div>
    </div>
  );
};

export default Body;
