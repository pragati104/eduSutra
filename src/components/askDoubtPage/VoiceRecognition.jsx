import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the component to ensure it's only executed on the client-side
const SpeechRecognition = dynamic(() =>
  import("react-speech-recognition").then((module) => module.default)
);

const VoiceRecognition = () => {
  useEffect(() => {
    // Ensure that the component is only executed on the client-side
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      // Perform any client-side initialization here
    }
  }, []);

  if (typeof window === "undefined") {
    // Return a placeholder if rendering on the server-side
    return <span>Loading...</span>;
  }

  return (
    <div>
      <SpeechRecognition>
        {({ transcript, listening, resetTranscript }) => (
          <div>
            <p>Microphone: {listening ? "on" : "off"}</p>
            <button onClick={() => SpeechRecognition.startListening()}>
              Start
            </button>
            <button onClick={() => SpeechRecognition.stopListening()}>
              Stop
            </button>
            <button onClick={() => resetTranscript()}>Reset</button>
            <p>{transcript}</p>
          </div>
        )}
      </SpeechRecognition>
    </div>
  );
};

export default VoiceRecognition;
