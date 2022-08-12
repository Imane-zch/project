import React from "react";
import "../../App.css";
import MoodLogTest from "../../components/moodLog/MoodLogTest"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function TestLog (props) {
  return (
    <div className="App">
      <h2>Hello, how are you feeling today?</h2>
      <span>😀 😐 🙁 </span>
      <MoodLogTest />
    </div>
  );
}

export default TestLog;