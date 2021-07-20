import React, { Component } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/gridstack-extra.css";

import MainStyles from "./styles/MainStyles";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      info: "",
      items: [
        { x: 0, y: 0, h: 1, w: 1, name: "Day" },
        { x: 1, y: 0, h: 1, w: 1, name: "Dylan" },
        { x: 2, y: 0, h: 1, w: 1, name: "Erik" },
        { x: 3, y: 0, h: 1, w: 1, name: "Han" },
        { x: 4, y: 0, h: 1, w: 1, name: "Michael" },
        { x: 5, y: 0, h: 1, w: 1, name: "Oscar" },
        { x: 6, y: 0, h: 1, w: 1, name: "Jess" },
        { x: 7, y: 0, h: 1, w: 1, name: "Carina" },
        { x: 8, y: 0, h: 1, w: 1, name: "Marie" },
        { x: 9, y: 0, h: 1, w: 1, name: "Imelda" },
        { x: 0, y: 1, h: 1, w: 1, name: "Monday" },
        { x: 0, y: 2, h: 1, w: 1, name: "Tuesday" },
        { x: 0, y: 3, h: 1, w: 1, name: "Wednesday" },
        { x: 0, y: 4, h: 1, w: 1, name: "Thursday" },
        { x: 0, y: 5, h: 1, w: 1, name: "Friday" },
        { x: 0, y: 6, h: 1, w: 1, name: "Last Friday" },
      ],
      choice: [{}],
    };
  }

  componentDidMount() {
    // once the component mounts it initialises the gridstack
    this.grid = GridStack.init({
      column: 10,
      float: true,
      cellHeight: "80px",
      minRow: 7,
      maxRow: 7,
    });

    this.carGrid = GridStack.init({
      column: 3,
      float: true,
      cellHeight: "80px",
      minRow: 2,
      maxRow: 2,
    });

    // renders initial items in state and sets id as name
    const node = this.state.items; // array

    for (let i = 0; i < node.length; i++) {
      node.id = node.content = String(this.state.items[i].name);
      node.x = node[i].x;
      node.y = node[i].y;
      node.w = node[i].w;
      node.h = node[i].h;
      node.noResize = true;
      node.locked = true;
      node.noMove = true;
      this.grid.addWidget(node);
    }

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    console.log(node);

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
      x: 4,
      y: 6,
      w: 1,
      h: 2,
    };
    node.id = node.content = String(this.state.count);
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    this.grid.addWidget(node);
  };

  addCars = () => {
    const options = {
      column: 3,
      float: true,
      cellHeight: "80px",
      minRow: 2,
      maxRow: 2,
    };

    GridStack.addGrid(document.getElementById("carWrapper"), options);
  };

  render() {
    return (
      <div id="thisDiv">
        <button type="button" onClick={this.addNewWidget}>
          Add Widget
        </button>
        <button type="button" onClick={this.addCars}>
          Add Cars
        </button>
        {this.state.info}
        <MainStyles.GridWrapper id="gridWrapper">
          <section className="grid-stack grid-stack-N"></section>
        </MainStyles.GridWrapper>
        <MainStyles.CarWrapper id="carWrapper"></MainStyles.CarWrapper>
      </div>
    );
  }
}

export default Main;
