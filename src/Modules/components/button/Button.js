import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button style={props.style} onClick={props.handler}>{props.name}</button>
  );
}

export default Button;