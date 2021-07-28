import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const GridWrapper = styled.div`
  width: 85vw;
  background: #f5f3f4;
  border: solid rgb(80, 80, 80, .8);
  border-radius: 10px;
`;

const CarWrapper = styled.div`
  width: 10vw;
  background: #e5383b;
  border-radius: 10px;
  border: solid rgb(80, 80, 80, 0.8);
  margin-left: 0.3em;
`;

const MainStyles = {
  GridContainer: GridContainer,
  GridWrapper: GridWrapper,
  CarWrapper: CarWrapper,
};

export default MainStyles;
