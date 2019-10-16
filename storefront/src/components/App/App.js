import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import './App.css';

import LanesContainer from "../LanesContainer/LanesContainer";
import Modal from "../Modal/Modal";

import {addNewCard} from "../../actions";

class App extends Component {
    render() {
        const {addNewCard} = this.props;

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
                            path='/add-new-card/:laneId'
                            render={(({match}) => {
                                const laneId = match.params;

                                return <Modal laneId={parseInt(laneId.laneId, 10)} addNewCard={addNewCard}/>
                            })}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewCard: bindActionCreators(addNewCard, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(App);
