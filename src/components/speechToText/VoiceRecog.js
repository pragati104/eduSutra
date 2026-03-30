import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const VoiceRecog = () => {
  const { isRecording } = useSelector((store) => store.askQuestion);
  const [note, setNote] = useState(null);
  const [notesStore, setNotesStore] = useState([]);
  const dispatch = useDispatch();

  console.log(isRecording);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const microphone = new SpeechRecognition();

  microphone.continuous = true;
  microphone.interimResults = true;
  microphone.lang = "en-US";

  const startRecordController = () => {
    if (isRecording) {
      microphone.start();
      microphone.onend = () => {
        console.log("continue..");
        microphone.start();
      };
    } else {
      microphone.stop();
      microphone.onend = () => {
        console.log("Stopped microphone on Click");
      };
    }
    microphone.onstart = () => {
      console.log("microphones on");
    };

    microphone.onresult = (event) => {
      const recordingResult = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(recordingResult);
      setNote(recordingResult);
      microphone.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const storeNote = () => {
    setNotesStore([...notesStore, note]);
    setNote("");
  };

  useEffect(() => {
    // startRecordController();
  }, [isRecording]);
  return (
    <>
      <div>
        <div className="noteContainer">
          {isRecording ? <span>Recording... </span> : <span>Stopped </span>}
          <button className="button" onClick={storeNote} disabled={!note}>
            Save
          </button>
          <button onClick={() => dispatch()}>Start/Stop</button>
          <p>{note}</p>
        </div>
        <div className="noteContainer">
          {notesStore.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default VoiceRecog;
