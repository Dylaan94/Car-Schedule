import React, { Component } from "react";
import MaterialTable from "material-table";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MaterialTable
          columns={[
            { title: "Day", field: "Monday" },
            { title: "Marie" },
            { title: "Imelda" },
            { title: "Carina" },
            { title: "Jessica" },
            { title: "Michael" },
            { title: "Haniel" },
            { title: "Erik" },
            { title: "Dylan" },
          ]}
          title="Bronomichi Car Schedule"
        ></MaterialTable>
        this is the main bit yo
      </div>
    );
  }
}

export default Main;
