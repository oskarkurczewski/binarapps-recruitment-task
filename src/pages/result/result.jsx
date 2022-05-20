import React, { useContext } from "react";
import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { dataContext } from "../../context/dataContext";

const ResultPage = () => {
   const { state, dispatch } = useContext(dataContext);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   return (
      <section className="result-page">
         <div className="result-wrapper">
            {state.points > 0 ? (
               <p className="result-title"> Congratulations, {state.username}!</p>
            ) : (
               <p className="result-title">Sorry, {state.username}!</p>
            )}

            <p className="result-points">
               You earned <strong>{state.points}</strong> point
               {state.points === 1 ? "" : "s"}!
            </p>
            <button className="button" onClick={handleLogout}>
               Play again
            </button>
         </div>
      </section>
   );
};

export default ResultPage;
