import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const Card = ({card}) => {
    const [priority] = useState({1: 'table-light', 2: 'table-success', 3: 'table-warning', 4: 'table-danger'});

    return (
        <div className={`card-custom ${priority[card.priority]}`}>
            <div className='card-info'>
                <h5 className='card-title'>{card.title}</h5>
                <p className='card-des'>{card.description}</p>
            </div>

            <div className='card-buttons'>
                <button className='edit-btn'><FontAwesomeIcon icon={faEdit}/></button>
                <button className='delete-btn'><FontAwesomeIcon icon={faTrashAlt}/></button>
            </div>

        </div>
    )
};

export default Card;