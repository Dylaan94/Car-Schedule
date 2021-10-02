import React, { Component } from "react";
import { ToStorage } from "./LocalStorage";

class SaveSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
    };
    this.onTrigger = this.onTrigger.bind(this);
  }

  onTrigger(e) {
    //send data to storage
    ToStorage();

    //retrieve data and set in state
    let savedData = JSON.parse(window.localStorage.getItem("savedSchedule"));
    console.log(savedData);

    this.setState(
      {
        saved: savedData,
      },
      () => {
        console.log(this.state); // setState is async so console log returned as callback
        this.props.handleInput(this.state.saved); // send saved data to handleInput in main
      }
    );
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
