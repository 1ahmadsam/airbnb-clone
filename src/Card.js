import React from 'react';
import './Card.css';

const Card = ({ src, title, description, price, inverse }) => {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <div className={inverse ? 'card_info inverse' : 'card__info'}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
