import { FItems, FeatureItems, Featuredheading } from "./StyledItems";
import propTypes from 'prop-types';

const FeaturedItems = ({ Heading, background, render }) => {
  return (
    <>
      <FeatureItems backgroundColor = {background}>
        <Featuredheading className="welcome">{Heading}</Featuredheading>
        <FItems>{render()}</FItems>
      </FeatureItems>
    </>
  );
};

FeaturedItems.propTypes = {
  Heading: propTypes.string,
  background: propTypes.string,
  render: propTypes.func
};


export default FeaturedItems;
