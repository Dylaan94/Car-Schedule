import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
`;

const GridWrapper = styled.div`
  width: 70vw;
  background: red;
`;

const CarWrapper = styled.div`
  width: 30vw;
  background: yellow;
`;

const MainStyles = {
  GridContainer: GridContainer,
  GridWrapper: GridWrapper,
  CarWrapper: CarWrapper,
};

export default MainStyles;
