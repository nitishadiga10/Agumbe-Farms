import {
  ProductHistory,
  Featuredheading,
  PInfo,
  ProductList,
  ProductContainer,
} from "../Components/StyledItems";
import Products from "../Components/Products";
import FeaturedItems from "../Components/FeaturedItems";
import NotificationBar from "../Components/NotificationBar";
import { useSelector } from "react-redux";
import ProductStore from "../Store/ProductStore";

const ProductsPage = () => {
  const showNotificationBar = useSelector((state) => state.showNotificationBar);
  return (
    <ProductContainer>
      {showNotificationBar && <NotificationBar></NotificationBar>}
      <ProductHistory>
        <Featuredheading>WHY CHOOSE OUR PRODUCTS?</Featuredheading>
        <PInfo>
          <p>
            <span>Our Products contains fewer pesticides.</span> Chemicals such
            as synthetic fungicides, herbicides, and insecticides are widely
            used in conventional agriculture and residues remain on (and in) the
            food we eat.
          </p>
          <p>
            <span>Our Products are often fresher</span> because it doesn’t
            contain preservatives that make it last longer. Organic produce is
            sometimes (but not always, so watch where it is from) produced on
            smaller farms nearer to where it is sold.
          </p>
          <p>
            <span>Organic farming tends to be better for the environment.</span>{" "}
            Organic farming practices may reduce pollution, conserve water,
            reduce soil erosion, increase soil fertility, and use less energy.
            Farming without synthetic pesticides is also better for nearby birds
            and animals as well as people who live close to farms.
          </p>
          <p>
            <span>Our Products are GMO-free.</span> Genetically Modified
            Organisms (GMOs) or genetically engineered (GE) foods are plants
            whose DNA has been altered in ways that cannot occur in nature or in
            traditional crossbreeding, most commonly in order to be resistant to
            pesticides or produce an insecticide.
          </p>
        </PInfo>
      </ProductHistory>
      <ProductList>
        <FeaturedItems
          Heading=" Our Products"
          background="white"
          render={() => (
            <>
              {ProductStore.filter(item => item.type === "product").map((product) => (
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
      </ProductList>
    </ProductContainer>
  );
};

export default ProductsPage;
