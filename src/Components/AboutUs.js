import { ImageDiv } from "./StyledItems";
import Info from "./Info";
import FeaturedItems from "../Components/FeaturedItems";
import ImageSlider from "../Components/ImageSlider";
import { imageArray } from "./ImagesArray";
const AboutUs = () => {
  return (
    <>
      <Info></Info>
      <FeaturedItems
        Heading=" Gallery "
        background="white"
        render={() => (
          <ImageDiv>
            <ImageSlider imageArray={imageArray}></ImageSlider>
          </ImageDiv>
        )}
      ></FeaturedItems>
    </>
  );
};

export default AboutUs;
