import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Home from "./home";
import New from "./New";
import "../styles/main.css";

function App() {
  const auth = true;
  return (
    <div className="App">
      {!auth ? (
        <Routes>
          <Route exact path="/" element={<Auth />} />
        </Routes>
      ) : (
        <>
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
