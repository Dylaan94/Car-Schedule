import React from "react";
import SidebarStyles from "./styles/SidebarStyles"
import {FromStorage} from "./LocalStorage"

const Sidebar = (props) => {
  return (
    <SidebarStyles.Sidebar>
      <SidebarStyles.SidebarTitle>This is a sidebar</SidebarStyles.SidebarTitle>
      <SidebarStyles.SidebarHeader>
        <li>
          <button onClick = {FromStorage}>Load Recent Schedule </button>
        </li>
        <li><button onClick = {localStorage.clear()}> Delete Schedules </button></li>
      </SidebarStyles.SidebarHeader>
      <SidebarStyles.SidebarHistory>
        Schedule History
      </SidebarStyles.SidebarHistory>
    </SidebarStyles.Sidebar>
  );
};

export default Sidebar;
