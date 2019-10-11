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

    render() {
        const {lanes, modal, closeModal} = this.props;

        return (
            <div className='lanes-container'>
                {
                    lanes.map((lane) => {
                        return <Lane key={lane.id} lane={lane}/>
                    })
                }

                {
                    modal ? <Modal closeModal={closeModal}/> : null
                }
            </div>
        )
    }
}

const mapStateToProps = ({lanes:{lanes, modal}}) => {
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