// Organise and maintain data that will be moved into state

const dataArray = [];
const preparedDataArray = [];
let dataArrayFromStorage;

const DaysOfWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Last Friday",
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

//takes in data from grid on drop in Main.js
let addToDataArray = (node) => {
  // set data based on DaysOfWeek and Names object
  let widgetData = node;

  let data = {
    startDate: document.getElementById("startDate").innerHTML,
    endDate: document.getElementById("endDate").innerHTML,
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

// deletes widget from dataArray whilst it is being moved
let removeFromDataArray = (node) => {
  console.log("removing");
  let widgetData = node;
  let id = String(widgetData.x) + String(widgetData.y);
  // checks if id already exists (that space has already been populated)
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id == id) {
      // removes from array based on index
      //  let index = dataArray[i].index;
      dataArray.splice(i, 1);
      console.log(dataArray);
    }
  }
};

let prepareForStorage = () => {
  let preparedDataArray = [dataArray]
  console.log(preparedDataArray)
  ToStorage(preparedDataArray);
}

let ToStorage = (preparedDataArray) => {
  // uses JSON to store data as a string in local storage
  let dataArray_serialised = JSON.stringify(preparedDataArray);
  window.localStorage.setItem("savedSchedule", dataArray_serialised);
  console.log("Saved to storage!");
};

const FromStorage = () => {
  // parse from string
  let dataArray_deserialised = JSON.parse(
    window.localStorage.getItem("savedSchedule")
  );
  let dataArrayFromStorage = dataArray_deserialised;
  console.log(dataArrayFromStorage);
};

export {
  prepareForStorage,
  ToStorage,
  FromStorage,
  addToDataArray,
  removeFromDataArray,
  dataArrayFromStorage,
};
