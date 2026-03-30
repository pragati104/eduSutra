"use client";
import AllDropDown from "@/components/common/AllDropDown";
import NotesCard from "@/components/notesPage/NotesCard";
import PDFViewer from "@/components/notesPage/PdfViewer";
import { getChapterData } from "@/utils/SubjectDropHandler";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPdf } from "../../../GlobalRedux/Features/notifications";

const NotesPage = () => {
  const dispatch = useDispatch();
  const isPdf = useSelector((store) => store.notifications.isPdf);

  const notes_DATA = [
    {
      chapter_name: "P Block ELements",
      price: "Free",
      notes: "22 pages",
    },
    {
      chapter_name: "Some Basic Concepts of Organic Chemistry",
      price: "Premium",
      notes: "22 pages",
    },
    {
      chapter_name: "Modern Physics",
      price: "Premium",
      notes: "22 pages",
    },
    {
      chapter_name: "Unit & Dimension Test",
      price: "Premium",
      notes: "22 pages",
    },
    {
      chapter_name: "Unit & Dimension Test",
      price: "Premium",
      notes: "22 pages",
    },
    {
      chapter_name: "Unit & Dimension Test",
      price: "Premium",
      notes: "22 pages",
    },
    {
      chapter_name: "Unit & Dimension Test",
      price: "Premium",
      notes: "22 pages",
    },
    {
      chapter_name: "Unit & Dimension Test",
      price: "Premium",
      notes: "22 pages",
    },
    {
      chapter_name: "Unit & Dimension Test",
      price: "Premium",
      notes: "22 pages",
    },
    {
      chapter_name: "Unit & Dimension Test",
      price: "Premium",
      notes: "22 pages",
    },
  ];

  const { subjectName, subTopicName, chapterName } = useSelector(
    (store) => store.dropDown
  );

  const result = getChapterData(subjectName, subTopicName, chapterName);

  useEffect(() => {
    return () => {
      dispatch(showPdf(false));
    };
  }, []);

  return (
    <div className="md:w-full w-[95%] mx-auto md:mt-7 mt-0">
      <div>
        {!isPdf && <AllDropDown showSubject={true} showChapters={true} />}
      </div>

      {isPdf ? (
        <PDFViewer
          pdfUrl="https://www.sldttc.org/allpdf/21583473018.pdf"
          type="notes"
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4  gap-x-2 gap-y-4 pt-6 lg:w-full w-[90%] mx-auto">
          {result.length > 0
            ? result.map((data, index) => <NotesCard data={data} key={index} />)
            : notes_DATA.map((data, index) => (
                <NotesCard data={data} key={index} />
              ))}
        </div>
      )}
    </div>
  );
};

export default NotesPage;
