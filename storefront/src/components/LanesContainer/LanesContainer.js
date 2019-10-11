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

    render() {
        const {lanes} = this.props;

        return (
            <div className='lanes-container'>
                {
                    lanes.map((lane) => {
                        return <Lane key={lane.id} lane={lane}/>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({lanes}) => {
    return {
        lanes: lanes.lanes,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingLanes: bindActionCreators(fetchingLanes, dispatch),
        fetchingCards: bindActionCreators(fetchingCards, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LanesContainer);