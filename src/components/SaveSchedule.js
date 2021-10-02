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
    ToStorage();
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
