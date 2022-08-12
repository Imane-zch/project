import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Moment from "react-moment";
import Calendar from "react-calendar";
import MoodLog from "../moodLog/MoodLog";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function Period() {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState("28");

  const date = value;
  console.log(cycle);
  const cycleLength = parseInt(cycle);

  return (
    <>
      <div className="text-center">
        <label className="cyclelegnth" for="cycle">
          Select your cycle length :{" "}
        </label>
        <select
          onChange={(e) => cycleValue(e.target.value)}
          defaultValue={cycle}
          className="m-2"
        >
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
      </div>

      <p className="text-center2">Select your last period start date:</p>
      <div className="calendarbox">
        <div className="d-flex justify-content-center ">
          <Calendar
            onChange={onChange}
            value={value}
            className="calendar mt-0"
          />
        </div>
      </div>
      <div className="text-centermt-4p-2">
        <div className="row">
          <div class="d-flex justify-content-center">
            <div className="col-md-3 m-3 box ">
              <p>Next Period:</p>

              <Moment format="Do MMMM YYYY" add={{ days: cycleLength - 1 }}>
                {date}
              </Moment>
            </div>
            <div className="col-md-3 m-3 box ">
              <p>Ovulation Day:</p>
              <Moment
                format="Do MMMM YYYY"
                add={{ days: cycleLength - 1 - 14 }}
              >
                {date}
              </Moment>
            </div>
          </div>
          <div className="text-center">
            <MoodLog />
          </div>
          <button className="savemood">Save</button>
        </div>
        <Routes>
          <Route path="/Period" element={<Period />} />
        </Routes>
      </div>
    </>
  );
}

export default Period;
