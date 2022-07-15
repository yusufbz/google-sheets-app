import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Home from "./home";
import New from "./New";
import "../styles/main.css";
import Inspect from 'inspx';

function App() {
  const auth = true;
  return (
    <Inspect>
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
    </Inspect>
  );
}

export default App;
