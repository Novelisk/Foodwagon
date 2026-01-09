import React from 'react';
import { useEffect, useState } from 'react';
import FoodWagonLogo from '../../assets/images/searchBar/foodwagon_logo.png';
import locationPin from '../../assets/images/searchBar/location_pin_yellow.png';
import finderIcon from '../../assets/images/searchBar/finder_icon_orange.png';
import userIcon from '../../assets/images/searchBar/user_icon_orange.png';

const CurrentLocation = () => {
  const [city, setCity] = useState('Detecting...');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported in this browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            'Unknown';

          setCity(city);
        } catch {
          setError('Could not resolve location');
        }
      },
      () => {
        setError('Location permission denied');
      }
    );
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return <span>{city}</span>;
};

export const Searchbar = () => {
  return (
    <>
      <div className="search-bar">
        <img
          src={FoodWagonLogo}
          alt="FoodWagon logo"
          className="search-bar__logo"
        />
        <div className="search-bar__location_container">
          <p className="search-bar__location_container_deliver-to">
            Deliver to:
          </p>
          <div className="search-bar__location_container_location">
            <img
              src={locationPin}
              alt="Location pin icon"
              className="search-bar__location_container_location_pin"
            />
            <p className="search-bar__location_container_location_text">
              Current Location:
            </p>
            <p className="search-bar__location_container_location_address-text">
              <CurrentLocation />
            </p>
          </div>
        </div>
        <div className="search-bar__search_login">
          <button className="search-bar__search_login_search-btn">
            <img
              src={finderIcon}
              alt="Magnifying glass icon"
              className="search-bar__search_login_search-btn_img"
            />
            <p className="search-bar__search_login_search-btn_text">
              Search Food
            </p>
          </button>
          <button className="search-bar__search_login_login-btn">
            <img
              src={userIcon}
              alt="User icon"
              className="search-bar__search_login_login-btn_img"
            />
            <p className="search-bar__search_login_login-btn_text">Login</p>
          </button>
        </div>
      </div>
    </>
  );
};
