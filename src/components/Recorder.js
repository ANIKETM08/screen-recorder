import React from "react";
import {ReactMediaRecorder} from "react-media-recorder";

function Recorder() {

  return (
    <div className="container">
      <ReactMediaRecorder
        video
        render={({
          status,
          startRecording,
          stopRecording,
          pauseRecording,
          resumeRecording,
          mediaBlobUrl,
        }) => (
          <div>
            {/* <p className="text-center mt-0">{status}</p> */}
            {/* <div>
              <h1 className="text-center text-color mb-5">
                Screen Recording App
              </h1>
            </div> */}
            <video
              className="w-100"
              style={{height: "75vh"}}
              src={mediaBlobUrl}
              controls
              autoPlay
              loop
            />
            <div className="d-flex justify-content-center mb-5 mt-3">
              <button
                className="btn btn-outline-success mx-4"
                onClick={startRecording}>
                Start Recording
              </button>
              <button
                className="btn btn-outline-warning mx-4"
                onClick={pauseRecording}>
                Pause Recording
              </button>
              <button
                className="btn btn-outline-primary mx-4"
                onClick={resumeRecording}>
                Resume Recording
              </button>
              <button
                className="btn btn-outline-danger mx-4"
                onClick={stopRecording}>
                Stop Recording
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default Recorder;
