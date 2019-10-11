import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import Card from '../Card/Card';
import {openModal} from '../../actions/index';

class Lane extends Component {

    render() {
        const {cards, lane: {id, title}, openModal} = this.props;
        const filteredCards = cards.filter((card) => card.laneId === id);

        return (
            <div className='lane card border-secondary'>
                <div className='lane-header card-header flex-container'>
                    <h4 className='lane-title'>{title}</h4>
                    <button className='add-btn' onClick={() => openModal()}><FontAwesomeIcon icon={faPlus}/></button>
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

const mapStateToProps = ({cards: {cards}}) => {
    return {
        cards: cards
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: bindActionCreators(openModal, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lane);