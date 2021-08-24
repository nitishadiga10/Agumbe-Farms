import {
  ProductHistory,
  Featuredheading,
  PInfo,
  ProductList,
  ProductContainer,
} from "../Components/StyledItems";
import Products from "../Components/Products";
import FeaturedItems from "../Components/FeaturedItems";
import ProductStore from "../Store/ProductStore";

const AccomodationPage = () => {
  return (
    <ProductContainer>
      <ProductHistory>
        <Featuredheading>WHY STAY WITH US?</Featuredheading>
        <PInfo>
          <p>
            <span>Experience Malnad style Living</span> - Live in the middle of
            6 acre farm in the lap of Nature. We assure home like comfort away
            from home. We serve authentic Malnad style vegetarian food with
            ingredients sourced from our farm.
          </p>
          <p>
            <span>High Speed Internet in middle of Western Ghats!</span> -We
            have secured high speed fiber net throughout our Farm. You can work
            from anywhere without being lost. Always stay in touch with your
            loved one.
          </p>
          <p>
            <span>Organic Farming Tour.</span> We are following Organic Farming
            from couple of decades. We are happy to explain the full process to
            the interested parties and help them start their own Organic Farm.
          </p>
          <p>
            <span>
              Buy Veggies, Plants, Flowers, Food Products grown in our farm.
            </span>{" "}
            Surplus veggies grown in our farm are sold to our guests. These are
            organically grown. We are cultivate Honey and various spices which
            are available for guests to buy at discounted price.
            We also have a huge Nursery with great variety of flowers and Medicinal plants. These are available for purchase as well.
          </p>
        </PInfo>
      </ProductHistory>
      <ProductList>
        <FeaturedItems
          Heading=" Choice of Accomodation"
          background="white"
          render={() => (
            <>
            {ProductStore.filter(item => item.type === "accomodation").map((accomodation) => (
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
      </ProductList>
    </ProductContainer>
  );
};

export default AccomodationPage;
