import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const Card = ({card, onDragStart, deleteCardById}) => {
    const [priority] = useState({1: 'table-light', 2: 'table-success', 3: 'table-warning', 4: 'table-danger'});

    return (
        <div
            className={`card-custom ${priority[card.priority]}`}
            id={card.id}
            draggable='true' onDragStart={(event) => onDragStart(event, card)}>
            <div className='card-info'>
                <h5 className='card-title'>{card.title}</h5>
                <p className='card-des'>{card.description}</p>
            </div>

            <div className='card-buttons'>
                <Link to={`/edit-card/${card.laneId}/${card.id}`} className='edit-btn'><FontAwesomeIcon icon={faEdit}/></Link>
                <button className='delete-btn' onClick={() => deleteCardById(card.id)}><FontAwesomeIcon
                    icon={faTrashAlt}/></button>
            </div>
        </div>
    );
};

export default Card;