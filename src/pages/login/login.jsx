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

   // If already logged in redirect to notes page
   useEffect(() => {
      if (state.username) {
         const from = location.state?.from?.pathname || "/";
         navigate(from, { replace: true });
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
               <TextInput
                  label="Your name"
                  onChange={(e) => setUsername(e.target.value)}
               ></TextInput>
               <button type="submit">Play right now!</button>
            </form>
         </div>
      </section>
   );
};

export default LoginPage;
