/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


///Start Navbar component 
const Modal = ({modalId, options}) => {
    let { component, title, maxWidth } = options;

    return (
        <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <div className="modal-dialog" style={{maxWidth: maxWidth }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLabel">{title}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                       {component}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;