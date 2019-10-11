import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import {fetchingLanes, fetchingCards, closeModal} from '../../actions';

import Lane from '../Lane/Lane';
import Modal from "../Modal/Modal";

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
        const {lanes, modal, closeModal} = this.props;

        const modalCondition = modal ? <Modal closeModal={closeModal}/> : null;
        const mapLanes = lanes.map((lane) => <Lane key={lane.id} lane={lane} fetchingCards={this.handleCardsUpdate}/>);

        return (
            <div className='lanes-container'>
                {mapLanes}
                {modalCondition}
            </div>
        )
    }
}

const mapStateToProps = ({lanes: {lanes, modal}}) => {
    return {
        lanes: lanes,
        modal: modal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchingLanes: bindActionCreators(fetchingLanes, dispatch),
        fetchingCards: bindActionCreators(fetchingCards, dispatch),
        closeModal: bindActionCreators(closeModal, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LanesContainer);