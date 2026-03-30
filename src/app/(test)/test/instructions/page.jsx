"use client";
import StartButton from "@/components/testPage/StartButton";
import { FaCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";

const InstructionsPage = () => {
  const insData = {
    nextGenEnglish: [
      "This test contains 20 questions.",
      "Total duration of the test is 20 minutes.",
      "You will earn 1 mark for every question answered correctly.",
      "No marks will be deducted for indicating incorrect response for each question.",
      "No deduction from the total score will be made if no response is indicated.",
      "The countdown timer at the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself.",
      "Use a scribble pad for any rough work.",
      "You are not allowed to use a calculator.",
    ],
    nextGenHindi: [
      "यह टेस्ट 20 प्रश्नों से संबंधित है।",
      "टेस्ट का कुल समय 20 मिनट है।",
      "प्रत्येक सही उत्तर के लिए आपको 1 अंक प्राप्त होगा।",
      "प्रत्येक प्रश्न के लिए गलत प्रतिक्रिया की निर्देशिका करने के लिए कोई अंक कटाई नहीं की जाएगी।",
      "यदि कोई प्रतिक्रिया नहीं दी गई है तो कुल स्कोर से कोई कटौती नहीं की जाएगी।",
      "स्क्रीन के शीर्ष दाईं ओर काउंटडाउन टाइमर आपको परीक्षा पूरी करने के लिए शेष समय दिखाएगा। जब टाइमर शून्य पर पहुँचेगा, तो परीक्षा स्वयं ही समाप्त हो जाएगी।",
      "किसी भी कठिन काम के लिए एक स्क्रिबल पैड का उपयोग करें।",
      "आपको कैलकुलेटर का उपयोग करने की अनुमति नहीं है।",
    ],
    generalInstructionsEnglish: [
      "Total time available for this test will be displayed on the next screen.",
      "The clock has been set at the server and the countdown timer at the top right corner of your screen will display the time remaining for you to complete the exam. When the clock runs out the exam ends by default - you are not required to end or submit your exam.",
      "The question palette at the right of screen shows one of the following statuses of each of the questions numbered:",
    ],
    generalInstructionsHindi: [
      "इस परीक्षा के लिए कुल समय अगली स्क्रीन पर प्रदर्शित किया जाएगा।",
      "सर्वर पर घड़ी सेट की गई है और आपकी स्क्रीन के ऊपरी दाईं कोने पर बचा हुआ टाइमर परीक्षा पूरी करने के लिए बचा समय प्रदर्शित करेगा। जब घड़ी खत्म हो जाती है तो परीक्षा स्वतः ही समाप्त हो जाती है - आपको परीक्षा समाप्त करने या सबमिट करने की आवश्यकता नहीं है।",
      "स्क्रीन के दाईं ओर प्रश्न पैलेट में प्रत्येक प्रश्न के नंबर का एक स्थिति प्रदर्शित करता है:",
    ],
    navigateQuestionEnglish: [
      " Click on the question number on the question palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.",
      "Click on Save and Next to save answer to current question and to go to the next question in sequence.",
      "Click on Mark for Review and Next to save answer to current question, mark it for review, and to go to the next question in sequence.",
    ],
    navigateQuestionHindi: [
      "सीधे उस नंबर पर जाने के लिए प्रश्न पैलेट पर प्रश्न संख्या पर क्लिक करें। ध्यान दें कि इस विकल्प का उपयोग आपके वर्तमान प्रश्न का उत्तर सहेजने वाला नहीं है।",
      "वर्तमान प्रश्न का उत्तर सहेजने और आगे के प्रश्न में जाने के लिए सहेजें और अगले पर क्लिक करें।",
      "वर्तमान प्रश्न का उत्तर सहेजने, उसे समीक्षा के लिए चिह्नित करने और आगे के प्रश्न में जाने के लिए सहेजें और मार्क पर क्लिक करें।",
    ],
    navSectionEnglish: [
      "Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the section name. The section you are currently viewing is highlighted.",
      "After clicking the Save & Next button on the last question for a section, you will automatically be taken to the first question of the next section.",
      "You can move the mouse cursor over the section names to view the status of the questions for that section.",
      "You can shuffle between sections and questions anytime during the examination as per your convenience.",
    ],
    navSectionHindi: [
      "इस प्रश्न पत्र में धारिता ऊपरी पट्टी पर प्रदर्शित की जाती है। एक खंड में प्रश्न को उसके नाम पर क्लिक करके देखा जा सकता है। आप जिस धारिता को वर्तमान में देख रहे हैं, उसे हाइलाइट किया गया है।",
      "एक खंड के लिए आखिरी प्रश्न पर सेव और आगे पर क्लिक करने के बाद, आपको स्वचालित रूप से अगले खंड के पहले प्रश्न पर ले जाया जाएगा।",
      "आप संचारों के नामों पर माउस कर्सर ले जाने से उस खंड के प्रश्नों की स्थिति देख सकते हैं।",
      "आप परीक्षा के दौरान किसी भी समय अपनी सुविधा के अनुसार खंडों और प्रश्नों के बीच शफ़ल कर सकते हैं।",
    ],
    answerQuestionEnglish: [
      "To select your answer, click on one of the option buttons",
      "To change your answer, click the another desired option button",
      "To save your answer, you MUST click on Save & Next",
      "To deselect a chosen answer, click on the chosen option again or click on the Clear Response button.",
      "To mark a question for review click on Mark for Review & Next. If an answer is selected for a question that is Marked for Review, the answer will be considered in the final evaluation.",
    ],
    answerQuestionHindi: [
      "अपना उत्तर चुनने के लिए, विकल्प बटन पर क्लिक करें",
      "अपना उत्तर बदलने के लिए, दूसरे इच्छित विकल्प बटन पर क्लिक करें",
      "अपना उत्तर सहेजने के लिए, आपको अनिवार्य रूप से 'सेव और आगे' पर क्लिक करना होगा",
      "चयनित उत्तर को अनचुना करने के लिए, पुनः चयनित विकल्प पर फिर से क्लिक करें या 'क्लियर प्रतिक्रिया' बटन पर क्लिक करें।",
      "समीक्षा के लिए एक प्रश्न को चिह्नित करने के लिए 'समीक्षा के लिए चिह्नित और आगे' पर क्लिक करें। अगर कोई प्रश्न जिसके लिए समीक्षा किया गया है, का उत्तर चुना जाता है, तो उत्तर को अंतिम मूल्यांकन में ध्यान में लिया जाएगा।",
    ],
    answerEnglish: [
      "You have not visited the question yet.",
      "You have not answered the question.",
      "You have answered the question.",
      "You have NOT answered the question but have marked the question for review.",
      "You have answered the question but marked it for review.",
    ],
    answerHindi: [
      "आपने अभी तक प्रश्न को नहीं देखा है।",
      "आपने प्रश्न का उत्तर नहीं दिया है।",
      "आपने प्रश्न का उत्तर दिया है।",
      "आपने प्रश्न का उत्तर नहीं दिया है, लेकिन प्रश्न को समीक्षा के लिए चिह्नित किया है।",
      "आपने प्रश्न का उत्तर दिया है, लेकिन इसे समीक्षा के लिए चिह्नित किया है।",
    ],
    colors: [
      "bg-white text-black",
      "bg-red-600 text-white",
      "bg-green-600 text-white",
      "bg-fuchsia-900 text-white",
      "bg-fuchsia-900 text-white",
    ],
  };

  const { next, language } = useSelector((store) => store.test);

  return (
    <>
      {next ? (
        <div className="md:w-[90%] w-[90%] mx-auto md:text-sm text-xs list-none  flex-1 overflow-y-auto no-scrollbar ">
          <div className=" header header-1 lg:w-[20%] w-[70%] my-8 md:mx-0 mx-auto">
            <h2 className="md:text-2xl text-base font-bold ribbon">
              General Instructions:
            </h2>
          </div>
          <ul className="md:ml-12">
            {insData[`nextGen${language}`].map((gen, id) => (
              <div key={id} className="flex my-3 gap-1">
                <p>{id + 1}.</p> <p>{gen}</p>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className="md:w-[90%] w-[90%] mx-auto md:text-sm text-xs list-none  flex-1 overflow-y-auto no-scrollbar">
          <div>
            <div className="header header-1 lg:w-[32%] w-[70%] my-8 mx-auto">
              <h2 className="md:text-2xl text-sm font-bold ribbon">
                Read the following instructions carefully.
              </h2>
            </div>
          </div>
          <div>
            <p className="font-semibold md:text-lg text-base my-2 underline">
              General Instructions:
            </p>
            <div className="ml-4">
              {insData[`generalInstructions${language}`].map((inst, id) => (
                <div key={id} className="flex  my-2 gap-1">
                  <p>{id + 1}.</p> <p>{inst}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="ml-4 my-6 shadow-md rounded-md p-2 w-fit hover:shadow-xl">
            {insData[`answer${language}`].map((ans, i) => (
              <div key={i} className="flex items-center my-2 gap-1">
                <div
                  className={`relative md:w-8 md:h-8 w-6 h-6 pt-0.5 mr-2 border border-black rounded-full  ${insData.colors[i]}  text-center   font-semibold md:text-base text-sm`}
                >
                  {i + 1}
                  {i === 3 && (
                    <span className="rounded-full w-4 h-4  absolute  bg-white   lg:-top-1 -top-2 lg:left-5 left-3 right-0.5  text-center">
                      <FaCheck
                        className="bg-green-500 ml-0.5 -mb-1 p-0.5 rounded-full text-white text-center"
                        size={15}
                      />
                    </span>
                  )}
                </div>
                <p className="w-[80%]">{ans}</p>
              </div>
            ))}
          </div>

          <div>
            <p>
              The Marked for Review status simply acts as a reminder that you
              have set to look at the question again. If an answer is selected
              for a question that is Marked for Review, the answer will be
              considered in the final evaluation.
            </p>
          </div>
          <div>
            <p className="font-semibold md:text-lg text-base my-2 underline">
              {" "}
              Navigating to a question:
            </p>
            <p className="ml-4">
              {" "}
              4. To select a question to answer, you can do one of the
              following:
            </p>

            <div className="ml-8">
              {insData[`navigateQuestion${language}`].map((navi, ind) => (
                <div key={ind} className="flex  my-2 gap-1">
                  <p>{ind + 1}.</p> <p>{navi}</p>
                </div>
              ))}
            </div>
            <p className="ml-4">
              5. You can view the entire paper by clicking on the Question Paper
              button.
            </p>
            <p className="font-semibold md:text-lg text-base my-2 underline">
              Answering questions:
            </p>
            <p className="ml-4">6. For multiple choice type question :</p>

            <div className="ml-8">
              {insData[`answerQuestion${language}`].map((ans, i) => (
                <div key={i} className="flex  my-2 gap-1">
                  <p>{i + 1}.</p> <p>{ans}</p>
                </div>
              ))}
            </div>
            <p className="my-2 ml-4">
              7. To change an answer to a question, first select the question
              and then click on the new answer option followed by a click on the
              Save & Next button.{" "}
            </p>
            <p className="my-2 ml-4">
              8. Questions that are saved or marked for review after answering
              will ONLY be considered for evaluation.
            </p>
            <p className="font-semibold md:text-lg text-base my-2 underline">
              Navigating through sections:
            </p>
            <div className="ml-4">
              {insData[`navSection${language}`].map((sec, index) => (
                <div key={index} className="flex my-2 gap-1">
                  <p>{index + 7}.</p> <p>{sec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="my-2">
        <StartButton />
      </div>
    </>
  );
};

export default InstructionsPage;
