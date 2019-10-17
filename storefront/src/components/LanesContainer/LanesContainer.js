import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import {fetchAllLanes, fetchAllCards} from '../../actions';

import Lane from '../Lane/Lane';

import './LaneContainer.css';

class LanesContainer extends Component {

    componentDidMount() {
        this.props.fetchAllLanes();
        this.props.fetchAllCards();
    }

    handleCardsUpdate = () => {
        this.props.fetchAllCards();
    };

    render() {
        const {lanes} = this.props;

        const mapLanes = lanes.map((lane) =>
            <Lane
                key={lane.id}
                lane={lane}
                fetchAllCards={this.handleCardsUpdate}/>);

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
        fetchAllLanes: bindActionCreators(fetchAllLanes, dispatch),
        fetchAllCards: bindActionCreators(fetchAllCards, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LanesContainer);