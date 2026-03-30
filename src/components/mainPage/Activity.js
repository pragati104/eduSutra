import Link from "next/link";
import { BsPatchCheck, BsPatchQuestion, BsPencilSquare } from "react-icons/bs";
import { MdOutlineQuiz } from "react-icons/md";

const Activity = () => {
  // Define the data directly within the component
  const stats = [
    {
      data: "35",
      title: "My questions",
      icon: BsPatchQuestion,
      href: "qa/myasked",
    },
    {
      data: "10",
      title: "My answers",
      icon: BsPatchCheck,
      href: "qa/myanswered",
    },
    {
      data: "40",
      title: "My Tests",
      icon: BsPencilSquare,
      href: "tests",
    },
    { data: "30", title: "My favourites", icon: MdOutlineQuiz, href: "#" },
  ];

  return (
    <>
      <section className="p-4 ">
        <div className="header header-1 w-full mb-8">
          <h2 className="md:text-2xl text-base font-semibold ribbon">
            Your Activity
          </h2>
        </div>
        <div className="container grid gap-6 mx-auto grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {stats.map((data, index) => {
            return (
              <Link key={index} href={data?.href}>
                <div className="flex justify-center items-center p-4 md:h-24 space-x-4 rounded-lg md:space-x-6 shadow-md cursor-pointer active:scale-90 hover:shadow-secondary bg-primaryLight mb-4">
                  <div className="flex justify-center items-center p-2 rounded-lg sm:p-4 bg-primaryDark">
                    <data.icon size={30} />
                  </div>
                  <div className="flex flex-col justify-center text-center">
                    <p className="capitalize lg:text-base text-sm">
                      <span className="mx-1 md:text-lg text-base">
                        {data.data}
                      </span>
                      {data.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Activity;
