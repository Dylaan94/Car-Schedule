import React, { useState } from "react";
import HeaderStyles from "./styles/HeaderStyles";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Header = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  let handleFirstDate = () => {
    console.log("storing first date")
  }

  let handleSecondDate = () => {
    console.log("storing second date")
  }

  return (
    <div>
      <HeaderStyles.Header>Onomichi City BOE Car Schedule</HeaderStyles.Header>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date), handleFirstDate}

        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date), handleSecondDate}
        />
      </div>
    </div>
  );
};

export default Header;
