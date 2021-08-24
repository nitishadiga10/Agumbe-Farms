import NearByPlaces from "../Components/NearByPlaces";
import FeaturedItems from "../Components/FeaturedItems";
import NearbyPlacesStore from "../Store/NearbyPlacesStore";

const PlacesOfInterestPage = () => {
  return (
    <FeaturedItems
      Heading=" LOCAL SIGHTSEEING "
      background="white"
      render={() => (
        <>
          {NearbyPlacesStore.map((place) => (
            <NearByPlaces
              key={place.id}
              placename={place.placename}
              distance={place.distance}
              placedesp={place.placedesp}
              pic={place.pic}
            ></NearByPlaces>
          ))}
        </>
      )}
    ></FeaturedItems>
  );
};

export default PlacesOfInterestPage;
