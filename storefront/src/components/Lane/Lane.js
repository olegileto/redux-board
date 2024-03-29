import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import Card from '../Card/Card';
import {changeCardLane, deleteCard} from '../../actions/index';

class Lane extends Component {

    componentDidUpdate(prevProps) {
        const {lane:{id}, dragEvent, dropZoneId, fetchAllCards} = this.props;

        if (dragEvent !== prevProps.dragEvent && parseInt(dropZoneId, 10) === id) {
            fetchAllCards();
        }
    }

    onDragStart = (event, card) => {
        event
            .dataTransfer
            .setData('text/plain', JSON.stringify(card));
    };

    onDragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        const cardObj = event
            .dataTransfer
            .getData('text');
        const dropZone = event.target;
        const {changeCardLane} = this.props;

        changeCardLane(dropZone.id, JSON.parse(cardObj));

        event
            .dataTransfer
            .clearData();
    };

    render() {
        const {cards, lane: {id, title}, deleteCard} = this.props;

        const filteredCards = cards.filter((card) => card.laneId === id);
        const mapFilteredCards = filteredCards.map((card) =>
            <Card card={card} key={card.id}
                  onDragStart={this.onDragStart}
                  deleteCard={deleteCard}
            />);

        return (
            <div className='lane card border-secondary'>
                <div className='lane-header card-header flex-container'>
                    <h4 className='lane-title'>{title}</h4>
                    <Link to={`/add-new-card/${id}`} className='add-btn'><FontAwesomeIcon icon={faPlus}/></Link>
                    <span>{filteredCards.length}</span>
                </div>

                <div className='card-body-custom' id={id} onDragOver={(event) => this.onDragOver(event)}
                     onDrop={(event) => this.onDrop(event)}>
                    <div className='over-block'/>
                    {mapFilteredCards}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({cards: {cards, dragEvent, dropZoneId}}) => {
    return {
        cards,
        dragEvent,
        dropZoneId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCardLane: bindActionCreators(changeCardLane, dispatch),
        deleteCard: bindActionCreators(deleteCard, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lane);