import CartItem from "./CartItem";
import {
  CartContainer,
  ShippingAddressForm,
  CartInput,
  CartTextArea,
  ShippingButton,
  Featuredheading,
} from "./StyledItems";
import { useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";

const Carts = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <CartContainer>
        {cart.length === 0 && (
          <Featuredheading>
            YOUR SHOPPING CART IS EMPTY!
          </Featuredheading>
        )}
        {cart.length !== 0 && (
          <>
            <ShippingAddressForm as="div">
              <Featuredheading>
                SHOPPING CART VALUE =
                <span>
                  <FaRupeeSign></FaRupeeSign>
                  {cart.map((item) => +item.price).reduce((a, b) => a + b, 0)}
                </span>
              </Featuredheading>
              {cart.map((cartItem) => (
                <CartItem id={cartItem.id} key={cartItem.id}></CartItem>
              ))}
            </ShippingAddressForm>
            <ShippingAddressForm>
              <Featuredheading>SHIPPING ADDRESS</Featuredheading>
              <h6 className="condition">
                *Once you submit your Name, Contact Number, Email and Shipping
                Address,we will contact you to confirm the Items. Once payment
                is made, we will ship the items to the said address via DHL*
              </h6>

              <CartInput
                type="text"
                placeholder="Enter Your Name"
                name="from_name"
                pattern="[A-Za-z]"
                required
              ></CartInput>
              <CartInput
                type="number"
                placeholder="Enter Your Contact Number"
                name="from_number"
                pattern="[0-9]"
                required
              ></CartInput>
              <CartInput
                type="email"
                placeholder="Enter Your Email"
                name="from_email"
                required
              ></CartInput>
              <CartTextArea
                placeholder="Enter Your Shipping Address"
                name="message"
                required
              ></CartTextArea>
              <ShippingButton type="submit">Submit</ShippingButton>
            </ShippingAddressForm>
          </>
        )}
      </CartContainer>
    </>
  );
};

export default Carts;
