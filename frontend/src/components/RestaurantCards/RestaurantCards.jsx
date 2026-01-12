import React from 'react';

const cards = [
  {
    id: 1,
    restaurantTitle: 'Foodworld',
    restaurantLogo: require('../../assets/images/restaurantCards/foodworld/foodworld_logo.png'),
    image: require('../../assets/images/restaurantCards/foodworld/foodworld_food_photo.png'),
    reviews: 46,
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
