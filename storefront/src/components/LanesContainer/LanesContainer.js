import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import {fetchingLanes, fetchingCards} from '../../actions';

import Lane from '../Lane/Lane';

import './LaneContainer.css';

class LanesContainer extends Component {

    componentDidMount() {
        this.props.fetchingLanes();
        this.props.fetchingCards();
    }

    handleCardsUpdate = () => {
        this.props.fetchingCards();
    };

    render() {
        const {lanes} = this.props;

        const mapLanes = lanes.map((lane) =>
            <Lane
                key={lane.id}
                lane={lane}
                fetchingCards={this.handleCardsUpdate}/>);

        return (
            <div className='lanes-container'>
                {mapLanes}
            </div>
        )
    }
}

const mapStateToProps = ({lanes: {lanes}}) => {
    return {
        lanes: lanes,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingLanes: bindActionCreators(fetchingLanes, dispatch),
        fetchingCards: bindActionCreators(fetchingCards, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LanesContainer);