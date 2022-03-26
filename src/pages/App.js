import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Navigation from "../components/Navigation";
import Home from "./home";
import New from "./New";
import "./App.css";
import "../styles/main.css";

function App() {
  const [auth, isAuth] = useState(true);
  return (
    <div className="App">
      {!auth ? (
        <Route path="/" element={<Auth />} />
      ) : (
        <>
          <Navigation />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
