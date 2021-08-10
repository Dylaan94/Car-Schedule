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
    type: widgetData.id,
    h: widgetData.h,
    w: widgetData.w,
    x: widgetData.x,
    y: widgetData.y,
    id: String(widgetData.x) + String(widgetData.y),
  //  index: dataArray.length,
  };

  console.log(data);
  // push data to array to be stored.
  dataArray.push(data);
  console.log(dataArray);
};

let removeFromDataArray = (node) => {
  console.log("removing");
  let widgetData = node;
  let id = String(widgetData.x) + String(widgetData.y);
  // checks if id already exists (that space has already been populated)
  for (let i = 0; i < dataArray.length; i++) {
    if ((dataArray[i].id == id)) {
      // removes from array based on index
    //  let index = dataArray[i].index;
      dataArray.splice(i, 1);
      console.log(dataArray);
    }
  }
};


export { addToDataArray, removeFromDataArray };
