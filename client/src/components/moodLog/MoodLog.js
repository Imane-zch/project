import React, { useState } from "react";

export default function MoodLog() {
  const [mood, setMood] = useState([]);

  return (
    <div>
      <label className="selectmoodtext" for="cycle">Select your mood for today : </label>
      <select
        onChange={(e) => setMood(e.target.value)}
        defaultValue={mood}
        className="moodselect"
      >
        <option className="great" value="great">Great 😄</option>
        <option className="soso" value="medium">So so 😶</option>
        <option className="horrible" value="horrible">Awful 😓</option>
      </select>
    </div>
  );
}
