import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
`


const Sidebar = styled.div`
  display: flex;
  flex-direction: row;
  width: 15vw;
  height: 100vh;
  background: #08184e;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
`;

const Header = styled.div`

width: 85vw;`

const Main = styled.div`
display: flex;
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppStyles = {
  MainContainer: MainContainer,
    Sidebar: Sidebar,
    Container: Container,
    Header: Header,
    Main: Main,
    Footer: Footer,
}

export default AppStyles