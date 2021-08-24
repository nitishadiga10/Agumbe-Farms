import {
  CItem,
  CProduct,
  CImage,
  Quantity,
  TotalPrice,
  CName,
  Div,
  CButton,
} from "./StyledItems";
import { useSelector, useDispatch } from "react-redux";
import ProductStore from "../Store/ProductStore";
import { FaRupeeSign } from "react-icons/fa";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const price = ProductStore.filter((item) => item.id === props.id)[0].price;

  const cart = useSelector((state) => state.cart);
  const [filteredItem] = cart.filter((item) => item.id === props.id);

  const increaseQuantity = () => {
    const tempCart = [...cart];
    const itemIndex = tempCart.findIndex((item) => item.id === filteredItem.id);

    tempCart[itemIndex].quantity++;
    tempCart[itemIndex].price = tempCart[itemIndex].quantity * price;

    dispatch({ type: "increaseQuantity", payload: tempCart });
  };
  const decreaseQuantity = () => {
    const tempCart = [...cart];
    const itemIndex = tempCart.findIndex((item) => item.id === filteredItem.id);
    tempCart[itemIndex].quantity--;
    tempCart[itemIndex].price = tempCart[itemIndex].quantity * price;

    const updatedCart = tempCart.filter((item) => item.quantity !== 0);
    dispatch({ type: "increaseQuantity", payload: updatedCart });
  };
  return (
    <CItem>
      <CProduct>
        <CImage src={filteredItem.image} alt="Pic1"></CImage>
        <CName>{filteredItem.name}</CName>
      </CProduct>
      <Div>
        <Quantity>
          <CButton onClick={decreaseQuantity}>-</CButton>
          <h4 className="QItem">{filteredItem.quantity}</h4>
          <CButton onClick={increaseQuantity}>+</CButton>
        </Quantity>
        <TotalPrice>
          <FaRupeeSign></FaRupeeSign> {filteredItem.price}
        </TotalPrice>
      </Div>
    </CItem>
  );
};

export default CartItem;
