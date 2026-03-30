"use client";
import { showPdf } from "@/GlobalRedux/Features/notifications";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { Document, Page, pdfjs } from "react-pdf";
import { useDispatch } from "react-redux";
import Arrow from "../common/Arrow";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer({ pdfUrl, type }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  const dispatch = useDispatch();

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  function onPageLoadSuccess() {
    setPageWidth(window.innerWidth);
    setLoading(false);
  }

  const options = useMemo(
    () => ({
      cMapUrl: "cmaps/",
      cMapPacked: true,
      standardFontDataUrl: "standard_fonts/",
    }),
    []
  );

  // Go to next page
  function goToNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  async function downloadPdf() {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = pdfUrl.split("/").pop();
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  }

  return (
    <div className="md:w-[75%] w-[95%] mx-auto min-h-[90vh]">
      <div className="md:w-[60%] w-[90%] rounded-md mx-auto flex items-center justify-between fixed top-16 z-50 bg-primaryLight px-2">
        <Arrow type="back" click={() => dispatch(showPdf())} />
        <div className="w-[90%] flex items-center justify-evenly">
          <button
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
            className={`${
              pageNumber <= 1 && "opacity-35"
            } relative text-gray-600 border-2 border-primaryDark shadow-md rounded-md p-2`}
          >
            <span className="text-white flex items-center gap-1 md:text-base text-sm">
              <FaChevronLeft size={20} /> Previous
            </span>
          </button>

          <div className="flex items-center">
            <div className="bg-gray-900 text-white rounded-md md:px-3 md:py-2 px-2 py-1 text-sm font-medium">
              <span>{pageNumber}</span>
              <span className="text-gray-400"> / {numPages}</span>
            </div>
          </div>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className={`${
              pageNumber >= numPages && "opacity-35"
            } relative text-gray-600 border-2 border-primaryDark shadow-md rounded-md p-2`}
          >
            <span className="text-white md:text-base text-sm flex items-center gap-1">
              Next
              <FaChevronRight size={20} />
            </span>
          </button>
        </div>
        <button
          onClick={downloadPdf}
          className={`bg-primaryDark text-white p-1 rounded-md ${
            type === "notes" ? "opacity-0" : "opacity-100"
          }`}
        >
          <HiOutlineDownload size={20} />
        </button>
      </div>

      <div hidden={loading} className="flex items-center pt-16">
        <div className="h-fit flex justify-center mx-auto">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            renderMode="canvas"
            className=""
          >
            <Page
              className=""
              key={pageNumber}
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              onLoadSuccess={onPageLoadSuccess}
              onRenderError={() => setLoading(false)}
              width={Math.max(pageWidth * 0.5, 390)}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default PdfViewer;
