import React, { useState } from "react";
import HeaderStyles from "./styles/HeaderStyles";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Header = (props) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  let handleStartDate = (date) => {
    let dateArray = [date].join(" ").split(" ");
    dateArray.length = 4; // mutates array to remove time stamp
    updateStartDate(dateArray);
  };

  let handleEndDate = (date) => {
    let dateArray = [date].join(" ").split(" ");
    dateArray.length = 4; // mutates array to remove time stamp
    updateEndDate(dateArray);
  };

  let updateStartDate = (dateArray) => {
    let startDateString = dateArray.join(" ");
    document.getElementById("startDate").innerHTML = startDateString;
    console.log(startDateString);
  };

  let updateEndDate = (dateArray) => {
    let endDateString = dateArray.join(" ");
    document.getElementById("endDate").innerHTML = endDateString;
  };

  return (
    <div>
      <HeaderStyles.Header>Onomichi City BOE Car Schedule</HeaderStyles.Header>
      <HeaderStyles.DatePicker>
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          onCalendarClose={() => {
            handleStartDate(startDate);
            handleEndDate(endDate);
          }}
          withPortal
        />

        {/* <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            handleStartDate(date);
          }}
          placeholderText="Select Start Date"
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => {
            setEndDate(date);
            handleEndDate(date);
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        /> */}
      </HeaderStyles.DatePicker>
      <HeaderStyles.Dates>
        <h2 className="date" id="startDate">
          Mon Jul 26 2021 {/*placeholder date*/}
        </h2>
        <h2 classname="date" id="endDate">
          Fri Jul 30 2021 {/*placeholder date*/}
        </h2>
      </HeaderStyles.Dates>
    </div>
  );
};

export default Header;
