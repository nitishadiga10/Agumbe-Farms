import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { Suspense, useState } from "react";
import LoadingSpinner from "./Components/LoadingSpinner";
import { ScrollUp } from "./Components/StyledItems";
const Header = React.lazy(() => import("./Components/Header"));
const Footer = React.lazy(() => import("./Components/Footer"));
const LandingPage = React.lazy(() => import("./Pages/LandingPage"));
const AboutUsPage = React.lazy(() => import("./Pages/AboutUsPage"));
const ProductsPage = React.lazy(() => import("./Pages/ProductsPage"));
const AccomodationPage = React.lazy(() => import("./Pages/AccomodationPage"));
const ContactPage = React.lazy(() => import("./Pages/ContactPage"));
const PlacesOfInterestPage = React.lazy(() =>
  import("./Pages/PlacesOfInterestPage")
);
const CartPage = React.lazy(() => import("./Pages/CartPage"));

function App() {
  const [scrollButtonVisible, setScrollButtonVisbile] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setScrollButtonVisbile(true);
    } else if (scrolled <= 100) {
      setScrollButtonVisbile(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <LandingPage></LandingPage>
          </Route>
          <Route path="/about">
            <AboutUsPage></AboutUsPage>
          </Route>{" "}
          <Route path="/products">
            <ProductsPage></ProductsPage>
          </Route>{" "}
          <Route path="/accomodation">
            <AccomodationPage></AccomodationPage>
          </Route>{" "}
          <Route path="/places">
            <PlacesOfInterestPage></PlacesOfInterestPage>
          </Route>{" "}
          <Route path="/contact">
            <ContactPage></ContactPage>
          </Route>
          <Route path="/cart">
            <CartPage></CartPage>
          </Route>{" "}
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
        {scrollButtonVisible && <ScrollUp onClick={scrollToTop}></ScrollUp>}
        <Footer></Footer>
      </Suspense>
    </>
  );
}

export default App;
