import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Nav, NavLink, NavMenu, Bars, Cart, User } from "./StyledItems";
import Sidebar from "./SideBar";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const toggleBar = useSelector((state) => state.showSideBar);
  const cart = useSelector((state) => state.cart);

  const menuHandler = (e) => {
    dispatch({ type: "toggleSideBar" });
  };
  const cartPage = (e) => {
    history.push("/cart");
  };
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1 className="AppName">AGUMBE FARMS</h1>
        </NavLink>
        <Bars onClick={menuHandler} />
        <NavMenu>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/products">Our Products</NavLink>
          <NavLink to="/accomodation">Accomodation</NavLink>
          <NavLink to="/places">Places to Visit Nearby</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </NavMenu>
        <User></User>
          <Cart
            cartValue={cart
              .map((item) => item.quantity)
              .reduce((a, b) => a + b, 0)}
            click={cartPage}
          ></Cart>
      </Nav>
      {toggleBar && <Sidebar click={menuHandler}></Sidebar>}
    </>
  );
};

export default Header;
