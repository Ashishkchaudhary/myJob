import React from "react";
import "./popup.css";

const Popup = (props) => {
  return (<>
    {props.open && <div id="myModal" className="modal">
      <div className="modal-content">
        {props.children}
      </div>
    </div>}
    </>
    );
}

export default Popup;