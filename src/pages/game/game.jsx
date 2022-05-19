import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
// import { useLocation, useNavigate } from "react-router-dom";
import { dataContext } from "../../context/dataContext";
import words from "../../words.json";
import Word from "../../components/Word/Word";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

const GamePage = () => {
   const { state, dispatch } = useContext(dataContext);
   const [wordsetNumber, setWordsetNumber] = useState("");
   const [selectedWords, setSelectedWords] = useState([]);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   useEffect(() => {
      setWordsetNumber(Math.floor(Math.random() * words.length));

      return () => {};
   }, [wordsetNumber]);

   console.log(selectedWords);

   return (
      <section className="game-page">
         {wordsetNumber ? (
            <div className="game-wrapper">
               <p className="game-title"> Hello, {state.username}! </p>
               <p className="game-question">{words[wordsetNumber].question}</p>
               <div className="game">
                  {words[wordsetNumber].all_words.map((w, index) => {
                     return (
                        <Word
                           onClick={() => {
                              selectedWords.find((element) => {
                                 return element === w;
                              })
                                 ? setSelectedWords(
                                      selectedWords.filter((element) => {
                                         return element !== w;
                                      })
                                   )
                                 : setSelectedWords([...selectedWords, w]);
                              console.log(selectedWords);
                           }}
                           isSelected={selectedWords.find((element) => {
                              return element === w;
                           })}
                           key={index}
                           content={w}
                        />
                     );
                  })}
               </div>
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
            <p>If you can't see the game, refresh the page.</p>
         )}
      </section>
   );
};

export default GamePage;
