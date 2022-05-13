import React from "react";
import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
   return (
      <section className="result-page">
         <div className="result-wrapper">
            <p className="result-title"> Congratulations, name!</p>
            <p className="result-points">You earned X points!</p>
         </div>
      </section>
   );
};

export default ResultPage;
