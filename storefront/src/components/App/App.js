import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import './App.css';

import LanesContainer from "../LanesContainer/LanesContainer";
import Modal from "../Modal/Modal";
import EditForm from "../Card/EditForm";

import {addNewCard, editCard} from "../../actions";

class App extends Component {
    render() {
        const {addNewCard, editCard, cards} = this.props;

        return (
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        <Route
                            path='/'
                            render={() => <LanesContainer/>}
                            exact
                        />

                        <Route
                            path='/edit-card/:laneId/:cardId'
                            render={(({match}) => {
                                const {cardId, laneId} = match.params;
                                const cardObj = cards.filter((card) => card.id === parseInt(cardId, 10));

                                console.log(cardObj);

                                return <EditForm
                                    id={parseInt(cardId, 10)}
                                    laneId={parseInt(laneId, 10)}
                                    editCard={editCard}
                                    card={cardObj[0]}/>
                            })}
                        />

                        <Route
                            path='/add-new-card/:laneId'
                            render={(({match}) => {
                                const {laneId} = match.params;

                                return <Modal laneId={parseInt(laneId, 10)} addNewCard={addNewCard}/>
                            })}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({cards: {cards}}) => {
    return {
        cards
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewCard: bindActionCreators(addNewCard, dispatch),
        editCard: bindActionCreators(editCard, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
