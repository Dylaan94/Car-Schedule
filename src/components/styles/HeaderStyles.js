import styled from "styled-components";
import Main from "../Main";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  color: #161a1d;
  background: white;
  font-size: 2em;
  font-weight: 900;
  border-bottom: 2px solid rgb(241, 242, 249);
`;

const DatePicker = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Dates = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HeaderStyles = {
  Header: Header,
  Dates: Dates,
  DatePicker: DatePicker,
};

export default HeaderStyles;
