import ImageSlider from "../Components/ImageSlider";
import FeaturedItems from "../Components/FeaturedItems";
import Pic1 from "../Images/pic1.jpg";
import Products from "../Components/Products";
import HighLight from "../Components/HighLight";
import Testimonials from "../Components/Testimonials";
import ProductStore from "../Store/ProductStore";
import HighLightStore from "../Store/HighlightStore";
import TestimonialStore from "../Store/TestimonialStore";

const LandingPage = () => {
  return (
    <>
      <ImageSlider imageArray={[Pic1]} needIntro={true}></ImageSlider>
      <FeaturedItems
        Heading=" Why Should You Stay With Us? "
        background="white"
        render={() => (
          <>
            {HighLightStore.map((highLight) => (
              <HighLight
                key={highLight.id}
                Icon={highLight.icon}
                Descp={highLight.descp}
              ></HighLight>
            ))}
          </>
        )}
      ></FeaturedItems>

      <FeaturedItems
        Heading=" Our Best Selling Products"
        background="white"
        render={() => (
          <>
            {ProductStore.filter(
              (item) => item.type === "product" && item.bestselling
            ).map((product) => (
              <Products
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                weight={product.weight}
                quantity={product.quantity}
                price={product.price}
                ButtonName="ADD TO CART"
              ></Products>
            ))}
          </>
        )}
      ></FeaturedItems>
      <FeaturedItems
        Heading=" Our Most Loved Accomodation"
        background="white"
        render={() => (
          <>
            {ProductStore.filter(
              (item) => (item.type === "accomodation") & item.bestselling
            ).map((accomodation) => (
              <Products
                key={accomodation.id}
                id={accomodation.id}
                image={accomodation.image}
                name={accomodation.name}
                weight={accomodation.weight}
                quantity={accomodation.quantity}
                price={accomodation.price}
                ButtonName="BOOK"
              ></Products>
            ))}
          </>
        )}
      ></FeaturedItems>
      <FeaturedItems
        Heading=" Customer Testimonials"
        background="white"
        render={() => (
          <>
            {TestimonialStore.map((review) => (
              <Testimonials
                key={review.id}
                Descp={review.descp}
                name={review.name}
              ></Testimonials>
            ))}
          </>
        )}
      ></FeaturedItems>
    </>
  );
};

export default LandingPage;
