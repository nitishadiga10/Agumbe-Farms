import {
  SideBarContainer,
  SideBarMenu,
  SideBarItems,
} from "./StyledItems";
import propTypes from "prop-types";

const SideBar = (props) => {

  return (
    <SideBarContainer>
      <SideBarMenu>
        <SideBarItems to="/about" onClick={props.click}>
          About Us
        </SideBarItems>
        <SideBarItems to="/products" onClick={props.click}>
          Our Products
        </SideBarItems>
        <SideBarItems to="/accomodation" onClick={props.click}>
          Accomodation
        </SideBarItems>
        <SideBarItems to="/places" onClick={props.click}>
          Places to Visit Nearby
        </SideBarItems>
        <SideBarItems to="/contact" onClick={props.click}>
          Contact Us
        </SideBarItems>
      </SideBarMenu>
    </SideBarContainer>
  );
};
SideBar.propTypes = {
  click: propTypes.func,
};

export default SideBar;
