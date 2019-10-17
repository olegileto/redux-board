import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSyncAlt} from '@fortawesome/free-solid-svg-icons'

import './FilterPanel.css';

const FilterPanel = () => {
    return (
        <div className='filter-panel'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1>Outlook Taskboard</h1>
                <button className='btn btn-secondary my-2 my-sm-0 re-load-btn'><FontAwesomeIcon icon={faSyncAlt}/></button>

                <div className="collapse navbar-collapse" id="navbarColor02 flex-container">

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 filter-input" type="text" placeholder="Filter"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Filter</button>
                    </form>
                </div>
            </nav>
        </div>
    )
};

export default FilterPanel;