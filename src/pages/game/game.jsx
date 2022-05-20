import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../context/dataContext";
import words from "../../words.json";
import Word from "../../components/Word/Word";
import { setPoints } from "../../actions/gameActions";

const GamePage = () => {
   const { state, dispatch } = useContext(dataContext);
   const [wordsetNumber, setWordsetNumber] = useState("");
   const [selectedWords, setSelectedWords] = useState([]);
   let navigate = useNavigate();

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
                           }}
                           isSelected={selectedWords.find((element) => {
                              return element === w;
                           })}
                           id={w}
                           key={index}
                           content={w}
                        />
                     );
                  })}
               </div>
               <div className="buttons-container">
                  <button
                     id="answers-button"
                     onClick={(e) => {
                        const goodAnswers = words[wordsetNumber].good_words.filter(
                           (value) => selectedWords.includes(value)
                        );

                        const badAnswers = selectedWords.filter(
                           (value) =>
                              words[wordsetNumber].good_words.indexOf(value) === -1
                        );

                        goodAnswers.forEach((element) => {
                           document.getElementById(element).className =
                              "word-wrapper good-answer";
                        });

                        badAnswers.forEach((element) => {
                           document.getElementById(element).className =
                              "word-wrapper bad-answer";
                        });

                        e.target.className = "button-hidden";
                        document.getElementById("finish-button").className = "";
                     }}
                  >
                     Check answers
                  </button>
                  <button
                     id="finish-button"
                     className="button-hidden"
                     onClick={() => {
                        const goodAnswers = words[wordsetNumber].good_words.filter(
                           (value) => selectedWords.includes(value)
                        ).length;

                        const badAnswers = selectedWords.length - goodAnswers;

                        const unselectedGoodAnswers =
                           words[wordsetNumber].good_words.length - goodAnswers;

                        setPoints(
                           dispatch,
                           goodAnswers * 2 - (unselectedGoodAnswers + badAnswers)
                        );

                        navigate("/result", { replace: false });
                     }}
                  >
                     Finish game
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
