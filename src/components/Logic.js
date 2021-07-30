import React from "react";

const dataArray = [];

const DaysOfWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const Names = {
  1: "Dylan",
  2: "Erik",
  3: "Han",
  4: "Michael",
  5: "Oscar",
  6: "Jess",
  7: "Carina",
  8: "Marie",
  9: "Imelda",
};

//takes in data from grid on drop

let addToDataArray = (node) => {
  // set data based on DaysOfWeek and Names object
  let widgetData = node;
  let data = {
    day: DaysOfWeek[widgetData.y],
    name: Names[widgetData.x],
  };
  // assign to widgetData object
  Object.assign(widgetData, data);
    console.log(widgetData);

    dataArray.push(widgetData)
    console.log(dataArray)
};

export default addToDataArray;
