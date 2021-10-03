import React, { Component } from "react";
import SidebarStyles from "./styles/SidebarStyles";
import { FromStorage } from "./LocalStorage";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
    };

    this.updateScheduleHistory = this.updateScheduleHistory.bind(this);
  }

  updateScheduleHistory(values) {
    /* maps data and displays on sidebar when the component is updated
  this happens when the save schedule component is clicked */
    return (
      <div>
        {values.map((data) => (
          <div className="savedDataList"> {data.startDate} </div>
        ))}
      </div>
    );
  }

  render() {
    const { values } = this.props;
    return (
      <SidebarStyles.Sidebar>
        <SidebarStyles.SidebarHistory>
          {console.log(values)}
          <h2> Schedule History </h2>
          <div className="scheduleHistory">
            {this.updateScheduleHistory(values)}
          </div>
        </SidebarStyles.SidebarHistory>
      </SidebarStyles.Sidebar>
    );
  }
}

export default Sidebar;
