import React, { Component } from "react";
import SidebarStyles from "./styles/SidebarStyles";
import { FromStorage } from "./LocalStorage";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
    };
    this.onTrigger = this.onTrigger.bind(this);
  }

  // when button is triggered it will send this.state
  // to handleInput(handleLoadStorage) as an arg
  onTrigger = (e) => {
    let savedData = JSON.parse(window.localStorage.getItem("savedSchedule"));
    console.log(savedData);

    this.setState(
      {
        saved: [...this.state.saved, savedData],
      },
      () => {
        console.log(this.state); // setState is async so console log returned as callback
        this.props.handleInput(this.state);
      }
    );
  };

  render() {
    return (
      <SidebarStyles.Sidebar>
        <SidebarStyles.SidebarTitle>
          This is a sidebar
        </SidebarStyles.SidebarTitle>
        <SidebarStyles.SidebarHeader>
          <li>
            <button onClick={this.onTrigger}> Load Recent Schedule </button>
          </li>
          <li>
            <button onClick={localStorage.clear()}> Delete Schedules </button>
          </li>
        </SidebarStyles.SidebarHeader>
        <SidebarStyles.SidebarHistory>
          Schedule History
        </SidebarStyles.SidebarHistory>
      </SidebarStyles.Sidebar>
    );
  }
}

export default Sidebar;
