import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const GridWrapper = styled.div`
  width: 85vw;
  background: red;
`;

const CarWrapper = styled.div`
  width: 10vw;
  background: yellow;
`;

const MainStyles = {
  GridContainer: GridContainer,
  GridWrapper: GridWrapper,
  CarWrapper: CarWrapper,
};

export default MainStyles;