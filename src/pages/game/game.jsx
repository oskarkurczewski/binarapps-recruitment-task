import React, { useContext } from "react";
import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { dataContext } from "../../context/dataContext";
import { loginUser } from "../../actions/userActions";

const GamePage = () => {
   const { state, dispatch } = useContext(dataContext);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   return (
      <section className="game-page">
         <div className="game-wrapper">
            <p className="game-title"> Hello, {state.username}! </p>
         </div>
         <button onClick={handleLogout}>Leave the game</button>
      </section>
   );
};

export default GamePage;
