import React, {Component} from 'react';
import {connect} from 'react-redux';

import Card from '../Card/Card';

class Lane extends Component {

    render() {
        const {cards, lane: {id, title}} = this.props;
        const filteredCards = cards.filter((card) => card.laneId === id);

        return (
            <div className='lane'>
                <h4>{title}</h4>

                {
                    filteredCards.map((card) => {
                        return <Card card={card} key={card.id}/>
                    })
                }
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