import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  justify-content: center;

`;

const GridWrapper = styled.div`
  width: 85vw;
  background: #f5f3f4;
  border: solid rgb(80, 80, 80, .8);
  border-radius: 25px;
`;

const CarWrapper = styled.div`
  width: 10vw;
  background: #E5383B;
`;

const MainStyles = {
  GridContainer: GridContainer,
  GridWrapper: GridWrapper,
  CarWrapper: CarWrapper,
};

export default MainStyles;
