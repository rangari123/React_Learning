import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

{
  /* create a counter  */
}

function App() {
  //1. useState - use for changing the state of counter

  let [counter, setCounter] = useState(0);

  const addval = () => {
    if (counter >= 20) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };
  const remval = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h2>Increase or Decrease the counter</h2>
      <p>Counter :{counter}</p>
      <button onClick={addval}>Increase➕</button>
      <button onClick={remval}>Decrease➖</button>
    </>
  );
}

export default App;
