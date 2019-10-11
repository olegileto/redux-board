import React from 'react';

import './Modal.css';

const Modal = ({closeModal}) => {
    return (
        <div className='modal-background'>
            <div className="modal modal-custom">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="inputDefault">Task title</label>
                                <input type="text" className="form-control" placeholder="Enter title"
                                       id="inputDefault"/>

                                <label htmlFor="exampleTextarea">Task description </label>
                                <textarea className="form-control" id="exampleTextarea" rows="3"/>

                                <label htmlFor="exampleSelect2">Task priority</label>
                                <select multiple="" className="form-control" id="exampleSelect2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Add card</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => closeModal()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;