import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
// import { useLocation, useNavigate } from "react-router-dom";
import { dataContext } from "../../context/dataContext";
import words from "../../words.json";

const GamePage = () => {
   const { state, dispatch } = useContext(dataContext);
   const [wordsetNumber, setWordsetNumber] = useState("");
   const [selectedWords, setSelectedWords] = useState([]);

   console.log(words);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   useEffect(() => {
      setWordsetNumber(Math.floor(Math.random() * words.length));

      console.log(words[wordsetNumber]);

      return () => {};
   }, []);

   return (
      <section className="game-page">
         {wordsetNumber ? (
            <div className="game-wrapper">
               <p className="game-title"> Hello, {state.username}! </p>
               <p className="game-question">{words[wordsetNumber].question}</p>
               <div className="game"></div>
               <div className="buttons-container">
                  <button
                     onClick={() => {
                        // console.log("todo");
                     }}
                  >
                     Check answers
                  </button>

                  <button onClick={handleLogout}>Leave the game</button>
               </div>
            </div>
         ) : (
            <p>xd</p>
         )}
      </section>
   );
};

export default GamePage;
