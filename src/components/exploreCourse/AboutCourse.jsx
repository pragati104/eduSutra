import Image from "next/image";

const AboutCourse = () => {
  const aboutCourse = [
    "Mode of the Course LIVE + Recordings",
    "No. Of Lectures 740+ LIVE lectures + Recordings",
    "Recording Provided Yes [HD Quality]",
    "Daily Doubt Sessions",
    "Course Validity 2 Years",
    "Language Used: Hinglish",
    "Course starts on 21st August, 2023",
    "Course Timings 9pm - 11pm",
  ];

  return (
    <div className="bg-white pt-6 md:mt-0 mt-8 pb-2">
      <div className="lg:w-[100%] w-full mx-auto">
        <h2 className="lg:text-2xl md:text-lg text-base font-bold text-start">
          About Course
        </h2>
        <div className="lg:w-[60%] w-full my-4">
          <p className="text-start md:text-base text-sm text-balance">
            Looking to excel in <strong> JEE Main 2024? </strong> Our JEE Main
            Crash Course is tailored to help students achieve a
            <strong> high rank </strong> by providing
            <strong> 300 </strong> Chapter Tests and
            <strong> 90+ </strong> Chapterwise Revision Notes. By comprehending
            the concepts and attempting all the tests, students can secure a
            good rank in JEE Main 2024. <strong>Register </strong> for our Crash
            Course today to ace the exam!
          </p>
        </div>
        <div className="lg:w-[60%] w-full my-4 md:p-5 p-2 grid grid-cols-1 sm:grid-cols-2 place-content-start sm:place-content-center place-items-start border-gray-300 border rounded-lg bg-white gap-x-6 gap-y-6">
          {aboutCourse.map((data, ind) => (
            <div
              key={ind}
              className="flex flex-row gap-x-3 items-center shadow-md p-2 rounded-md w-full hover:shadow-green-500/50"
            >
              <div className="flex p-4 justify-center items-center rounded-full border border-neutral-8 bg-neutral-9">
                <Image
                  alt="icon2"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  className="object- min-w-[24px] min-h-[24px]"
                  src="/assests/video_c.svg"
                  style={{ color: "transparent" }}
                />
              </div>
              <p className="md:text-base text-sm font-normal">{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
