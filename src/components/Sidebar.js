import React from "react";
import SidebarStyles from "./styles/SidebarStyles"
import {FromStorage} from "./LocalStorage"

const Sidebar = (props) => {
  const { value, handleInput } = props
  


  return (
    <SidebarStyles.Sidebar>
      {console.log("hello")}
      <SidebarStyles.SidebarTitle>This is a sidebar</SidebarStyles.SidebarTitle>
      <SidebarStyles.SidebarHeader>
        <li>
          <button onClick= {handleInput}>Load Recent Schedule </button>
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
};

export default Sidebar;
