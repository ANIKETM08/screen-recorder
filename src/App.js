import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import {Routes, Route} from "react-router-dom";
import Recorder from "./components/Recorder";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import axios from "axios";
import Private from "./components/routes/Private";

function App() {
  axios.defaults.baseURL = "https://screen-recorder-api.onrender.com";
  axios.defaults.withCredentials = true;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />}>
          <Route path="recorder" element={<Recorder />} />
        </Route>
        {/* <Route path="/user" element={<Private />}>
          <Route path="recorder" element={<Recorder />} />
        </Route> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
