import React from 'react';
import firstCard from '../../assets/images/discountCards/15_off.png';
import secondCard from '../../assets/images/discountCards/10_off.png';
import thirdCard from '../../assets/images/discountCards/25_off.png';
import fourthCard from '../../assets/images/discountCards/20_off.png';

const cards = [
  {
    id: 1,
    image: firstCard,
    title: 'Greys Vage',
    remaining: '6 Days',
  },
  {
    id: 2,
    image: secondCard,
    title: 'Greys Vage',
    remaining: '6 Days',
  },
  {
    id: 3,
    image: thirdCard,
    title: 'Greys Vage',
    remaining: '7 Days',
  },
  {
    id: 4,
    image: fourthCard,
    title: 'Greys Vage',
    remaining: '7 Days',
  },
];

export const DiscountCards = () => {
  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={card.title} className="card__image" />
          <h3 className="card__title">{card.title}</h3>
          <div className="card__text_container">
            <p className="card__remaining">{card.remaining} Remaining</p>
          </div>
        </div>
      ))}
    </div>
  );
};
