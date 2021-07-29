import React, { Component } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/gridstack-extra.css";

import MainStyles from "./styles/MainStyles";
import addToDataArray from "./Logic"

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
      acceptWidgets: true,
    });

    // renders initial items in state and sets id as name
    const node = this.state.items; // array

    // sets placement based on data in state
    for (let i = 0; i < node.length; i++) {
      node.id = node.content = String(this.state.items[i].name);
      node.x = node[i].x;
      node.y = node[i].y;
      node.h = node[i].h;
      node.w = node[i].w;

      node.noResize = true;
      node.locked = true;
      node.noMove = true;
      this.grid.addWidget(node);
    }

    // options for Car Grid
    const options = {
      column: 1,
      float: false,
      cellHeight: "80px",
      minRow: 3,
      maxRow: 3,
      acceptWidgets: false,
    };

    // init carGrid, attach to DOM and pass in options
    this.carGrid = GridStack.addGrid(
      document.getElementById("carWrapper"),
      options
    );

    // sets placement data based on data in state

    let carNode = this.state.choice; // car choices array

    for (let i = 0; i < carNode.length; i++) {
      carNode.id = carNode.content = carNode[i].name;
      carNode.x = carNode[i].x;
      carNode.y = carNode[i].y;
      carNode.h = carNode[i].h;
      carNode.w = carNode[i].w;

      this.carGrid.addWidget(carNode);
    }

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    console.log(carNode);

    // init after drag stop
    // sets nodeName to be checked and refilled if not there.
    this.carGrid.on("dragstart", (event, element) => {
      const node = element.gridstackNode;
      let nodeName = node.content;
      console.log(nodeName);

      // set reset based off name.
      if (nodeName === "Special") {
        console.log("special being dragged");
        carNode.id = carNode.content = "Special";
        carNode.x = 2;
        carNode.y = 0;
        carNode.h = 1;
        carNode.w = 1;
        this.carGrid.addWidget(carNode);
      } else if (nodeName === "BOE") {
        console.log("BOE being dragged");
        carNode.id = carNode.content = "BOE";
        carNode.x = 0;
        carNode.y = 0;
        carNode.h = 1;
        carNode.w = 1;
        this.carGrid.addWidget(carNode);
      } else if (nodeName === "City") {
        console.log("City being dragged");
        carNode.id = carNode.content = "City";
        carNode.x = 1;
        carNode.y = 0;
        carNode.h = 1;
        carNode.w = 1;
        this.carGrid.addWidget(carNode);
      }


    });

    this.grid.on('dropped', (event, previousWidget, newWidget) => {

      console.log(newWidget)
            addToDataArray(newWidget);
    })

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

  render() {
    return (
      <div id="thisDiv">
        {this.state.info}
        <MainStyles.GridContainer>
          <MainStyles.GridWrapper id="gridWrapper">
            <section className="grid-stack grid-stack-N"></section>
          </MainStyles.GridWrapper>
          <MainStyles.CarWrapper id="carWrapper"></MainStyles.CarWrapper>
        </MainStyles.GridContainer>
        <button>
          Save schedule
        </button>
      </div>
    );
  }
}

export default Main;
