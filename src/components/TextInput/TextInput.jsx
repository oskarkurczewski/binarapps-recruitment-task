import React from "react";
import "./style.scss";

const TextInput = ({ value, label, onChange }) => {
   return (
      <div className="text-input-wrapper">
         <p>{label}</p>
         <input type="text" value={value} onChange={onChange}></input>
      </div>
   );
};

export default TextInput;
