import {
  PlaceImage,
  PlaceDescp,
  PDiv,
  PlacesContainer,
  DistanceIcon,
} from "./StyledItems";
import { RiPinDistanceLine } from "react-icons/ri";
import propTypes from "prop-types";

const NearByPlaces = (props) => {
  return (
    <>
      <PlacesContainer>
        <PlaceDescp>
          <DistanceIcon>
            <RiPinDistanceLine className="icon"></RiPinDistanceLine>
            <h6 className="descp">Approx. {props.distance} Kms</h6>
          </DistanceIcon>
          <PDiv>
            <h5 className="Heading">{props.placename}</h5>
            <h6 className="descp">{props.placedesp}</h6>
          </PDiv>
        </PlaceDescp>
        <PlaceImage>
          <img src={props.pic} width="100%" height="100%" alt="pic1" />
        </PlaceImage>
      </PlacesContainer>
    </>
  );
};
NearByPlaces.propTypes = {
  distance: propTypes.number,
  placename: propTypes.string,
  placedesp: propTypes.string,
};

export default NearByPlaces;
