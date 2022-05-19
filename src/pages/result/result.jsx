import React, { useContext } from "react";
import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { dataContext } from "../../context/dataContext";

const ResultPage = () => {
   const { state, dispatch } = useContext(dataContext);

   return (
      <section className="result-page">
         <div className="result-wrapper">
            <p className="result-title"> Congratulations, {state.username}!</p>
            <p className="result-points">You earned {state.points} points!</p>
         </div>
      </section>
   );
};

export default ResultPage;
