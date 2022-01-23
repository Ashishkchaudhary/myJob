import React from "react";

import "./Modal.css";

const Modal = (props) => {
    return (
        <div style={props.sty} className="card">
            {props.children}
        </div>
    );
}

export default Modal;