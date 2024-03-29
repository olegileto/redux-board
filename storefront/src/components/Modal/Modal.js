import React, {useState} from 'react';
import {Link} from "react-router-dom";

import './Modal.css';

const Modal = ({addNewCard, laneId}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(1);
    const [validation, setValidation] = useState(false);

    const handleSubmitEvent = (e) => {
        if (title !== '' && description !== '') {
            addNewCard({title, description, priority, laneId})
        } else {
            setValidation(true);
            e.preventDefault();
        }
    };

    return (
        <div className='modal-background'>
            <div className="modal modal-custom">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-group">

                                <div
                                    className={!validation ? 'hidden' : 'alert alert-dismissible alert-danger'}>
                                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                </div>

                                <label className="col-form-label" htmlFor="inputDefault">Task title</label>
                                <input
                                    value={title}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter title"
                                    id="inputDefault"
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}/>

                                <label htmlFor="exampleTextarea">Task description </label>
                                <textarea
                                    value={description}
                                    className="form-control"
                                    id="exampleTextarea"
                                    rows="3"
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}/>

                                <label htmlFor="exampleSelect2">Task priority</label>
                                <select
                                    value={priority}
                                    className="form-control"
                                    id="exampleSelect2"
                                    onChange={(e) => {
                                        setPriority(e.target.value)
                                    }}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Link to='/' className="btn btn-primary"
                                  onClick={handleSubmitEvent}>Add card</Link>
                            <Link to='/' className="btn btn-secondary" data-dismiss="modal">Close</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;