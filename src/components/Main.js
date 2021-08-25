import React, { Component } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/gridstack-extra.css";

import MainStyles from "./styles/MainStyles";
import { addToDataArray, removeFromDataArray } from "./Logic";
import { ToStorage, FromStorage, dataArrayFromStorage } from "./LocalStorage";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";


import AppStyles from "./styles/AppStyles";
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
      saved: [],
    };
    this.handleLoadSchedule = this.handleLoadSchedule.bind(this);
  }

  // handle load Schedule
  handleLoadSchedule(e) {
    console.log("input being handled");
    FromStorage();
    console.log(dataArrayFromStorage)
  }

  // will move all of this into a component in the future
  componentDidMount() {
    // once the component mounts it initialises the gridstack
    this.grid = GridStack.init({
      column: 10,
      float: true,
      cellHeight: "80px",
      minRow: 7,
      maxRow: 7,
      acceptWidgets: true,
      class: "mainGrid",
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
    // this is causing each carNode object to have data from state in
    let carNode = this.state.choice; // car choices array

    for (let i = 0; i < carNode.length; i++) {
      carNode.id = carNode.content = carNode[i].name;
      carNode.x = carNode[i].x;
      carNode.y = carNode[i].y;
      carNode.h = carNode[i].h;
      carNode.w = carNode[i].w;

      carNode.noResize = true;

      this.carGrid.addWidget(carNode);
    }

    console.log(carNode);
    console.log(document.querySelectorAll("div[gs-id='Michael']"));

    // init after drag stop
    // sets nodeName to be checked and refilled if not there.
    this.carGrid.on("dragstart", (event, element) => {
      const node = element.gridstackNode;
      let nodeName = node.content;
      console.log("dragstart");

      // set reset based off name.
      if (nodeName === "Special") {
        console.log("special being dragged");
        carNode.id = carNode.content = "Special";
        carNode.x = 2;
        carNode.y = 0;
        carNode.h = 1;
        carNode.w = 1;
        carNode.noResize = true;
        this.carGrid.addWidget(carNode);
      } else if (nodeName === "BOE") {
        console.log("BOE being dragged");
        carNode.id = carNode.content = "BOE";
        carNode.x = 0;
        carNode.y = 0;
        carNode.h = 1;
        carNode.w = 1;
        carNode.noResize = true;
        this.carGrid.addWidget(carNode);
      } else if (nodeName === "City") {
        console.log("City being dragged");
        carNode.id = carNode.content = "City";
        carNode.x = 1;
        carNode.y = 0;
        carNode.h = 1;
        carNode.w = 1;
        carNode.noResize = true;
        this.carGrid.addWidget(carNode);
      }

      // on dragstart sets all current widgets on grid to locked
      // stops widgets from moving when dragging in

      let currentWidgets = this.grid.getGridItems();
      console.log(currentWidgets);
      currentWidgets.forEach((widget) => {
        widget.gridstackNode.locked = true;
      });
    });

    this.grid.on("dropped", (event, previousWidget, newWidget) => {
      console.log(newWidget);
      addToDataArray(newWidget);
    });

    this.grid.on("dragstart", (event, element) => {
      let currentWidgets = this.grid.getGridItems();
      let node = element.gridstackNode;
      // on dragstart sets widgets on board to locked
      currentWidgets.forEach((widget) => {
        widget.gridstackNode.locked = true;
      });
      // unlocks current node
      node.locked = false;
      removeFromDataArray(node);
    });

    this.grid.on("dragstop", (event, element) => {
      const node = element.gridstackNode;
      addToDataArray(node);
    });
  }

  componentDidUpdate() {

    // this.grid.makeWidget()
  }
  render() {
    return (
      <div id="thisDiv">
        <AppStyles.MainContainer>
          <AppStyles.Sidebar>
            <Sidebar values={this.state.saved} handleInput={FromStorage} />
          </AppStyles.Sidebar>
          <AppStyles.Container>
            <AppStyles.Header>
              <Header />
            </AppStyles.Header>
            <AppStyles.Main>
              {this.state.info}
              <MainStyles.GridContainer>
                <MainStyles.GridWrapper id="gridWrapper">
                  <section className="grid-stack grid-stack-N"></section>
                </MainStyles.GridWrapper>
                <MainStyles.CarWrapper id="carWrapper"></MainStyles.CarWrapper>
              </MainStyles.GridContainer>
            </AppStyles.Main>
          </AppStyles.Container>
        </AppStyles.MainContainer>
        <button onClick={ToStorage}>Save schedule</button>
        <AppStyles.Footer>
          <Footer />
        </AppStyles.Footer>
      </div>
    );
  }
}

export default Main;
