import React from 'react';
import headerImage from '../../assets/images/header/header_image.png';
import deliveryIcon from '../../assets/images/header/delivery_icon.png';
import pickupIcon from '../../assets/images/header/pickup_icon.png';
import locationPin from '../../assets/images/header/location_pin_icon_orange.png';
import finderIcon from '../../assets/images/header/finder_icon_white.png';

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__description_title">Are you starving?</h1>
            <p className="header__description_subtitle">
              Within a few clicks, find meals that are accessible near you
            </p>
          </div>
          <div className="header__box">
            <div className="header__box_buttons">
              <button type="button" className="header__box_buttons_delivery">
                <img
                  src={deliveryIcon}
                  alt="Icon of a delivery motorcycle"
                  className="header__box_buttons_delivery_img"
                />
                <p className="header__box_buttons_delivery_text">Delivery</p>
              </button>
              <button type="button" className="header__box_buttons_pickup">
                <img
                  src={pickupIcon}
                  alt="Icon of a grocery basketcase"
                  className="header__box_buttons_pickup_img"
                />
                <p className="header__box_buttons_pickup_text">Pickup</p>
              </button>
            </div>
            <div className="header__box_finder">
              <div className="header__box_finder_container">
                <div className="header__box_finder_container_address">
                  <img
                    src={locationPin}
                    alt="Icon of a location map pin"
                    className="header__box_finder_container_address_img"
                  />
                  <input
                    type="text"
                    className="header__box_finder_container_address_input"
                    placeholder="Enter Your Address"
                  />
                </div>
                <button
                  type="button"
                  className="header__box_finder_container_address_button"
                >
                  <img
                    src={finderIcon}
                    alt="Icon of a magnifying glass"
                    className="header__box_finder_container_address_button_img"
                  />
                  <p className="header__box_finder_container_address_button_text">
                    Find Food
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={headerImage}
          alt="Photo of a bowl of ramen noodles"
          className="header__image"
        />
      </div>
    </>
  );
};
