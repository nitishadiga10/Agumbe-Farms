import {
  Product,
  Price,
  Image,
  ProductName,
  FeaturedButton,
} from "./StyledItems";
import { FaRupeeSign } from "react-icons/fa";
import propTypes from "prop-types";
import NotificationBar from "../Components/NotificationBar";
import { useSelector, useDispatch } from "react-redux";

const Products = ({ id, image, name, weight, quantity, price, ButtonName }) => {
  const showNotificationBar = useSelector((state) => state.showNotificationBar);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const clickHandler = () => {
    const tempCart = [...cart];
    const itemIndex = tempCart.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      dispatch({
        type: "addItem",
        payload: { id, image, name, quantity, price },
      });
    } else {
      tempCart[itemIndex].quantity++;
      tempCart[itemIndex].price = tempCart[itemIndex].quantity * price;

      dispatch({ type: "increaseQuantity", payload: tempCart });
    }

    dispatch({ type: "toggleNotificationBar" });
    setTimeout(
      () =>
        dispatch({
          type: "toggleNotificationBar",
        }),
      3000
    );
  };
  return (
    <Product>
      {showNotificationBar && <NotificationBar></NotificationBar>}
      <Image src={image} alt="Pic1"></Image>
      <ProductName>{name}</ProductName>
      <FeaturedButton onClick={clickHandler}>{ButtonName}</FeaturedButton>
      <Price>
        <h5>
          <FaRupeeSign></FaRupeeSign>
          {price}
        </h5>
        <h6>{weight}</h6>
      </Price>
    </Product>
  );
};

Products.propTypes = {
  id: propTypes.oneOfType([propTypes.string, propTypes.number]),
  image: propTypes.string,
  name: propTypes.string,
  weight: propTypes.string,
  quantity: propTypes.number,
  price: propTypes.number,
  ButtonName: propTypes.string,
};

export default Products;
