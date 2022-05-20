import React from "react";
import "./style.scss";

const Word = ({ onClick, id, content, isSelected }) => {
   return (
      <div
         id={id}
         onClick={onClick}
         className={`word-wrapper ${isSelected ? `selected` : ``}`}
      >
         <p className="word">{content}</p>
      </div>
   );
};

export default Word;
