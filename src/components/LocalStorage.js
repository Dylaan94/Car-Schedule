import {dataArray} from "./Logic"



let ToStorage = () => {
    let dataArray_serialised = JSON.stringify(dataArray)
    window.localStorage.setItem('saved schedule', dataArray_serialised)
}

let FromStorage = () => {

}

let Test = () => {
    console.log(dataArray)
}


export default Test