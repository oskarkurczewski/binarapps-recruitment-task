import React from "react";
import "./style.scss";

const Word = ({ onClick, content, isSelected }) => {
   return (
      <div onClick={onClick} className={`word-wrapper ${isSelected ? `selected` : ``}`}>
         <p className="word">{content}</p>
      </div>
   );
};

export default Word;
