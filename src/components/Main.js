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
      choice: [
        { x: 0, y: 0, h: 1, w: 1, name: "BOE" },
        { x: 1, y: 0, h: 1, w: 1, name: "City" },
        { x: 2, y: 0, h: 1, w: 1, name: "Special" },
      ],
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
      acceptWidgets: function (el) {
        return true;
      },
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

    const options = {
      column: 1,
      float: true,
      cellHeight: "80px",
      minRow: 3,
      maxRow: 3,
      acceptWidgets: function (el) {
        return true;
      },
    };

    this.carGrid = GridStack.addGrid(
      document.getElementById("carWrapper"),
      options
    );

    const carNode = this.state.choice; // car choices array
    for (let i = 0; i < carNode.length; i++) {
      carNode.id = carNode.content = carNode[i].name;
      carNode.x = carNode[i].x;
      carNode.y = carNode[i].y;
      carNode.w = carNode[i].w;
      carNode.h = carNode[i].h;
      this.carGrid.addWidget(carNode);
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

  render() {
    return (
      <div id="thisDiv">
        <button type="button" onClick={this.addNewWidget}>
          Add Widget
        </button>
        {this.state.info}
        <MainStyles.GridContainer>
          <MainStyles.GridWrapper id="gridWrapper">
            <section className="grid-stack grid-stack-N"></section>
          </MainStyles.GridWrapper>
          <MainStyles.CarWrapper id="carWrapper"></MainStyles.CarWrapper>
        </MainStyles.GridContainer>
      </div>
    );
  }
}

export default Main;
