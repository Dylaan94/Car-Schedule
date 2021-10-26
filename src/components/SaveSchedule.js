import React, { Component } from "react";
import { ToStorage, prepareForStorage } from "./LocalStorage";

class SaveSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
    };
    this.onTrigger = this.onTrigger.bind(this);
  }

  onTrigger(e) {
    //send data to storage, will be prepared and then sent
    prepareForStorage();
    // ToStorage();

    //retrieve data and set in state
    let savedData = JSON.parse(window.localStorage.getItem("savedSchedule"));
    console.log(savedData);

    // check if state exists
    // if it does not

    this.setState(
      {
        saved: savedData,
      },
      () => {
        console.log(this.state); // setState is async so console log returned as callback
        this.props.handleInput(this.state.saved); // send saved data to handleInput in main
      }
    );

    //need some sort of functionality that updates the array so that saved data updates

    //   this.setState(previousState => ({
    //       saved: [...previousState.saved, savedData]
    //   },
    //       ()=> {
    //           console.log(this.state);
    //           this.props.handleInput(this.state.saved)
    //   }))

    // if state already exists, add to state
  }

  render() {
    return (
      <div>
        <button className="saveScheduleButton" onClick={this.onTrigger}>
          Save Schedule
        </button>
      </div>
    );
  }
}

export default SaveSchedule;
