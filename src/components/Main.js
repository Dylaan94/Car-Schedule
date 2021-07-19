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
        { x: 0, y: 0, h: 1, w: 2 },
        { x: 2, y: 0, h: 1, w: 2 },
        { x: 4, y: 0, h: 1, w: 2 },
        { x: 6, y: 0, h: 1, w: 2 },
        { x: 8, y: 0, h: 1, w: 2 },
        { x: 10, y: 0, h: 1, w: 2 },
      ],
    };
  }

  

  componentDidMount() {
    // once the component mounts it initialises the gridstack
    this.grid = GridStack.init({
      float: true,
      cellHeight: "100px",
      minRow: 6,
      maxRow: 6,
    });

    // rendering each node as 0 instead of its number - CHECK

    const node = this.state.items;
    node.forEach(() => {
      node.id = node.content = String(this.state.count);
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
      this.grid.addWidget(node);
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
      w: 1,
      h: 2,
    };
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
        <section className="grid-stack"></section>
      </div>
    );
  }
}

export default Main;
