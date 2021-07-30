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
`;

const CarWrapper = styled.div`
  width: 10vw;
  background: #f8f9ff;
  border-radius: 10px;
  border: solid rgb(80, 80, 80, 0.8);
  margin-left: 0.3em;
  margin-left: 1em;
`;

const MainStyles = {
  GridContainer: GridContainer,
  GridWrapper: GridWrapper,
  CarWrapper: CarWrapper,
};

export default MainStyles;
