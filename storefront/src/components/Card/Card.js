import React from 'react';

const Card = ({card}) => {
    return (
        <div className='card'>
            <h5>{card.title}</h5>
            <p>{card.description}</p>
        </div>
    )
};

export default Card;