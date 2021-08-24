import { InfoContainer, InfoImage, InfoDescp, IDiv} from "./StyledItems";
import Pic2 from "../Images/pic4.jpg";
import Pic12 from "../Images/pic15.jpg";


const Info = () => {
  return (
    <>
      <InfoContainer>
        <InfoImage>
          <img src={Pic2} width="100%" height="100%" alt = "Pic2"/>
        </InfoImage>
        <InfoDescp>
          <IDiv>
            <h1 className="Heading">OUR FARM</h1>
            <p className="descp">
              Agumbe Farms currently extend for about 6 Acres over two
              properties, with seven irrigation ponds, as well as a river and a
              riverlet adjoining one of the properties. Crop plantations are
              maintained within the natural vegetation of the area, and 60% of
              the farms is still untouched forest. Crops like Arecanut, Coconut,
              Cocoa, Nutmeg, Banana, Black Pepper, Jackfruit etc. are grown in a
              multi-story system. In addition, different types of vegetables,
              fruits, flowers are also grown. Rice is organically cultivated
              during the rainy season for sale and our own consumption.
            </p>
          </IDiv>
        </InfoDescp>
      </InfoContainer>
      <InfoContainer>
        <InfoDescp>
          <IDiv>
            <h1 className="Heading">HOW DID WE GO ORGANIC?</h1>
            <p className="descp">
              In 1981, the farm was a low-level, chemically managed farm. With
              the intention of increasing the yield of the land, it was
              converted into a high-level chemical farm. An unforeseen
              consequence of this transition was an increase in the occurrence
              of disease and pest infestation, with no substantial increase in
              profitability. In 1991, a complete migration was made to organic
              methods of farming. Slowly and steadily, the subsequent years saw
              progress, with increased yield and profitability.
            </p>
          </IDiv>
        </InfoDescp>
        <InfoImage>
          <img src={Pic12} width="100%" height="100%" alt = "Pic12" />
        </InfoImage>
      </InfoContainer>
    </>
  );
};

export default Info;
