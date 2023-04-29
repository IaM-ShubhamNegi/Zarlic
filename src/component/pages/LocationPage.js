import { Footer } from "../ui/Footer/Footer";
import { Header } from "../ui/Header/Header";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import {ClockIcon, LocationIcon, PhoneIcon} from "../ui/ui-icons/Icons"
import classes from "./LocationPage.module.css";

const containerStyle = {
  width: "100%",
  height: "calc(100vh - 96px)",
};

const center = { lat: 28.55420338765594, lng: 77.19432103394524 };

const LocationPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_GOOGLE_MAPS_API_KEY,
  });

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  if (!isLoaded) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <Header
        onShowbg={false}
        onIsSearchVisible={false}
        onIsSearchSlide={false}
        isBgBlack={true}
        isMenupage={false}
        isPosition={false}
      />
      <div className={classes.location}>
        <div className={classes.location_data}>
          <p className={classes.location_brand}>Zarlic</p>
          <div className={classes.location_info}>
            <p className={classes.location_para}>
            <LocationIcon/>
              1st Floor, Building-27,<br/>
              Hauz Khas Rd, Hauz Khas Village, Deer Park,<br/>
              Hauz Khas, New Delhi, <br/>
              Delhi 110016
            </p>
            <p className={classes.location_para}><PhoneIcon/>011-2564-7782</p>
            <p className={classes.location_para}><ClockIcon/>Timings: 11 Am - 9 PM</p>
          </div>
        </div>
        <div className={classes.location_map}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={22}
            clickableIcons={false}
          >
            <Marker
              position={center}
              clickable={false}
              visible={true}
              onLoad={onLoad}
            />
          </GoogleMap>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LocationPage;
