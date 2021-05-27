import React, { Component } from "react";

import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";

import "gridstack/dist/h5/gridstack-dd-native";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      info: "",
      items: [
        { x: 2, y: 1, h: 2 },
        { x: 2, y: 4, w: 3 },
        { x: 4, y: 2 },
        { x: 3, y: 1, h: 2 },
        { x: 0, y: 6, w: 2, h: 2 },
      ],
    };
  }

  componentDidMount() {
    // once the component mounts it initialises the gridstack
    this.grid = GridStack.init({
      float: true,
      cellHeight: "200px",
      minRow: 1,
    });

    this.grid.on("dragstop", (event, element) => {
      const node = element.gridstackNode;
      this.setState({
        info: `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`,
      });

      // Clear the info text after a two second timeout.
      // Clears previous timeout first.
      window.clearTimeout(this.timerId);
      this.timerId = window.setTimeout(() => {
        this.setState({
          info: "",
        });
      }, 2000);
    });
  }

  addNewWidget = () => {
    const node = this.state.items[this.state.count] || {
      x: 1,
      y: 1,
      w: 50,
      h: 50,
    }
    node.id = node.content = String(this.state.count);
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.grid.addWidget(node);
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.addNewWidget}>
          Add Widget
        </button>
        {this.state.info}
        <section class="grid-stack"></section>
      </div>
    );
  }
}

export default Main;
