import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSyncAlt} from '@fortawesome/free-solid-svg-icons'

import './FilterPanel.css';

const FilterPanel = ({filterCards}) => {
    const [title, setTitle] = useState('');


    return (
        <div className='filter-panel'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1>Outlook Taskboard</h1>

                <button className='btn btn-secondary my-2 my-sm-0 re-load-btn'>
                    <FontAwesomeIcon icon={faSyncAlt}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02 flex-container">
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2 filter-input"
                            type="text" placeholder="Filter"
                            value={title}
                            onChange={(e) => {
                                console.log(title);
                                setTitle(e.target.value)
                            }}/>
                        <span className="btn btn-secondary my-2 my-sm-0" onClick={() => {filterCards(title)}}>Filter</span>
                    </form>
                </div>
            </nav>
        </div>
    )
};

export default FilterPanel;