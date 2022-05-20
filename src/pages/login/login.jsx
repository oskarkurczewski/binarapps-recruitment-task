import React, { useEffect, useState, useContext } from "react";
import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import { dataContext } from "../../context/dataContext";
import { loginUser } from "../../actions/userActions";

const LoginPage = () => {
   const [username, setUsername] = useState("");
   const { state, dispatch } = useContext(dataContext);
   const navigate = useNavigate();
   const location = useLocation();

   // If already logged in redirect to game page
   useEffect(() => {
      if (state.username) {
         navigate("/game", { replace: true });
      }
   }, [state]);

   useEffect(() => {
      const lsUsername = localStorage.getItem("username");
      if (lsUsername) {
         loginUser(lsUsername);
      }
   }, []);

   const handleLogin = (e) => {
      e.preventDefault();
      loginUser(dispatch, username);
   };

   return (
      <section className="login-page">
         <div className="login-wrapper">
            <form onSubmit={handleLogin}>
               <div className="form-wrapper">
                  <TextInput
                     label="Hello, wanna play a game? :)"
                     placeholder={"Just give us your name!"}
                     onChange={(e) => setUsername(e.target.value)}
                  ></TextInput>
                  <button type="submit">Let's go!</button>
               </div>
            </form>
         </div>
      </section>
   );
};

export default LoginPage;
