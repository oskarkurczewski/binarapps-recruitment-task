import "./App.css";
import axios from "axios";
import { DataProvider } from "./context/dataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import GamePage from "./pages/game/game";
import ResultPage from "./pages/result/result";
import AuthenticatedRoute from "./components/util/AuthenticatedRoute";

function App() {
   axios.defaults.baseURL = "http://localhost:8800/game/";

   return (
      <DataProvider>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/"
                  element={
                     <AuthenticatedRoute>
                        <GamePage />
                     </AuthenticatedRoute>
                  }
               />
               <Route path="/login" element={<LoginPage />} />
               <Route path="/result" element={<ResultPage />} />
            </Routes>
         </BrowserRouter>
      </DataProvider>
   );
}

export default App;
