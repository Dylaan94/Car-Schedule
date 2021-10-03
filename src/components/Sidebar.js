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

  updateScheduleHistory() {
    console.log("updating schedule history");
    console.log(this.state);

    return () => {
      <div>{this.props.values.startDate}</div>;
    };
  }

  render() {
    const { values } = this.props;
    return (
      <SidebarStyles.Sidebar>
        <SidebarStyles.SidebarHistory>
          {console.log(values)}
          <h2> Schedule History </h2>
          <div className="scheduleHistory">
            {/* maps data and displays on sidebar when the component is updated
            this happens when the save schedule component is clicked */}
            {values.map((data) => (
              <div className="savedDataList"> {data.startDate} </div>
            ))}
          </div>
        </SidebarStyles.SidebarHistory>
      </SidebarStyles.Sidebar>
    );
  }
}

export default Sidebar;
