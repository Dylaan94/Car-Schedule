import { dataArray } from "./Logic";

let ToStorage = () => {
  // uses JSON to store data as a string in local storage
  let dataArray_serialised = JSON.stringify(dataArray);
    window.localStorage.setItem("savedSchedule", dataArray_serialised);
    console.log("Saved to storage!")
};

let FromStorage = () => {
  // parse from string
  let dataArray_deserialised = JSON.parse(
    window.localStorage.getItem("savedSchedule")
  );
  let dataArrayFromStorage = dataArray_deserialised;
  console.log(dataArrayFromStorage);
};

let Test = () => {
  console.log(dataArray);
};

export { Test, ToStorage, FromStorage };
