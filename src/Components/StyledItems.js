import styled, { keyframes } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import Agumbe from "../Images/pic13.jpg";
import { VscLoading } from "react-icons/vsc";
import { FaArrowAltCircleUp, FaUserCircle } from "react-icons/fa";

const ShoppingCart = ({ className, cartValue, click }) => {
  return (
    <Link to="/cart" className={className}>
      <GiShoppingCart onClick={click}></GiShoppingCart>
      <h6>{cartValue}</h6>
    </Link>
  );
};
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ScrollUp = styled(FaArrowAltCircleUp)`
  position: fixed;
  right: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 1);
  color: var(--main-color);
  background: #222;
  right: 1rem;
  bottom: 0;
  font-size: 2rem;
  padding: 0.1rem;
  &:hover {
    background: transparent;
    cursor: pointer;
  }
`;

export const Spinner = styled(VscLoading)`
  top: 10vh;
  position: absolute;
  font-size: 3rem;
  color: orange;
  animation: ${rotate} 2s linear infinite;
`;
export const Nav = styled.nav`
  background: #111;
  top: 0;
  position: sticky;
  z-index: 100;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

  export const NavMenu = styled.div`
    display: flex;
    margin: auto 5rem auto auto;

    @media screen and (max-width: 1056px) {
      display: none;
    }
  `;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 1056px) {
    position: absolute;
    right: 1rem;
    top: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const Cart = styled(ShoppingCart)`
  cursor: pointer;
  font-size: 1.8rem;
  text-decoration: none;
  &.active {
    color: orange;
  }
  display: flex;
  color: #fff;
  align-items: center;
  margin: 1rem;

  @media screen and (max-width: 1056px) {
    display: flex;
    margin: 0;
    position: absolute;
    left: 2vh;
  }
`;
export const User = styled(FaUserCircle)`
  color: #fff;
  position: absolute;
  right: 13vh;
  top: 3vh;
  font-size: 1.8rem;
  cursor: pointer;
  &:hover {
    color: orange;
  }
  @media screen and (max-width: 1056px) {
    right: 7vh;
  }
`;
export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
  .AppName {
    color: orange;
  }
  &.active {
    color: orange;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
export const FooterContainer = styled.div`
  color: black;
  display: flex;
  font-weight: bolder;
  width: 100%;
  height: 5vh;
  background: #222;
  color: white;
  justify-content: center;
  align-items: center;
`;
export const CopyRight = styled(AiOutlineCopyright)`
  margin: 0 0.3rem 0 0.3rem;
`;
export const SideBarContainer = styled.div`
  border-bottom: 0.1px solid orange;
  border-top: 0.1px solid orange;
  background: #111;
  display: flex;
  top: 10vh;
  right: 0;
  align-items: center;
  position: fixed;
  width: 20vh;
  flex-direction: column;
  z-index: 2000;
`;
export const SideBarMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SideBarItems = styled(NavLink)`
  border-bottom: .1px solid orange;
  }
  width: 100%;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
export const SideBarCart = styled(Cart)`
  @media screen and (max-width: 1056px) {
    display: flex;
    margin: 0;
  }
`;
export const Slider = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 50%;
  }
  .right {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 1);
    color: white;
    position: absolute;
    right: 0;
    top: 50%;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      background: black;
    }
  }
  .left {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 1);
    color: white;
    position: absolute;
    left: 0;
    top: 50%;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      background: black;
    }
  }
`;
export const IDotDiv = styled.div`
  position: absolute;
  bottom: 0;
  color: orange;
  font-weight: bolder;
  font-size: 2rem;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const Intro = styled(Div)`
  position: absolute;
  margin: 2rem;
  color: white;
  top: 20%;
  width: 100%;
  .Heading {
    font-size: 4rem;
  }
  .SubHeading {
    color: orange;
    font-size: 1.5rem;
    font-weight: 999;
  }
  @media screen and (max-width: 768px) {
    .Heading {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 550px) {
    .Heading {
      font-size: 1rem;
    }
    .SubHeading {
      font-size: 0.5rem;
    }
  }
`;
export const HLight = styled(Div)`
  margin: 1rem 2rem 1rem 2rem;
  max-width: 40vh;
  height: 20vh;
  text-align: center;
  border-radius: 10px;
  .HightLightIcon {
    font-size: 2rem;
    margin: 0.5rem;
    color: orange;
  }
  .HightLightDescp {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 500px) {
    height: 100%;
    margin: 0.5rem;
    width: 100%;
    .HightLightDescp {
      font-size: 0.8rem;
    }
  }
`;
export const Reviews = styled(Div)`
  background: white;
  margin: 1rem;
  text-align: start;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 320px) {
    margin: 1rem 0 1rem 0;
  }
`;
export const Review = styled(Div)`
  position: relative;
  width: 40vh;
  height: 15vh;
  margin: 1rem;
  .icon {
    position: absolute;
    top: 0;
    left: 0;
    color: orange;
  }
  .descp {
    text-transform: capitalize;
  }
  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: bolder;
  }
`;
export const FeatureItems = styled(Div)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  // &:nth-child(3) {
  //   left:5%;
  // }
  // // &:nth-child(4) {
  // //   margin: 0 0 0 0;
  // // }
  // &:nth-child(5) {
  //   margin: 0 0 0 4rem;
  // }
  // width: 95%;
  height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  // margin: 2rem auto;
  // border-radius: 10px;
  text-transform: uppercase;
  position: relative;
  background: ${(props) => props.backgroundColor};
`;
export const Featuredheading = styled.h3`
padding: .5rem;
margin: 1rem;
text-align: center;
letter-spacing: 5px;
border-bottom: 1px solid orange;
span {
  color:orange;
  font-weight: bolder;
}
  @media screen and (max-width: 768px) {
    font-size: 100%;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
letter-spacing: 2px;
      text-align: center;
    }
  }
`;
export const TotalValue = styled(Featuredheading)`
  border-bottom: none;
  span {
    color: orange;
    font-size: 1.5rem;
    font-weight: bolder;
  }
`;
export const FItems = styled(Div)`
  margin: 0 0 2rem 0;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ProductName = styled.h5`
  letter-spacing: 1px;
  padding: 1rem;
  text-transform: uppercase;
`;
export const CName = styled.h5`
  position: absolute;
  top: 0;
  letter-spacing: 1px;
  padding: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  color: white;
  font-weight: 999;
`;
export const Product = styled(Div)`
  margin: 1rem;
  background: #222;
  position: relative;
  color: white;
`;
export const CProduct = styled(Product)`
  margin: 0;
  height: 20vh;
`;
export const Image = styled.img`
  width: 100%;
  max-width: 40vh;
  ${Product}:hover & {
    opacity: 0.4;
  }
`;
export const CImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`;
export const Price = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.5rem;
  background: #222;
  border-radius: 0 0 10px 0;
  ${Product}:hover & {
    display: none;
  }
`;
export const Button = styled.button`
  padding: 0.5rem;
  background: #222;
  border: 1px solid orange;
  color: white;
  font-weight: 700;
  letter-spacing: 5px;
  &:hover {
    cursor: pointer;
    background: transparent;
  }
`;
export const CButton = styled(Button)`
  padding: 0.3rem;
  border: none;
  background: transparent;
  margin: 0.3rem;
  border: 1px solid #222;
  color: #222;
  &:hover {
    color: white;
    cursor: pointer;
    background: #222;
  }
`;
export const FeaturedButton = styled(Button)`
  position: absolute;
  display: none;
  ${Product}:hover & {
    display: block;
  }
`;
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
export const InfoImage = styled.div`
  // height: 100%;
  width: 50%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const InfoDescp = styled(Div)`
  width: 50%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const IDiv = styled(Div)`
  text-align: center;
  width: 70%;
  .Heading {
    color: orange;
    margin: 1rem;
  }
  @media screen and (max-width: 768px) {
    .Heading {
      font-size: 1.7rem;
    }
    .descp {
      font-size: 0.9rem;
      margin: 1rem 0 2rem 0;
    }
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    .Heading {
      font-size: 0.8rem;
    }
    .descp {
      font-size: 0.7rem;
    }
  }
`;
export const ImageDiv = styled(Div)`
  width: 50%;
  .Heading {
    color: orange;
    margin: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const ContactContainer = styled(Div)`
  background: url(${Agumbe}) no-repeat center fixed;
  background-size: cover;
  position: relative;
  height: 85vh;
  @media screen and (max-width: 700px) {
    height: 120vh;
  }
`;
export const CBar = styled(Div)`
  flex-direction: row;
  position: sticky;
  width: 100%;
  top: 10vh;
  background: grey;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const BarItem = styled(Div)`
  font-size: 1.2rem;
  flex-direction: row;
  margin: 1rem;
  width: 33%;
  .CIcon {
    color: orange;
    margin: 0 1rem 0 1rem;
  }
  @media screen and (max-width: 768px) {
    margin: 0.5rem;
    justify-content: start;
    width: 100%;
  }
`;
export const MapQueryContainer = styled(Div)`
  width: 90%;
  display: flex;
  height: 75vh;
  flex-direction: row;
  margin: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: 110vh;
  }
`;
export const CartContainer = styled(Div)`
  width: 90%;
  height: 100%;
  min-height: 75.2vh;
  display: flex;
  margin: 2rem auto;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  border-left: 1px solid #000;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 50%;
    border-left: none;
    border-top: 1px solid #000;
  }
`;
export const ShippingAddressForm = styled.form`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  .condition {
    margin: 0.5rem;
    text-align: center;
    width: 90%;
  }
`;
export const ContactInput = styled.input`
  margin-bottom: 1rem;
  font-size: 1rem;
  width: 90%;
  padding: 0.5rem;
  border: 1px solid white;
  border-radius: 4px;
  color: black;
  &:focus {
    outline: none;
`;
export const CartInput = styled(ContactInput)`
  margin-bottom: 1rem;
  font-size: 1rem;
  width: 90%;
  padding: 0.5rem;
  border: 1px solid #222;
  border-radius: 4px;
  color: black;
  &:focus {
    outline: none;
`;
export const ContactTextArea = styled.textarea`
margin-bottom: 1rem;
  font-size: 1rem;
  width: 90%;
  padding: 0.5rem;
  border: 1px solid white;
  border-radius: 4px;
  color: black;
  height: 10rem;
  &:focus {
    outline: none;
`;
export const CartTextArea = styled(ContactTextArea)`
margin-bottom: 1rem;
  font-size: 1rem;
  width: 90%;
  padding: 0.5rem;
  border: 1px solid #222;
  border-radius: 4px;
  color: black;
  height: 10rem;
  &:focus {
    outline: none;
`;
export const ContactButton = styled(Button)`
  margin-bottom: 1rem;
  width: 90%;
`;
export const ShippingButton = styled(ContactButton)`
  margin-bottom: 1rem;
  width: 90%;
  &:hover {
    color: #222;
  }
`;
export const Contactheading = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-size: 90%;
  }
`;
export const ContactLocation = styled.iframe`
  height: 100%;
  width: 100%;
  padding: 1rem;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
export const ProductHistory = styled(Div)`
  height: 100%;
  width: 40%;
  ${Featuredheading} {
    margin: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const ProductList = styled(Div)`
  height: 100%;
  width: 60%;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const PInfo = styled(Div)`
  height: 100%;
  margin: 1rem;
  p {
    margin: 0.5rem;
    font-size: 0.9rem;
  }
  span {
    font-weight: bolder;
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: 0.6rem;
    }
  }
`;
export const ProductContainer = styled.div`
  background: grey;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const PlacesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
export const PlaceImage = styled(Div)`
  width: 30%;
  height: 100%;
  @media screen and (max-width: 700px) {
    width: 90%;
    margin-bottom: 1rem;
  }
`;
export const PlaceDescp = styled(InfoDescp)`
  position: relative;
  height: 100%;
  width: 100%;
`;
export const DistanceIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  text-transform: none;
  left: 0;
  top: 0;
  .icon {
    font-size: 2rem;
    margin-right: 0.2rem;
    color: orange;
  }
`;

export const PDiv = styled(IDiv)`
  width: 100%;
  padding: 1rem;
  .hightlight {
    color: orange;
  }
  .Heading {
    color: orange;
    margin: 1rem;
    font-size: 1.5rem;
  }
  .descp {
    text-transform: none;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 768px) {
    .Heading {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    .Heading {
      font-size: 1rem;
    }
    .descp {
      font-size: 0.6rem;
    }
  }
`;
export const PlacesHeading = styled(Featuredheading)``;

export const CItem = styled.div`
  position: relative;
  width: 30%;
  height: 20vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
export const TotalPrice = styled(Div)`
  flex-direction: row;
  margin: 0.5rem;
  // font-size: 1.2rem;
`;
export const TotalCartValue = styled(Div)`
  width: 100%;
  height: 10vh;
  color: white;
  background: #222;
`;

export const Quantity = styled(Div)`
  flex-direction: row;
  color: orange;
`;
export const Notification = styled(Div)`
  position: fixed;
  height: 5vh;
  top: 11vh;
  padding: 1rem;
  border-radius: 10px;
  background: orange;
  flex-direction: row;
  color: white;
  font-size: 1rem;
  font-weight: bolder;
  .viewcart {
    color: #222;
    text-decoration: underline;
  }
`;
