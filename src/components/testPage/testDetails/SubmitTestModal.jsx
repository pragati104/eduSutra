import { setShowSubmitModal } from "@/GlobalRedux/Features/testSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";

const TableCell = ({ content, color, isSpecial }) => (
  <td className="p-2 text-center">
    <div
      className={`w-full h-full rounded-full flex items-center justify-center font-semibold`}
    >
      <div
        className={`cursor-pointer relative md:w-8 md:h-8 w-6 h-6 shadow-md  rounded-full items-center flex justify-center font-semibold md:text-sm text-xs ${color}`}
      >
        {isSpecial && (
          <span className="rounded-full w-5 h-5 absolute bg-white lg:-top-1 -top-2 lg:left-5 left-3 right-0.5 text-center flex justify-center items-center">
            <FaCheck className="bg-green-500 rounded-full text-white text-center w-4 h-4 p-0.5" />
          </span>
        )}
        {content}
      </div>
    </div>
  </td>
);

const SubmitTestModal = ({ isOpen }) => {
  const headers = ["Total", "Physics", "Chemistry", "Maths"];
  const tableData = [
    {
      label: "No of Questions",
      total: 180,
      physics: 30,
      chemistry: 30,
      maths: 30,
      color: "bg-white text-black",
    },
    {
      label: "Answered",
      total: 50,
      physics: 10,
      chemistry: 20,
      maths: 30,
      color: "bg-green-600 text-white",
    },
    {
      label: "Not Answered",
      total: 10,
      physics: 10,
      chemistry: 10,
      maths: 10,
      color: "bg-red-600 text-white",
    },
    {
      label: "Marked for Review",
      total: 10,
      physics: 10,
      chemistry: 10,
      maths: 10,
      color: "bg-fuchsia-900 text-white",
    },
    {
      label: "Answered & Marked for Review",
      total: 10,
      physics: 10,
      chemistry: 10,
      maths: 10,
      color: "bg-fuchsia-900 text-white",
    },
    {
      label: "Not Visited",
      total: 10,
      physics: 10,
      chemistry: 10,
      maths: 10,
      color: "bg-white text-black",
    },
  ];
  const router = useRouter();
  const dispatch = useDispatch();
  const setIsOpen = (value) => {
    dispatch(setShowSubmitModal(value));
  };

  const handleTestSubmit = () => {
    router.push("/tests/1/feedback");
    // setIsOpen(false);
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
            className="bg-gradient-to-br from-gray-100 to-gray-200 text-black p-6 rounded-lg w-full md:max-w-[60%] h-[90%] shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10 h-full lg:text-base text-sm">
              <h3 className="text-2xl font-bold text-center mb-2">
                Test Summary
              </h3>
              <div className="h-[70%] w-full overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="bg-gray-100 text-black rounded-md">
                    <tr>
                      <th className="text-start rounded-l-md p-2"></th>
                      {headers.map((header, index) => (
                        <th className="text-center p-2" key={index}>
                          {header}
                        </th>
                      ))}
                      <th className="text-center rounded-r-md p-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr className="border-b" key={index}>
                        <td className="text-start p-2 font-semibold">
                          {row.label}
                        </td>
                        <TableCell
                          content={row.total}
                          color={row.color}
                          isSpecial={
                            row.label.toLowerCase() ===
                            "answered & marked for review"
                          }
                        />
                        <TableCell
                          content={row.physics}
                          color={row.color}
                          isSpecial={
                            row.label.toLowerCase() ===
                            "answered & marked for review"
                          }
                        />
                        <TableCell
                          content={row.chemistry}
                          color={row.color}
                          isSpecial={
                            row.label.toLowerCase() ===
                            "answered & marked for review"
                          }
                        />
                        <TableCell
                          content={row.maths}
                          color={row.color}
                          isSpecial={
                            row.label.toLowerCase() ===
                            "answered & marked for review"
                          }
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-center mb-6 font-semibold">
                Are you sure you want to submit for final marking? No changes
                will be allowed after submission.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-black hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  No
                </button>
                <button
                  onClick={handleTestSubmit}
                  className="bg-black hover:opacity-90 transition-opacity text-green-500 font-semibold w-full py-2 rounded"
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

export default SubmitTestModal;
