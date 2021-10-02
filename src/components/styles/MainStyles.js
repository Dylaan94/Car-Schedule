import { useFlexLayout } from "react-table";
import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 1em;
`;

const GridWrapper = styled.div`
  width: 70vw;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 3px rgb(206, 212, 218);
`;

const CarWrapper = styled.div`
  width: 10vw;
  background: white;
  border-radius: 10px;
  margin-left: 0.3em;
  margin-left: 1em;
  box-shadow: 2px 2px 3px rgb(206, 212, 218);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em;
  gap: 2em;
  button {
    font-family: "Ubuntu", sans-serif;
    font-size: 1em;
    padding: 1em;
    border-radius: 4px;
    border: none;
    box-shadow: 2px 2px 3px rgb(206, 212, 218);
  }
  button:hover {
    cursor: pointer;
  }

  .saveScheduleButton {
    background: #fca311;
  }

  .clearGridButton {
    background: #f94144;
  }
`;

const MainStyles = {
  GridContainer: GridContainer,
  GridWrapper: GridWrapper,
  CarWrapper: CarWrapper,
  ButtonsWrapper: ButtonsWrapper,
};

export default MainStyles;
