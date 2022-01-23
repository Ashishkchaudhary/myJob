import React from "react";
import "./inputField.css";

const InputField = ({value, type, label, handler, name}) => {
  return (
    <span>
      <label>{label}</label>
      <input name={name} value={value} type={type} onChange={handler} />
    </span>  
  );
}

export default InputField;