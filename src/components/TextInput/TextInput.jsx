import React from "react";
import "./style.scss";

const TextInput = ({ value, placeholder, label, onChange }) => {
   return (
      <div className="text-input-wrapper">
         <p className="text-input-label">{label}</p>
         <input
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={onChange}
         ></input>
      </div>
   );
};

export default TextInput;
