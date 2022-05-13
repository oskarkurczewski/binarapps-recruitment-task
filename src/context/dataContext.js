import React, { createContext, useReducer } from "react";

const dataContext = createContext();

const initialState = {
   username: localStorage.getItem("username") || "",
   currentRoute: {},
   loading: false,
   errors: [],
};

const dataReducer = (state, action) => {
   switch (action.type) {
      case "LOGIN": {
         return {
            ...state,
            loading: false,
            username: action.payload.username,
         };
      }

      case "LOGOUT": {
         localStorage.removeItem("username");

         return {
            ...initialState,
            username: "",
         };
      }
   }
};

const DataProvider = ({ children }) => {
   const [state, dispatch] = useReducer(dataReducer, initialState);

   const value = { state, dispatch };
   return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export { dataContext, DataProvider };
