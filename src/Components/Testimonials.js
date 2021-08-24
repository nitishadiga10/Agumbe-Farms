import { Reviews, Review } from "./StyledItems";
import { GoQuote } from "react-icons/go";
import propTypes from "prop-types";

const Testimonials = ({ Descp, name }) => {
  return (
    <Reviews>
      <Review>
        <GoQuote className="icon" />
        <h6 className="descp">{Descp}</h6>
        <h5 className="name">{name}</h5>
      </Review>
    </Reviews>
  );
};

Testimonials.propTypes = {
  Descp: propTypes.string,
  name: propTypes.string,
};

export default Testimonials;
