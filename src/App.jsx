import React from "react";
import "./App.scss";
import { DataProvider } from "./context/dataContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/login";
import GamePage from "./pages/game/game";
import ResultPage from "./pages/result/result";
import AuthenticatedRoute from "./util/AuthenticatedRoute.js";

function App() {
   return (
      <div className="app-container">
         <DataProvider>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Navigate replace to="/login" />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route
                     path="/game"
                     element={
                        <AuthenticatedRoute>
                           <GamePage />
                        </AuthenticatedRoute>
                     }
                  />
                  <Route
                     path="/result"
                     element={
                        <AuthenticatedRoute>
                           <ResultPage />
                        </AuthenticatedRoute>
                     }
                  />
               </Routes>
            </BrowserRouter>
         </DataProvider>
      </div>
   );
}

export default App;
