import React from 'react';
import starIcon from '../../assets/images/restaurantCards/star_icon.png';

import foodworldLogo from '../../assets/images/restaurantCards/foodworld/foodworld_logo.png';
import foodworldImage from '../../assets/images/restaurantCards/foodworld/foodworld_food_photo.png';

import pizzahubLogo from '../../assets/images/restaurantCards/pizzahub/pizzahub_logo.png';
import pizzahubImage from '../../assets/images/restaurantCards/pizzahub/pizzahub_food_photo.png';

import donutshutLogo from '../../assets/images/restaurantCards/donutsHut/donutsHut_logo.png';
import donutshutImage from '../../assets/images/restaurantCards/donutsHut/donutsHut_food_photo.png';

import subwayLogo from '../../assets/images/restaurantCards/subway/subway_logo.png';
import subwayImage from '../../assets/images/restaurantCards/subway/subway_food_photo.png';

import rubytuesdayLogo from '../../assets/images/restaurantCards/rubyTuesday/rubyTuesday_logo.png';
import rubytuesdayImage from '../../assets/images/restaurantCards/rubyTuesday/rubyTuesday_food_photo.png';

import kfcLogo from '../../assets/images/restaurantCards/kfc/kfc_logo.png';
import kfcImage from '../../assets/images/restaurantCards/kfc/kfc_food_photo.png';

import redsquareLogo from '../../assets/images/restaurantCards/redSquare/redSquare_logo.png';
import redsquareImage from '../../assets/images/restaurantCards/redSquare/redSquare_food_photo.png';

import tacobellLogo from '../../assets/images/restaurantCards/tacoBell/tacoBell_logo.png';
import tacobellImage from '../../assets/images/restaurantCards/tacoBell/tacoBell_food_photo.png';

const cards = [
  {
    id: 1,
    restaurantTitle: 'Foodworld',
    restaurantLogo: foodworldLogo,
    image: foodworldImage,
    reviews: 46,
  },
  {
    id: 2,
    restaurantTitle: 'Pizzahub',
    restaurantLogo: pizzahubLogo,
    image: pizzahubImage,
    reviews: 40,
  },
  {
    id: 3,
    restaurantTitle: 'Donuts Hut',
    restaurantLogo: donutshutLogo,
    image: donutshutImage,
    reviews: 20,
  },
  {
    id: 4,
    restaurantTitle: 'Subway',
    restaurantLogo: subwayLogo,
    image: subwayImage,
    reviews: 50,
  },
  {
    id: 5,
    restaurantTitle: 'Ruby Tuesday',
    restaurantLogo: rubytuesdayLogo,
    image: rubytuesdayImage,
    reviews: 26,
  },
  {
    id: 6,
    restaurantTitle: 'Kentucky Fried Chiken',
    restaurantLogo: kfcLogo,
    image: kfcImage,
    reviews: 53,
  },
  {
    id: 7,
    restaurantTitle: 'Red Square',
    restaurantLogo: redsquareLogo,
    image: redsquareImage,
    reviews: 45,
  },
  {
    id: 8,
    restaurantTitle: 'Taco Bell',
    restaurantLogo: tacobellLogo,
    image: tacobellImage,
    reviews: 35,
  },
];

export const RestaurantCards = () => {
  return (
    <div className="restaurant-cards__grid">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img
            src={card.image}
            alt={card.restaurantTitle}
            className="card__img"
          />
          <div className="card__container">
            <div className="card__container_top">
              <img
                src={card.restaurantLogo}
                alt={card.restaurantTitle}
                className="card__container_top_image"
              />
              <div className="card__container_top_text-container">
                <h3 className="card__container_top_text-container_title">
                  {card.restaurantTitle}
                </h3>
                <div className="card__container_top_text-container_cont">
                  <img
                    src={starIcon}
                    alt="Icon of a golden star"
                    className="card__container_top_text-container_star"
                  />
                  <p className="card__container_top_text-container_reviews">
                    {card.reviews}
                  </p>
                </div>
              </div>
            </div>
            <div className="card__container_bot">
              <p className="card__container_bot_subtitle">Open now</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
