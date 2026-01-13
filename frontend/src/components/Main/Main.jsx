import React from 'react';
import locationPin from '../../assets/images/instructions/location_pin.png';
import orderIcon from '../../assets/images/instructions/order_icon.png';
import payBill from '../../assets/images/instructions/pay_bill.png';
import donutIcon from '../../assets/images/instructions/donut_icon.png';
import { DiscountCards } from '../DiscountCards/DiscountCards';
import { RestaurantCards } from '../RestaurantCards/RestaurantCards';

export const Main = () => {
  return (
    <section className="main">
      <div className="main__discounts">
        <h2 className="main__discounts_title">Redeem your weekly discount</h2>
        <DiscountCards />
      </div>

      <div className="main__instructions">
        <h2 className="main__instructions_title">How does it work?</h2>
        <div className="main__instructions_cards">
          <div className="main__instructions_card">
            <img
              src={locationPin}
              alt="Map marker location pin icon"
              className="main__instructions_card_image"
            />
            <div className="main__instructions_card_container">
              <h3 className="main__instructions_card_title">Select location</h3>
              <p className="main__instructions_card_text">
                Choose the location where your food will be delivered
              </p>
            </div>
          </div>
          <div className="main__instructions_card">
            <img
              src={orderIcon}
              alt="Restaurant menu order icon"
              className="main__instructions_card_image"
            />
            <div className="main__instructions_card_container">
              <h3 className="main__instructions_card_title">Choose order</h3>
              <p className="main__instructions_card_text">
                Check over hundreds of menus to pick your favorite food
              </p>
            </div>
          </div>
          <div className="main__instructions_card">
            <img
              src={payBill}
              alt="Bill checkout icon"
              className="main__instructions_card_image"
            />
            <div className="main__instructions_card_container">
              <h3 className="main__instructions_card_title">Pay advanced</h3>
              <p className="main__instructions_card_text">
                It's quick, safe, and simple. Select several methods of payment
              </p>
            </div>
          </div>
          <div className="main__instructions_card last">
            <img
              src={donutIcon}
              alt="Donut icon"
              className="main__instructions_card_image"
            />
            <div className="main__instructions_card_container">
              <h3 className="main__instructions_card_title">Enjoy meals</h3>
              <p className="main__instructions_card_text">
                Food is made and delivered directly to your home, office or any
                location
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="main__restaurants">
        <h2 className="main__restaurants_title">Featured Restaurants</h2>
        <RestaurantCards />
        <button className="main__restaurants_button">View All {'>'}</button>
      </div>
    </section>
  );
};
