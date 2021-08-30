import { Component } from "react";
import { dataArray } from "./Logic";

let dataArrayFromStorage;

let ToStorage = (props) => {
  // const {} = props
  // uses JSON to store data as a string in local storage
  let dataArray_serialised = JSON.stringify(dataArray);
  window.localStorage.setItem("savedSchedule", dataArray_serialised);
  console.log("Saved to storage!");

  return <div></div>;
};

const FromStorage = (props) => {
  const { FromStorage } = props
  // parse from string
  let dataArray_deserialised = JSON.parse(
    window.localStorage.getItem("savedSchedule")
  );
  let dataArrayFromStorage = dataArray_deserialised;
    console.log(dataArrayFromStorage)
  return (
    <div>
      {dataArrayFromStorage}
    </div>
  )
};


export { ToStorage, FromStorage, dataArrayFromStorage };

