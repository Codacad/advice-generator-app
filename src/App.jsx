import { useEffect, useState } from "react";
import axios from "axios";
import Dice from "./images/icon-dice.svg";
import PatternDividerDesktop from "./images/pattern-divider-desktop.svg";
import PatternDividerMobile from "./images/pattern-divider-mobile.svg";
import "./App.css";

function App() {
  let [apiCall, setApiCall] = useState(0);
  let [adviceId, setAdviceId] = useState(0);
  let [advice, setAdvice] = useState("");
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getAdvice() {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdviceId(response.data.slip.id);
      setAdvice(response.data.slip.advice);
      setIsLoaded(true)
    }
    getAdvice();
  }, [apiCall]);

  return (
    <>
      <div className="app">
        <div className="advice-generator">
          <h3>Advice #{adviceId}</h3>
          <div className="advice">
            {!isLoaded ? (
              <div className="spinner"></div>
            ) : (
              <p>{`"${advice}"`}</p>
            )}
          </div>
          <div className="pattern-diviver">
            <img src={PatternDividerDesktop} alt="Pattern Divider" />
          </div>
          <button onClick={() => setApiCall(apiCall + 1)}>
            <img src={Dice} alt="Dice" />
          </button>
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </>
  );
}

export default App;
