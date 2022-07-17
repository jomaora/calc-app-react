import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  const clickHandler = text => {
    console.log('clickHandler', text);
  };

  return (
    <main className="react-calculator">
      Calc App
      <Result value={10} />
      <div className="numbers">
        <Button text="1" clickHandler={clickHandler} />
        <Button text="2" clickHandler={clickHandler} />
        <Button text="3" clickHandler={clickHandler} />
        <Button text="4" clickHandler={clickHandler} />
        <Button text="5" clickHandler={clickHandler} />
        <Button text="6" clickHandler={clickHandler} />
        <Button text="7" clickHandler={clickHandler} />
        <Button text="8" clickHandler={clickHandler} />
        <Button text="9" clickHandler={clickHandler} />
        <Button text="0" clickHandler={clickHandler} />
      </div>
      <div className="functions">
        <button>Clear</button>
        <button>R</button>
      </div>
      <div className="math-operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </main>)
};

export default App;
