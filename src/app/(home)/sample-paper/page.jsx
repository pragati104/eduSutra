"use client";
import PdfViewer from "@/components/notesPage/PdfViewer";
import SamplePaperCard from "@/components/samplePaper/SamplePaperCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPdf } from "../../../GlobalRedux/Features/notifications";

const SamplePaperPage = () => {
  const samplePaperData = [
    {
      subject: "Biology",
      papers: [
        { title: "CBSE Official Sample Paper(Biology) 2023-24", url: "" },
        { title: "Biology SET 5 With Solutions (2021)", url: "" },
        { title: "Biology SET 4 With Solutions (2021)", url: "" },
        { title: "Biology SET 3 With Solutions (2021)", url: "" },
        { title: "Biology SET 2 With Solutions (2021)", url: "" },
        { title: "Biology SET 1 With Solutions (2021)", url: "" },
      ],
    },
    {
      subject: "Chemistry",
      papers: [
        { title: "CBSE Official Sample Paper(Chemistry) 2023-24", url: "" },
        { title: "Chemistry SET 5 With Solutions (2021)", url: "" },
        { title: "Chemistry SET 4 With Solutions (2021)", url: "" },
        { title: "Chemistry SET 3 With Solutions (2021)", url: "" },
        { title: "Chemistry SET 2 With Solutions (2021)", url: "" },
        { title: "Chemistry SET 1 With Solutions (2021)", url: "" },
      ],
    },
    {
      subject: "Physics",
      papers: [
        { title: "CBSE Official Sample Paper(Physics) 2023-24", url: "" },
        { title: "Physics SET 5 With Solutions (2021)", url: "" },
        { title: "Physics SET 4 With Solutions (2021)", url: "" },
        { title: "Physics SET 3 With Solutions (2021)", url: "" },
        { title: "Physics SET 2 With Solutions (2021)", url: "" },
        { title: "Physics SET 1 With Solutions (2021)", url: "" },
      ],
    },
    {
      subject: "Mathematics",
      papers: [
        { title: "CBSE Official Sample Paper(Maths) 2023-24", url: "" },
        { title: "Maths SET 5 With Solutions (2021)", url: "" },
        { title: "Maths SET 4 With Solutions (2021)", url: "" },
        { title: "Maths SET 3 With Solutions (2021)", url: "" },
        { title: "Maths SET 2 With Solutions (2021)", url: "" },
        { title: "Maths SET 1 With Solutions (2021)", url: "" },
      ],
    },
  ];
  const dispatch = useDispatch();
  const isPdf = useSelector((store) => store.notifications.isPdf);
  useEffect(() => {
    return () => {
      dispatch(showPdf(false));
    };
  }, []);
  return (
    <div className="md:w-full w-[95%] mx-auto">
      {isPdf ? (
        <PdfViewer pdfUrl="https://www.sldttc.org/allpdf/21583473018.pdf" />
      ) : (
        samplePaperData.map((sub, index) => (
          <div key={index}>
            <div className=" header header-1 md:w-[35%] w-[90%] my-8">
              <h2 className="md:text-2xl text-base font-bold ribbon">
                {sub.subject}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              {sub.papers.map((paper, i) => (
                <div key={i}>
                  <SamplePaperCard title={paper.title} />
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SamplePaperPage;
