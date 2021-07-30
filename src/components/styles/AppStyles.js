import styled from "styled-components";

const Sidebar = styled.div`
  display: flex;
  width: 15vw;
  height: 100vh;
  background: #08184e;
`;

const Container = styled.div`
  width: 85vw;
`;

const Header = styled.div`
display: flex;
flex-direction: column;
width: 85vw;`

const Main = styled.div`
display: flex;
`

const Footer = styled.div``

const AppStyles = {
    Sidebar: Sidebar,
    Container: Container,
    Header: Header,
    Main: Main,
    Footer: Footer,
}

export default AppStyles