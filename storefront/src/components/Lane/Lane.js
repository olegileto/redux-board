import React, {Component} from 'react';
import {connect} from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Card from '../Card/Card';

class Lane extends Component {

    render() {
        const {cards, lane: {id, title}} = this.props;
        const filteredCards = cards.filter((card) => card.laneId === id);

        return (
            <div className='lane card border-secondary'>
                <div className='lane-header card-header flex-container'>
                    <h4 className='lane-title'>{title}</h4>
                    <button className='add-btn'><FontAwesomeIcon icon={faPlus}/></button>
                    <span>{filteredCards.length}</span>
                </div>
                <div className='card-body-custom'>
                    {
                        filteredCards.map((card) => {
                            return <Card card={card} key={card.id}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({cards}) => {
    return {
        cards: cards.cards
    }
};

export default connect(mapStateToProps)(Lane);