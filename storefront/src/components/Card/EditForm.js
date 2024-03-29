import React, {useState} from 'react';
import {Link} from "react-router-dom";

const EditForm = ({id, editCard, laneId, card}) => {
    const [title, setTitle] = useState(card.title);
    const [description, setDescription] = useState(card.description);
    const [priority, setPriority] = useState(card.priority);

    const handleSubmitEvent = (e) => {
        if (title !== '' && description !== '') {
            editCard({title, description, priority, id, laneId})
        } else {
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

                                <label className="col-form-label" htmlFor="inputDefault">Task title</label>
                                <input
                                    value={title}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter title"
                                    id="inputDefault"
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                />

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
                            <Link to='/' className="btn btn-primary" onClick={handleSubmitEvent}>Edit card</Link>
                            <Link to='/' className="btn btn-secondary" data-dismiss="modal">Close</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditForm;