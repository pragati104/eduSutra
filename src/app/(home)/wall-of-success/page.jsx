import ProfileCard from "@/components/wallofsuccess/profileCard";
import Link from "next/link";

const WallOfSuccessPage = () => {
  const mockStudents = [
    { name: "John Doe", score: "80 (690 Marks)", exam: "JEE MAIN 2023" },
    { name: "Jane Smith", score: "75 (680 Marks)", exam: "JEE ADVANCED 2022" },
    { name: "Michael Johnson", score: "82 (705 Marks)", exam: "JEE MAIN 2022" },
    { name: "Emily Brown", score: "78 (695 Marks)", exam: "JEE MAIN 2023" },
    {
      name: "Daniel Williams",
      score: "85 (710 Marks)",
      exam: "JEE ADVANCED 2023",
    },
    { name: "Olivia Jones", score: "72 (670 Marks)", exam: "JEE MAIN 2022" },
    { name: "William Davis", score: "79 (700 Marks)", exam: "JEE MAIN 2023" },
    { name: "Ava Miller", score: "76 (685 Marks)", exam: "JEE ADVANCED 2023" },
    { name: "James Wilson", score: "87 (715 Marks)", exam: "JEE MAIN 2022" },
    { name: "Isabella Moore", score: "83 (705 Marks)", exam: "JEE MAIN 2023" },
    { name: "Liam Taylor", score: "81 (700 Marks)", exam: "JEE ADVANCED 2022" },
    { name: "Sophia Anderson", score: "77 (690 Marks)", exam: "JEE MAIN 2022" },
    { name: "Benjamin Thomas", score: "84 (710 Marks)", exam: "JEE MAIN 2023" },
    { name: "Mia Jackson", score: "79 (695 Marks)", exam: "JEE ADVANCED 2022" },
    {
      name: "Elijah White",
      score: "86 (715 Marks)",
      exam: "JEE ADVANCED 2023",
    },
    {
      name: "Charlotte Harris",
      score: "73 (675 Marks)",
      exam: "JEE MAIN 2022",
    },
    { name: "Noah Martinez", score: "88 (720 Marks)", exam: "JEE MAIN 2023" },
    { name: "Amelia Thompson", score: "80 (700 Marks)", exam: "JEE MAIN 2022" },
    { name: "Logan Garcia", score: "76 (685 Marks)", exam: "JEE MAIN 2023" },
    {
      name: "Harper Robinson",
      score: "82 (705 Marks)",
      exam: "JEE ADVANCED 2022",
    },
    { name: "Mason Clark", score: "75 (695 Marks)", exam: "JEE MAIN 2023" },
    {
      name: "Evelyn Rodriguez",
      score: "83 (710 Marks)",
      exam: "JEE ADVANCED 2023",
    },
    { name: "Lucas Lewis", score: "79 (695 Marks)", exam: "JEE MAIN 2022" },
    { name: "Ella Lee", score: "87 (715 Marks)", exam: "JEE MAIN 2023" },
    {
      name: "Avery Walker",
      score: "74 (680 Marks)",
      exam: "JEE ADVANCED 2022",
    },
    { name: "Oliver Hall", score: "88 (720 Marks)", exam: "JEE MAIN 2022" },
    {
      name: "Scarlett Allen",
      score: "81 (700 Marks)",
      exam: "JEE ADVANCED 2023",
    },
    { name: "Jack Young", score: "85 (710 Marks)", exam: "JEE MAIN 2023" },
    {
      name: "Chloe Hernandez",
      score: "78 (690 Marks)",
      exam: "JEE ADVANCED 2022",
    },
    { name: "Lily King", score: "86 (715 Marks)", exam: "JEE MAIN 2022" },
  ];

  return (
    <div className="flex flex-col items-center">
      <Link
        href="/testimonial"
        className="md:w-[50%] w-[90%] rounded-md shadow-md p-2 text-center bg-primaryLight text-white mb-4 font-bold"
      >
        Add Your Success Story
      </Link>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-4 md:w-[99%] w-[90%]">
        {mockStudents.map((student, i) => (
          <div key={i}>
            <ProfileCard data={student} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallOfSuccessPage;
